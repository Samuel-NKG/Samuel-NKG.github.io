document.addEventListener('DOMContentLoaded', function () {
  // 只在首页执行
  if (!document.body.classList.contains('index') &&
      location.pathname !== '/' &&
      location.pathname !== '/index.html') {
    return;
  }

  // ========== 在这里插入「初始页淡出」代码 ==========
  var header = document.getElementById('page-header');
  if (header) {
    header.style.transition = 'opacity 0.1s linear';
    
    function fadeHeader() {
      var rect = header.getBoundingClientRect();
      var windowHeight = window.innerHeight;
      
      var progress = 0;
      if (rect.bottom < windowHeight) {
        progress = 1 - (rect.bottom / windowHeight);
      }
      progress = Math.min(1, Math.max(0, progress));
      
      header.style.opacity = 1 - progress;
    }
    
    window.addEventListener('scroll', fadeHeader, { passive: true });
    fadeHeader();
  }
  // ========== 淡出代码结束 ==========

  const fullText = 'Welcome To My Homepage';

  // 创建 Welcome 区域（sticky）
  var welcome = document.createElement('div');
  welcome.id = 'welcome-section';
  welcome.innerHTML = `
    <div class="welcome-inner">
      <span id="welcome-typed"></span><span id="welcome-cursor">|</span>
    </div>
  `;
  // ... 后面保持原来的代码不变
  // 拉长滚动距离的空白区域
  var spacer = document.createElement('div');
  spacer.id = 'welcome-spacer';
  spacer.style.height = '140vh';

  var content = document.getElementById('content-inner') || document.querySelector('.layout');
  if (content) {
    content.insertBefore(welcome, content.firstChild);
    content.insertBefore(spacer, welcome.nextSibling);
  }

  // 先把文章区域藏起来
  var posts = document.getElementById('recent-posts') || document.querySelector('.recent-posts');
  if (posts) {
    posts.style.opacity = '0';
    posts.style.pointerEvents = 'none';
    posts.style.transition = 'opacity 0.6s ease';
  }

  const typedEl = document.getElementById('welcome-typed');
  const cursorEl = document.getElementById('welcome-cursor');
  if (!typedEl) return;

  let finished = false;

  function updateTextByScroll() {
    const spacerEl = document.getElementById('welcome-spacer');
    if (!spacerEl) return;

    const spacerRect = spacerEl.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let progress = 0;
    if (spacerRect.top < windowHeight) {
      const scrolled = windowHeight - spacerRect.top;
      const total = spacerRect.height + windowHeight * 0.2;
      progress = Math.min(1, Math.max(0, scrolled / total));
    }

    const charCount = Math.floor(progress * fullText.length);
    typedEl.textContent = fullText.substring(0, charCount);
    cursorEl.style.opacity = charCount >= fullText.length ? '0' : '1';

    // 全部打完后再显示 Hello World 卡片
if (charCount >= fullText.length && !finished) {
  finished = true;
  if (posts) {
    posts.style.opacity = '1';
    posts.style.pointerEvents = 'auto';
  }
}
  }

  window.addEventListener('scroll', updateTextByScroll, { passive: true });
  updateTextByScroll();
});