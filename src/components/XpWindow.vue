<template>
  <div
    v-show="!win.minimized"
    class="xp-window"
    :style="windowStyle"
    @mousedown="$emit('focus', win.id)"
  >
    <div class="titlebar" @mousedown="startDrag">
      <span class="titlebar-title">{{ win.title }}</span>
      <div class="titlebar-buttons">
        <button class="btn-minimize" @click.stop="$emit('minimize', win.id)">_</button>
        <button class="btn-maximize" @click.stop="$emit('maximize', win.id)">□</button>
        <button class="btn-close" @click.stop="$emit('close', win.id)">✕</button>
      </div>
    </div>

    <div class="window-content">
      <slot />
    </div>

    <div class="resize-handle" @mousedown.stop="startResize"></div>
  </div>
</template>

<script setup>
import { computed, onUnmounted } from 'vue'

const props = defineProps({
  win: { type: Object, required: true },
})

const emit = defineEmits(['close', 'minimize', 'maximize', 'focus', 'updatePosition', 'updateSize'])

const windowStyle = computed(() => {
  if (props.win.maximized) {
    return {
      top: '0',
      left: '0',
      width: '100%',
      height: 'calc(100% - 40px)',
      zIndex: props.win.zIndex,
    }
  }
  return {
    top: `${props.win.y}px`,
    left: `${props.win.x}px`,
    width: `${props.win.width}px`,
    height: `${props.win.height}px`,
    zIndex: props.win.zIndex,
  }
})

let isDragging = false
let dragOffsetX = 0
let dragOffsetY = 0

function startDrag(e) {
  if (props.win.maximized) return
  isDragging = true
  dragOffsetX = e.clientX - props.win.x
  dragOffsetY = e.clientY - props.win.y
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
}

function onDrag(e) {
  if (!isDragging) return
  emit('updatePosition', props.win.id, e.clientX - dragOffsetX, e.clientY - dragOffsetY)
}

function stopDrag() {
  isDragging = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
}

let isResizing = false
let resizeStartX = 0
let resizeStartY = 0
let resizeStartW = 0
let resizeStartH = 0

function startResize(e) {
  if (props.win.maximized) return
  isResizing = true
  resizeStartX = e.clientX
  resizeStartY = e.clientY
  resizeStartW = props.win.width
  resizeStartH = props.win.height
  document.addEventListener('mousemove', onResize)
  document.addEventListener('mouseup', stopResize)
}

function onResize(e) {
  if (!isResizing) return
  const newW = resizeStartW + (e.clientX - resizeStartX)
  const newH = resizeStartH + (e.clientY - resizeStartY)
  emit('updateSize', props.win.id, newW, newH)
}

function stopResize() {
  isResizing = false
  document.removeEventListener('mousemove', onResize)
  document.removeEventListener('mouseup', stopResize)
}

onUnmounted(() => {
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('mousemove', onResize)
  document.removeEventListener('mouseup', stopResize)
})
</script>

<style scoped>
.xp-window {
  position: absolute;
  background: var(--xp-menu-bg);
  border: 1px solid var(--xp-border);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  font-family: var(--font-pixel);
}

.titlebar {
  background: linear-gradient(to bottom, var(--xp-titlebar-start), var(--xp-titlebar-end));
  padding: 4px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: move;
  user-select: none;
  flex-shrink: 0;
}

.titlebar-title {
  color: #fff;
  font-size: 11px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
}

.titlebar-buttons {
  display: flex;
  gap: 2px;
}

.titlebar-buttons button {
  width: 21px;
  height: 21px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  font-size: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-pixel);
}

.btn-minimize, .btn-maximize {
  background: linear-gradient(to bottom, #3a7bd5, #2a5fbc);
  color: #fff;
}

.btn-close {
  background: linear-gradient(to bottom, #e04040, #c02020);
  color: #fff;
}

.window-content {
  flex: 1;
  overflow: auto;
  background: #fff;
}

.resize-handle {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 16px;
  height: 16px;
  cursor: nwse-resize;
}
</style>
