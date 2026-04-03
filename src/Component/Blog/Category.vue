<template>
    <div class="bg-black text-white min-h-screen">

        <!-- 🔥 HEADER -->
        <div class="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">

                    <!-- 🔍 Search -->
                    <div class="relative w-full md:w-80">
                        <input v-model="search" placeholder="ابحث في المقالات..."
                            class="w-full px-5 py-3 pr-12 rounded-xl bg-[#161616] border border-[#262626] outline-none transition-all duration-300  focus:border-orange-500" />
                        <i
                            class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"></i>
                    </div>

                    <!-- 🎯 Categories Slider -->
                    <div class="flex flex-wrap justify-center gap-2">
                        <Swiper :slides-per-view="'auto'" space-between="8" class="w-full md:w-auto">
                            <SwiperSlide v-for="cat in categories" :key="cat" class="w-auto!">
                                <button @click="activeCategory = cat" :class="[
                                    'px-4 py-2 rounded-xl text-sm font-medium transition',
                                    activeCategory === cat
                                        ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white'
                                        : 'bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30'
                                ]">
                                    {{ cat }}
                                </button>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
            <!-- 🧠 Info -->
            <div class="mb-8 flex justify-between">
                <p class="text-neutral-400">
                     عرض <span class="text-white font-bold">{{ filteredPosts.length }}</span> مقالات في <span class="text-orange-500">{{ activeCategory }}</span>
                </p>
            </div>

            <!-- 🃏 Cards -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="post in paginatedPosts" :key="post.id"
                    class="group bg-[#161616] rounded-3xl duration-500 border border-[#262626] hover:border-orange-500/30 transition-all overflow-hidden">
                    <RouterLink :to="{ name: 'blogDetails', params: { id: post.id } }" class="block">
                        <div class="relative h-52 overflow-hidden">
                            <img :src="post.image"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                            <div
                                class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                            <div class="absolute top-4 right-4">
                                <span
                                    class="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">{{post.categ }}</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                                <span class="flex items-center gap-1">
                                    <i class="fa-regular fa-clock"></i>
                                    {{ post.time }}
                                </span>
                                <span class="w-1 h-1 bg-neutral-600 rounded-full"></span>
                                <span>{{ post.date }}</span>
                            </div>
                            <h3
                                class="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                                {{ post.desc }}
                            </h3>

                            <p class="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                                {{ post.title }}
                            </p>
                            <div class="flex items-center justify-between pt-4 border-t border-[#262626]">
                                <div class="flex items-center gap-3">
                                    <img :alt="post.name" :src="post.imgItem"
                                        class="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]">
                                    <div>
                                        <p class="text-sm font-medium text-white">{{ post.name }}</p>
                                        <p class="text-xs text-neutral-500">{{ post.jop }}</p>
                                    </div>
                                </div>
                                <div
                                    class="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                                    <i
                                        class="fa-solid fa-angle-right w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"></i>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>

            <!-- 🔢 Pagination -->
            <div class="flex justify-center items-center gap-2 mt-12">

                <!-- Prev -->
                <button @click="prevPage" :disabled="currentPage === 1"
                    class="p-3 rounded-xl border bg-[#0a0a0a] border-[#262626]">
                    <i class="fa-solid fa-angle-right"></i>
                </button>

                <!-- Numbers -->
                <button v-for="page in totalPages" :key="page" @click="currentPage = page" :class="[
                    'min-w-11 h-11 rounded-xl text-sm font-medium transition hover:border-orange-500 hover:text-white',
                    currentPage === page
                        ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white'
                        : 'bg-[#161616] text-neutral-400 border border-[#262626]'
                ]">
                    {{ page }}
                </button>

                <!-- Next -->
                <button @click="nextPage" :disabled="currentPage === totalPages"
                    class="p-3 rounded-xl border bg-[#161616] border-[#262626]">
                    <i class="fa-solid fa-angle-left"></i>
                </button>

            </div>

            <p class="text-center text-neutral-500 mt-4 text-sm">
                صفحة {{ currentPage }} من {{ totalPages }}
            </p>

        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { RouterLink } from "vue-router";
import { posts } from "./Mydata";
// 📌 Data
const categories = [
    "جميع المقالات",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات"
];

const activeCategory = ref("جميع المقالات");
const search = ref("");
const currentPage = ref(1);
const perPage = 6;

watch([activeCategory, search], () => {
    currentPage.value = 1;
});

// 🔍 Filter
const filteredPosts = computed(() => {
    return posts.filter(p => {
        const matchSearch = p.title.includes(search.value);

        const matchCategory =
            activeCategory.value === "جميع المقالات"
                ? true
                : p.categ === activeCategory.value;

        return matchSearch && matchCategory;
    });
});

// 📄 Pagination
const totalPages = computed(() =>
    Math.ceil(filteredPosts.value.length / perPage)
);

const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * perPage;
    return filteredPosts.value.slice(start, start + perPage);
});

// 🔁 Navigation
const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};
</script>

<style lang="scss" scoped></style>