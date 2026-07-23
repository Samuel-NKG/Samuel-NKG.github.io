document.addEventListener('DOMContentLoaded', function () {
  // 只在首页执行
  if (!document.body.classList.contains('index') && 
      location.pathname !== '/' && 
      location.pathname !== '/index.html') {
    return;
  }

  // 创建 Welcome 区域
  var welcome = document.createElement('div');
  welcome.id = 'welcome-section';
  welcome.innerHTML = `
    <div class="welcome-text">
      <span id="welcome-typed"></span>
    </div>
  `;

  // 样式
  welcome.style.cssText = `
    width: 100%;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 12%;
    background: #000;
    color: #fff;
    box-sizing: border-box;
  `;

  // 插入到内容区域最前面
  var content = document.getElementById('content-inner') || document.querySelector('.layout');
  if (content) {
    content.insertBefore(welcome, content.firstChild);
  }

  // 打字机效果（等滚动到这个区域时再触发）
  var typedStarted = false;

  function startTyped() {
    if (typedStarted) return;
    typedStarted = true;

    if (window.Typed) {
      new Typed('#welcome-typed', {
        strings: ['Welcome'],
        typeSpeed: 120,
        startDelay: 200,
        showCursor: true,
        cursorChar: '|',
        loop: false
      });
    } else {
      // 如果 Typed 还没加载，直接显示
      document.getElementById('welcome-typed').textContent = 'Welcome';
    }
  }

  // 监听滚动，当黑色头部滚出后启动
  var header = document.getElementById('page-header');
  if (header) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        // 当头部完全离开视野时触发
        if (!entry.isIntersecting) {
          startTyped();
        }
      });
    }, { threshold: 0 });

    observer.observe(header);
  } else {
    // 备用：直接启动
    setTimeout(startTyped, 800);
  }
});