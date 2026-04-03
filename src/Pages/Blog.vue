<template>
    <div class="grow pt-20">
        <div class="min-h-screen bg-[#0a0a0a]">
        <HeadBlog/>
        <Category/>
        <BlogDetails/>
        </div>
    </div>

</template>

<script setup>
import Category from '@/Component/Blog/Category.vue';
import HeadBlog from '@/Component/Blog/HeadBlog.vue';


</script>

<style scoped></style>