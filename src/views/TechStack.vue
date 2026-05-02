<template>
  <div class="tech-stack">
    <div class="tabs">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        class="tab"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </div>
    </div>

    <div class="tab-content">
      <div class="tab-header">
        <div class="tab-icon" v-html="currentTab.icon"></div>
        <div>
          <div class="tab-title">{{ currentTab.title }}</div>
          <div class="tab-desc">{{ currentTab.description }}</div>
        </div>
      </div>

      <div class="tech-grid">
        <div v-for="tech in currentTab.skills" :key="tech.name" class="tech-card">
          <div class="tech-icon" v-html="tech.icon"></div>
          <div class="tech-name">{{ tech.name }}</div>
          <div class="tech-level">
            <span v-for="i in 5" :key="i" :class="{ filled: i <= tech.level }">■</span>
          </div>
        </div>
      </div>
    </div>

    <div class="dialog-buttons">
      <button>确定</button>
      <button>取消</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('frontend')

const tabs = [
  {
    id: 'frontend',
    label: '⚡ 前端',
    title: '前端技术栈',
    description: 'Frontend Development',
    icon: `<svg width="48" height="48" viewBox="0 0 16 16" style="image-rendering:pixelated"><rect x="2" y="1" width="12" height="10" fill="#4a6fa5"/><rect x="3" y="2" width="10" height="8" fill="#87ceeb"/><rect x="6" y="11" width="4" height="1" fill="#888"/><rect x="4" y="12" width="8" height="1" fill="#888"/></svg>`,
    skills: [
      { name: 'Vue 3', level: 5, icon: '<div style="font-size:24px">🟢</div>' },
      { name: 'HTML5', level: 5, icon: '<div style="font-size:24px">📄</div>' },
      { name: 'CSS3', level: 5, icon: '<div style="font-size:24px">🎨</div>' },
      { name: 'JavaScript ES6+', level: 5, icon: '<div style="font-size:24px">📘</div>' },
      { name: 'Three.js', level: 3, icon: '<div style="font-size:24px">🧊</div>' },
      { name: 'GSAP', level: 3, icon: '<div style="font-size:24px">✨</div>' },
      { name: 'Tailwind CSS', level: 4, icon: '<div style="font-size:24px">🌬️</div>' },
      { name: 'Vant', level: 4, icon: '<div style="font-size:24px">📱</div>' },
      { name: 'Element Plus', level: 4, icon: '<div style="font-size:24px">🧩</div>' },
      { name: 'OGL', level: 3, icon: '<div style="font-size:24px">🌌</div>' },
      { name: 'Motion Vue', level: 3, icon: '<div style="font-size:24px">🎬</div>' },
      { name: 'ECharts', level: 3, icon: '<div style="font-size:24px">📊</div>' },
    ],
  },
  {
    id: 'backend',
    label: '🔧 工具',
    title: '开发工具',
    description: 'Development Tools',
    icon: `<svg width="48" height="48" viewBox="0 0 16 16" style="image-rendering:pixelated"><rect x="2" y="2" width="12" height="12" fill="#888"/><rect x="4" y="4" width="8" height="8" fill="#aaa"/><rect x="6" y="6" width="4" height="4" fill="#666"/></svg>`,
    skills: [
      { name: 'Vite', level: 5, icon: '<div style="font-size:24px">⚡</div>' },
      { name: 'Pinia', level: 4, icon: '<div style="font-size:24px">🍍</div>' },
      { name: 'Vue Router', level: 4, icon: '<div style="font-size:24px">🛤️</div>' },
      { name: 'Git', level: 4, icon: '<div style="font-size:24px">🔀</div>' },
      { name: 'Axios', level: 4, icon: '<div style="font-size:24px">🌐</div>' },
      { name: 'Mock.js', level: 4, icon: '<div style="font-size:24px">🎭</div>' },
      { name: 'WangEditor', level: 3, icon: '<div style="font-size:24px">📝</div>' },
      { name: '@vueuse/core', level: 3, icon: '<div style="font-size:24px">🔧</div>' },
      { name: 'Sass / Less', level: 4, icon: '<div style="font-size:24px">💎</div>' },
      { name: 'PostCSS', level: 3, icon: '<div style="font-size:24px">📮</div>' },
      { name: 'Python', level: 2, icon: '<div style="font-size:24px">🐍</div>' },
    ],
  },
  {
    id: 'design',
    label: '🎨 设计',
    title: '设计工具',
    description: 'Design Tools',
    icon: `<svg width="48" height="48" viewBox="0 0 16 16" style="image-rendering:pixelated"><rect x="2" y="2" width="12" height="12" fill="#ff69b4"/><rect x="4" y="4" width="8" height="8" fill="#fff"/><rect x="6" y="6" width="4" height="4" fill="#ff69b4"/></svg>`,
    skills: [
      { name: 'Figma', level: 5, icon: '<div style="font-size:24px">🎯</div>' },
      { name: 'Blender', level: 3, icon: '<div style="font-size:24px">📦</div>' },
      { name: 'C4D', level: 3, icon: '<div style="font-size:24px">🎬</div>' },
      { name: 'Pencil', level: 4, icon: '<div style="font-size:24px">✏️</div>' },
      { name: '剪映', level: 4, icon: '<div style="font-size:24px">🎞️</div>' },
      { name: 'Stitch', level: 3, icon: '<div style="font-size:24px">🧵</div>' },
    ],
  },
  {
    id: 'ai',
    label: '🤖 AI',
    title: 'AI 工具',
    description: 'AI Development Tools',
    icon: `<svg width="48" height="48" viewBox="0 0 16 16" style="image-rendering:pixelated"><rect x="3" y="3" width="10" height="10" fill="#00bcd4"/><rect x="5" y="5" width="2" height="2" fill="#fff"/><rect x="9" y="5" width="2" height="2" fill="#fff"/><rect x="6" y="9" width="4" height="2" fill="#fff"/></svg>`,
    skills: [
      { name: 'Claude Code', level: 5, icon: '<div style="font-size:24px">🧠</div>' },
      { name: 'Codex', level: 4, icon: '<div style="font-size:24px">💻</div>' },
      { name: 'Trae', level: 4, icon: '<div style="font-size:24px">🔧</div>' },
      { name: 'DeepSeek', level: 4, icon: '<div style="font-size:24px">🔍</div>' },
      { name: 'AntiGravity', level: 3, icon: '<div style="font-size:24px">🚀</div>' },
    ],
  },
]

