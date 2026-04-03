<template>
    <nav
        class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/90 backdrop-blur-xl border-b border-transparent">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <RouterLink to="/" class="flex items-center gap-3 group">
                    <div
                        class="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                        <img alt="Photography Logo" class="w-full h-full object-cover"
                            src="/public/images/logo-GdqARQRt.png">
                    </div>
                    <div class="flex flex-col">
                        <span
                            class="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">عدسة</span>
                        <span class="text-xs text-orange-400/80 hidden sm:block tracking-wide">عالم التصوير
                            الفوتوغرافي
                        </span>
                    </div>
                </RouterLink>
                <div class="hidden md:flex items-center">
                    <div class="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
                        <RouterLink to="/" exact-active-class="bg-linear-to-r from-orange-500 to-orange-600 text-white"
                            class="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white">
                            الرئيسية
                        </RouterLink>
                        <!-- <RouterLink to="/blog" active-class="bg-linear-to-r from-orange-500 to-orange-600 text-white"
                            class="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white">
                            المدونة
                        </RouterLink> -->
                        <RouterLink to="/blog">
                            <span :class="[
                                'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                                route.path.startsWith('/blog')
                                    ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white'
                                    : 'text-neutral-400 hover:text-white'
                            ]">
                                المدونة
                            </span>
                        </RouterLink>
                        <RouterLink to="/about"
                            exact-active-class="bg-linear-to-r from-orange-500 to-orange-600 text-white"
                            class="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white">
                            من نحن
                        </RouterLink>
                    </div>
                </div>
                <div class="hidden md:flex items-center gap-3">
                    <button
                        class="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <RouterLink to="/blog"
                        class="bg-orange-500 text-white px-7 py-3 rounded-full hover:bg-orange-600 transition text-sm">
                        ابدأ القراءة
                    </RouterLink>
                </div>
                <button @click="isMobileMenuOpen = true" v-if="isMobileMenuOpen == false"
                    class="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
                    <i class="fa-solid fa-bars w-6 h-6"></i>
                </button>
                <button v-if="isMobileMenuOpen == true" @click="isMobileMenuOpen = false"
                    class="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
                    <i class="fa-solid fa-xmark text-gray-600 w-6 h-6"></i>
                </button>
            </div>
            <!-- Phone VIEW -->
            <div v-if="isMobileMenuOpen" @click="isMobileMenuOpen = false"
                class="md:hidden overflow-hidden transition-all duration-300 max-h-80 pb-6">
                <div class="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
                    <div class="flex flex-col space-y-1">
                        <RouterLink to="/" @click="isMobileMenuOpen = false"
                            exact-active-class="bg-orange-500/10 text-orange-500 border border-orange-500/30"
                            class="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white">
                            الرئيسية
                        </RouterLink>
                        <RouterLink to="/blog" @click="isMobileMenuOpen = false"
                            exact-active-class="bg-orange-500/10 text-orange-500 border border-orange-500/30"
                            class="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white">
                            المدونة
                        </RouterLink>
                        <RouterLink to="/about"
                            exact-active-class="bg-orange-500/10 text-orange-500 border border-orange-500/30"
                            class="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white">
                            من نحن
                        </RouterLink>
                        <RouterLink to="/blog" @click="isMobileMenuOpen = false"
                            class="bg-orange-500 text-white px-7 py-3 rounded-full hover:bg-orange-600 transition text-sm mt-2 text-center">
                            ابدأ القراءة
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
const route = useRoute();
const isMobileMenuOpen = ref(false)
</script>

<style lang="scss" scoped></style>