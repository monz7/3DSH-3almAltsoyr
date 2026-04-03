<template>
    <Navbar />
    <div>
        <RouterView/>
    </div>
    <Footer />
</template>

<script setup>
import Footer from '@/Component/Footer.vue';
import Navbar from '@/Component/Navbar.vue';
import { RouterView } from 'vue-router';


</script>

<style scoped></style>