const currentTab = computed(() => tabs.find(t => t.id === activeTab.value))
</script>

<style scoped>
.tech-stack {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: var(--font-pixel);
  background: var(--xp-menu-bg);
}

.tabs {
  display: flex;
  padding: 8px 8px 0;
  background: var(--xp-menu-bg);
}

.tab {
  background: #d6d2c2;
  padding: 4px 16px;
  border: 1px solid #999;
  border-bottom: none;
  border-radius: 3px 3px 0 0;
  font-size: 11px;
  color: #666;
  cursor: pointer;
  margin-right: 2px;
}

.tab.active {
  background: #fff;
  color: #333;
  font-weight: bold;
  position: relative;
  top: 1px;
}

.tab-content {
  flex: 1;
  background: #fff;
  border: 1px solid #999;
  margin: 0 8px;
  padding: 16px;
  overflow-y: auto;
}

.tab-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;
}

.tab-icon {
  width: 64px;
  height: 64px;
  background: #f0f0f0;
  border: 2px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  image-rendering: pixelated;
}

.tab-title {
  font-size: 14px;
  font-weight: bold;
  color: var(--xp-link);
}

.tab-desc {
  font-size: 11px;
  color: #666;
  margin-top: 4px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.tech-card {
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
}

.tech-icon {
  width: 32px;
  height: 32px;
  margin: 0 auto 4px;
  image-rendering: pixelated;
}

.tech-name {
  font-size: 11px;
  font-weight: bold;
}

.tech-level {
  font-size: 9px;
  color: #ccc;
  margin-top: 4px;
}

.tech-level .filled {
  color: var(--xp-link);
}

.dialog-buttons {
  padding: 10px 8px;
  display: flex;
  justify-content: flex-end;
  gap: 6px;
}

.dialog-buttons button {
  background: var(--xp-menu-bg);
  border: 1px solid #999;
  padding: 3px 20px;
  font-size: 11px;
  font-family: var(--font-pixel);
  cursor: pointer;
  border-radius: 2px;
}
</style>
