<template>
    <div class="col-md-12">
        <div class="row">
            <SingleMovie v-for="movie in movies" :key="movie.imdbID" :movie="movie"></SingleMovie>
            <hr />
            <paginate
                v-model="currentPage"
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
import { ref } from 'vue'
import Paginate from 'vuejs-paginate-next'
import SingleMovie from './SingleMovie.vue'

const emits = defineEmits(['pageChanged'])
const props = defineProps(['movies', 'pageCount', 'currentPage'])

const clickCallback = (num: number) => {
    emits('pageChanged', num)
}

</script>

<style scoped>
</style>