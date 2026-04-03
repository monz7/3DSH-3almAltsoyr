<template>
    <div class="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div class="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-orange-500/5 to-transparent"></div>
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
                        الأحدث
                    </span>
                    <h2 class="font-bold text-5xl text-white">أحدث المقالات</h2>
                    <p class="text-neutral-400 mt-8  max-w-lg">محتوى جديد طازج من المطبعة</p>
                </div>
                <RouterLink to=""
                    class="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors">
                    عرض جميع المقالات
                    <i
                        class="fa-solid fa-arrow-right w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"></i>
                </RouterLink>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <article v-for="post in posts" :key="post.id" class="group rounded-2xl border border-black-500 bg-neutral-500/10 overflow-hidden "
                    style="animation-delay: 0ms;">
                    <RouterLink to="" class="block">
                        <div class="relative h-52 overflow-hidden">
                            <img :alt="post.title"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                :src="post.image">
                            <div
                                class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                            <div class="absolute top-4 right-4">
                                <span
                                    class="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">{{ post.category }}</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                                <span class="flex items-center gap-1">
                                    <i class="fa-regular fa-clock w-4 h-4"></i>
                                    {{ post.time }}  
                                </span>
                                <span class="w-1 h-1 bg-neutral-600 rounded-full"></span>
                                <span>{{ post.date }}</span>
                            </div>
                            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">{{ post.title }}</h3>
                            <p class="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">{{ post.excerpt }}</p>
                            <div class="flex items-center justify-between pt-4 border-t border-[#262626]">
                                <div class="flex items-center gap-3">
                                    <img :alt="post.author" class="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                                        :src="post.avatar">
                                    <div>
                                        <p class="text-sm font-medium text-white">{{ post.author }}</p> 
                                        <p class="text-xs text-neutral-500">{{ post.role }}</p>
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
                </article>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const posts = [
    {
        id:1,
        title:"أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",
        excerpt:"افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.",
        image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&amp;h=400&amp;fit=crop",
        category:"تقنيات",
        time:"7 دقائق للقراءة",
        date:"٨ يناير ٢٠٢٦",
        author:"داود خالد",
        role:"مدرب تصوير",
        avatar:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&amp;h=100&amp;fit=crop&amp;crop=face"

    },
    {
        id:2,
        title:"قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",
        excerpt:"تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.",
        image:"https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop",
        category:"تقنيات",
        time:"9 دقائق للقراءة",
        date:"٥ يناير ٢٠٢٦",
        author:"ليث محمود",
        role:"فنان بصري",
        avatar:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"

    },
    {
        id:3,
        title:"تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",
        excerpt:"اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",
        image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
        category:"معدات",
        time:"7 دقائق للقراءة",
        date:"٨ يناير ٢٠٢٦",
        author:"جمال عبدالله",
        role:"مصور ومراجع تقني",
        avatar:"https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face"

    }
]

</script>

<style lang="scss" scoped></style>