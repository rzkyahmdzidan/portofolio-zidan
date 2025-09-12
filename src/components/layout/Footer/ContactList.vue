<template>
    <ul class="flex gap-5 text-3xl sm:text-4xl">
        <li v-for="url in urls" :key="url.url" class="social-media-links">
            <a :class="url.color" :href="url.url" target="_blank"><i :class="url.icon"></i></a>
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
const urls = ref([{
    url: "https://github.com/rzkyahmdzidan/",
    icon: "bi bi-github",
    color: "text-gray-950"
},
{
    url: "https://instagram.com/rzkyahmdzidan",
    icon: "bi bi-instagram",
    color: "text-red-600"
},
{
    url: "https://wa.me/+6285809673498",
    icon: "bi bi-whatsapp",
    color: "text-green-600"
},
{
    url: "rizkyahmadp89@gmail.com",
    icon: "bi bi-envelope-at",
    color: "text-blue-800"
},

])


</script>