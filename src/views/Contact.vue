<template>
  <div class="contact">
    <div class="menu-bar">
      <span>文件(F)</span>
      <span>编辑(E)</span>
      <span>查看(V)</span>
      <span>工具(T)</span>
      <span>帮助(H)</span>
    </div>

    <div class="contact-body">
      <div class="contact-list">
        <div class="search-box">🔍 查找联系人...</div>
        <div class="list-header">所有联系人 (1)</div>
        <div class="contact-item active">
          <div class="item-avatar"><img src="/图片/头像.jpg" alt="头像" /></div>
          <div>
            <div class="item-name">叶柏君</div>
            <div class="item-role">前端开发 · 大三</div>
          </div>
        </div>
      </div>

      <div class="contact-detail">
        <div class="detail-header">
          <div class="detail-avatar"><img src="/图片/头像.jpg" alt="头像" /></div>
          <div>
            <div class="detail-name">叶柏君 / BERGIN YE</div>
            <div class="detail-school">广东财经大学 · 大三</div>
            <div class="status-badge">● 可接受实习机会</div>
          </div>
        </div>

        <div class="contact-methods">
          <div class="section-title">联系方式</div>

          <div class="method-card" @click="copy('3052937178@qq.com')">
            <div class="method-icon">✉️</div>
            <div>
              <div class="method-label">邮箱</div>
              <div class="method-value">3052937178@qq.com</div>
            </div>
            <div class="method-action">点击复制</div>
          </div>

          <div class="method-card" @click="copy('15919958627')">
            <div class="method-icon">💬</div>
            <div>
              <div class="method-label">微信</div>
              <div class="method-value">15919958627</div>
            </div>
            <div class="method-action">点击复制</div>
          </div>

          <a class="method-card" href="https://github.com/Bergin-Ye" target="_blank">
            <div class="method-icon">🐙</div>
            <div>
              <div class="method-label">GitHub</div>
              <div class="method-value">github.com/Bergin-Ye</div>
            </div>
            <div class="method-action">打开链接</div>
          </a>

          <div class="method-card" @click="copy('15919958627')">
            <div class="method-icon">📱</div>
            <div>
              <div class="method-label">电话</div>
              <div class="method-value">15919958627</div>
            </div>
            <div class="method-action">点击复制</div>
          </div>
        </div>

        <div class="footer-note">
          💡 优先通过电话或微信联系
        </div>
      </div>
    </div>

    <div class="status-bar">
      <span>共 1 个联系人</span>
      <span>就绪</span>
    </div>
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
.contact {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: var(--font-pixel);
  background: #fff;
}

.menu-bar {
  background: var(--xp-menu-bg);
  padding: 3px 8px;
  border-bottom: 1px solid var(--xp-border);
  font-size: 11px;
  display: flex;
  gap: 14px;
}

.contact-body {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.contact-list {
  width: 200px;
  background: #fff;
  border-right: 1px solid var(--xp-border);
  overflow-y: auto;
}

.search-box {
  padding: 8px;
  border-bottom: 1px solid #ddd;
  font-size: 10px;
  color: #888;
}

.list-header {
  padding: 6px 10px;
  font-size: 10px;
  color: #888;
  background: #f5f5f5;
  border-bottom: 1px solid #eee;
}

.contact-item {
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.contact-item.active {
  background: #e8f0fe;
}

.item-avatar {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  overflow: hidden;
}

.item-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-name {
  font-size: 12px;
  font-weight: bold;
  color: #333;
}

.item-role {
  font-size: 10px;
  color: #888;
}

.contact-detail {
  flex: 1;
  overflow-y: auto;
}

.detail-header {
  padding: 20px;
  background: linear-gradient(to bottom, #f0f4ff, #fff);
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  gap: 16px;
}

.detail-avatar {
  width: 72px;
  height: 72px;
  border-radius: 8px;
  overflow: hidden;
}

.detail-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail-name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.detail-school {
  font-family: var(--font-body);
  font-size: 14px;
  color: #666;
  margin-top: 2px;
}

.status-badge {
  display: inline-block;
  margin-top: 6px;
  background: #e8f5e9;
  color: #2e7d32;
  padding: 2px 8px;
  font-size: 10px;
  border-radius: 10px;
}

.contact-methods {
  padding: 16px 20px;
}

.section-title {
  font-size: 12px;
  font-weight: bold;
  color: var(--xp-link);
  margin-bottom: 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid #eee;
}

.method-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.method-card:hover {
  background: #f9f9f9;
}

.method-icon {
  width: 32px;
  height: 32px;
  background: #f5f5f5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.method-label {
  font-size: 11px;
  color: #888;
}

.method-value {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--xp-link);
}

.method-action {
  margin-left: auto;
  font-size: 10px;
  color: #888;
}

.footer-note {
  margin: 12px 20px;
  padding: 10px;
  background: #f9f9f9;
  border-top: 1px solid #eee;
  font-size: 10px;
  color: #888;
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
