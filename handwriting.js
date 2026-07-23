document.addEventListener('DOMContentLoaded', function () {
  const svg = document.getElementById('handwriting-title');
  if (!svg) return;

  const path = svg.querySelector('path');
  if (!path) return;

  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
  path.style.transition = 'none';

  // 强制重绘
  path.getBoundingClientRect();

  path.style.transition = 'stroke-dashoffset 3.8s ease-in-out';
  path.style.strokeDashoffset = '0';
});