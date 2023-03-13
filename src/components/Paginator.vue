<template>
    <div class="paginator">
        <RouterLink 
            v-for="item in pages.items"
            :to="{ path: '/movie', query: { search: pages.param, page: item } }" 
            class="paginator__page"
        >
            {{ item }}
        </RouterLink>
    </div>
</template>

<script lang="ts">
    import type { PropType } from 'vue';
    import type { PaginatorType } from '@/views/MoviesView.vue';

    export default {
        props: {
            pages: {
                type: Object as PropType<PaginatorType>,
                required: true
            }
        }
    }
</script>