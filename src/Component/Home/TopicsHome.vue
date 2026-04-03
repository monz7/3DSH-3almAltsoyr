<template>
    <div class="py-24 bg-[#111111] relative border-y border-[#262626]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <span
                    class="inline-flex items-center gap-2 px-4 py-2 font-bold text-orange-500 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4">
                    <span class="relative flex h-2 w-2 ml-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>التصنيفات
                </span>
                <h2 class="font-bold text-5xl text-white">استكشف حسب الموضوع</h2>
                <p class="text-neutral-400 mt-8 max-w-lg mx-auto">اعثر على محتوى مصمم حسب اهتماماتك</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <RouterLink to=""
                    class="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                    style="animation-delay: 0ms;">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>
                    <div class="relative z-10">
                        <div
                            class="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                            <i
                                class="fa-solid fa-sun text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                        </div>
                        <h3
                            class="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                            إضاءة</h3>
                        <p class="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">3
                            مقالة</p>
                        <div
                            class="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                            <i class="fa-solid fa-chevron-right w-5 h-5 rotate-180 text-white"></i>
                        </div>
                    </div>
                </RouterLink>

                <RouterLink to=""
                    class="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                    style="animation-delay: 0ms;">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>
                    <div class="relative z-10">
                        <div
                            class="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                                <i class="fa-solid fa-user text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                        </div>
                        <h3
                            class="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                            بورتريه</h3>
                        <p class="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">3
                            مقالة</p>
                        <div
                            class="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                            <i class="fa-solid fa-chevron-right w-5 h-5 rotate-180 text-white"></i>
                        </div>
                    </div>
                </RouterLink>

                <RouterLink to=""
                    class="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                    style="animation-delay: 0ms;">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>
                    <div class="relative z-10">
                        <div
                            class="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                            <i
                                class="fa-solid fa-mountain-sun text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                        </div>
                        <h3
                            class="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                            مناظر طبيعية</h3>
                        <p class="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">2
                            مقالة</p>
                        <div
                            class="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                            <i class="fa-solid fa-chevron-right w-5 h-5 rotate-180 text-white"></i>
                        </div>
                    </div>
                </RouterLink>

                <RouterLink to=""
                    class="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                    style="animation-delay: 0ms;">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>
                    <div class="relative z-10">
                        <div
                            class="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                            <i
                                class="fa-solid fa-sliders text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                        </div>
                        <h3
                            class="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                            تقنيات </h3>
                        <p class="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">5
                            مقالة</p>
                        <div
                            class="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                            <i class="fa-solid fa-chevron-right w-5 h-5 rotate-180 text-white"></i>
                        </div>
                    </div>
                </RouterLink>

                <RouterLink to=""
                    class="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                    style="animation-delay: 0ms;">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>
                    <div class="relative z-10">
                        <div
                            class="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                            <i
                                class="fa-solid fa-sun text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                        </div>
                        <h3
                            class="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                            معدات</h3>
                        <p class="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">3
                            مقالة</p>
                        <div
                            class="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                            <i class="fa-solid fa-chevron-right w-5 h-5 rotate-180 text-white"></i>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>


    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>