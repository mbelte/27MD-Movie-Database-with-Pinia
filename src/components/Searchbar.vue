<template>
    <form 
        class="searchbar"
        @submit.prevent="searchEvent"
    >
        <input 
            type="text" 
            class="input" 
            placeholder="Enter movie title ..."
            v-model="searchValue"
        >
        <button class="button">
            Search
        </button>
    </form>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                searchValue: ''
            }
        },

        methods: {
            searchEvent() {
                this.$emit('search', this.searchValue)
                // this.searchValue = ''
            }
        }
    }
</script>