<template>
  <div class="boot-screen" :class="{ 'fade-out': fading }">
    <div class="boot-bg"></div>
    <div class="boot-scanlines"></div>
    <div class="boot-vignette"></div>

    <div class="boot-content">
      <div class="win-logo">
        <div class="logo-row">
          <div class="logo-block red"></div>
          <div class="logo-block green"></div>
        </div>
        <div class="logo-row">
          <div class="logo-block blue"></div>
          <div class="logo-block yellow"></div>
        </div>
      </div>

      <div class="slogan">
        <div class="slogan-line1">Crafting with</div>
        <div class="slogan-line2">
          <span class="c-red">C</span><span class="c-red">o</span><span class="c-red">d</span><span class="c-red">e</span><span class="c-white">, </span>
          <span class="c-blue">AI</span>
          <span class="c-white"> & </span>
          <span class="c-purple">D</span><span class="c-purple">e</span><span class="c-purple">s</span><span class="c-purple">i</span><span class="c-purple">g</span><span class="c-purple">n</span>
        </div>
        <div class="slogan-sub">Digital Product Designer</div>
      </div>

      <div class="progress-bar">
        <div class="progress-slider"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['complete'])
const fading = ref(false)

onMounted(() => {
  setTimeout(() => {
    fading.value = true
    setTimeout(() => emit('complete'), 800)
  }, 2500)
})
</script>

<style scoped>
.boot-screen {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.8s ease;
}

.boot-screen.fade-out {
  opacity: 0;
}

.boot-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,
    #245edb 0%, #3a7bd5 20%, #87CEEB 40%,
    #b8dff5 55%, #ffffff 70%,
    #e8f4e8 85%, #4a8c3f 90%, #3a7a30 100%);
}

.boot-scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px);
}

.boot-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.2) 100%);
}

.boot-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.win-logo {
  display: inline-flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 16px;
}

.logo-row {
  display: flex;
  gap: 3px;
}

.logo-block {
  width: 28px;
  height: 28px;
  border-radius: 2px;
}

.logo-block.red { background: #ff0000; }
.logo-block.green { background: #00aa00; }
.logo-block.blue { background: #0000ff; }
.logo-block.yellow { background: #ffcc00; }

.slogan {
  font-family: var(--font-pixel);
  margin-bottom: 24px;
}

.slogan-line1 {
  font-size: 20px;
  color: #fff;
  letter-spacing: 2px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

.slogan-line2 {
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-top: 4px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

.c-red { color: #ff0000; }
.c-blue { color: #0088ff; }
.c-purple { color: #9933ff; }
.c-white { color: #fff; }

.slogan-sub {
  font-size: 11px;
  color: rgba(255,255,255,0.8);
  margin-top: 10px;
  letter-spacing: 3px;
}

.progress-bar {
  width: 180px;
  height: 12px;
  background: rgba(0,0,0,0.2);
  border-radius: 6px;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid rgba(255,255,255,0.2);
}

.progress-slider {
  width: 40px;
  height: 100%;
  background: linear-gradient(90deg, transparent, #3366cc, #4488ee, #3366cc, transparent);
  border-radius: 5px;
  animation: slide 2s ease-in-out infinite;
}

@keyframes slide {
  0% { transform: translateX(-40px); }
  50% { transform: translateX(180px); }
  100% { transform: translateX(-40px); }
}
</style>
