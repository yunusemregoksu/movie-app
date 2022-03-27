<template>
    <SingleMovie
        v-for="movie in favoriteMovies"
        :key="movie.imdbID"
        :isFavorite="true"
        :movie="movie"
    ></SingleMovie>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import getFavoriteMovies from '../composables/getFavoriteMovies'
import SingleMovie from './SingleMovie.vue'

const { favoriteMovies, favError, loadFavs } = getFavoriteMovies()

onMounted(() => {
    loadFavs()
})

</script>

<style scoped>
</style>