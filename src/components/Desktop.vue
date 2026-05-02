<template>
  <div class="desktop" ref="desktop">
    <div class="wallpaper" :style="{ transform: `translate(${offsetX}px, ${offsetY}px) scale(1.05)` }"></div>
    <CRTOverlay />
    <Dock @open="handleOpen" />
    <XpWindow
      v-for="win in windowList"
      :key="win.id"
      :win="win"
      @close="closeWindow"
      @minimize="minimizeWindow"
      @maximize="maximizeWindow"
      @focus="focusWindow"
      @update-position="updatePosition"
      @update-size="updateSize"
    >
      <component :is="viewComponents[win.id]" />
    </XpWindow>
    <Taskbar
      :open-windows="windowList"
      :active-id="activeWindowId"
      @focus="focusWindow"
    />
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useWindow } from '../composables/useWindow'

const desktop = ref(null)
const offsetX = ref(0)
const offsetY = ref(0)

function handleMouseMove(e) {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window
  const x = (clientX / innerWidth - 0.5) * 2
  const y = (clientY / innerHeight - 0.5) * 2
  offsetX.value = x * -8
  offsetY.value = y * -8
}

onMounted(() => window.addEventListener('mousemove', handleMouseMove))
onUnmounted(() => window.removeEventListener('mousemove', handleMouseMove))
import CRTOverlay from './CRTOverlay.vue'
import Dock from './Dock.vue'
import Taskbar from './Taskbar.vue'
import XpWindow from './XpWindow.vue'
import PortfolioViewer from '../views/PortfolioViewer.vue'
import AboutMe from '../views/AboutMe.vue'
import TechStack from '../views/TechStack.vue'
import Contact from '../views/Contact.vue'

const {
  windows,
  activeWindowId,
  openWindow,
  closeWindow,
  minimizeWindow,
  maximizeWindow,
  focusWindow,
  updatePosition,
  updateSize,
} = useWindow()

const viewComponents = {
  portfolio: PortfolioViewer,
  about: AboutMe,
  skills: TechStack,
  contact: Contact,
}

const titles = {
  portfolio: '图片查看器',
  about: '关于我 — 叶柏君',
  skills: '系统属性',
  contact: '通讯簿 — 联系我',
}

const windowList = computed(() => Object.values(windows))

function handleOpen(id) {
  openWindow(id, titles[id], viewComponents[id])
}
</script>

<style scoped>
.desktop {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.wallpaper {
  position: absolute;
  inset: -8px;
  background-image: url('/怪诞1.png');
  background-size: cover;
  background-position: center;
  filter: blur(0.2px) contrast(1.05) saturate(1.05);
  transition: transform 0.3s ease-out;
  will-change: transform;
}
</style>
