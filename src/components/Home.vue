<template>
    <div class="home">
        <div v-if="error">{{ error }}</div>
        <div v-if="movies.length" class="layout">
            <div class="movie-list">
                <div v-for="movie in movies" :key="movie.imdbID">
                    <SingleMovie :movie="movie" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import getMovies from '../composables/getMovies'
import SingleMovie from './SingleMovie.vue'

const { movies, error, load } = getMovies()
</script>

<style scoped>
</style>