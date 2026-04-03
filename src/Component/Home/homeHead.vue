<template>
    <div class="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div
            class="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]">
        </div>
        <div class="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"></div>
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125px h-125px bg-orange-500/5 rounded-full blur-3xl">
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="text-center max-w-4xl mx-auto">
                <div
                    class="inline-flex items-center gap-2 mb-8 border border-orange-500 bg-orange-200/10 rounded-full px-4 py-3">
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75">
                        </span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    <span class="text-sm font-medium text-neutral-300">مرحباً بك في عدسة</span>
                </div>
                <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                    اكتشف <span class="text-orange-500">فن</span><br>التصوير الفوتوغرافي</h1>
                <p class="text-xl md:text-2xl text-neutral-400  mb-10 max-w-2xl mx-auto leading-relaxed">انغمس في أسرار
                    المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>
                <div class="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                    <RouterLink to="#"
                        class="bg-orange-500 inline-flex items-center justify-center text-white gap-2 group py-4 px-7 rounded-full">
                        <span>استكشف المقالات</span>
                        <i class="fa-solid fa-arrow-right-long w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"></i>
                    </RouterLink>
                    <RouterLink to="#"
                        class="border border-stone-500 hover:bg-orange-50/10 hover:border-orange-500 hover:text-orange-500 text-white inline-flex items-center justify-center gap-2 rounded-full py-4 px-7">
                         <i class="fa-solid fa-circle-exclamation"></i>
                        <span>اعرف المزيد</span>
                    </RouterLink>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                    <div class="bg-[#151414] rounded-xl border border-orange-500/10 p-4 hover:scale-105 transition-transform duration-300"
                        style="animation-delay: 0ms;">
                        <i class="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
                        <p class="text-2xl md:text-3xl font-bold text-orange-400 mt-1">+50</p>
                        <p class="text-neutral-500 text-sm">مقالة</p>
                    </div>
                    <div class="bg-[#151414]  rounded-xl border border-orange-500/10 p-4 hover:scale-105 transition-transform duration-300"
                        style="animation-delay: 100ms;"><i class="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>
                        <p class="text-2xl md:text-3xl font-bold text-orange-400 mt-1">+10ألف</p>
                        <p class="text-neutral-500 text-sm">قارئ</p>
                    </div>
                    <div class="bg-[#151414] rounded-xl border border-orange-500/10 p-4 hover:scale-105 transition-transform duration-300"
                        style="animation-delay: 200ms;">
                        <i class="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>
                        <p class="text-2xl md:text-3xl font-bold text-orange-400 mt-1">4</p>
                        <p class="text-neutral-500 text-sm">تصنيفات</p>
                    </div>
                    <div class="bg-[#151414] rounded-xl border border-orange-500/10 p-4 hover:scale-105 transition-transform duration-300"
                        style="animation-delay: 300ms;">
                        <i class="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>
                        <p class="text-2xl md:text-3xl font-bold text-orange-400 mt-1">6</p>
                        <p class="text-neutral-500 text-sm">كاتب</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style scoped></style>