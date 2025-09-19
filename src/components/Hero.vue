<template>
  <div id="home" class="hero relative min-h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
    </div>

    <!-- Floating particles -->
    <div class="absolute inset-0">
      <div
        v-for="i in 30"
        :key="i"
        class="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
        :style="`
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation-delay: ${Math.random() * 3}s;
                    animation-duration: ${3 + Math.random() * 4}s;
                `"
      ></div>
    </div>

    <div class="relative z-10 container mx-auto px-6 py-12">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh]">
        <!-- Hero Content -->
        <div data-aos="fade-right" class="lg:w-1/2 space-y-8">
          <!-- Animated Introduction -->
          <div class="space-y-6">
            <!-- Greeting with animated text -->
            <div class="flex items-center space-x-4 mb-8">
              <div class="w-2 h-16 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <span class="text-lg text-gray-300">Hello, I'm</span>
                  <div class="w-8 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                </div>
                <h1 class="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"> Zidan </span>
                </h1>
              </div>
            </div>

            <!-- Animated Role Text -->
            <div class="relative">
              <h2 class="text-3xl lg:text-5xl font-bold text-white mb-4">
                WEB
                <span class="relative inline-block">
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"> DEVELOPER </span>
                  <!-- Animated underline -->
                  <div class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse"></div>
                </span>
              </h2>
            </div>

            <!-- Description Card -->
            <div class="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <p class="text-lg lg:text-xl text-gray-300 leading-relaxed">
                I am a freshgraduate who is passionate about
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold"> programming development </span>
                and IT field with major skills in
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-semibold"> frontend development </span>
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-4 mt-8">
              <!-- Download CV Button -->
              <button 
                @click="downloadCV"
                :disabled="isDownloading"
                class="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300">
                <span v-if="!isDownloading">Download CV</span>
                <span v-else class="flex items-center gap-2">
                  <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Downloading...
                </span>
              </button>
            </div>

            <!-- Download Status -->
            <div v-if="downloadMessage" 
                 :class="downloadStatus === 'success' ? 'text-green-400' : downloadStatus === 'error' ? 'text-red-400' : 'text-yellow-400'"
                 class="text-sm font-medium animate-fade-in">
              {{ downloadMessage }}
            </div>
          </div>
        </div>

        <!-- Hero Image Section -->
        <div data-aos="fade-left" class="lg:w-1/2 flex justify-center">
          <div class="relative">
            <!-- Decorative elements -->
            <div class="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg rotate-12 animate-bounce"></div>
            <div class="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg -rotate-12 animate-bounce animation-delay-1000"></div>

            <!-- Main image container -->
            <div class="relative w-80 h-80 lg:w-96 lg:h-96">
              <!-- Rotating border -->
              <div class="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full animate-spin-slow p-1">
                <div class="w-full h-full bg-gradient-to-br from-slate-900 to-purple-900 rounded-full"></div>
              </div>

              <div class="absolute inset-4 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full overflow-hidden">
                <img src="../assets/img/fotokeren.jpg" alt="Profile Photo" class="w-full h-full object-cover" />
              </div>

              <!-- Code symbols floating around -->
              <div class="absolute top-0 right-0 w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center animate-float">
                <span class="text-yellow-400 font-bold text-xl">&lt;/&gt;</span>
              </div>
              <div class="absolute bottom-0 left-0 w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center animate-float animation-delay-1000">
                <span class="text-purple-400 font-bold text-xl">{}</span>
              </div>
              <div class="absolute top-1/4 -left-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center animate-float animation-delay-2000">
                <span class="text-pink-400 font-bold text-xl">[]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive variables
const isDownloading = ref(false)
const downloadMessage = ref('')
const downloadStatus = ref('')

// CV file path - Sesuaikan dengan lokasi file CV Anda
const CV_PATH = '/cv/cvzidan1.pdf' // atau './assets/cv/CV_Zidan.pdf'
const CV_FILENAME = 'cvzidan.pdf'

// Function untuk download CV
const downloadCV = async () => {
  if (isDownloading.value) return
  
  try {
    isDownloading.value = true
    downloadMessage.value = 'Preparing download...'
    downloadStatus.value = 'loading'

    // Cek apakah file ada terlebih dahulu
    const response = await fetch(CV_PATH, { method: 'HEAD' })
    
    if (!response.ok) {
      throw new Error(`File not found at ${CV_PATH}. Status: ${response.status}`)
    }

    // Jika file ada, lakukan download
    const link = document.createElement('a')
    link.href = CV_PATH
    link.download = CV_FILENAME
    link.style.display = 'none'
    
    // Add target _blank as fallback
    link.target = '_blank'
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Update status
    downloadMessage.value = 'CV downloaded successfully! 📄'
    downloadStatus.value = 'success'
    
  } catch (error) {
    console.error('Download error:', error)
    downloadMessage.value = `Download failed: ${error.message}`
    downloadStatus.value = 'error'
    
    // Fallback: open in new tab
    try {
      window.open(CV_PATH, '_blank')
      downloadMessage.value = 'CV opened in new tab 📄'
      downloadStatus.value = 'success'
    } catch (fallbackError) {
      console.error('Fallback error:', fallbackError)
    }
  } finally {
    isDownloading.value = false
    
    // Clear message after 3 seconds
    setTimeout(() => {
      downloadMessage.value = ''
      downloadStatus.value = ''
    }, 3000)
  }
}

</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-15px) rotate(5deg);
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Navigation link hover effect */
.nav-link {
  position: relative;
  overflow: hidden;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #fbbf24, #f97316);
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after {
  width: 100%;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}
</style>
