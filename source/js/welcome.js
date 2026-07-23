document.addEventListener('DOMContentLoaded', function () {
  // 只在首页执行
  if (!document.body.classList.contains('index') && 
      location.pathname !== '/' && 
      location.pathname !== '/index.html') {
    return;
  }

  const fullText = 'Welcome To My Homepage';

  // 创建 Welcome 全屏区域
  var welcome = document.createElement('div');
  welcome.id = 'welcome-section';
  welcome.innerHTML = `
    <div class="welcome-inner">
      <span id="welcome-typed"></span><span id="welcome-cursor">|</span>
    </div>
  `;

  // 插入到内容区域最前面
  var content = document.getElementById('content-inner') || document.querySelector('.layout');
  if (content) {
    content.insertBefore(welcome, content.firstChild);
  }

  const typedEl = document.getElementById('welcome-typed');
  const cursorEl = document.getElementById('welcome-cursor');
  if (!typedEl) return;

  // 滚动驱动打字
  function updateTextByScroll() {
    const section = document.getElementById('welcome-section');
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 计算当前滚动进度（0 ~ 1）
    // 当 section 顶部到达视口顶部时开始，底部离开时结束
    let progress = 0;

    if (rect.top <= 0) {
      // section 已经向上滚出一部分
      progress = Math.min(1, Math.abs(rect.top) / (rect.height * 0.6));
    } else if (rect.top < windowHeight) {
      // section 正在进入视口
      progress = 0;
    }

    // 根据进度决定显示多少个字符
    const charCount = Math.floor(progress * fullText.length);
    typedEl.textContent = fullText.substring(0, charCount);

    // 光标闪烁控制
    if (charCount >= fullText.length) {
      cursorEl.style.opacity = '0';
    } else {
      cursorEl.style.opacity = '1';
    }
  }

  // 监听滚动
  window.addEventListener('scroll', updateTextByScroll, { passive: true });
  // 初始执行一次
  updateTextByScroll();
});