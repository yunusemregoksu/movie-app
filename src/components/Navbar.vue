<template>
    <header>
        <h1>The Movie App</h1>
        <nav>
            <router-link :to="{ name: 'Home' }">Home</router-link>
            <router-link :to="{ name: 'Favorites' }">Favorites</router-link>
        </nav>
    </header>
</template>

<script setup lang="ts">
    
</script>

<style scoped>
</style>