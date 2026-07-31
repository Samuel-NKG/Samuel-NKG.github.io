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
      // 0 → 滚过约一屏时完全透明
      var p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.85)));
      header.style.opacity = String(1 - p);
      // 全透明后沉到下层，避免挡住后面
      header.style.zIndex = p >= 0.98 ? '0' : '20';
    }
    window.addEventListener('scroll', fadeHeader, { passive: true });
    fadeHeader();
  }

  var root = document.createElement('div');
  root.id = 'home-pages';
  root.innerHTML = `
    <!-- 1. Intro -->
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
              <svg class="link-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5h-2v-9h2v9zm1.5-11c-.83 0-1.5-.67-1.5-1.5S11.17 3.5 12 3.5s1.5.67 1.5 1.5S12.83 6.5 12 6.5zm5.5 11h-2v-9h2v1.1c.5-.8 1.3-1.3 2.4-1.3 1.8 0 3 1.2 3 3.5v5.7z"/></svg>
              ORCID
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Current Research -->
    <section class="home-page" id="page-research" data-page="1">
      <div class="page-inner">
        <div class="page-title">
          <span class="typed" data-text="Current Research"></span><span class="cursor">|</span>
        </div>
        <div class="research-card page-card" id="research-card">
          <div class="research-left">
            <div class="research-btn active" data-index="0">
              <span class="btn-plus">+</span><span class="btn-dot"></span>
              <span class="btn-text">Few-Shot Learning</span>
            </div>
            <div class="research-btn" data-index="1">
              <span class="btn-plus">+</span><span class="btn-dot"></span>
              <span class="btn-text">Satellite Video Tracking</span>
            </div>
          </div>
          <div class="research-right">
            <div class="research-panel active" data-index="0">
              <h3>Few-Shot Learning</h3>
              <p>Few-shot learning is a machine learning paradigm that enables models to generalize effectively from only a small number of labeled examples per class—typically one to a few dozen samples. Unlike conventional supervised learning, which depends on large annotated datasets, few-shot methods rapidly adapt to novel tasks through meta-learning.</p>
              <p>In a standard episode, a support set provides the limited examples for each class, while a query set is used for evaluation. Metric-based approaches, such as prototypical networks, embed samples into a feature space and classify by proximity to class prototypes. Optimization-based techniques, including MAML, learn an initialization that adapts quickly with minimal gradient updates.</p>
              <p>This capability proves especially valuable in data-scarce domains such as medical imaging, rare-species recognition, and personalized systems, where collecting extensive labels remains impractical.</p>
              <figure class="research-figure">
                <img src="/img/few-shot-overview.jpg" alt="Few-shot learning overview: support set, query set, and similarity-based prediction">
                <figcaption>Image adapted from common few-shot learning illustrations (e.g. support/query episode setup).</figcaption>
              </figure>
              <h3>My Research</h3>
              <p>Building upon these foundations, a notable challenge emerges when adapting large-scale vision-language models such as CLIP to few-shot regimes: the frequent entanglement of foreground objects with background context within the extracted visual features. Because pre-training texts commonly co-describe both the target category and its surrounding environment, the resulting representations mix the two signals, weakening precise visual–semantic alignment and causing attention to drift toward irrelevant regions.</p>
              <p>One effective direction is to explicitly decouple this confusion through complementary modeling. Hierarchical queries can progressively separate multi-level visual features into distinct foreground and background streams; background semantics can be dynamically retrieved from a language-space description pool to supply explicit supervisory signals; and mutual-exclusivity constraints can be imposed directly on the attention maps, encouraging spatial complementarity across layers. The resulting framework preserves the original cross-modal alignment of the pre-trained model while producing cleaner, more interpretable attention distributions and stronger few-shot generalization.</p>
            </div>
            <div class="research-panel" data-index="1">
              <h3>Satellite Video Tracking</h3>
              <p>Satellite video tracking is a specialized form of single-object tracking that continuously estimates the state of moving targets—such as vehicles, ships, or aircraft—from overhead satellite sequences after initialization in the first frame. Unlike conventional ground-level tracking, it operates under severe constraints: extremely small target sizes, weak texture and semantic cues, wide-area cluttered backgrounds, and frequent interference from similar objects.</p>
              <p>Sequence-generation trackers formulate localization as autoregressive sequential state prediction, providing a concise end-to-end pipeline. However, their performance still depends heavily on reliable online target representation during inference. Direct template refreshing or loose temporal aggregation readily incorporates noisy or contaminated observations, causing errors to accumulate and leading to persistent drift.</p>
              <p>One effective direction is to model historical target appearance as a compact low-rank manifold-structured subspace rather than storing raw template features. This representation preserves the underlying stable appearance structure while suppressing transient corruption. An anchor-guided memory read mechanism uses the fixed first-frame template as a reliable identity anchor to retrieve historical cues and enhance the dynamic template; a contamination-aware memory write strategy evaluates current observations before update, filtering ambiguous information. The resulting closed-loop framework maintains the original autoregressive decoding process while achieving more reliable long-term adaptation under challenging satellite conditions.</p>
              </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Publication -->
    <section class="home-page" id="page-pub" data-page="2">
      <div class="page-inner">
        <div class="page-title">
          <span class="typed" data-text="Publication"></span><span class="cursor">|</span>
        </div>
        <div class="pub-section page-card" id="pub-section">
          <div class="pub-item">
            <div class="pub-index">01</div>
            <div class="pub-body">
              <div class="pub-title">Decoupling Confusion via Complementary Attention for Few-Shot Learning</div>
              <div class="pub-meta">Pattern Recognition, Under Review</div>
            </div>
          </div>
          <div class="pub-item">
            <div class="pub-index">02</div>
            <div class="pub-body">
              <div class="pub-title">SMTrack: Subspace Memory via Low-Rank Manifold Modeling</div>
              <div class="pub-meta">ACMMM 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Awards and Honors -->
    <section class="home-page" id="page-awards" data-page="3">
      <div class="page-inner">
        <div class="page-title">
          <span class="typed" data-text="Awards and Honors"></span><span class="cursor">|</span>
        </div>
        <div class="awards-section page-card" id="awards-section">
          <div class="awards-col">
            <div class="awards-col-title">Awards</div>
            <div class="award-item">
              <div class="award-year">2025</div>
              <div class="award-content">
                <div class="award-title">15th National University Student E-commerce “ICE” Challenge</div>
                <div class="award-detail">Silver Award</div>
              </div>
            </div>
            <div class="award-item">
              <div class="award-year">2024</div>
              <div class="award-content">
                <div class="award-title">Chinese Collegiate Computing Competition</div>
                <div class="award-detail">The Northwest Regional Competition · Second Prize</div>
                <div class="award-title" style="margin-top: 1rem;">China International College Students’ Innovation Competition</div>
                <div class="award-detail">University-level Silver Award</div>
                <div class="award-title" style="margin-top: 1rem;">College Students’ Innovation and Entrepreneurship Training Program</div>
                <div class="award-detail">Provincial-level Silver Award</div>
              </div>
            </div>
          </div>
          <div class="awards-col">
            <div class="awards-col-title">Scholarships</div>
            <div class="award-item">
              <div class="award-year">2024–2025</div>
              <div class="award-content">
                <div class="award-title">University-level Second-Class Scholarship</div>
              </div>
            </div>
            <div class="award-item">
              <div class="award-year">2023–2024</div>
              <div class="award-content">
                <div class="award-title">University-level First-Class Scholarship</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Finished Projects -->
    <section class="home-page" id="page-projects" data-page="4">
      <div class="page-inner">
        <div class="page-title">
          <span class="typed" data-text="Finished Projects"></span><span class="cursor">|</span>
        </div>
        <div class="research-card page-card" id="projects-card">
          <div class="research-left">
            <div class="research-btn active" data-project="0">
              <span class="btn-plus">+</span><span class="btn-dot"></span>
              <span class="btn-text">Forest</span>
            </div>
            <div class="research-btn" data-project="1">
              <span class="btn-plus">+</span><span class="btn-dot"></span>
              <span class="btn-text">Yolo</span>
            </div>
          </div>
          <div class="research-right">
            <div class="research-panel active" data-project="0">
              <h3>Forest: Privacy-Preserving Blockchain for Data Collaboration</h3>
              <p>Forest is a blockchain-based privacy-preserving platform designed to enable secure, transparent, and efficient data collaboration while rigorously protecting data ownership and privacy. Developed by a team from Xidian University in response to a proposition from China Mobile Information Technology Co., Ltd., Forest addresses the fundamental challenges that hinder the circulation and utilization of data in the digital economy, particularly in the context of large-scale AI model training.</p>
              <p>In the era of big data and generative AI, data has become a strategic national and commercial asset. High-quality, diverse datasets are indispensable for training powerful foundation models. However, the vast majority of data remains underutilized—according to industry analyses, only approximately 0.5% of available data is actually analyzed and applied. Key obstacles include the ease of data replication, the difficulty of separating ownership from usage rights, opaque benefit distribution, insufficient privacy guarantees during transactions, and the inadequacy of traditional data-trading mechanisms for handling the massive, heterogeneous datasets required by modern AI systems. These barriers create data silos, raise compliance risks, and slow innovation across sectors such as healthcare, finance, intelligent manufacturing, and public services.</p>
              <p>Forest tackles these problems through an integrated technical architecture that combines blockchain with advanced privacy-enhancing technologies. At its core are three complementary techniques: Trusted Execution Environments (TEE) that provide hardware-level isolation for sensitive computations; Federated Learning that allows multiple parties to jointly train models without exchanging raw data; and Differential Privacy that injects carefully calibrated noise to prevent individual-level information leakage. Together, these technologies realize a “computation-to-data” paradigm in which data remains usable yet invisible to unauthorized parties.</p>
              <p>The platform offers three primary service modules. The Distributed Model Training Service enables organizations to collaboratively train machine-learning models across institutional boundaries while keeping original datasets local. The Privacy Computing Engine provides a secure environment for performing complex analytics and inference on encrypted or protected data. The Data Matching and Trading Service facilitates precise matching between data suppliers and demanders, supporting secure transactions with clear authorization, auditability, and automated enforcement via smart contracts. Identity authentication protocols, secure storage with ownership confirmation, and verifiable computation processes further ensure end-to-end trustworthiness.</p>
              <p>By embedding privacy and accountability into every stage of the data lifecycle—from access control and computation to result delivery—Forest transforms data from a high-risk liability into a controllable, high-value asset. It supports cross-domain collaboration while aligning with national policies on data-element markets and privacy protection. Ultimately, Forest aims to become a foundational infrastructure for trustworthy data circulation, unlocking the full potential of data for AI advancement and the digital economy without compromising security or individual rights.</p>
              <figure class="research-figure">
                <img class="no-lazy" src="/img/forest-demo-1.gif" alt="Forest platform demo 1">
                <figcaption>Forest platform demonstration (1).</figcaption>
              </figure>
              <figure class="research-figure">
                <img class="no-lazy" src="/img/forest-demo-2.gif" alt="Forest blockchain resource details demo">
                <figcaption>Blockchain resource details interface.</figcaption>
              </figure>
            </div>
            <div class="research-panel" data-project="1">
              <h3>Qin Mountains Four Treasures Detection System Based on YOLO and ESP32-CAM</h3>
              <p>The Qinling Four Treasures Detection System is an intelligent wildlife monitoring platform developed to support the protection of four iconic and endangered species native to the Qinling Mountains: the giant panda, golden snub-nosed monkey, crested ibis, and takin. These animals, collectively known as the “Four Treasures of Qinling,” face increasing threats from climate change and human activities. Designed by a student team from Xidian University, the system provides a practical, low-cost solution for real-time detection and monitoring in natural habitats.</p>
              <p>The core technical approach combines edge hardware with deep learning. An ESP32-CAM module captures and transmits live video streams over the network, while a YOLOv8 object-detection model running on a connected computing unit identifies the target species in real time. Detected animals are automatically cropped, timestamped, and logged for subsequent analysis. The system is mounted on a remotely controllable mobile platform, allowing operators to move the camera forward, backward, or rotate it as needed. On standard test sets the detection accuracy exceeds 95 percent, with end-to-end latency remaining at the second level.</p>
              <p>Key advantages include low power consumption, portability, cost efficiency, and ease of expansion. Unlike conventional wildlife-monitoring installations that rely on expensive cameras and extensive human patrols, this solution can be deployed flexibly across different terrains while keeping hardware and operational costs modest. The collected detection data further enable studies of animal activity patterns and distribution, offering scientific support for conservation decisions.</p>
              <p>Beyond pure protection work, the system holds potential for smart eco-tourism, environmental education, and collaborative research. By integrating artificial intelligence with Internet-of-Things technology, it demonstrates how accessible AI tools can contribute to biodiversity conservation. The project embodies the vision of using technology to safeguard the Qinling Mountains and to advance responsible stewardship of China’s natural heritage.</p>
              <figure class="research-figure">
                <video
                  class="no-lazy"
                  src="/img/finished_project.mp4"
                  autoplay
                  loop
                  muted
                  playsinline
                  controls
                  style="width:100%;border-radius:10px;border:1px solid rgba(255,255,255,0.12);background:#000;"
                ></video>
                <figcaption>Qin Mountains Four Treasures detection system demo.</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Personal Interest -->
    <section class="home-page" id="page-interest" data-page="5">
      <div class="page-inner">
        <div class="page-title">
          <span class="typed" data-text="Personal Interest"></span><span class="cursor">|</span>
        </div>
        <div class="interest-cards page-card" id="interest-cards">
          <div class="interest-card">
            <div class="interest-card-content">
              <h3>Sports</h3>
              <p>Staying active through basketball, running and fitness. Movement keeps both body and mind sharp.</p>
            </div>
            <div class="interest-card-bottom"><span class="interest-plus">+</span></div>
          </div>
          <div class="interest-card">
            <div class="interest-card-content">
              <h3>Photography</h3>
              <p>Capturing moments through the lens, exploring light, composition and visual storytelling.</p>
            </div>
            <div class="interest-card-bottom"><span class="interest-plus">+</span></div>
          </div>
          <div class="interest-card">
            <div class="interest-card-content">
              <h3>Games</h3>
              <p>From competitive esports to immersive single-player worlds, games are a source of inspiration and relaxation.</p>
            </div>
            <div class="interest-card-bottom"><span class="interest-plus">+</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Website Data -->
    <section class="home-page" id="page-data" data-page="6">
      <div class="page-inner">
        <div class="page-title">
          <span class="typed" data-text="Website Data"></span><span class="cursor">|</span>
        </div>
                <div class="page-card" id="data-section">
          <div class="data-stats-row">
            <div class="data-stat-card">
              <div class="data-stat-label">Unique Visitors</div>
              <div class="data-stat-value">
                <span id="busuanzi_value_site_uv">--</span>
              </div>
            </div>
            <div class="data-stat-card">
              <div class="data-stat-label">Total Visits</div>
              <div class="data-stat-value">
                <span id="busuanzi_value_site_pv">--</span>
              </div>
            </div>
          </div>

          <!-- 第二行：独占一张同款卡片 -->
          <div class="data-map-card">
            <div class="data-stat-label">Visitor Origins</div>
            <div class="data-map-frame" id="visitor-map"></div>
          </div>
        </div>
      </div>
    </section>
  `;

  var content = document.getElementById('content-inner') || document.querySelector('.layout');
  if (content) {
    content.insertBefore(root, content.firstChild);
  }

  // 右侧节点
  if (!document.getElementById('side-nav')) {
    var sideNav = document.createElement('div');
    sideNav.id = 'side-nav';
    sideNav.innerHTML = `
      <div class="side-nav-item" data-section="0" title="Intro"></div>
      <div class="side-nav-item" data-section="1" title="Current Research"></div>
      <div class="side-nav-item" data-section="2" title="Publication"></div>
      <div class="side-nav-item" data-section="3" title="Awards and Honors"></div>
      <div class="side-nav-item" data-section="4" title="Finished Projects"></div>
      <div class="side-nav-item" data-section="5" title="Personal Interest"></div>
      <div class="side-nav-item" data-section="6" title="Website Data"></div>
    `;
    document.body.appendChild(sideNav);
  }

  // 按钮切换
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

  // 打字机
  function typeInto(el, text, cursor, done) {
    if (!el) {
      if (done) done();
      return;
    }
    var i = 0;
    el.textContent = '';
    if (cursor) {
      cursor.classList.add('is-typing');
      cursor.style.opacity = '1';
    }
    function tick() {
      if (i <= text.length) {
        el.textContent = text.substring(0, i);
        i += 1;
        setTimeout(tick, 55);
      } else {
        if (cursor) {
          cursor.classList.remove('is-typing');
          cursor.style.opacity = '0';
        }
        if (done) done();
      }
    }
    tick();
  }

  var pages = document.querySelectorAll('.home-page');
  var played = {};
  var stickyTop = window.innerHeight * 0.12; // 与 CSS top: 12vh 对齐

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
      var text = typed.getAttribute('data-text') || '';
      typeInto(typed, text, cursor, function () {
        if (intro) {
          intro.style.opacity = '1';
          intro.style.transform = 'translateY(0)';
        }
        if (links) {
          links.style.opacity = '1';
          links.style.transform = 'translateY(0)';
        }
        if (card) card.classList.add('show');
      });
    } else if (card) {
      card.classList.add('show');
    }
  }

  function updateByScroll() {
    var best = 0;
    var bestRatio = 0;

    pages.forEach(function (page) {
      var inner = page.querySelector('.page-inner') || page;
      var rect = inner.getBoundingClientRect();
      var pageRect = page.getBoundingClientRect();

      var visible = Math.max(0, Math.min(pageRect.bottom, window.innerHeight) - Math.max(pageRect.top, 0));
      var ratio = visible / window.innerHeight;
      if (ratio > bestRatio) {
        bestRatio = ratio;
        best = parseInt(page.getAttribute('data-page'), 10);
      }

      // 更宽松：内容进入视口上半区就开打
      if (!played[page.id] &&
          rect.top < window.innerHeight * 0.55 &&
          pageRect.bottom > window.innerHeight * 0.25) {
        playPage(page);
      }

      if (played[page.id]) {
        // 只有滚出视口上方才淡出；还在下方等待进入时不要隐藏
        if (rect.bottom < window.innerHeight * 0.12) {
          page.classList.add('is-leaving');
        } else {
          page.classList.remove('is-leaving');
        }
      }
    });

    document.querySelectorAll('.side-nav-item').forEach(function (item, i) {
      item.classList.toggle('active', i === best);
    });
  }

  window.addEventListener('scroll', updateByScroll, { passive: true });
  window.addEventListener('resize', function () {
    stickyTop = window.innerHeight * 0.12;
  }, { passive: true });

  setTimeout(updateByScroll, 300);

  // 节点点击
    // 节点点击
  document.querySelectorAll('.side-nav-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var section = parseInt(this.getAttribute('data-section'), 10);
      var target = document.querySelector('.home-page[data-page="' + section + '"]');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

    // Personal Interest：原卡片抬到 body 再放大
  var interestData = {
    Sports: {
      title: 'Sports',
      html: `
        <p>Staying active through basketball, running and fitness is a consistent part of my routine. Movement keeps both body and mind sharp, and competitive sports also train focus under pressure.</p>
        <p>I enjoy team sports for the coordination and rhythm, and individual training for discipline.</p>
      `
    },
    Photography: {
      title: 'Photography',
      html: `
        <p>Photography is how I observe light, composition and everyday scenes more carefully.</p>
        <p>Through the lens I practice framing, timing and visual storytelling.</p>
      `
    },
    Games: {
      title: 'Games',
      html: `
        <p>From competitive esports to immersive single-player worlds, games are both relaxation and inspiration.</p>
        <p>I treat games as another form of interactive media.</p>
      `
    }
  };

  if (!document.getElementById('interest-overlay')) {
    var ov = document.createElement('div');
    ov.id = 'interest-overlay';
    document.body.appendChild(ov);
  }
  var overlay = document.getElementById('interest-overlay');

  var activeCard = null;
  var originRect = null;
  var spacer = null;
  var homeParent = null;
  var homeNext = null;
  var animTimer = null;

  var siblingLocks = [];

  function unlockSiblings() {
    siblingLocks.forEach(function (el) {
      el.style.transition = 'none';
      el.style.flex = '';
      el.style.width = '';
      el.style.maxWidth = '';
      el.style.minWidth = '';
      void el.offsetWidth;
      el.style.transition = '';
    });
    siblingLocks = [];
  }

  function expandCard(card, data) {
    if (activeCard) return;

    // 取消 hover scale 再量尺寸
    card.style.transition = 'none';
    card.style.transform = 'none';
    void card.offsetWidth;

    var rect = card.getBoundingClientRect();
    originRect = { top: rect.top, left: rect.left, width: rect.width, height: rect.height };

    homeParent = card.parentNode;
    homeNext = card.nextSibling;

    // ★ 在任何 DOM 变动前，先量另外两张的原始宽度
    var siblingWidths = [];
    Array.prototype.forEach.call(homeParent.children, function (el) {
      if (el === card) return;
      if (!el.classList || !el.classList.contains('interest-card')) return;
      siblingWidths.push({
        el: el,
        width: el.getBoundingClientRect().width
      });
    });

    // 占位
    spacer = document.createElement('div');
    spacer.className = 'interest-spacer';
    spacer.style.flex = '1 1 0';
    spacer.style.minWidth = '0';
    spacer.style.height = rect.height + 'px';
    spacer.style.minHeight = rect.height + 'px';
    spacer.style.visibility = 'hidden';
    spacer.style.pointerEvents = 'none';
    homeParent.insertBefore(spacer, card);

    // ★ 用变动前的宽度锁定兄弟
    siblingLocks = [];
    siblingWidths.forEach(function (item) {
      item.el.style.transition = 'none';
      item.el.style.flex = '0 0 ' + item.width + 'px';
      item.el.style.width = item.width + 'px';
      item.el.style.maxWidth = item.width + 'px';
      item.el.style.minWidth = item.width + 'px';
      siblingLocks.push(item.el);
    });

    // 详细内容
    var body = card.querySelector('.interest-card-content');
    if (body) {
      body.dataset.shortHtml = body.innerHTML;
      body.innerHTML = '<h3>' + data.title + '</h3>' + data.html;
    }
    var plus = card.querySelector('.interest-plus');
    if (plus) plus.textContent = '×';

    // 挪到 body
    document.body.appendChild(card);
    card.classList.add('is-expanding');
    card.style.position = 'fixed';
    card.style.top = rect.top + 'px';
    card.style.left = rect.left + 'px';
    card.style.width = rect.width + 'px';
    card.style.height = rect.height + 'px';
    card.style.margin = '0';
    card.style.zIndex = '10002';
    card.style.transform = 'none';
    card.style.transition =
      'top 0.4s cubic-bezier(0.22,1,0.36,1),' +
      'left 0.4s cubic-bezier(0.22,1,0.36,1),' +
      'width 0.4s cubic-bezier(0.22,1,0.36,1),' +
      'height 0.4s cubic-bezier(0.22,1,0.36,1),' +
      'border-radius 0.4s ease';

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    activeCard = card;

    var targetW = Math.min(720, window.innerWidth * 0.92);
    var targetH = Math.min(window.innerHeight * 0.86, 560);
    var targetLeft = (window.innerWidth - targetW) / 2;
    var targetTop = (window.innerHeight - targetH) / 2;

    void card.offsetWidth;
    requestAnimationFrame(function () {
      card.style.top = targetTop + 'px';
      card.style.left = targetLeft + 'px';
      card.style.width = targetW + 'px';
      card.style.height = targetH + 'px';
      card.style.borderRadius = '24px';
      card.classList.add('is-expanded');
    });
  }

  function collapseCard() {
    if (!activeCard || !originRect) return;
    var card = activeCard;

    var body = card.querySelector('.interest-card-content');
    if (body && body.dataset.shortHtml) {
      body.innerHTML = body.dataset.shortHtml;
      delete body.dataset.shortHtml;
    }
    var plus = card.querySelector('.interest-plus');
    if (plus) plus.textContent = '+';

    card.classList.remove('is-expanded');
    card.style.top = originRect.top + 'px';
    card.style.left = originRect.left + 'px';
    card.style.width = originRect.width + 'px';
    card.style.height = originRect.height + 'px';
    card.style.borderRadius = '22px';
    overlay.classList.remove('open');

    if (animTimer) clearTimeout(animTimer);
    animTimer = setTimeout(function () {
      card.style.transition = 'none';
      void card.offsetWidth;

      card.classList.remove('is-expanding');
      card.style.position = '';
      card.style.top = '';
      card.style.left = '';
      card.style.width = '';
      card.style.height = '';
      card.style.margin = '';
      card.style.zIndex = '';
      card.style.transform = '';
      card.style.borderRadius = '';
      card.style.transition = '';

      if (homeParent) {
        if (spacer && spacer.parentNode === homeParent) {
          homeParent.replaceChild(card, spacer);
        } else if (homeNext && homeNext.parentNode === homeParent) {
          homeParent.insertBefore(card, homeNext);
        } else {
          homeParent.appendChild(card);
        }
      }

      unlockSiblings();

      spacer = null;
      homeParent = null;
      homeNext = null;
      activeCard = null;
      originRect = null;
      document.body.style.overflow = '';
      animTimer = null;
    }, 420);
  }

  overlay.addEventListener('click', collapseCard);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') collapseCard();
  });

  document.querySelectorAll('#interest-cards .interest-card').forEach(function (card) {
    card.addEventListener('click', function (e) {
      e.stopPropagation();
      if (card.classList.contains('is-expanding')) {
        collapseCard();
        return;
      }
      var titleEl = card.querySelector('h3');
      var key = titleEl ? titleEl.textContent.trim() : '';
      var data = interestData[key];
      if (!data) return;
      expandCard(card, data);
    });
  });

