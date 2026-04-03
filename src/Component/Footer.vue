<template>
    <div class="relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div class="lg:col-span-1">
                    <RouterLink to="#" class="flex items-center gap-3 mb-6 group">
                        <div class="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300"
                            style="box-shadow: rgba(249, 115, 22, 0.3) 0px 4px 20px;">
                            <span class="text-white font-bold text-xl">ع</span>
                        </div>
                        <span class="text-xl font-bold text-white">عدسة</span>
                    </RouterLink>
                    <p class="text-sm text-neutral-500 mb-6 leading-relaxed">مدونة متخصصة في فن التصوير الفوتوغرافي،
                        نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
                    </p>
                    <div class="flex gap-2">
                        <RouterLink to="#" target="_blank"
                            class="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110">
                            <i class="fa-brands fa-x-twitter"></i>
                        </RouterLink>
                        <RouterLink to="#" target="_blank" class="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br
                            hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex
                            items-center justify-center text-neutral-500 hover:text-white transition-all duration-300
                            hover:scale-110">
                            <i class="fa-brands fa-github"></i>
                        </RouterLink>
                        <RouterLink to="#" target="_blank" class="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br
                            hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex
                            items-center justify-center text-neutral-500 hover:text-white transition-all duration-300
                            hover:scale-110">
                            <i class="fa-brands fa-linkedin"></i>
                        </RouterLink>
                        <RouterLink to="#" target="_blank" class="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br
                            hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex
                            items-center justify-center text-neutral-500 hover:text-white transition-all duration-300
                            hover:scale-110">
                            <i class="fa-brands fa-youtube"></i>
                        </RouterLink>
                    </div>
                </div>
                <div>
                    <h3 class="text-white font-semibold mb-6 flex items-center gap-2">
                        <span
                            class="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>استكشف
                    </h3>
                    <ul class="space-y-4">
                        <li>
                            <RouterLink to=""
                                class="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                                <i
                                    class="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                                الرئيسية
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to=""
                                class="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                                <i
                                    class="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                                المدونة
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to=""
                                class="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                                <i
                                    class="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                                من نحن
                            </RouterLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-white font-semibold mb-6 flex items-center gap-2"><span
                            class="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>التصنيفات
                    </h3>
                    <ul class="space-y-4">
                        <li>
                            <router-link to="#"
                                class="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                                <i
                                    class="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                                إضاءة
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#"
                                class="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                                <i
                                    class="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                                بورتريه
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#"
                                class="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                                <i
                                    class="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                                مناظر طبيعية
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#"
                                class="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                                <i
                                    class="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                                تقنيات
                            </router-link>
                        </li>

                    </ul>
                </div>
                <div>
                    <h3 class="text-white font-semibold mb-6 flex items-center gap-2">
                        <span class="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                        ابقى على اطلاع
                    </h3>
                    <p class="text-sm text-neutral-500 mb-4">اشترك للحصول على أحدث المقالات والتحديثات.</p>
                    <form class="space-y-3">
                        <div class="relative">
                            <input placeholder="أدخل بريدك الإلكتروني"
                                class="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
                                type="email">
                        </div>
                        <button type="submit"
                            class="w-full bg-orange-500 font-bold rounded-full p-2 text-lg">اشترك</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="relative border-t border-[#262626]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-sm text-neutral-600">© 2026 عدسة. صنع بكل
                        <i class="fa-solid fa-heart text-orange-500"></i> جميع الحقوق محفوظة.
                    </p>
                    <div class="flex gap-6">
                        <router-link class="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300">سياسة الخصوصية </router-link>
                        <router-link class="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300">شروط الخدمة</router-link >
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