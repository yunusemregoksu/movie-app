<template>
    <div class="search-bar">
        <div class="input-group">
            <input class="form-control" v-model="term" placeholder="Search for a movie" />
            <span class="input-group-btn">
                <button class="btn btn-info" @click="onSearchButtonClick">Search</button>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const term = ref<string | string[]>('')
const route = useRoute()

onMounted(() => {
    term.value = route.params.term
})

const onSearchButtonClick = () => {
    if (term.value) {
        window.location.replace(`/search/${term.value}`)
    }
}

</script>

<style scoped>
.search-bar {
    margin: 20px;
    text-align: center;
}
.search-bar input {
    width: 70%;
}
</style>