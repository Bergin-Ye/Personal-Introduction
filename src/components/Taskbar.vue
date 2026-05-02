<template>
  <div class="taskbar">
    <button class="start-btn">开始</button>

    <div class="taskbar-windows">
      <div
        v-for="win in openWindows"
        :key="win.id"
        class="taskbar-tab"
        :class="{ active: win.id === activeId }"
        @click="$emit('focus', win.id)"
      >
        {{ win.title }}
      </div>
    </div>

    <div class="taskbar-tray">
      <span class="time">{{ time }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  openWindows: { type: Array, default: () => [] },
  activeId: { type: String, default: null },
})

defineEmits(['focus'])

const time = ref('')
let timer = null

function updateTime() {
  const now = new Date()
  time.value = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 30000)
})

onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.taskbar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(to bottom, var(--xp-taskbar-start), var(--xp-taskbar-end));
  display: flex;
  align-items: center;
  padding: 0 4px;
  border-top: 1px solid #5a8fd8;
  z-index: 100;
  font-family: var(--font-pixel);
}

.start-btn {
  background: linear-gradient(to bottom, var(--xp-start-btn-start), var(--xp-start-btn-end));
  border: 1px solid #1a6b15;
  border-radius: 0 8px 8px 0;
  padding: 4px 16px 4px 10px;
  color: white;
  font-weight: bold;
  font-size: 11px;
  font-family: var(--font-pixel);
  cursor: pointer;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}

.taskbar-windows {
  flex: 1;
  display: flex;
  gap: 2px;
  margin-left: 8px;
  overflow: hidden;
}

.taskbar-tab {
  background: linear-gradient(to bottom, #3a7bd5, #2a5fbc);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 3px 12px;
  font-size: 10px;
  color: #fff;
  cursor: pointer;
  border-radius: 2px;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.taskbar-tab.active {
  background: linear-gradient(to bottom, #4a8be5, #3a6fcc);
  border-color: rgba(255, 255, 255, 0.4);
}

.taskbar-tray {
  margin-left: auto;
  padding-right: 8px;
}

.time {
  font-family: var(--font-body);
  font-size: 14px;
  color: #fff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
}
</style>
