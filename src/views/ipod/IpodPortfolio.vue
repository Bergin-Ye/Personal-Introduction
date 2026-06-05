<template>
  <div class="ipod-portfolio">
    <div v-if="!selected" class="list-view">
      <div class="mode-tabs">
        <div class="mode-tab" :class="{ active: mode === 'self' }" @click="mode = 'self'">✍️ 自研</div>
        <div class="mode-tab" :class="{ active: mode === 'vibe' }" @click="mode = 'vibe'">⚡ Vibe</div>
      </div>
      <div class="list-body">
        <div
          v-for="(item, i) in currentList"
          :key="item.name"
          class="list-item"
          :class="{ highlight: highlightIndex === i }"
          @click="highlightIndex = i; selectProject(item)"
        >
          <span class="item-icon">{{ item.icon }}</span>
          <div class="item-info">
            <div class="item-name">{{ item.name }}</div>
            <div class="item-meta">{{ item.meta }}</div>
          </div>
          <span class="item-arrow">›</span>
        </div>
      </div>
    </div>

    <div v-else class="detail-view">
      <div class="detail-header" @click="selected = null">
        <span class="back">‹</span>
        <span>返回</span>
        <span class="detail-title">{{ selected.name }}</span>
      </div>
      <div class="detail-body">
        <img :src="selected.image" :alt="selected.name" class="detail-img" />
        <div class="detail-info">
          <div class="detail-name">{{ selected.name }}</div>
          <div class="detail-meta">{{ selected.meta }} · {{ selected.role }}</div>
          <div class="detail-tags">
            <span v-for="tag in selected.tags" :key="tag">{{ tag }}</span>
          </div>
          <div class="detail-desc">{{ selected.description }}</div>
          <div class="detail-tech"><strong>技术栈：</strong>{{ selected.tech }}</div>
          <a :href="selected.github" target="_blank" class="github-btn">🐙 查看 GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, watch } from 'vue'

const mode = ref('self')
const selected = ref(null)
const highlightIndex = ref(0)

const wheelAction = inject('wheelAction')

watch(wheelAction, (action) => {
  if (!action) return
  if (action.type === 'prev') {
    if (selected.value) {
      selected.value = null
    } else if (highlightIndex.value > 0) {
      highlightIndex.value--
    }
  } else if (action.type === 'next') {
    if (!selected.value && highlightIndex.value < currentList.value.length - 1) {
      highlightIndex.value++
    }
  } else if (action.type === 'select') {
    if (!selected.value) {
      selectProject(currentList.value[highlightIndex.value])
    }
  } else if (action.type === 'scroll') {
    if (selected.value) {
      const el = document.querySelector('.view-content')
      if (el) el.scrollTop += action.amount
    } else {
      if (action.amount < 0 && highlightIndex.value > 0) {
        highlightIndex.value--
      } else if (action.amount > 0 && highlightIndex.value < currentList.value.length - 1) {
        highlightIndex.value++
      }
    }
  }
})

const selfProjects = [
  { icon: '🚀', name: 'SpaceY 船票定制', meta: '创意视觉作品', tags: ['Vue 3', 'GSAP', 'OGL', 'Tailwind CSS'], description: '以太空旅行为主题的创意交互网站，集成 GSAP 滚动动画、OGL WebGL 银河系 3D 渲染与 Motion Vue 过渡效果。', role: '前端开发', tech: 'Vue 3.5, GSAP 3.15, OGL, Motion Vue, Tailwind CSS 4', image: '/spacey.jpg', github: 'https://github.com/Bergin-Ye/SpaceY' },
  { icon: '📱', name: 'TapSphere', meta: 'NFC 卡片定制系统', tags: ['Vue 3', 'Three.js', 'Element Plus', 'Sass'], description: '基于 Three.js 的 3D 交互式 NFC 卡片定制平台，用户可实时预览卡片的 3D 渲染效果。', role: '前端开发', tech: 'Vue 3.5, Three.js 0.148, Element Plus, Pinia 3', image: '/tapsphere.jpg', github: 'https://github.com/Bergin-Ye/Tapsphere' },
  { icon: '🧠', name: 'AI 心理健康助手', meta: '前后端完整项目', tags: ['Vue 3', 'Element Plus', 'ECharts', 'SSE'], description: '全栈心理健康平台，用户可通过 SSE 流式对话与 AI 进行实时心理咨询。', role: '前端开发', tech: 'Vue 3.5, Element Plus, ECharts 6, Axios, SSE', image: '/心理健康.jpg', github: 'https://github.com/Bergin-Ye/ai-' },
  { icon: '💡', name: 'FlowMind', meta: '智能思绪整理平台', tags: ['Vue 3', 'Pinia', 'DeepSeek API'], description: 'AI 驱动的思维整理工具，通过 DeepSeek API 智能归类、提炼要点。', role: '全栈开发', tech: 'Vue 3.5, Pinia 3, DeepSeek API, @iconify/vue', image: '/flowmind.jpg', github: 'https://github.com/Bergin-Ye/flowmind' },
  { icon: '🛒', name: 'B 站美团改造', meta: 'Vue3 语法实战', tags: ['Vue 3', 'Vant', 'Mock.js'], description: '将 Vue2 美团项目全面重构为 Vue3 Composition API，采用 Vant 组件库。', role: '独立开发', tech: 'Vue 3.5, Vant 4.9, Pinia 3, Mock.js, Less', image: '/美团.jpg', github: 'https://github.com/Bergin-Ye/meituan-mobile' },
]

