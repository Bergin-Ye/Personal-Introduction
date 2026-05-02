import { reactive, ref } from 'vue'

const windows = reactive({})
const activeWindowId = ref(null)
let zIndexCounter = 10

export function useWindow() {
  function openWindow(id, title, component) {
    if (windows[id]) {
      windows[id].zIndex = ++zIndexCounter
      windows[id].minimized = false
      activeWindowId.value = id
      return
    }
    windows[id] = {
      id,
      title,
      component,
      x: 80 + Math.random() * 100,
      y: 40 + Math.random() * 80,
      width: 800,
      height: 520,
      minimized: false,
      maximized: false,
      zIndex: ++zIndexCounter,
    }
    activeWindowId.value = id
  }

  function closeWindow(id) {
    delete windows[id]
    if (activeWindowId.value === id) {
      const keys = Object.keys(windows)
      activeWindowId.value = keys.length ? keys[keys.length - 1] : null
    }
  }

  function minimizeWindow(id) {
    if (windows[id]) {
      windows[id].minimized = true
      activeWindowId.value = null
    }
  }

  function maximizeWindow(id) {
    if (windows[id]) {
      windows[id].maximized = !windows[id].maximized
    }
  }

  function focusWindow(id) {
    if (windows[id]) {
      windows[id].zIndex = ++zIndexCounter
      windows[id].minimized = false
      activeWindowId.value = id
    }
  }

  function updatePosition(id, x, y) {
    if (windows[id]) {
      windows[id].x = x
      windows[id].y = y
    }
  }

  function updateSize(id, width, height) {
    if (windows[id]) {
      windows[id].width = Math.max(400, width)
      windows[id].height = Math.max(300, height)
    }
  }

  return {
    windows,
    activeWindowId,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    updatePosition,
    updateSize,
  }
}
