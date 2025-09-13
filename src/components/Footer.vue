<!-- src/components/Footer.vue -->
<template>
  <footer
    id="contact"
    data-aos="fade-down"
    class="relative w-screen overflow-hidden
           bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900
           scroll-mt-24"
  >
    <!-- blurred blobs -->
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <div class="absolute -top-6 left-10 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div class="absolute top-16 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      <div class="absolute -bottom-10 left-1/3 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
    </div>

    <!-- floating particles -->
    <div class="absolute inset-0 pointer-events-none">
      <div v-for="i in 18" :key="i"
           class="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
           :style="`
             left: ${Math.random() * 100}%;
             top: ${Math.random() * 100}%;
             animation-delay: ${Math.random() * 3}s;
             animation-duration: ${3 + Math.random() * 4}s;
           `"></div>
    </div>

    <div class="relative z-10 container mx-auto px-6 py-16 sm:py-20">
      <!-- heading -->
      <div class="text-center mb-8">
        <p class="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-white">
          Contact Me
        </p>
        <div class="mx-auto mt-3 h-1 w-28 rounded-full
                    bg-gradient-to-r from-fuchsia-400 via-violet-400 to-orange-300"></div>
      </div>

      <!-- social links -->
      <div class="flex flex-col items-center justify-center gap-6">
        <ContactList />

        <!-- outro / typing line -->
        <div class="text-center text-slate-300/90">
          <p class="capitalize">thank you for visiting my website 👋</p>
          <p v-if="dynamicText !== ''" class="mt-1 text-slate-200">
            {{ dynamicText }}
          </p>
          <p v-else class="invisible">|</p>
        </div>
      </div>
    </div>

    <!-- bottom credit -->
    <div class="relative z-10 border-t border-white/10">
      <div class="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-slate-300/80 text-sm">
        <span>© {{ new Date().getFullYear() }} Zidan.dev — All rights reserved.</span>
        <span class="mt-2 sm:mt-0">
          Built with <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-semibold">Vue.js</span> & Tailwind CSS
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import ContactList from './layout/Footer/ContactList.vue'
import { onMounted } from 'vue'
import { useAnimationTyping } from '@/utils/utils'

const { dynamicText, typing } = useAnimationTyping()

onMounted(() => {
  typing('this website made by Vue.js')
})
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
  50% { transform: translateY(-15px) rotate(5deg); opacity: 1; }
}
.animate-float { animation: float 4s ease-in-out infinite; }
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
</style>