// ========== Website Data：不蒜子 + MapMyVisitors（性能安全版） ==========
if (!document.getElementById('busuanzi-script')) {
  var bz = document.createElement('script');
  bz.id = 'busuanzi-script';
  bz.async = true;
  bz.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
  document.body.appendChild(bz);
}

// 访客地图
var mapBox = document.getElementById('visitor-map');
if (mapBox && !document.getElementById('mapmyvisitors')) {
  var mapScript = document.createElement('script');
  mapScript.type = 'text/javascript';
  mapScript.id = 'mapmyvisitors';
  mapScript.src =
    '//mapmyvisitors.com/map.js' +
    '?d=Yk8bDJHbN9pw73uHb5BMR0oh6f7gQBzG7Nt_sR4Qn2Y' +
    '&w=560' +
    '&co=0a0a0c' +
    '&cl=ffffff' +
    '&t=n';
  mapBox.appendChild(mapScript);

  function removeZoomControls() {
    document.querySelectorAll(
      '.jvectormap-zoomin, .jvectormap-zoomout, .jvectormap-goback'
    ).forEach(function (el) {
      el.remove();
    });
  }

  var n = 0;
  var initialTimer = setInterval(function () {
    removeZoomControls();
    if (++n >= 30) clearInterval(initialTimer);
  }, 400);

  var observer = new MutationObserver(function () {
    removeZoomControls();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  setTimeout(function () { observer.disconnect(); }, 15000);