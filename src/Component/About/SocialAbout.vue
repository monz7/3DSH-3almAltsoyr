<template>
    <section class="py-20 bg-linear-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
        <div class="absolute inset-0 opacity-30">
            <div class="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]"></div>
            <div class="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]"></div>
        </div>
        <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">لديك أسئلة؟ دعنا نتحدث!</h2>
            <p class="text-lg text-white/80 mb-8 max-w-2xl mx-auto">نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو
                تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <RouterLink to="mailto:hello@adasah.com"
                    class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5">
                    <i class="fa-regular fa-envelope"></i>تواصل معنا
                </RouterLink>
                <RouterLink
                    class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
                    to="/blog">تصفح المقالات
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>