<template>
  <div class="dock">
    <div
      v-for="item in items"
      :key="item.id"
      class="dock-item"
      @click="$emit('open', item.id)"
    >
      <div class="dock-icon" v-html="item.icon"></div>
      <div class="dock-label">{{ item.label }}</div>
    </div>
  </div>
</template>

<script setup>
import { icons } from '../assets/icons'

defineEmits(['open'])

const items = [
  { id: 'portfolio', label: '作品集', icon: icons.portfolio },
  { id: 'about', label: '关于我', icon: icons.about },
  { id: 'skills', label: '技术栈', icon: icons.skills },
  { id: 'contact', label: '联系我', icon: icons.contact },
]
</script>

<style scoped>
.dock {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px 24px;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 5;
}

.dock-item {
  text-align: center;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  transition: all 0.2s;
}

.dock-item:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.1);
}

.dock-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 4px;
  image-rendering: pixelated;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
}

.dock-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.dock-label {
  font-family: var(--font-pixel);
  font-size: 10px;
  color: #fff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.9), -1px -1px 0 rgba(0, 0, 0, 0.5);
  line-height: 1.2;
}
</style>
