<!-- src/components/Navbar.vue -->
<template>
  <header
    class="fixed inset-x-0 top-0 z-50 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10"
  >
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Brand -->
      <a href="#home" class="text-white font-semibold tracking-wide"
         @click.prevent="scrollTo('#home')">
        Zidan<span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-orange-300">.dev</span>
      </a>

      <!-- Desktop links -->
      <ul class="hidden md:flex items-center gap-6 text-sm">
        <li v-for="item in items" :key="item.href">
          <a
            :href="item.href"
            @click.prevent="scrollTo(item.href)"
            class="relative text-slate-200/90 hover:text-white transition-colors"
            :class="activeSection === item.href.slice(1) ? 'text-white' : ''"
          >
            {{ item.label }}
            <!-- underline gradient when active -->
            <span
              class="absolute left-0 -bottom-1 h-0.5 w-full rounded-full
                     bg-gradient-to-r from-fuchsia-400 via-violet-400 to-orange-300
                     transition-opacity"
              :class="activeSection === item.href.slice(1) ? 'opacity-100' : 'opacity-0'"
            />
          </a>
        </li>
      </ul>

      <!-- Mobile menu button -->
      <button
        class="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-slate-200 hover:bg-white/10"
        @click="open = !open"
        aria-label="Toggle navigation"
      >
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round"
             stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round"
             stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </nav>

    <!-- Mobile panel -->
    <transition enter-active-class="duration-150 ease-out"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2">
      <div v-if="open" class="md:hidden border-t border-white/10">
        <ul class="px-4 py-3 space-y-2">
          <li v-for="item in items" :key="`m-${item.href}`">
            <a
              :href="item.href"
              @click.prevent="scrollTo(item.href, true)"
              class="block rounded-xl px-3 py-2 text-slate-200 hover:bg-white/10"
              :class="activeSection === item.href.slice(1) ? 'bg-white/10 text-white' : ''"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

// menu items – hilangkan duplikasi "Contact"
const items = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },   // ✅ baru
  { label: 'Contact', href: '#contact' },
]

const open = ref(false)
const activeSection = ref('home')

// smooth scroll dengan offset tinggi navbar
function scrollTo(hash, closeMobile = false) {
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return
  const navH = document.querySelector('header')?.offsetHeight ?? 64
  const top = el.getBoundingClientRect().top + window.pageYOffset - (navH + 8)
  window.scrollTo({ top, behavior: 'smooth' })
  if (closeMobile) open.value = false
  history.replaceState(null, '', hash) // update URL hash tanpa reload
}

// observe section untuk highlight link aktif
let observer
onMounted(() => {
  const options = { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.1 }
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) activeSection.value = entry.target.id
    })
  }, options)

  items.forEach(({ href }) => {
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style>
/* global smooth scroll; tetap tulis di sini jika belum ada */
html { scroll-behavior: smooth; }
</style>
