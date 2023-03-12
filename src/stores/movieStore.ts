import { defineStore } from 'pinia'
import axios from 'axios'


export type MovieSearchType = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

type MovieSearchRequestType = {
  Response: 'True' | 'False';
  Search: MovieSearchType[];
  totalResults: string;
  Error?: string;
}

type MovieRatingType = {
  Source: string;
  Value: string;
}

type MovieFullType = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: MovieRatingType[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movie: {} as MovieFullType,
    isLoading: false,
    isError: false,
    errorMsg: '',
    totalPages: 0,
    paginator: [],
    movieSearchRes: [] as MovieSearchType[],
    movieRequested: {} as MovieFullType,
    page: 1
  }),

  actions: {
    fetchMovies(search: string, page = 1) {
      this.isLoading = true
      this.resetError()

      axios<MovieSearchRequestType>(`https://www.omdbapi.com/?apikey=5911abee&type=movie&s=${ search }&page=${ page }`)
        .then(({ data }) => {
          this.isLoading = false
          
          if (data.Response === 'True') {
            this.movieSearchRes = data.Search
            this.totalPages = Math.ceil(Number(data.totalResults) / 10)
            console.log(this.totalPages)
          } else {
            this.isError = true
            this.errorMsg = data.Error ?? 'Unknown error.'
          }
        })
    },

    fetchMovie(id: string) {
      this.isLoading = true
      this.resetError()

      axios('https://www.omdbapi.com/?apikey=5911abee&i=' + id)
        .then(({ data }) => {
          this.isLoading = false

          if (data.Response === 'True') {
            this.movieRequested = data
          } else {
            this.isError = true
            this.errorMsg = data.Error ?? 'Unknown error.'
          }          
        })
    },

    resetError() {
      this.isError = false
      this.errorMsg = ''
    },

    paginator(pages: number) {
      if (pages < 10) {

      }
    }
  }
})
