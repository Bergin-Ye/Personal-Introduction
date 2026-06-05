<template>
  <div class="ipod-about">
    <div class="profile">
      <div class="avatar"><img src="/头像.jpg" alt="头像" /></div>
      <div class="profile-info">
        <div class="name">叶柏君 / Bergin Ye</div>
        <div class="sub">广东财经大学 · 大三 · 21岁</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">💼 实习经历</div>
      <div class="item">
        <div class="item-title">售前实习生</div>
        <div class="item-time">双纽数字科技 · 2025.07-09</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">🚀 创业经历</div>
      <div class="item">
        <div class="item-title">产品研发 · 新媒体运营</div>
        <div class="item-desc">独立完成 3 款游戏角色设计，对接 3 家工厂，搭建双平台矩阵引流 500+</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">🎭 校园经历</div>
      <div class="item">
        <div class="item-title">校艺术团宣传部 · 副团长</div>
        <div class="item-time">2023.09 – 2025.06</div>
        <div class="item-desc">统筹 5 部门 32 人，主导成立大会全流程策划</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">🎓 教育背景</div>
      <div class="item">
        <div class="item-title">广东财经大学</div>
        <div class="item-desc">本科在读 · 大三</div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.ipod-about {
  padding: 10px;
  background: linear-gradient(to bottom, #e8e8f0, #d8d8e0);
}

.profile {
  display: flex; align-items: center; gap: 10px; margin-bottom: 10px;
}
.avatar {
  width: 48px; height: 48px; border-radius: 6px; overflow: hidden; flex-shrink: 0;
  border: 2px solid rgba(255,255,255,0.3);
}
.avatar img { width: 100%; height: 100%; object-fit: cover; }
.profile-info .name { font-size: 13px; font-weight: bold; color: #2455a8; font-family: var(--font-pixel); }
.profile-info .sub { font-size: 9px; color: #888; }

.section { margin-bottom: 8px; }
.section-title {
  font-size: 10px; font-weight: bold; color: #2455a8; font-family: var(--font-pixel);
  padding-bottom: 3px; border-bottom: 1px solid #ccc; margin-bottom: 4px;
}
.item {
  background: rgba(255,255,255,0.5); border-radius: 4px; padding: 6px 8px;
  margin-bottom: 4px; border-left: 3px solid #2455a8;
}
.item-title { font-size: 10px; font-weight: bold; color: #333; font-family: var(--font-pixel); }
.item-time { font-size: 8px; color: #888; margin-top: 1px; }
.item-desc { font-size: 9px; color: #555; line-height: 1.4; margin-top: 2px; font-family: var(--font-body); }
</style>
