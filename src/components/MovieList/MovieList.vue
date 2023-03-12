<template>
  <div class="movies-grid">
      <MovieListItem
        v-for="movie in movies"
        :movie="movie"
      />
  </div>
</template>

<script lang="ts">
  import MovieListItem from './MovieListItem.vue';

  import type { PropType } from 'vue';
  import type { MovieSearchType } from '@/stores/movieStore';

  export default {
    components: {
      MovieListItem
    },

    props: {
      movies: {
        type: Array as PropType<MovieSearchType[]>,
        required: true
      }
    }
  }
</script>