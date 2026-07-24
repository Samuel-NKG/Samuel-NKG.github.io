document.addEventListener('DOMContentLoaded', function () {
  // 只在首页执行
  if (!document.body.classList.contains('index') &&
      location.pathname !== '/' &&
      location.pathname !== '/index.html') {
    return;
  }

  // 初始页淡出
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

  const text1 = "Hi, I'm Samuel";
  const text2 = "Current Research";

  // 创建 Welcome 区域
  var welcome = document.createElement('div');
  welcome.id = 'welcome-section';
  welcome.innerHTML = `
    <div class="welcome-content">
      <div class="welcome-left">
        <div class="welcome-inner">
          <span id="welcome-typed"></span><span id="welcome-cursor">|</span>
        </div>
        <div class="intro-text">
          Welcome to my personal homepage. I am Xinyang Shen (Samuel), a junior undergraduate in Software Engineering at Xidian University. My research interests are rooted in Computer Vision, with active involvement in projects spanning generative video models, few-shot learning, and advanced vision architectures. I am highly receptive to academic discussions and research collaborations. Should our interests align, please feel free to contact me via the information on the right.
        </div>
      </div>

      <div class="welcome-links">
        <a href="/cv.pdf" target="_blank" class="link-item">
          <svg class="link-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/></svg>
          CV
        </a>
        <a href="https://www.linkedin.com/in/xinyang-shen-857627414/" target="_blank" class="link-item">
          <svg class="link-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11 8H6v7h2v-7zm-1-2.2c.7 0 1.2-.5 1.2-1.2S7.7 6.4 7 6.4 5.8 6.9 5.8 7.6s.5 1.2 1.2 1.2zM18 15.5c0-2.1-1.2-3.1-2.8-3.1-1.1 0-1.7.6-2.1 1.1V12h-2v7h2v-3.8c0-1 .4-1.8 1.4-1.8 1 0 1.5.7 1.5 1.8V19h2v-3.5z"/></svg>
          LinkedIn
        </a>
        <a href="https://github.com/Samuel-NKG" target="_blank" class="link-item">
          <svg class="link-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.8c.85.004 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
          GitHub
        </a>
        <a href="https://orcid.org/0009-0005-2596-2438" target="_blank" class="link-item">
          <svg class="link-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5h-2v-9h2v9zm1.5-11c-.83 0-1.5-.67-1.5-1.5S11.17 3.5 12 3.5s1.5.67 1.5 1.5S12.83 6.5 12 6.5zm5.5 11h-2v-4.5c0-1.1-.4-1.8-1.4-1.8-1 0-1.5.7-1.5 1.8V17.5h-2v-9h2v1.1c.5-.8 1.3-1.3 2.4-1.3 1.8 0 3 1.2 3 3.5v5.7z"/></svg>
          ORCID
        </a>
      </div>
    </div>
  `;

  // 加长滚动距离（两个阶段）
  var spacer = document.createElement('div');
  spacer.id = 'welcome-spacer';
  spacer.style.height = '420vh';

  var content = document.getElementById('content-inner') || document.querySelector('.layout');
  if (content) {
    content.insertBefore(welcome, content.firstChild);
    content.insertBefore(spacer, welcome.nextSibling);
  }

  const typedEl = document.getElementById('welcome-typed');
  const cursorEl = document.getElementById('welcome-cursor');
  if (!typedEl) return;

  function updateTextByScroll() {
    const spacerEl = document.getElementById('welcome-spacer');
    if (!spacerEl) return;

    const spacerRect = spacerEl.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let progress = 0;
    if (spacerRect.top < windowHeight) {
      const scrolled = windowHeight - spacerRect.top;
      const total = spacerRect.height * 0.85;
      progress = Math.min(1, Math.max(0, scrolled / total));
    }

    // 阶段划分
    // 0.00 - 0.28 : 打出 Hi, I'm Samuel
    // 0.28 - 0.42 : 显示介绍 + 链接
    // 0.42 - 0.55 : 介绍和链接消失，标题消失
    // 0.55 - 0.85 : 打出 Current Research

    const intro = document.querySelector('.intro-text');
    const links = document.querySelector('.welcome-links');

        if (progress < 0.28) {
      // 阶段1：打出 Hi, I'm Samuel
      const p = progress / 0.28;
      const charCount = Math.floor(p * text1.length);
      typedEl.textContent = text1.substring(0, charCount);
      cursorEl.style.opacity = charCount >= text1.length ? '0' : '1';
      typedEl.style.opacity = '1';

      if (intro) { intro.style.opacity = '0'; intro.style.transform = 'translateY(16px)'; }
      if (links) { links.style.opacity = '0'; links.style.transform = 'translateY(16px)'; }

    } else if (progress < 0.42) {
      // 阶段2：完整显示 + 介绍和链接上浮
      typedEl.textContent = text1;
      cursorEl.style.opacity = '0';
      typedEl.style.opacity = '1';

      if (intro) { intro.style.opacity = '1'; intro.style.transform = 'translateY(0)'; }
      if (links) { links.style.opacity = '1'; links.style.transform = 'translateY(0)'; }

    } else if (progress < 0.55) {
      // 阶段3：介绍和链接消失 + 标题打字机反向删除
      const p = (progress - 0.42) / 0.13;
      const remain = Math.floor((1 - p) * text1.length);
      typedEl.textContent = text1.substring(0, Math.max(0, remain));
      cursorEl.style.opacity = remain > 0 ? '1' : '0';
      typedEl.style.opacity = '1';

      if (intro) { intro.style.opacity = '0'; intro.style.transform = 'translateY(-20px)'; }
      if (links) { links.style.opacity = '0'; links.style.transform = 'translateY(-20px)'; }

    } else {
      // 阶段4：打出 Current Research
      typedEl.style.opacity = '1';
      const p = (progress - 0.55) / 0.30;
      const charCount = Math.floor(Math.min(1, p) * text2.length);
      typedEl.textContent = text2.substring(0, charCount);
      cursorEl.style.opacity = charCount >= text2.length ? '0' : '1';

      if (intro) { intro.style.opacity = '0'; intro.style.transform = 'translateY(-20px)'; }
      if (links) { links.style.opacity = '0'; links.style.transform = 'translateY(-20px)'; }
    }

  window.addEventListener('scroll', updateTextByScroll, { passive: true });
  updateTextByScroll();
});