<template>
    <div id="about"
        class="about-section relative min-h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        
        <!-- Background Elements -->
        <div class="absolute inset-0 opacity-20">
            <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div class="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <!-- Floating particles -->
        <div class="absolute inset-0">
            <div v-for="i in 50" :key="i" 
                class="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
                :style="`
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation-delay: ${Math.random() * 3}s;
                    animation-duration: ${3 + Math.random() * 4}s;
                `">
            </div>
        </div>

        <div class="relative z-10 container mx-auto px-6 py-20">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
                
                <!-- Content Section -->
                <div data-aos="fade-right" class="lg:w-1/2 space-y-8">
                    <!-- Greeting -->
                    <div class="space-y-4">
                        <div class="flex items-center space-x-4">
                            <div class="w-2 h-12 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full"></div>
                            <h1 class="text-5xl lg:text-7xl font-bold text-white">
                                Hello<span class="wave-emoji">👋</span>
                            </h1>
                        </div>
                        <p class="text-xl text-gray-300 ml-6">I'm Rizky Ahmad Zidan Nasution</p>
                    </div>

                    <!-- Description Cards -->
                    <div class="space-y-6">
                        <div class="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold text-white mb-2">Information Systems Major</h3>
                                    <p class="text-gray-300 leading-relaxed">
I am a graduate of Information Systems from Universitas Malikussaleh (Class of 2025), with a strong focus on programming, particularly in web development. During my studies, I worked on various projects, including my final thesis project, a GIS-based Fishing Spot Mapping System built using PHP and Laravel. These experiences strengthened my passion for technology and encouraged me to pursue a professional career in software development.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold text-white mb-2">Current Skills & Future Goals</h3>
                                    <p class="text-gray-300 leading-relaxed">
I am skilled in frontend development and continuously expanding my expertise toward fullstack development by learning modern frameworks such as Vue, React, and Next.js. My long-term goal is to become a Fullstack Developer capable of creating innovative and impactful digital solutions. Beyond technical skills, I have strong public speaking and leadership abilities, proven through my organizational experience as Head of Public Relations at the Information Systems Student Association (2023–2024) and Member of Public Relations at the Faculty of Engineering Student Executive Board (2024–2025). I believe that combining technical expertise with soft skills will allow me to make valuable contributions in the tech industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Skills Tags -->
                    <div class="flex flex-wrap gap-3 mt-8">
                        <span v-for="skill in skills" :key="skill.name"
                            class="px-4 py-2 bg-gradient-to-r text-white rounded-full text-sm font-medium hover:scale-110 transition-transform duration-200 cursor-pointer"
                            :class="skill.color">
                            {{ skill.name }}
                        </span>
                    </div>
                </div>

                <!-- Visual Section -->
                <div data-aos="fade-left" class="lg:w-1/2 flex justify-center">
                    <div class="relative">
                        <!-- Main geometric design -->
                        <div class="relative w-80 h-80 lg:w-96 lg:h-96">
                            <!-- Rotating rings -->
                            <div class="absolute inset-0 border-4 border-yellow-400 rounded-full animate-spin-slow opacity-30"></div>
                            <div class="absolute inset-4 border-4 border-purple-400 rounded-full animate-spin-reverse opacity-50"></div>
                            <div class="absolute inset-8 border-4 border-pink-400 rounded-full animate-spin-slow opacity-40"></div>
                            
                            <!-- Central content -->
                            <div class="absolute inset-16 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-full flex flex-col items-center justify-center border border-white/30">
                                <div class="text-center space-y-4">
                                    <div class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-pulse">
                                        &lt;/&gt;
                                    </div>
                                    <p class="text-white font-semibold text-lg">DEVELOPER</p>
                                </div>
                            </div>

                            <!-- Floating elements -->
                            <div class="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg rotate-12 hover:rotate-45 transition-transform duration-300 flex items-center justify-center">
                                <span class="text-2xl">🚀</span>
                            </div>
                            <div class="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg -rotate-12 hover:-rotate-45 transition-transform duration-300 flex items-center justify-center">
                                <span class="text-2xl">💡</span>
                            </div>
                        </div>

                        <!-- About Me Text -->
                        <div class="absolute -right-20 top-1/2 transform -translate-y-1/2 -rotate-90 hidden lg:block">
                            <h2 class="text-4xl font-bold text-white/20 tracking-widest">ABOUT ME</h2>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile About Me Text -->
            <div class="lg:hidden text-center mt-12">
                <h2 class="text-4xl font-bold text-white/20 tracking-widest">ABOUT ME</h2>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
    { name: 'Vue.js', color: 'from-emerald-500 to-teal-600' },
    { name: 'JavaScript', color: 'from-yellow-500 to-orange-600' },
    { name: 'PHP', color: 'from-purple-500 to-indigo-600' },
    { name: 'Laravel', color: 'from-green-500 to-blue-600' },
    { name: 'MySQL', color: 'from-blue-500 to-sky-600' },
    { name: 'Git', color: 'from-red-500 to-pink-600' },
    { name: 'Figma', color: 'from-pink-500 to-purple-600' },
    { name: 'Canva', color: 'from-yellow-400 to-red-400' },
    { name: 'C++', color: 'from-blue-400 to-blue-600' },
    { name: 'Python', color: 'from-green-400 to-green-600' },
    { name: 'Java', color: 'from-red-400 to-red-600' },
    { name: 'Bootstrap', color: 'from-purple-400 to-purple-600' },
    { name: 'HTML/CSS', color: 'from-blue-500 to-indigo-600' },
    { name: 'Tailwind CSS', color: 'from-cyan-500 to-blue-600' },
    { name: 'Web Design', color: 'from-purple-500 to-pink-600' },
    { name: 'Frontend', color: 'from-rose-500 to-red-600' }
])
</script>

<style scoped>
.wave-emoji {
    animation-name: wave;
    animation-duration: 2.1s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
}

@keyframes wave {
    0% { transform: rotate(0deg) }
    10% { transform: rotate(14deg) }
    20% { transform: rotate(-8deg) }
    30% { transform: rotate(14deg) }
    40% { transform: rotate(-4deg) }
    50% { transform: rotate(10deg) }
    60% { transform: rotate(0deg) }
    100% { transform: rotate(0deg) }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0.3;
    }
    50% {
        transform: translateY(-20px) rotate(180deg);
        opacity: 0.8;
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-spin-slow {
    animation: spin 15s linear infinite;
}

.animate-spin-reverse {
    animation: spin 10s linear infinite reverse;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

/* Custom utilities that might need to be added to tailwind config */
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>