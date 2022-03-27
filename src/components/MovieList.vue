<template>
    <div class="col-md-12">
        <div class="row">
            <SingleMovie v-for="movie in movies" :key="movie.imdbID" :movie="movie"></SingleMovie>
            <hr />
            <paginate
                :page-count="pageCount"
                :page-range="5"
                :margin-pages="2"
                :click-handler="clickCallback"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'"
            ></paginate>
        </div>
    </div>
</template>

<script setup lang="ts">
import SingleMovie from './SingleMovie.vue'
import Paginate from 'vuejs-paginate-next'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const props = defineProps(['movies', 'pageCount'])
const clickCallback = (num: number) => {
    router.push({ name: route.name || "Home", params: { page: num } })
}


</script>

<style scoped>
</style>