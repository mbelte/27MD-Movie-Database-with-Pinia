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
    v-else
  >
    No movies found with specified title.
  </div>
  
</template>

<script lang="ts">
  import Searchbar from '@/components/Searchbar.vue'
  import Loader from '@/components/Loader.vue'
  import MovieList from '@/components/MovieList/MovieList.vue'
  import Paginator from '@/components/Paginator.vue'

  import { computed } from 'vue';
  import { useMovieStore } from '@/stores/movieStore';

  export default {
    setup() {
      const movie = useMovieStore()

      return {
        fetchMovies: movie.fetchMovies,
        movies: computed(() => movie.movieSearchRes),
        totalPages: movie.totalPages,
        isLoading: computed(() => movie.isLoading),
        isError: computed(() => movie.isError),
        errorMsg: computed(() => movie.errorMsg)
      }
    },

    components: {
      Searchbar,
      Loader,
      MovieList
    },

    methods: {
      searchMovies(search: string) {
        this.fetchMovies(search)
      }
    },

    mounted() {

    }
  }
</script>