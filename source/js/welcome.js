document.addEventListener('DOMContentLoaded', function () {
  // 只在首页执行
  if (!document.body.classList.contains('index') && 
      location.pathname !== '/' && 
      location.pathname !== '/index.html') {
    return;
  }

  // 创建 Welcome 全屏区域
  var welcome = document.createElement('div');
  welcome.id = 'welcome-section';
  welcome.innerHTML = `
    <div class="welcome-inner">
      <span id="welcome-typed"></span>
    </div>
  `;

  // 插入到内容区域最前面
  var content = document.getElementById('content-inner') || document.querySelector('.layout');
  if (content) {
    content.insertBefore(welcome, content.firstChild);
  }

  var typedStarted = false;

  function startTyped() {
    if (typedStarted) return;
    typedStarted = true;

    if (window.Typed) {
      new Typed('#welcome-typed', {
        strings: ['Welcome To My Homepage'],
        typeSpeed: 140,
        startDelay: 300,
        showCursor: true,
        cursorChar: '|',
        loop: false
      });
    } else {
      document.getElementById('welcome-typed').textContent = 'Welcome';
    }
  }

  // 监听黑色头部是否完全离开视野
  var header = document.getElementById('page-header');
  if (header) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          startTyped();
        }
      });
    }, {
      threshold: 0,
      rootMargin: '0px'
    });

    observer.observe(header);
  } else {
    setTimeout(startTyped, 600);
  }
});