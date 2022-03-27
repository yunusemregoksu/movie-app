<template>
    <Loader v-if="isLoading"></Loader>
    <template v-else>
        <div class="row" v-if="error === null">
            <MovieList
                :movies="movies"
                :pageCount="pageCount"
                :currentPage="currentPage"
                @pageChanged="onPageChanged"
            ></MovieList>
        </div>
        <div v-else>{{ error }}</div>
    </template>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import getMovies from '../composables/getMovies'
import Loader from './Loader.vue'
import MovieList from './MovieList.vue'

const isLoading = ref(true)
const page = ref(1)
const { movies, pageCount, error, load } = getMovies()
const term = ref<string | string[]>('')
const currentPage = ref(1)
const route = useRoute()

onMounted(() => {
    term.value = route.params.term
    load(term.value, page.value).then(() => isLoading.value = false)
})

const onPageChanged = (num: number) => {
    isLoading.value = true
    currentPage.value = num
    load(term.value, num).then(() => isLoading.value = false)
}

</script>

<style scoped>
</style>