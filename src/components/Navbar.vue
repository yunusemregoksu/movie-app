<template>
    <div class="navbar navbar-inverse bg-inverse">
        <div class="container d-flex justify-content-between">
            <router-link to="/" class="navbar-brand">The Movie App</router-link>
            <SearchBar />
        </div>
    </div>
</template>

<script setup lang="ts">
import SearchBar from "./SearchBar.vue";
</script>

<style scoped>
</style>