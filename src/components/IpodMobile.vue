<template>
  <div class="ipod">
    <div class="ipod-body">
      <div class="lcd">
        <div v-if="currentView === 'menu'" class="menu-screen">
          <div class="lcd-header">
            <span class="header-title">Bergin's iPod</span>
            <span class="header-battery">🔋</span>
          </div>
          <div class="menu-list">
            <div
              v-for="(item, i) in menuItems"
              :key="item.id"
              class="menu-item"
              :class="{ active: selectedIndex === i }"
              @click="selectedIndex = i; selectItem()"
            >
              <span class="menu-icon">{{ item.icon }}</span>
              <span class="menu-label">{{ item.label }}</span>
              <span class="menu-arrow">›</span>
            </div>
          </div>
        </div>

        <div v-else class="view-screen">
          <div class="view-header" @click="backToMenu">
            <span class="back-arrow">‹</span>
            <span>Menu</span>
            <span class="view-title">{{ currentTitle }}</span>
          </div>
          <div class="view-content" ref="viewContent">
            <component :is="currentComponent" />
          </div>
        </div>
      </div>

      <IpodWheel
        @scroll-up="onScrollUp"
        @scroll-down="onScrollDown"
        @select="selectItem"
        @menu="backToMenu"
        @prev="onPrev"
        @next="onNext"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef, nextTick, provide } from 'vue'
import IpodWheel from './IpodWheel.vue'
import IpodPortfolio from '../views/ipod/IpodPortfolio.vue'
import IpodAbout from '../views/ipod/IpodAbout.vue'
import IpodSkills from '../views/ipod/IpodSkills.vue'
import IpodContact from '../views/ipod/IpodContact.vue'

const menuItems = [
  { id: 'portfolio', icon: '📁', label: '作品集', component: IpodPortfolio },
  { id: 'about', icon: '👤', label: '关于我', component: IpodAbout },
  { id: 'skills', icon: '💻', label: '技术栈', component: IpodSkills },
  { id: 'contact', icon: '✉️', label: '联系我', component: IpodContact },
]

const selectedIndex = ref(0)
const currentView = ref('menu')
const currentComponent = shallowRef(null)
const currentTitle = ref('')
const viewContent = ref(null)
const wheelAction = ref(null)
provide('wheelAction', wheelAction)

function onScrollUp() {
  if (currentView.value === 'menu') {
    if (selectedIndex.value > 0) selectedIndex.value--
  } else {
    wheelAction.value = { type: 'scroll', amount: -80, ts: Date.now() }
  }
}

function onScrollDown() {
  if (currentView.value === 'menu') {
    if (selectedIndex.value < menuItems.length - 1) selectedIndex.value++
  } else {
    wheelAction.value = { type: 'scroll', amount: 80, ts: Date.now() }
  }
}

function onPrev() {
  if (currentView.value === 'menu') {
    if (selectedIndex.value > 0) selectedIndex.value--
  } else {
    wheelAction.value = { type: 'prev', ts: Date.now() }
  }
}

function onNext() {
  if (currentView.value === 'menu') {
    if (selectedIndex.value < menuItems.length - 1) selectedIndex.value++
  } else {
    wheelAction.value = { type: 'next', ts: Date.now() }
  }
}

function selectItem() {
  if (currentView.value === 'menu') {
    const item = menuItems[selectedIndex.value]
    currentComponent.value = item.component
    currentTitle.value = item.label
    currentView.value = 'view'
    nextTick(() => {
      if (viewContent.value) viewContent.value.scrollTop = 0
    })
  } else {
    wheelAction.value = { type: 'select', ts: Date.now() }
  }
}

function backToMenu() {
  if (currentView.value !== 'menu') {
    currentView.value = 'menu'
    currentComponent.value = null
  }
}
</script>

<style scoped>
.ipod {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  padding: 16px;
  position: relative;
}

.ipod::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  pointer-events: none;
}

.ipod-body {
  width: 100%;
  max-width: 360px;
  background: linear-gradient(160deg, #f5f5f0, #e0e0d8, #d4d4cc);
  border-radius: 28px;
  padding: 32px 24px 20px;
  box-shadow:
    0 8px 32px rgba(0,0,0,0.4),
    inset 0 1px 0 rgba(255,255,255,0.6);
}

.lcd {
  background: #1a1a2e;
  border-radius: 8px;
  height: 340px;
  overflow: hidden;
  border: 2px solid #333;
  display: flex;
  flex-direction: column;
}

.lcd-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  background: linear-gradient(to bottom, #4a6fa5, #3a5f95);
  color: white;
  font-family: var(--font-pixel);
  font-size: 10px;
  flex-shrink: 0;
}

.header-title { font-weight: bold; }
.header-battery { font-size: 12px; }

.menu-screen {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.menu-list {
  flex: 1;
  overflow-y: auto;
  background: linear-gradient(to bottom, #e8e8f0, #d8d8e0);
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  font-family: var(--font-pixel);
  font-size: 12px;
  color: #333;
  border-bottom: 1px solid #ccc;
  gap: 8px;
  cursor: pointer;
}

.menu-item.active {
  background: linear-gradient(to bottom, #4a7abf, #3a6aad);
  color: white;
}

.menu-item:active {
  opacity: 0.8;
}

.menu-icon { font-size: 16px; }
.menu-label { flex: 1; }
.menu-arrow { font-size: 16px; opacity: 0.5; }

.view-screen {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.view-header {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  background: linear-gradient(to bottom, #4a6fa5, #3a5f95);
  color: white;
  font-family: var(--font-pixel);
  font-size: 11px;
  cursor: pointer;
  flex-shrink: 0;
}

.back-arrow { font-size: 18px; }
.view-title { margin-left: auto; opacity: 0.8; font-size: 10px; }

.view-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background: white;
  min-height: 0;
  -webkit-overflow-scrolling: touch;
}
</style>
