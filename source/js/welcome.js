document.addEventListener('DOMContentLoaded', function () {
  // 只在首页执行
  if (!document.body.classList.contains('index') && 
      location.pathname !== '/' && 
      location.pathname !== '/index.html') {
    return;
  }

  const fullText = 'Welcome To My Homepage';

  // 创建 Welcome 区域（sticky）
  var welcome = document.createElement('div');
  welcome.id = 'welcome-section';
  welcome.innerHTML = `
    <div class="welcome-inner">
      <span id="welcome-typed"></span><span id="welcome-cursor">|</span>
    </div>
  `;

  // 创建用于拉长滚动距离的空白区域
  var spacer = document.createElement('div');
  spacer.id = 'welcome-spacer';
  spacer.style.height = '120vh';   // 控制打字需要滚动的距离，可调整

  var content = document.getElementById('content-inner') || document.querySelector('.layout');
  if (content) {
    content.insertBefore(welcome, content.firstChild);
    content.insertBefore(spacer, welcome.nextSibling);
  }

  const typedEl = document.getElementById('welcome-typed');
  const cursorEl = document.getElementById('welcome-cursor');
  if (!typedEl) return;

  function updateTextByScroll() {
    const section = document.getElementById('welcome-section');
    const spacerEl = document.getElementById('welcome-spacer');
    if (!section || !spacerEl) return;

    const spacerRect = spacerEl.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 计算 spacer 被滚过的进度（0 ~ 1）
    let progress = 0;
    if (spacerRect.top < windowHeight) {
      const scrolled = windowHeight - spacerRect.top;
      const total = spacerRect.height + windowHeight * 0.3;
      progress = Math.min(1, Math.max(0, scrolled / total));
    }

    const charCount = Math.floor(progress * fullText.length);
    typedEl.textContent = fullText.substring(0, charCount);

    // 光标
    cursorEl.style.opacity = charCount >= fullText.length ? '0' : '1';
  }

  window.addEventListener('scroll', updateTextByScroll, { passive: true });
  updateTextByScroll();
});