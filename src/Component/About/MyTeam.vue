<template>
    <div class="py-20 bg-[#0a0a0a]">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <div
                    class="inline-flex items-center gap-2 mb-8 border border-orange-500 bg-orange-200/10 rounded-full px-4 py-3">
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75">
                        </span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    <span class="text-sm font-medium text-orange-500">فريقنا</span>
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">تعرف على كتابنا</h2>
                <p class="text-lg text-neutral-400 max-w-2xl mx-auto">فريقنا من المصورين والكتاب ذوي الخبرة شغوفون
                    بمشاركة معرفتهم مع المجتمع.</p>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="myteam in Myteams" :key="myteam.id"
                    class="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300">
                    <div class="relative inline-block mb-4">
                        <img :alt="myteam.name"
                            class="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
                            :src="myteam.img">
                        <div
                            class="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
                            <i class="fa-solid fa-check text-white fa-xs"></i>
                        </div>
                    </div>
                    <h3 class="font-bold text-white text-lg">{{ myteam.name }}</h3>
                    <p class="text-orange-500 text-sm font-medium mb-4">{{ myteam.role }}</p>
                    <div class="flex justify-center gap-3">
                        <RouterLink to="#"
                            class="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors">
                            <i class="fa-brands fa-x-twitter"></i>
                        </RouterLink>
                        <RouterLink to="#"
                            class="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors">
                            <i class="fa-brands fa-github"></i>
                        </RouterLink>
                        <RouterLink to="#"
                            class="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors">
                            <i class="fa-brands fa-linkedin"></i>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const Myteams = [
    { id: 1, name: "سالم أحمد", role: "مصور محترف", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
    { id: 2, name: "محمد علي", role: "مصور بورتريه", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
    { id: 3, name: "إبراهيم حسن", role: "مصور طبيعة", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
    { id: 4, name: "داود خالد", role: "مدرب تصوير", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" },
    { id: 5, name: "ليث محمود", role: "فنان بصري", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
    { id: 6, name: "جمال عبدالله", role: "مصور ومراجع تقني", img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face" },
    { id: 7, name: "خالد الفيصل", role: "مصور فلكي", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face" },
    { id: 8, name: "نادر سعيد", role: "مصور شوارع", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face" },
    { id: 9, name: "هاني الشمري", role: "مصور طعام", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face" },
    { id: 10, name: "عمر الراشد", role: "مصور حياة برية", img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face" },
    { id: 11, name: "فارس العلي", role: "فنان فوتوغرافي", img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face" },
    { id: 12, name: "سامي الحربي", role: "خبير تعديل صور", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face" },
    { id: 13, name: "رامي الخطيب", role: "مصور ماكرو", img: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&h=100&fit=crop&crop=face" },
    { id: 14, name: "باسم المصري", role: "مصور فني", img: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face" },
    { id: 15, name: "منصور الزهراني", role: "مصور زفاف", img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face" },
    { id: 16, name: "فيصل الدوسري", role: "مصور جوي", img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop&crop=face" },
    { id: 17, name: "لؤي الصالح", role: "مصور تجاري", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face" },
    { id: 17, name: "طارق النعيمي", role: "مصور معماري", img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=face" },
    { id: 18, name: "أحمد الشهري", role: "مصور رياضي", img: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face" },
    { id: 19, name: "ماجد القحطاني", role: "مصور استوديو", img: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face", },
    { id: 20, name: "ياسر العتيبي", role: "مصور رحالة", img: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=100&h=100&fit=crop&crop=face", },
    { id: 21, name: "دحام الحسيني", role: "فنان بصري", img: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face", },
    { id: 22, name: "نايف المطيري", role: "مصور مواليد", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face" },
    { id: 23, name: "عبدالله الغامدي", role: "مصور عقارات", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face" },
    { id: 24, name: "كريم الفهد", role: "خبير تقني", img: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&h=100&fit=crop&crop=face", },
    { id: 25, name: "سلطان الراجحي", role: "فنان تصوير", img: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face", },
    { id: 26, name: "فهد السبيعي", role: "مراجع معدات", img: "	https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=100&h=100&fit=crop&crop=face", },
    { id: 27, name: "راشد الجاسر", role: "فنان بصري", img: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=100&h=100&fit=crop&crop=face", },
]
</script>

<style scoped></style>