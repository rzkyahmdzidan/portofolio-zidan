<!-- src/components/Skill.vue -->
<template>
  <section id="skills"
           class="relative min-h-screen w-screen overflow-hidden
                  bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 scroll-mt-24">

    <!-- Blurred color blobs (sama posisi & warna seperti Hero) -->
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
    </div>

    <!-- Floating particles -->
    <div class="absolute inset-0 pointer-events-none">
      <div v-for="i in 24" :key="i"
           class="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
           :style="`
             left: ${Math.random() * 100}%;
             top: ${Math.random() * 100}%;
             animation-delay: ${Math.random() * 3}s;
             animation-duration: ${3 + Math.random() * 4}s;
           `">
      </div>
    </div>

    <div class="relative z-10 container mx-auto px-6 py-16 lg:py-24">
      <!-- Title -->
      <div class="text-center mb-10 sm:mb-14">
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-wide text-white">
          Skills
        </h2>
        <div class="mx-auto mt-3 h-1 w-28 rounded-full
                    bg-gradient-to-r from-fuchsia-400 via-violet-400 to-orange-300"></div>
      </div>

      <!-- Grid of icons -->
      <div
        class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6
               text-5xl sm:text-6xl md:text-7xl
               [&>*]:aspect-square [&>*]:rounded-2xl
               [&>*]:bg-white/10 [&>*]:backdrop-blur
               [&>*]:border [&>*]:border-white/20
               [&>*]:p-4 [&>*]:flex [&>*]:items-center [&>*]:justify-center
               [&>*]:shadow-lg [&>*]:shadow-fuchsia-500/10
               [&>*]:transition [&>*]:duration-300 [&>*]:hover:scale-105 [&>*]:hover:bg-white/20">
        <SkillIcon />
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillIcon from './layout/Skill/SkillIcon.vue'
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-15px) rotate(5deg);
    opacity: 1;
  }
}
.animate-float { animation: float 4s ease-in-out infinite; }
.animation-delay-1000 { animation-delay: 1s; }
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
</style>
