<template>
  <Searchbar/>
  <div class="movie">
    <img 
        :src="movie.Poster" 
        :alt="movie.Title"
        class="movie__img"
    >

    <div class="movie__content">
        <div class="movie__header">
            <h1 class="movie__title">
                {{ movie.Title }}
            </h1>
            <div class="movie__header-bottom">
                <div class="movie__meta">
                    <span class="movie__meta-item">
                        {{ movie.Year }}
                    </span>
                    <span class="movie__meta-item">
                        {{ movie.Rated }}
                    </span>
                    <span class="movie__meta-item">
                        {{ movie.Runtime }}
                    </span>
                </div>
                <div class="movie__genres">
                    <span class="movie__genre">
                        Action <strong>{{ movie.Genre }}</strong>
                    </span>
                    <span class="movie__genre">
                        Sci-Fi
                    </span>
                    <span class="movie__genre">
                        Thriller
                    </span>
                </div>
            </div>
        </div>
        <div class="movie__summary">
            <div class="movie__summary-item">
                <p>
                    {{ movie.Plot }}
                </p>
            </div>
            <div class="movie__summary-item">
                Director <strong>{{ movie.Director }}</strong>
            </div>
            <div class="movie__summary-item">
                Writer <strong>{{ movie.Writer }}</strong>
            </div>
            <div class="movie__summary-item">
                Actors <strong>{{ movie.Actors }}</strong>
            </div>
            <div class="movie__summary-item">
                Country <strong>{{ movie.Country }}</strong>
            </div>
            <div class="movie__summary-item">
                Awards <strong>{{ movie.Awards }}</strong>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
  import Searchbar from '@/components/Searchbar.vue'
  import Loader from '@/components/Loader.vue'

  import { computed } from 'vue';
  import { useMovieStore } from '@/stores/movieStore';

  export default {
    setup() {
      const movie = useMovieStore()

      return {
        fetchMovie: movie.fetchMovie,
        movie: computed(() => movie.movieRequested),
        isLoading: computed(() => movie.isLoading),
        isError: computed(() => movie.isError),
        errorMsg: computed(() => movie.errorMsg)
      }
    },

    data() {
        return {
            id: this.$route.params.id as string
        }
    },

    components: {
      Searchbar,
      Loader
    },

    mounted() {
      this.fetchMovie(this.id)
    }
  }
</script>