<template>
    <div class="movie-card">
        <RouterLink :to="`/movie/${ movie.imdbID }`" class="movie-card__lnk">
            <img 
                v-if="movie.Poster !== 'N/A'"
                :src="movie.Poster" 
                :alt="movie.Title" 
                class="movie-card__img"
            >
            <img 
                v-else
                src="/images/blank-image.jpg" 
                :alt="movie.Title" 
                class="movie-card__img"
            >
            <span class="movie-card__title">
                {{ movie.Title }} ({{ movie.Year }})
            </span>
        </RouterLink>
    </div>
</template>

<script lang="ts">
    import type { PropType } from 'vue';
    import type { MovieSearchType } from '@/stores/movieStore';

    export default {
        props: {
            movie: {
                type: Object as PropType<MovieSearchType>,
                    required: true
            }
        }
    }
</script>