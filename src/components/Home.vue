<template>
    <Loader v-if="isLoading"></Loader>
    <template v-else>
        <div class="row" v-if="error === null">
            <MovieList :movies="movies" :pageCount="pageCount" :currentPage="currentPage" @pageChanged="onPageChanged"></MovieList>
        </div>
        <div v-else>{{ error }}</div>
    </template>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue'
import getFavoriteMovies from '../composables/getFavoriteMovies';
import getMovies from '../composables/getMovies'
import Loader from './Loader.vue'
import MovieList from './MovieList.vue'

const isLoading = ref(true)
const { movies, pageCount, error, load } = getMovies()
const currentPage = ref(1)

onMounted(() => {
    load('', 1).then(() => isLoading.value = false)
})

const onPageChanged = (num: number) => {
    isLoading.value = true
    currentPage.value = num
    load('', num).then(() => isLoading.value = false)
}

</script>

<style scoped>
</style>