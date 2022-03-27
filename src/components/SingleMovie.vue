<template>
    <div class="list-item">
        <div class="row">
            <div class="col-md-4">{{ movie.Year }}</div>
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-12">
                        <h3>{{ movie.Title }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['movie'])
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