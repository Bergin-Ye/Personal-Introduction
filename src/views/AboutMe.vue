<template>
  <div class="about-me">
    <div class="address-bar">
      <span class="label">地址</span>
      <div class="address-input">📁 C:\Users\Bergin\关于我</div>
    </div>

    <div class="about-body">
      <div class="sidebar">
        <div class="avatar"><img src="/图片/头像.jpg" alt="头像" /></div>
        <div class="name">叶柏君</div>
        <div class="subtitle">BERGIN YE</div>

        <div class="info-section">
          <div class="info-item">📍 广东财经大学</div>
          <div class="info-item">🎓 大三 · 21岁</div>
          <div class="info-item">🌐 中文 / 英语</div>
        </div>

        <div class="nav-section">
          <div class="nav-item active">📝 个人简介</div>
          <div class="nav-item">🎓 教育背景</div>
          <div class="nav-item">💼 实习经历</div>
          <div class="nav-item">🚀 创业经历</div>
          <div class="nav-item">🎭 校园经历</div>
        </div>
      </div>

      <div class="content">
        <h1>Hi, 我是叶柏君 👋</h1>
        <p class="intro">
          广东财经大学大三学生，专注于前端开发与 AI 应用。
          热爱用代码创造有价值的数字产品，擅长 Vue 3 生态和 AI 工具集成。
        </p>

                <h2>🎓 教育背景</h2>
        <div class="education-card">
          <div class="edu-title">广东财经大学</div>
          <div class="edu-major">本科在读 · 大三</div>
        </div>

        <h2>💼 实习经历</h2>
        <div class="experience-card">
          <div class="exp-title">售前实习生</div>
          <div class="exp-company">双纽数字科技有限公司</div>
          <div class="exp-time">2025.07.13 - 2025.09.15</div>
        </div>

        <h2>🚀 创业经历</h2>
        <div class="experience-card">
          <div class="exp-title">产品研发 · 新媒体运营</div>
          <div class="exp-company">独立创业项目</div>
          <ul class="exp-list">
            <li>独立完成游戏角色设计与建模，输出 10+ 套完整设计方案</li>
            <li>对接 3 家生产工厂，全程跟进打样、改样与落地流程</li>
            <li>搭建抖音、小红书双平台宣传矩阵，累计引流 500+ 精准客户</li>
            <li>全权负责成本核算、库存管控与运营规划，跑通设计—生产—宣传—销售完整商业闭环</li>
          </ul>
        </div>

        <h2>🎭 校园经历</h2>
        <div class="experience-card">
          <div class="exp-title">校艺术团宣传策划部 · 副团长</div>
          <div class="exp-company">2023.09 – 2025.06</div>
          <ul class="exp-list">
            <li>独立统筹预算规划、场地布置、嘉宾邀约等 15+ 项活动流程，撰写完整执行方案</li>
            <li>统筹协调宣传、表演等 5 个部门共 32 名成员，推进跨部门高效协作</li>
            <li>主导艺术团成立大会全流程策划，协调超 100 名参演人员，保障活动圆满完成</li>
            <li>独立设计海报、H5 邀请函等宣传物料，负责嘉宾邀约与活动引流</li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-me {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: var(--font-pixel);
}

.address-bar {
  background: var(--xp-menu-bg);
  padding: 4px 8px;
  border-bottom: 1px solid var(--xp-border);
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
}

.label { color: #666; }

.address-input {
  flex: 1;
  background: #fff;
  border: 1px solid #ccc;
  padding: 2px 8px;
  font-size: 11px;
}

.about-body {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.sidebar {
  width: 180px;
  background: linear-gradient(to bottom, #6a9fd8, #4a7fbc);
  padding: 16px 12px;
  overflow-y: auto;
}

.avatar {
  width: 72px;
  height: 72px;
  margin: 0 auto 8px;
  border-radius: 8px;
  overflow: hidden;
  border: 3px solid rgba(255,255,255,0.3);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: white;
}

.subtitle {
  text-align: center;
  font-size: 10px;
  color: #cce0ff;
  margin-bottom: 16px;
}

.info-section {
  background: rgba(255,255,255,0.1);
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 16px;
}

.info-item {
  font-size: 10px;
  color: white;
  padding: 3px 0;
}

.nav-section {
  font-size: 10px;
}

.nav-item {
  padding: 5px 8px;
  color: #cce0ff;
  cursor: pointer;
  border-radius: 3px;
  margin-bottom: 2px;
}

.nav-item.active {
  background: rgba(255,255,255,0.15);
  color: white;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: #fff;
}

.content h1 {
  font-size: 20px;
  color: var(--xp-link);
  margin-bottom: 4px;
}

.content h2 {
  font-size: 14px;
  color: var(--xp-link);
  margin: 20px 0 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid #eee;
}

.intro {
  font-family: var(--font-body);
  font-size: 14px;
  color: #333;
  line-height: 1.8;
}

.experience-card, .education-card {
  padding: 12px;
  background: #f9f9f9;
  border-radius: 6px;
  border-left: 3px solid var(--xp-link);
}

.exp-title, .edu-title {
  font-size: 13px;
  font-weight: bold;
  color: #333;
}

.exp-company, .edu-major {
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--xp-link);
  margin-top: 2px;
}

.exp-time {
  font-family: var(--font-body);
  font-size: 12px;
  color: #888;
  margin-top: 4px;
}

.exp-list {
  font-family: var(--font-body);
  font-size: 13px;
  color: #555;
  line-height: 1.6;
  margin-top: 8px;
  padding-left: 16px;
}

.exp-list li {
  margin-bottom: 4px;
}
</style>