const vibeProjects = [
  { icon: '🎮', name: '可玩广告工作室', meta: '互动广告生成器', tags: ['Vue 3', 'Phaser 3', 'Vite'], description: '在线可玩广告制作工具，内置 3 款游戏模板，支持自定义素材上传与一键导出。', role: 'Vibe Coding', tech: 'Vue 3.5, Phaser 3, JSZip, FileSaver', image: '/可玩广.jpg', github: 'https://github.com/Bergin-Ye/playable-ad-studio' },
  { icon: '🦆', name: 'Duck Quiz', meta: '八股文面试刷题', tags: ['Vue 3', 'uni-app', 'SCSS'], description: '面向前端求职者的面试刷题应用，支持 H5、微信小程序等多端运行。', role: 'Vibe Coding', tech: 'Vue 3, uni-app, Vite, SCSS', image: '/duckquiz.jpg', github: 'https://github.com/Bergin-Ye/Duck-Quiz' },
]

const currentList = computed(() => mode.value === 'self' ? selfProjects : vibeProjects)

function selectProject(item) {
  selected.value = item
}
</script>

<style scoped>
.ipod-portfolio { height: 100%; display: flex; flex-direction: column; }

.mode-tabs {
  display: flex; background: #c8c8c0; border-bottom: 1px solid #aaa; flex-shrink: 0;
}
.mode-tab {
  flex: 1; text-align: center; padding: 3px 0; font-size: 9px; cursor: pointer; color: #666;
  font-family: var(--font-pixel);
}
.mode-tab.active {
  background: linear-gradient(to bottom, #4a7abf, #3a6aad); color: white; font-weight: bold;
}

.list-view { display: flex; flex-direction: column; }
.list-body { background: linear-gradient(to bottom, #e8e8f0, #d8d8e0); }

.list-item {
  display: flex; align-items: center; padding: 7px 10px;
  border-bottom: 1px solid #c8c8c8; cursor: pointer; gap: 8px;
}
.list-item:active { background: linear-gradient(to bottom, #4a7abf, #3a6aad); color: white; }
.list-item.highlight { background: linear-gradient(to bottom, #4a7abf, #3a6aad); color: white; }
.item-icon { font-size: 14px; }
.item-info { flex: 1; min-width: 0; }
.item-name { font-size: 11px; font-weight: bold; font-family: var(--font-pixel); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.item-meta { font-size: 8px; opacity: 0.7; margin-top: 1px; }
.item-arrow { font-size: 14px; opacity: 0.5; }

.detail-view { display: flex; flex-direction: column; }
.detail-header {
  display: flex; align-items: center; gap: 4px; padding: 5px 10px;
  background: linear-gradient(to bottom, #4a6fa5, #3a5f95);
  color: white; font-family: var(--font-pixel); font-size: 11px; cursor: pointer; flex-shrink: 0;
}
.back { font-size: 16px; }
.detail-title { margin-left: auto; opacity: 0.8; font-size: 10px; }

.detail-body { background: #fff; }
.detail-img { width: 100%; height: auto; display: block; border-bottom: 1px solid #eee; }
.detail-info { padding: 8px 10px; }
.detail-name { font-size: 13px; font-weight: bold; color: #2455a8; margin-bottom: 2px; font-family: var(--font-pixel); }
.detail-meta { font-size: 9px; color: #888; margin-bottom: 5px; }
.detail-tags { display: flex; gap: 3px; flex-wrap: wrap; margin-bottom: 5px; }
.detail-tags span { background: #2455a8; color: white; font-size: 8px; padding: 1px 5px; border-radius: 2px; }
.detail-desc { font-size: 10px; color: #444; line-height: 1.5; margin-bottom: 5px; font-family: var(--font-body); }
.detail-tech { font-size: 9px; color: #666; line-height: 1.5; margin-bottom: 6px; font-family: var(--font-body); }
.detail-tech strong { color: #333; }
.github-btn {
  display: block; text-align: center; background: #24292e; color: #fff;
  font-size: 9px; padding: 4px 8px; border-radius: 3px; text-decoration: none;
  font-family: var(--font-pixel);
}
</style>
