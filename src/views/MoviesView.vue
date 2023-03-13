<template>
  <Searchbar @search="searchMovies"/>

  <Loader v-if="isLoading"/>

  <div 
    class="message"
    v-else-if="isError"
  >
    {{ errorMsg }}
  </div>

  <MovieList 
    v-else-if="movies.length"
    :movies="movies"
  />
  <div 
    class="message"
    v-else-if="searchParam"
  >
    No movies found with specified title.
  </div>

  <Paginator 
    v-if="totalPages > 1"
    :pages="paginatorPages"
  ></Paginator>
  
</template>



<script lang="ts">
  import Searchbar from '@/components/Searchbar.vue'
  import Loader from '@/components/Loader.vue'
  import MovieList from '@/components/MovieList/MovieList.vue'
  import Paginator from '@/components/Paginator.vue'

  import { computed } from 'vue';
  import { useMovieStore } from '@/stores/movieStore';
  import paginator from '@/utilities/paginator';

  export type PaginatorType = {
      current: string;
      items: string[];
      param: string;
  }

  export default {
    setup() {
      const movie = useMovieStore()

      return {
        fetchMovies: movie.fetchMovies,
        movies: computed(() => movie.movieSearchRes),
        totalPages: computed(() => movie.totalPages),
        paginatorPages: {} as PaginatorType,
        currentPage: 1,
        searchParam: '',
        isLoading: computed(() => movie.isLoading),
        isError: computed(() => movie.isError),
        errorMsg: computed(() => movie.errorMsg)
      }
    },

    components: {
      Searchbar,
      Loader,
      MovieList,
      Paginator
    },

    methods: {
      searchMovies(search: string) {
        this.setCurrentPage()
        this.searchParam = search ?? this.searchParam

        this.fetchMovies(search, this.currentPage)
        this.$router.push({ path: '/movie', query: { search: this.searchParam, page: this.currentPage } })

        const pages2 = paginator(this.currentPage, this.totalPages, this.searchParam)
        if (pages2) {
          this.paginatorPages = pages2
          console.log(pages2, 'total:', this.totalPages)
        }
        
      },

      setCurrentPage() {
        if (this.pageParam) {
          this.currentPage = Number(this.pageParam)
        } else {
          this.currentPage = 1
        }
      }
    },

    data() {
      return {
        searchParam: computed(() => this.$route.query.search as string),
        pageParam: computed(() => this.$route.query.page as string)
      }
    },

    mounted() {
      console.log(this.$route.query.search)

      if (this.searchParam && this.pageParam) {
        this.currentPage = Number(this.pageParam)
        this.searchMovies(this.searchParam)
      }
    }
  }
</script>