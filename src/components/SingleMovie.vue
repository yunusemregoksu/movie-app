<template>
    <div class="list-item">
        <div class="row">
            <div class="col-md-2">{{ movie.Year }}</div>
            <div class="col-md-9">
                <h3>{{ movie.Title }}</h3>
            </div>
            <div class="col-md-1">
                <i
                    class="bi bi-star-fill"
                    @click="setMovieFavoriteStatus(false)"
                    v-if="isFav"
                    style="font-size: 2rem;"
                ></i>
                <i
                    class="bi bi-star"
                    @click="setMovieFavoriteStatus(true)"
                    v-else
                    style="font-size: 2rem;"
                ></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue';
import getFavoriteMovies from '../composables/getFavoriteMovies';

const props = defineProps(['movie'])
const isFav = ref(false)
const { favoriteMovies, favError, loadFavs } = getFavoriteMovies()

onMounted(() => {
    loadFavs()

    let fav = favoriteMovies.value.findIndex((x: any) => { return x.imdbID === props.movie.imdbID }) >= 0
    isFav.value = fav
})

const setMovieFavoriteStatus = (liked: boolean) => {
    if (localStorage.getItem('favoriteMovies') === null) {
        localStorage.setItem('favoriteMovies', JSON.stringify([]))
    }

    favoriteMovies.value = JSON.parse(localStorage.getItem('favoriteMovies') || "")

    if (liked) {
        favoriteMovies.value = [...favoriteMovies.value, props.movie]
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies.value))
        isFav.value = true
    }
    else {
        favoriteMovies.value = favoriteMovies.value.filter((x: any) => { return x.imdbID !== props.movie.imdbID })
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies.value))
        isFav.value = false
    }
}
</script>

<style scoped>
.list-item {
    cursor: pointer;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
.list-item:hover {
    background-color: #fefefe;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.list-item img {
    border: 1px solid #ddd;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.08);
    border-radius: 50%;
}
.list-item.active {
    background-color: #fefefe;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>