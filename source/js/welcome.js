document.addEventListener('DOMContentLoaded', function () {
  if (!document.body.classList.contains('index') &&
      location.pathname !== '/' &&
      location.pathname !== '/index.html') {
    return;
  }

  var header = document.getElementById('page-header');
  if (header) {
    header.style.pointerEvents = 'none';
    function fadeHeader() {
      var p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.85)));
      header.style.opacity = String(1 - p);
      header.style.zIndex = p >= 0.98 ? '0' : '20';
    }
    window.addEventListener('scroll', fadeHeader, { passive: true });
    fadeHeader();
  }

  var root = document.createElement('div');
  root.id = 'home-pages';
  root.innerHTML = `
    <section class="home-page" id="page-intro" data-page="0">
      <div class="page-inner">
        <div class="welcome-content">
          <div class="welcome-left">
            <div class="welcome-inner">
              <span class="typed" data-text="Hi, I'm Samuel"></span><span class="cursor">|</span>
            </div>
            <div class="intro-text">
              <p>Welcome to my personal homepage. My name is Xinyang Shen (Samuel), an undergraduate student in Software Engineering at Xidian University. My research interests are rooted in Computer Vision, with active involvement in projects spanning generative video models, few-shot learning, and advanced vision architectures.</p>
              <p>This website is built with Hexo and maintained as a living record of my academic and personal journey. It currently includes sections on current research, publications, awards and honors, finished projects, and personal interests, offering a concise overview of both my scholarly work and the activities that shape me beyond the lab.</p>
              <p>A more formal, academically oriented version of the site is planned for development before October 2026. In the meantime, content will be updated irregularly as new projects, papers, and experiences take shape.</p>
              <p>Thank you for visiting. I am highly receptive to academic discussions and research collaborations. Should our interests align, please feel free to contact me via the information on the right.</p>
            </div>
          </div>
          <div class="welcome-links">
            <a href="/cv.pdf" target="_blank" class="link-item">CV</a>
            <a href="https://www.linkedin.com/in/xinyang-shen-857627414/" target="_blank" class="link-item">LinkedIn</a>
            <a href="https://github.com/Samuel-NKG" target="_blank" class="link-item">GitHub</a>
            <a href="https://orcid.org/0009-0005-2596-2438" target="_blank" class="link-item">ORCID</a>
          </div>
        </div>
      </div>
    </section>

    <section class="home-page" id="page-research" data-page="1">
      <div class="page-inner">
        <div class="page-title"><span class="typed" data-text="Current Research"></span><span class="cursor">|</span></div>
        <div class="research-card page-card" id="research-card">
          <div class="research-left">
            <div class="research-btn active" data-index="0"><span class="btn-plus">+</span><span class="btn-dot"></span><span class="btn-text">Few-Shot Learning</span></div>
            <div class="research-btn" data-index="1"><span class="btn-plus">+</span><span class="btn-dot"></span><span class="btn-text">Satellite Video Tracking</span></div>
          </div>
          <div class="research-right">
            <div class="research-panel active" data-index="0">
              <h3>Few-Shot Learning</h3>
              <p>Few-shot learning is a machine learning paradigm that enables models to generalize effectively from only a small number of labeled examples per class.</p>
              <h3>My Research</h3>
              <p>Building upon these foundations, a notable challenge emerges when adapting large-scale vision-language models such as CLIP to few-shot regimes.</p>
            </div>
            <div class="research-panel" data-index="1">
              <h3>Satellite Video Tracking</h3>
              <p>Satellite video tracking continuously estimates the state of moving targets from overhead satellite sequences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="home-page" id="page-pub" data-page="2">
      <div class="page-inner">
        <div class="page-title"><span class="typed" data-text="Publication"></span><span class="cursor">|</span></div>
        <div class="pub-section page-card" id="pub-section">
          <div class="pub-item"><div class="pub-index">01</div><div class="pub-body"><div class="pub-title">Decoupling Confusion via Complementary Attention for Few-Shot Learning</div><div class="pub-meta">Pattern Recognition, Under Review</div></div></div>
          <div class="pub-item"><div class="pub-index">02</div><div class="pub-body"><div class="pub-title">SMTrack: Subspace Memory via Low-Rank Manifold Modeling</div><div class="pub-meta">ACMMM 2026</div></div></div>
        </div>
      </div>
    </section>

    <section class="home-page" id="page-awards" data-page="3">
      <div class="page-inner">
        <div class="page-title"><span class="typed" data-text="Awards and Honors"></span><span class="cursor">|</span></div>
        <div class="awards-section page-card" id="awards-section">
          <div class="awards-col"><div class="awards-col-title">Awards</div>
            <div class="award-item"><div class="award-year">2025</div><div class="award-content"><div class="award-title">15th National University Student E-commerce “ICE” Challenge</div><div class="award-detail">Silver Award</div></div></div>
            <div class="award-item"><div class="award-year">2024</div><div class="award-content"><div class="award-title">Chinese Collegiate Computing Competition</div><div class="award-detail">The Northwest Regional Competition · Second Prize</div></div></div>
          </div>
          <div class="awards-col"><div class="awards-col-title">Scholarships</div>
            <div class="award-item"><div class="award-year">2024–2025</div><div class="award-content"><div class="award-title">University-level Second-Class Scholarship</div></div></div>
            <div class="award-item"><div class="award-year">2023–2024</div><div class="award-content"><div class="award-title">University-level First-Class Scholarship</div></div></div>
          </div>
        </div>
      </div>
    </section>

    <section class="home-page" id="page-projects" data-page="4">
      <div class="page-inner">
        <div class="page-title"><span class="typed" data-text="Finished Projects"></span><span class="cursor">|</span></div>
        <div class="research-card page-card" id="projects-card">
          <div class="research-left">
            <div class="research-btn active" data-project="0"><span class="btn-plus">+</span><span class="btn-dot"></span><span class="btn-text">Forest</span></div>
            <div class="research-btn" data-project="1"><span class="btn-plus">+</span><span class="btn-dot"></span><span class="btn-text">Yolo</span></div>
          </div>
          <div class="research-right">
            <div class="research-panel active" data-project="0"><h3>Forest: Privacy-Preserving Blockchain for Data Collaboration</h3><p>Forest is a blockchain-based privacy-preserving platform for secure data collaboration.</p></div>
            <div class="research-panel" data-project="1"><h3>Qin Mountains Four Treasures Detection System Based on YOLO and ESP32-CAM</h3><p>An intelligent wildlife monitoring platform for the Qinling Mountains.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section class="home-page" id="page-interest" data-page="5">
      <div class="page-inner">
        <div class="page-title"><span class="typed" data-text="Personal Interest"></span><span class="cursor">|</span></div>
        <div class="interest-cards page-card" id="interest-cards">
          <div class="interest-card"><div class="interest-card-content"><h3>Sports</h3><p>Staying active through basketball, running and fitness.</p></div><div class="interest-card-bottom"><span class="interest-plus">+</span></div></div>
          <div class="interest-card"><div class="interest-card-content"><h3>Photography</h3><p>Capturing moments through the lens.</p></div><div class="interest-card-bottom"><span class="interest-plus">+</span></div></div>
          <div class="interest-card"><div class="interest-card-content"><h3>Games</h3><p>From competitive esports to immersive single-player worlds.</p></div><div class="interest-card-bottom"><span class="interest-plus">+</span></div></div>
        </div>
      </div>
    </section>

    <section class="home-page" id="page-data" data-page="6">
      <div class="page-inner">
        <div class="page-title"><span class="typed" data-text="Website Data"></span><span class="cursor">|</span></div>
        <div class="page-card" id="data-section">
          <div class="data-stats-row">
            <div class="data-stat-card"><div class="data-stat-label">Unique Visitors</div><div class="data-stat-value"><span id="busuanzi_value_site_uv">--</span></div></div>
            <div class="data-stat-card"><div class="data-stat-label">Total Visits</div><div class="data-stat-value"><span id="busuanzi_value_site_pv">--</span></div></div>
          </div>
          <div class="data-map-card">
            <div class="data-stat-label">Visitor Origins</div>
            <div class="data-map-frame" id="visitor-map"><div id="visitor-leaflet-map"></div></div>
          </div>
        </div>
      </div>
    </section>
  `;

  var content = document.getElementById('content-inner') || document.querySelector('.layout');
  if (content) content.insertBefore(root, content.firstChild);

  if (!document.getElementById('side-nav')) {
    var sideNav = document.createElement('div');
    sideNav.id = 'side-nav';
    sideNav.innerHTML = '<div class="side-nav-item" data-section="0" title="Intro"></div><div class="side-nav-item" data-section="1" title="Current Research"></div><div class="side-nav-item" data-section="2" title="Publication"></div><div class="side-nav-item" data-section="3" title="Awards and Honors"></div><div class="side-nav-item" data-section="4" title="Finished Projects"></div><div class="side-nav-item" data-section="5" title="Personal Interest"></div><div class="side-nav-item" data-section="6" title="Website Data"></div>';
    document.body.appendChild(sideNav);
  }

  document.querySelectorAll('#research-card .research-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var index = this.getAttribute('data-index');
      document.querySelectorAll('#research-card .research-btn').forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
      document.querySelectorAll('#research-card .research-panel').forEach(function (p) { p.classList.remove('active'); });
      document.querySelector('#research-card .research-panel[data-index="' + index + '"]').classList.add('active');
    });
  });
  document.querySelectorAll('#projects-card .research-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var index = this.getAttribute('data-project');
      document.querySelectorAll('#projects-card .research-btn').forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
      document.querySelectorAll('#projects-card .research-panel').forEach(function (p) { p.classList.remove('active'); });
      document.querySelector('#projects-card .research-panel[data-project="' + index + '"]').classList.add('active');
    });
  });

  function typeInto(el, text, cursor, done) {
    if (!el) { if (done) done(); return; }
    var i = 0; el.textContent = '';
    if (cursor) { cursor.classList.add('is-typing'); cursor.style.opacity = '1'; }
    function tick() {
      if (i <= text.length) { el.textContent = text.substring(0, i); i += 1; setTimeout(tick, 55); }
      else { if (cursor) { cursor.classList.remove('is-typing'); cursor.style.opacity = '0'; } if (done) done(); }
    }
    tick();
  }

  var pages = document.querySelectorAll('.home-page');
  var played = {};
  function playPage(page) {
    if (!page || played[page.id]) return;
    played[page.id] = true;
    page.classList.remove('is-leaving');
    var typed = page.querySelector('.typed');
    var cursor = page.querySelector('.cursor');
    var card = page.querySelector('.page-card');
    var intro = page.querySelector('.intro-text');
    var links = page.querySelector('.welcome-links');
    if (typed) {
      typeInto(typed, typed.getAttribute('data-text') || '', cursor, function () {
        if (intro) { intro.style.opacity = '1'; intro.style.transform = 'translateY(0)'; }
        if (links) { links.style.opacity = '1'; links.style.transform = 'translateY(0)'; }
        if (card) card.classList.add('show');
      });
    } else if (card) card.classList.add('show');
  }

  function updateByScroll() {
    var best = 0, bestRatio = 0;
    pages.forEach(function (page) {
      var inner = page.querySelector('.page-inner') || page;
      var rect = inner.getBoundingClientRect();
      var pageRect = page.getBoundingClientRect();
      var visible = Math.max(0, Math.min(pageRect.bottom, window.innerHeight) - Math.max(pageRect.top, 0));
      var ratio = visible / window.innerHeight;
      if (ratio > bestRatio) { bestRatio = ratio; best = parseInt(page.getAttribute('data-page'), 10); }
      if (!played[page.id] && rect.top < window.innerHeight * 0.55 && pageRect.bottom > window.innerHeight * 0.25) playPage(page);
      if (played[page.id]) {
        if (rect.bottom < window.innerHeight * 0.12) page.classList.add('is-leaving');
        else page.classList.remove('is-leaving');
      }
    });
    document.querySelectorAll('.side-nav-item').forEach(function (item, i) { item.classList.toggle('active', i === best); });
  }
  window.addEventListener('scroll', updateByScroll, { passive: true });
  setTimeout(updateByScroll, 300);
  document.querySelectorAll('.side-nav-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var target = document.querySelector('.home-page[data-page="' + this.getAttribute('data-section') + '"]');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  if (!document.getElementById('interest-overlay')) {
    var ov = document.createElement('div');
    ov.id = 'interest-overlay';
    document.body.appendChild(ov);
  }

  if (!document.getElementById('busuanzi-script')) {
    var bz = document.createElement('script');
    bz.id = 'busuanzi-script';
    bz.async = true;
    bz.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
    document.body.appendChild(bz);
  }

  var WORKER_URL = 'https://map.samuelnkg.com';
  var visitorMap = null;
  var markerLayer = null;

  function loadLeaflet(callback) {
    if (window.L) { callback(); return; }
    if (!document.getElementById('leaflet-css')) {
      var link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = callback;
    document.body.appendChild(script);
  }

  function initMap() {
    var el = document.getElementById('visitor-leaflet-map');
    if (!el || visitorMap) return;
    visitorMap = L.map(el, { zoomControl: true, attributionControl: true, worldCopyJump: true }).setView([20, 10], 2);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO', subdomains: 'abcd', maxZoom: 18
    }).addTo(visitorMap);
    markerLayer = L.layerGroup().addTo(visitorMap);
    setTimeout(function () { if (visitorMap) visitorMap.invalidateSize(); }, 600);
  }

  function renderMarkers(cities) {
    if (!visitorMap || !markerLayer) return;
    markerLayer.clearLayers();
    var groups = {};
    (cities || []).forEach(function (c) {
      var lat = Number(c.lat), lng = Number(c.lng);
      if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
      var key = (c.countryCode || c.country || '') + '|' + (c.city || 'Unknown');
      if (!groups[key]) groups[key] = { city: c.city || 'Unknown', country: c.country || c.countryCode || '', lat: lat, lng: lng, count: 0 };
      groups[key].count += 1;
    });
    var bounds = [];
    Object.keys(groups).forEach(function (key) {
      var g = groups[key];
      var radius = Math.min(18, 5 + Math.sqrt(g.count) * 3.2);
      var label = g.city + (g.country ? ', ' + g.country : '') + ' · ' + g.count + (g.count > 1 ? ' visits' : ' visit');
      markerLayer.addLayer(L.circleMarker([g.lat, g.lng], {
        radius: radius, color: '#ff6b2c', weight: 1.5, fillColor: '#ff6b2c', fillOpacity: 0.75
      }).bindPopup(label));
      bounds.push([g.lat, g.lng]);
    });
    if (bounds.length > 0) {
      try { visitorMap.fitBounds(bounds, { padding: [30, 30], maxZoom: 5 }); } catch (e) {}
    }
  }

  function loadCities() {
    fetch(WORKER_URL + '/cities').then(function (r) { return r.json(); }).then(function (data) {
      renderMarkers(data.cities || []);
    }).catch(function () {});
  }

  function reportVisit() {
    fetch(WORKER_URL + '/hit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{}'
    }).then(function () { setTimeout(loadCities, 800); }).catch(function () {});
  }

  loadLeaflet(function () {
    initMap();
    loadCities();
    reportVisit();
  });
});
