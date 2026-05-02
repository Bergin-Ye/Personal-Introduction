<template>
  <div class="portfolio-viewer">
    <div class="menu-bar">
      <span>文件(F)</span>
      <span>查看(V)</span>
      <span>图像(I)</span>
      <span>帮助(H)</span>
    </div>

    <div class="viewer-body">
      <div class="image-area" ref="imageArea">
        <div class="image-wrapper">
          <img :src="currentProject.image" :alt="currentProject.name" class="project-img" />
        </div>
      </div>

      <div class="info-panel">
        <div class="project-name">{{ currentProject.name }}</div>
        <div class="project-meta">{{ currentProject.meta }}</div>
        <div class="project-tags">
          <span v-for="tag in currentProject.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <div class="project-desc">{{ currentProject.description }}</div>
        <div class="project-details">
          <div><strong>角色：</strong>{{ currentProject.role }}</div>
          <div><strong>技术栈：</strong>{{ currentProject.tech }}</div>
        </div>

        <a :href="currentProject.github" target="_blank" class="github-link">
          🐙 查看 GitHub 仓库
        </a>

        <div class="nav-buttons">
          <button :disabled="currentIndex === 0" @click="prev">◀ 上一个</button>
          <span>{{ currentIndex + 1 }} / {{ projects.length }}</span>
          <button :disabled="currentIndex === projects.length - 1" @click="next">下一个 ▶</button>
        </div>
      </div>
    </div>

    <div class="status-bar">
      <span>就绪</span>
      <span>{{ currentProject.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'

const imageArea = ref(null)

const projects = [
  {
    name: 'FlowMind',
    meta: '智能思绪整理平台',
    tags: ['Vue 3', 'Pinia', 'DeepSeek API', 'Iconify'],
    description: '一款 AI 驱动的思维整理工具，用户输入零散想法，通过 DeepSeek API 智能归类、提炼要点，将杂乱思绪转化为结构化笔记。',
    role: '全栈开发',
    tech: 'Vue 3.5, Pinia 3, Vue Router 5, Vite 8, DeepSeek API, @iconify/vue',
    image: '/flowmind.jpg',
    github: 'https://github.com/Bergin-Ye/flowmind',
  },
  {
    name: 'AI 心理健康助手',
    meta: '前后端完整项目',
    tags: ['Vue 3', 'Element Plus', 'ECharts', 'SSE'],
    description: '全栈心理健康平台，包含用户端与管理员后台。用户可通过 SSE 流式对话与 AI 进行实时心理咨询，使用情绪日记记录每日心情变化。管理员端提供 ECharts 数据看板，可视化分析用户情绪趋势与咨询数据，支持富文本知识库管理。',
    role: '前端开发',
    tech: 'Vue 3.5, Element Plus, ECharts 6, Axios, WangEditor, SSE, Day.js, Sass',
    image: '/心理健康.jpg',
    github: 'https://github.com/Bergin-Ye/ai-',
  },
  {
    name: 'TapSphere',
    meta: 'NFC 卡片定制系统',
    tags: ['Vue 3', 'Three.js', 'Element Plus', 'Sass'],
    description: '基于 Three.js 的 3D 交互式 NFC 卡片定制平台，用户可实时预览卡片的 3D 渲染效果，支持本地存储设计历史记录与 base64 图片导出。Element Plus 构建的操作面板让卡片设计与预览一体化完成。',
    role: '前端开发',
    tech: 'Vue 3.5, Three.js 0.148, Element Plus, Pinia 3, Vite 7, Sass',
    image: '/tapsphere.jpg',
    github: 'https://github.com/Bergin-Ye/Tapsphere',
  },
  {
    name: 'SpaceY 船票定制',
    meta: '创意视觉作品',
    tags: ['Vue 3', 'GSAP', 'OGL', 'Tailwind CSS'],
    description: '以太空旅行为主题的创意交互网站，集成 GSAP 滚动动画、OGL WebGL 银河系 3D 渲染与 Motion Vue 过渡效果。通过自定义滚动进度控制实现视差变换，打造沉浸式的火箭发射全流程动画体验。',
    role: '前端开发',
    tech: 'Vue 3.5, GSAP 3.15, OGL, Motion Vue, Tailwind CSS 4, @vueuse/core',
    image: '/spacey.jpg',
    github: 'https://github.com/Bergin-Ye/SpaceY',
  },
  {
    name: 'B 站美团改造',
    meta: 'Vue3 语法实战',
    tags: ['Vue 3', 'Vant', 'Mock.js', '移动端'],
    description: '将原 Vue2 美团移动端项目全面重构为 Vue3 Composition API 语法，采用 Vant 组件库还原美团核心交互界面，集成 Mock.js 模拟后端数据，配合 rem/vw 双重适配方案确保多端显示一致性。',
    role: '独立开发',
    tech: 'Vue 3.5, Vant 4.9, Pinia 3, Axios, Mock.js, Less, PostCSS',
    image: '/美团.jpg',
    github: 'https://github.com/Bergin-Ye/meituan-mobile',
  },
]

const currentIndex = ref(0)
const currentProject = computed(() => projects[currentIndex.value])

function scrollToTop() {
  nextTick(() => {
    if (imageArea.value) imageArea.value.scrollTop = 0
  })
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
    scrollToTop()
  }
}

function next() {
  if (currentIndex.value < projects.length - 1) {
    currentIndex.value++
    scrollToTop()
  }
}
</script>

<style scoped>
.portfolio-viewer {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: var(--font-pixel);
}

.menu-bar {
  background: var(--xp-menu-bg);
  padding: 3px 8px;
  border-bottom: 1px solid var(--xp-border);
  font-size: 11px;
  display: flex;
  gap: 14px;
}

.viewer-body {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.image-area {
  flex: 1;
  background: #2a2a3e;
  overflow-y: auto;
  padding: 12px;
}

.image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.project-img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 4px;
}

.info-panel {
  width: 240px;
  background: var(--xp-menu-bg);
  overflow-y: auto;
  border-left: 1px solid var(--xp-border);
}

.project-name {
  font-size: 14px;
  font-weight: bold;
  color: var(--xp-link);
  padding: 12px 12px 4px;
}

.project-meta {
  font-size: 10px;
  color: #888;
  padding: 0 12px 8px;
  border-bottom: 1px solid #ddd;
}

.project-tags {
  padding: 8px 12px;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  border-bottom: 1px solid #ddd;
}

.tag {
  background: var(--xp-link);
  color: white;
  padding: 2px 6px;
  font-size: 9px;
  border-radius: 2px;
}

.project-desc {
  font-family: var(--font-body);
  font-size: 14px;
  color: #333;
  padding: 12px;
  line-height: 1.5;
  border-bottom: 1px solid #ddd;
}

.project-details {
  font-family: var(--font-body);
  font-size: 13px;
  color: #555;
  padding: 12px;
  line-height: 1.8;
}

.github-link {
  display: block;
  margin: 0 12px 12px;
  padding: 8px 12px;
  background: #24292e;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 11px;
  font-family: var(--font-pixel);
  border-radius: 4px;
  transition: background 0.2s;
}

.github-link:hover {
  background: #444d56;
}

.nav-buttons {
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ddd;
  font-size: 10px;
}

.nav-buttons button {
  background: var(--xp-menu-bg);
  border: 1px solid var(--xp-border);
  padding: 3px 10px;
  font-size: 10px;
  font-family: var(--font-pixel);
  cursor: pointer;
  border-radius: 2px;
}

.nav-buttons button:disabled {
  opacity: 0.4;
  cursor: default;
}

.status-bar {
  background: var(--xp-menu-bg);
  border-top: 1px solid var(--xp-border);
  padding: 3px 8px;
  font-size: 10px;
  color: #666;
  display: flex;
  justify-content: space-between;
}
</style>
