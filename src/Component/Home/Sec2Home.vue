<template>
    <div class="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div class="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-500/5 to-transparent"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                <div>
                    <span
                        class="inline-flex items-center gap-2 px-4 py-2 font-bold text-orange-500 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4">
                        <span class="relative flex h-2 w-2 ml-2">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        مميز
                    </span>
                    <h2 class="font-bold text-6xl  text-white">مقالات مختارة</h2>
                    <p class="text-neutral-400 mt-8 max-w-lg">محتوى منتقى لبدء رحلة تعلمك</p>

                </div>
                <RouterLink to=""
                    class="group inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5">
                    عرض الكل
                    <i class="fa-solid fa-angle-left"></i>
                </RouterLink>
            </div>
            <div class="space-y-8">
                <article v-for="featuredPost in featuredPosts" :key="featuredPost.id"
                    class="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
                    <RouterLink to="" class="block">
                        <div class="grid md:grid-cols-2 gap-0">
                            <div class="relative h-72 md:h-100 overflow-hidden">
                                <img :src="featuredPost.image"
                                    :alt="featuredPost.title"
                                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out">
                                <div
                                    class="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                </div>
                                <div class="absolute top-4 right-4">
                                    <span
                                        class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                                        <i class="fa-solid fa-star w-3.5 h-3.5"></i>
                                        مميز
                                    </span>
                                </div>
                            </div>
                            <div class="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                                <div class="flex items-center gap-3 mb-4">
                                    <span
                                        class="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">{{ featuredPost.category }}</span>
                                    <span class="flex items-center gap-1 text-sm text-neutral-500">
                                        <i class="fa-regular fa-clock w-3 h-3"></i>
                                        {{ featuredPost.time }}
                                    </span>
                                </div>
                                <h2
                                    class="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                                    {{ featuredPost.title }}
                                </h2>
                                <p class="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">{{ featuredPost.excerpt }}</p>
                                <div class="flex items-center justify-between mt-auto">
                                    <div class="flex items-center gap-3">
                                        <div class="relative">
                                            <img :alt="featuredPost.author"
                                                class="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                                                :src="featuredPost.avatar">
                                            <div
                                                class="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]">
                                            </div>
                                        </div>
                                        <div>
                                            <p class="text-sm font-semibold text-white">{{ featuredPost.author }}</p>
                                            <p class="text-xs text-neutral-500">{{ featuredPost.date }}</p>
                                        </div>
                                    </div>
                                    <span
                                        class="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">اقرأ
                                        المقال
                                        <i class="fa-solid fa-arrow-right w-5 h-5 rotate-180"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </article>
            </div>
        </div>

    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const featuredPosts = [
  {
    id: 1,
    title: "إتقان تصوير الساعة الذهبية: دليل شامل",
    excerpt: "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.", 
    image: "/public/images/photo-1500835556837-99ac94a94552.jpg",
    category: "إضاءة",
    time: "8 دقائق للقراءة",
    author: "سالم أحمد",
    date: "١٥ يناير ٢٠٢٦",
    avatar:"https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",
    excerpt: "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&amp;h=400&amp;fit=crop",
    category: "بورتريه",
    time: "6 دقائق للقراءة",
    author: "محمد علي",
    date: "١٢ يناير ٢٠٢٦",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    title: "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
    excerpt: "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    category: "مناظر طبيعية",
    time: "10 دقائق للقراءة",
    author: "إبراهيم حسن",
    date: "١٠ يناير ٢٠٢٦",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];
</script>

<style lang="scss" scoped></style>