<template>
  <div class="apple-boot" :class="{ 'fade-out': fading }">
    <div class="apple-logo">
      <svg viewBox="0 0 170 170" width="48" height="48" fill="white">
        <path d="M150.4 130.2c-2.8 6.5-6.1 12.5-10 18-5.3 7.5-9.6 12.7-13 15.5-5.2 4.6-10.7 7-16.7 7.2-4.3 0-9.4-1.2-15.5-3.6-6.1-2.4-11.7-3.6-16.8-3.6-5.3 0-11 1.2-17.1 3.6-6.1 2.4-11.1 3.7-14.8 3.8-5.7.3-11.4-2.2-16.9-7.4-3.7-3-8.2-8.3-13.5-15.9-5.7-8.2-10.4-17.7-14.1-28.4C-1.1 107 .2 95.7 3.5 86.6c2.4-6.6 5.6-11.8 9.7-15.6 4-3.7 8.5-5.6 13.6-5.8 4.5 0 10.5 1.4 17.9 4.2 7.4 2.8 12.1 4.2 14.1 4.2 1.5 0 6.7-1.6 15.5-4.8 8.3-3 15.3-4.3 21.1-3.8 15.6 1.3 27.3 7.5 35 18.8-13.9 8.4-20.7 20.2-20.5 35.3.2 11.8 4.4 21.6 12.6 29.4 3.8 3.6 8 6.3 12.7 8.2-1 3-2.1 5.8-3.3 8.6zM115.4 7.2c0 9.2-3.4 17.8-10.1 25.7-8.1 9.4-17.9 14.8-28.6 14.1-.1-1.1-.2-2.3-.2-3.5 0-8.9 3.9-18.3 10.8-26.1 3.4-3.9 7.7-7.2 12.9-9.8 5.2-2.5 10.1-3.9 14.9-4.1.1 1.3.2 2.5.3 3.8z"/>
      </svg>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['complete'])
const fading = ref(false)
const progress = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    progress.value += Math.random() * 15 + 5
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(interval)
      setTimeout(() => {
        fading.value = true
        setTimeout(() => emit('complete'), 600)
      }, 300)
    }
  }, 200)
})
</script>

<style scoped>
.apple-boot {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.6s ease;
}

.apple-boot.fade-out {
  opacity: 0;
}

.apple-logo {
  margin-bottom: auto;
  margin-top: 35vh;
}

.progress-bar {
  width: 140px;
  height: 3px;
  background: #333;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 80px;
}

.progress-fill {
  height: 100%;
  background: #fff;
  border-radius: 2px;
  transition: width 0.2s ease;
}
</style>
