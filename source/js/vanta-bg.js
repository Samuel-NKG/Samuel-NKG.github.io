document.addEventListener('DOMContentLoaded', function () {
  // 只在首页启用
  if (!document.body.classList.contains('index') && 
      location.pathname !== '/' && 
      location.pathname !== '/index.html') {
    return;
  }

  // 创建全屏背景容器
  var bg = document.createElement('div');
  bg.id = 'vanta-bg';
  bg.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  `;
  document.body.prepend(bg);

  // 启动 Vanta NET
  if (window.VANTA) {
    VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xaaaaaa,        // 更亮的灰色
      backgroundColor: 0x000000, // 纯黑背景
      points: 12.00,
      maxDistance: 22.00,
      spacing: 18.00
    });
  }
});