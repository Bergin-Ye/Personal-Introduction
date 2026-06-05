<template>
  <div class="ipod-skills">
    <div class="tabs">
      <div v-for="tab in tabs" :key="tab.key" class="tab" :class="{ active: activeTab === tab.key }" @click="activeTab = tab.key">
        {{ tab.label }}
      </div>
    </div>
    <div class="skill-body">
      <div class="skill-grid">
        <div v-for="skill in currentSkills" :key="skill.name" class="skill">
          <span class="dot" :class="skill.color"></span>
          {{ skill.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('frontend')

const tabs = [
  { key: 'frontend', label: '前端' },
  { key: 'tools', label: '工具' },
  { key: 'design', label: '设计' },
  { key: 'ai', label: 'AI' },
]

const skills = {
  frontend: [
    { name: 'Vue 3', color: 'green' }, { name: 'Pinia', color: 'green' }, { name: 'Vue Router', color: 'green' },
    { name: 'JavaScript', color: 'green' }, { name: 'HTML5', color: 'green' }, { name: 'CSS3', color: 'green' },
    { name: 'Tailwind', color: 'blue' }, { name: 'Vant', color: 'blue' }, { name: 'Element Plus', color: 'blue' },
    { name: 'Three.js', color: 'blue' }, { name: 'GSAP', color: 'blue' }, { name: 'ECharts', color: 'blue' },
    { name: 'Sass/Less', color: 'orange' }, { name: 'PostCSS', color: 'orange' }, { name: 'Axios', color: 'orange' },
    { name: 'uni-app', color: 'orange' }, { name: 'Motion Vue', color: 'orange' }, { name: 'WangEditor', color: 'orange' },
  ],
  tools: [
    { name: 'Vite', color: 'green' }, { name: 'Webpack', color: 'green' }, { name: 'Git', color: 'green' },
    { name: 'npm', color: 'blue' }, { name: 'VS Code', color: 'blue' }, { name: 'Chrome DevTools', color: 'blue' },
    { name: 'Figma', color: 'orange' }, { name: 'Postman', color: 'orange' }, { name: 'Mock.js', color: 'orange' },
    { name: 'ESLint', color: 'orange' }, { name: 'Cloudflare', color: 'orange' },
  ],
  design: [
    { name: 'Figma', color: 'green' }, { name: 'Photoshop', color: 'green' }, { name: 'Illustrator', color: 'green' },
    { name: 'C4D', color: 'blue' }, { name: '剪映', color: 'blue' }, { name: 'Stitch', color: 'orange' },
  ],
  ai: [
    { name: 'DeepSeek API', color: 'green' }, { name: 'Claude', color: 'green' }, { name: 'ChatGPT', color: 'green' },
    { name: 'Cursor', color: 'blue' }, { name: 'AntiGravity', color: 'orange' },
  ],
}

const currentSkills = computed(() => skills[activeTab.value])
</script>

<style scoped>
.ipod-skills { display: flex; flex-direction: column; height: 100%; }

.tabs {
  display: flex; background: #d0d0c8; border-bottom: 1px solid #aaa; flex-shrink: 0;
}
.tab {
  flex: 1; text-align: center; padding: 4px 0; font-size: 10px; cursor: pointer;
  color: #666; border-right: 1px solid #bbb; font-family: var(--font-pixel);
}
.tab:last-child { border-right: none; }
.tab.active {
  background: linear-gradient(to bottom, #4a7abf, #3a6aad); color: white; font-weight: bold;
}

.skill-body { flex: 1; overflow-y: auto; background: #f0f0e8; padding: 6px 8px; }
.skill-grid { display: flex; flex-wrap: wrap; gap: 4px; }
.skill {
  background: white; border: 1px solid #ddd; border-radius: 3px;
  padding: 3px 7px; font-size: 10px; color: #333;
  display: flex; align-items: center; gap: 4px; font-family: var(--font-pixel);
}
.dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.dot.green { background: #4caf50; }
.dot.blue { background: #2196f3; }
.dot.orange { background: #ff9800; }
</style>
