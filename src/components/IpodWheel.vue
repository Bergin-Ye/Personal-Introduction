<template>
  <div class="wheel-container">
    <div class="wheel-area">
      <div
        class="wheel"
        @touchstart.prevent="onTouchStart"
        @touchmove.prevent="onTouchMove"
        @touchend="onTouchEnd"
        @mousedown.prevent="onMouseDown"
      ></div>
      <div class="wheel-label top" @click="$emit('menu')">MENU</div>
      <div class="wheel-label right" @click="$emit('next')">▶▶</div>
      <div class="wheel-label bottom" @click="$emit('select')">▶⏸</div>
      <div class="wheel-label left" @click="$emit('prev')">◀◀</div>
      <div class="center-btn" @click="$emit('select')"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['scroll-up', 'scroll-down', 'select', 'menu', 'prev', 'next'])
const lastAngle = ref(null)

function getAngle(x, y, cx, cy) {
  return Math.atan2(y - cy, x - cx) * (180 / Math.PI)
}

function getCenter(el) {
  const r = el.getBoundingClientRect()
  return { cx: r.left + r.width / 2, cy: r.top + r.height / 2 }
}

function handleMove(clientX, clientY, el) {
  const { cx, cy } = getCenter(el)
  const angle = getAngle(clientX, clientY, cx, cy)
  if (lastAngle.value !== null) {
    let diff = angle - lastAngle.value
    if (diff > 180) diff -= 360
    if (diff < -180) diff += 360
    if (Math.abs(diff) > 12) {
      emit(diff > 0 ? 'scroll-down' : 'scroll-up')
      lastAngle.value = angle
    }
  } else {
    lastAngle.value = angle
  }
}

function onTouchStart(e) {
  const el = e.currentTarget
  const t = e.touches[0]
  const { cx, cy } = getCenter(el)
  lastAngle.value = getAngle(t.clientX, t.clientY, cx, cy)
}

function onTouchMove(e) {
  const el = e.currentTarget
  const t = e.touches[0]
  handleMove(t.clientX, t.clientY, el)
}

function onTouchEnd() {
  lastAngle.value = null
}

function onMouseDown(e) {
  const el = e.currentTarget
  const { cx, cy } = getCenter(el)
  lastAngle.value = getAngle(e.clientX, e.clientY, cx, cy)

  function onMove(ev) { handleMove(ev.clientX, ev.clientY, el) }
  function onUp() {
    lastAngle.value = null
    document.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseup', onUp)
  }
  document.addEventListener('mousemove', onMove)
  document.addEventListener('mouseup', onUp)
}
</script>

<style scoped>
.wheel-container {
  display: flex;
  justify-content: center;
  padding: 12px 0 20px;
  flex-shrink: 0;
}

.wheel-area {
  width: 200px;
  height: 200px;
  position: relative;
}

.wheel {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(145deg, #e8e8e0, #d0d0c8);
  box-shadow:
    inset 0 1px 3px rgba(255,255,255,0.6),
    inset 0 -1px 3px rgba(0,0,0,0.15),
    0 2px 8px rgba(0,0,0,0.2);
  touch-action: none;
  user-select: none;
}

.wheel-label {
  position: absolute;
  font-family: var(--font-pixel);
  font-size: 11px;
  color: #888;
  font-weight: bold;
  cursor: pointer;
  padding: 8px;
  z-index: 2;
}

.wheel-label.top {
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
}

.wheel-label.right {
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
}

.wheel-label.bottom {
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
}

.wheel-label.left {
  left: 6px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
}

.wheel-label:active {
  color: #444;
}

.center-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(145deg, #f5f5f0, #dcdcd4);
  box-shadow:
    inset 0 1px 2px rgba(255,255,255,0.5),
    0 1px 3px rgba(0,0,0,0.2);
  cursor: pointer;
  z-index: 2;
}

.center-btn:active {
  background: linear-gradient(145deg, #dcdcd4, #c8c8c0);
}
</style>
