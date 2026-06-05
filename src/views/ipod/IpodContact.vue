<template>
  <div class="ipod-contact">
    <div class="profile">
      <div class="avatar"><img src="/头像.jpg" alt="头像" /></div>
      <div class="profile-info">
        <div class="name">叶柏君 / BERGIN YE</div>
        <div class="status">● 可接受实习机会</div>
      </div>
    </div>

    <div class="section-title">联系方式</div>

    <div class="contact-item" @click="copy('3052937178@qq.com')">
      <span class="icon">✉️</span>
      <div><div class="label">邮箱</div><div class="value">3052937178@qq.com</div></div>
      <span class="action">复制</span>
    </div>

    <div class="contact-item" @click="copy('15919958627')">
      <span class="icon">💬</span>
      <div><div class="label">微信</div><div class="value">15919958627</div></div>
      <span class="action">复制</span>
    </div>

    <a class="contact-item" href="https://github.com/Bergin-Ye" target="_blank">
      <span class="icon">🐙</span>
      <div><div class="label">GitHub</div><div class="value">Bergin-Ye</div></div>
      <span class="action">打开</span>
    </a>

    <div class="contact-item" @click="copy('15919958627')">
      <span class="icon">📱</span>
      <div><div class="label">电话</div><div class="value">15919958627</div></div>
      <span class="action">复制</span>
    </div>

    <div class="tip">💡 优先通过电话或微信联系</div>
  </div>
</template>

<script setup>
function copy(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('已复制: ' + text)
  })
}
</script>

<style scoped>
.ipod-contact {
  padding: 10px;
  background: linear-gradient(to bottom, #e8e8f0, #d8d8e0);
}

.profile { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.avatar {
  width: 40px; height: 40px; border-radius: 6px; overflow: hidden; flex-shrink: 0;
}
.avatar img { width: 100%; height: 100%; object-fit: cover; }
.profile-info .name { font-size: 12px; font-weight: bold; color: #2455a8; font-family: var(--font-pixel); }
.profile-info .status {
  display: inline-block; font-size: 8px; background: #e8f5e9; color: #2e7d32;
  padding: 1px 6px; border-radius: 8px; margin-top: 2px;
}

.section-title {
  font-size: 10px; font-weight: bold; color: #2455a8; font-family: var(--font-pixel);
  padding-bottom: 3px; border-bottom: 1px solid #ccc; margin-bottom: 6px;
}

.contact-item {
  display: flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.6); border-radius: 4px;
  padding: 6px 8px; margin-bottom: 4px; cursor: pointer; text-decoration: none; color: inherit;
}
.contact-item:active { background: rgba(74,122,191,0.2); }
.contact-item .icon { font-size: 16px; }
.contact-item .label { font-size: 8px; color: #888; }
.contact-item .value { font-size: 10px; color: #2455a8; font-weight: bold; font-family: var(--font-pixel); }
.contact-item .action { margin-left: auto; font-size: 8px; color: #aaa; }

.tip {
  text-align: center; font-size: 9px; color: #888;
  margin-top: 8px; padding: 6px; background: rgba(255,255,255,0.3); border-radius: 4px;
}
</style>
