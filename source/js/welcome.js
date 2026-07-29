// document.addEventListener('DOMContentLoaded', function () {
//   if (!document.body.classList.contains('index') &&
//       location.pathname !== '/' &&
//       location.pathname !== '/index.html') {
//     return;
//   }

//   var header = document.getElementById('page-header');
//   if (header) {
//     header.style.transition = 'opacity 0.1s linear';
//     function fadeHeader() {
//       var rect = header.getBoundingClientRect();
//       var windowHeight = window.innerHeight;
//       var progress = 0;
//       if (rect.bottom < windowHeight) {
//         progress = 1 - (rect.bottom / windowHeight);
//       }
//       progress = Math.min(1, Math.max(0, progress));
//       header.style.opacity = 1 - progress;
//     }
//     window.addEventListener('scroll', fadeHeader, { passive: true });
//     fadeHeader();
//   }

//   const text1 = "Hi, I'm Samuel";
//   const text2 = "Current Research";
//   const text3 = "Publication";
//   const text4 = "Awards and Honors";
//   const text5 = "Finished Projects";
//   const text6 = "Personal Interest";

//   var welcome = document.createElement('div');
//   welcome.id = 'welcome-section';
//   welcome.innerHTML = `
//     <div class="welcome-content">
//       <div class="welcome-left">
//         <div class="welcome-inner">
//           <span id="welcome-typed"></span><span id="welcome-cursor">|</span>
//         </div>
//         <div class="intro-text">
//           Welcome to my personal homepage. I am Xinyang Shen (Samuel), a junior undergraduate in Software Engineering at Xidian University. My research interests are rooted in Computer Vision, with active involvement in projects spanning generative video models, few-shot learning, and advanced vision architectures. I am highly receptive to academic discussions and research collaborations. Should our interests align, please feel free to contact me via the information on the right.
//         </div>
//       </div>

//       <div class="welcome-links">
//         <a href="/cv.pdf" target="_blank" class="link-item">
//           <svg class="link-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/></svg>
//           CV
//         </a>
//         <a href="https://www.linkedin.com/in/xinyang-shen-857627414/" target="_blank" class="link-item">
//           <svg class="link-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11 8H6v7h2v-7zm-1-2.2c.7 0 1.2-.5 1.2-1.2S7.7 6.4 7 6.4 5.8 6.9 5.8 7.6s.5 1.2 1.2 1.2zM18 15.5c0-2.1-1.2-3.1-2.8-3.1-1.1 0-1.7.6-2.1 1.1V12h-2v7h2v-3.8c0-1 .4-1.8 1.4-1.8 1 0 1.5.7 1.5 1.8V19h2v-3.5z"/></svg>
//           LinkedIn
//         </a>
//         <a href="https://github.com/Samuel-NKG" target="_blank" class="link-item">
//           <svg class="link-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.8c.85.004 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
//           GitHub
//         </a>
//         <a href="https://orcid.org/0009-0005-2596-2438" target="_blank" class="link-item">
//           <svg class="link-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5h-2v-9h2v9zm1.5-11c-.83 0-1.5-.67-1.5-1.5S11.17 3.5 12 3.5s1.5.67 1.5 1.5S12.83 6.5 12 6.5zm5.5 11h-2v-9h2v1.1c.5-.8 1.3-1.3 2.4-1.3 1.8 0 3 1.2 3 3.5v5.7z"/></svg>
//           ORCID
//         </a>
//       </div>
//     </div>

//     <!-- Current Research -->
//     <div class="research-card" id="research-card">
//       <div class="research-left">
//         <div class="research-btn active" data-index="0">
//           <span class="btn-plus">+</span>
//           <span class="btn-dot"></span>
//           <span class="btn-text">Few-Shot Learning</span>
//         </div>
//         <div class="research-btn" data-index="1">
//           <span class="btn-plus">+</span>
//           <span class="btn-dot"></span>
//           <span class="btn-text">Satellite Video Tracking</span>
//         </div>
//       </div>
//       <div class="research-right">
//         <div class="research-panel active" data-index="0">
//           <h3>Decoupling Confusion via Complementary Attention for Few-Shot Learning</h3>
//           <p>Investigated the visual-semantic alignment bottlenecks of CLIP in downstream few-shot learning, identifying two intertwined challenges: inter-class confusion in the logit space and foreground-background confusion in the feature space. Designed PDC, BSD, and CAO modules to collaboratively eliminate representation bias, achieving state-of-the-art 16-shot accuracy of 80.15% across 11 benchmarks.</p>
//         </div>
//         <div class="research-panel" data-index="1">
//           <h3>SMTrack: Subspace Memory via Low-Rank Manifold Modeling</h3>
//           <p>A satellite video tracking framework that models target appearance history as a compact low-rank manifold subspace to effectively suppress transient noise and target drift under cluttered backgrounds. Responsible for preliminary literature research and early-stage algorithmic verification for the anchor-guided memory read mechanism.</p>
//         </div>
//       </div>
//     </div>

//     <!-- Publication -->
//     <div class="pub-section" id="pub-section">
//       <div class="pub-item">
//         <div class="pub-index">01</div>
//         <div class="pub-body">
//           <div class="pub-title">Decoupling Confusion via Complementary Attention for Few-Shot Learning</div>
//           <div class="pub-meta">Computer Vision · Few-Shot Learning</div>
//         </div>
//       </div>
//       <div class="pub-item">
//         <div class="pub-index">02</div>
//         <div class="pub-body">
//           <div class="pub-title">SMTrack: Subspace Memory via Low-Rank Manifold Modeling</div>
//           <div class="pub-meta">Satellite Video Tracking · Computer Vision</div>
//         </div>
//       </div>
//       <div class="pub-item">
//         <div class="pub-index">03</div>
//         <div class="pub-body">
//           <div class="pub-title">请替换为你的第三篇论文标题</div>
//           <div class="pub-meta">请替换为会议 / 期刊或领域</div>
//         </div>
//       </div>
//     </div>

//     <!-- Awards and Honors -->
//     <div class="awards-section" id="awards-section">
//       <div class="awards-col">
//         <div class="awards-col-title">Awards</div>
//         <div class="award-item">
//           <div class="award-year">2025</div>
//           <div class="award-content">
//             <div class="award-title">15th National University Student E-commerce “ICE” Challenge</div>
//             <div class="award-detail">Silver Award</div>
//           </div>
//         </div>
//         <div class="award-item">
//           <div class="award-year">2024</div>
//           <div class="award-content">
//             <div class="award-title">Chinese Collegiate Computing Competition</div>
//             <div class="award-detail">The Northwest Regional Competition · Second Prize</div>
//             <div class="award-title" style="margin-top: 1rem;">China International College Students’ Innovation Competition</div>
//             <div class="award-detail">University-level Silver Award</div>
//             <div class="award-title" style="margin-top: 1rem;">College Students’ Innovation and Entrepreneurship Training Program</div>
//             <div class="award-detail">Provincial-level Silver Award</div>
//           </div>
//         </div>
//       </div>
//       <div class="awards-col">
//         <div class="awards-col-title">Scholarships</div>
//         <div class="award-item">
//           <div class="award-year">2024–2025</div>
//           <div class="award-content">
//             <div class="award-title">University-level Second-Class Scholarship</div>
//           </div>
//         </div>
//         <div class="award-item">
//           <div class="award-year">2023–2024</div>
//           <div class="award-content">
//             <div class="award-title">University-level First-Class Scholarship</div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <!-- Finished Projects -->
//     <div class="research-card" id="projects-card">
//       <div class="research-left">
//         <div class="research-btn active" data-project="0">
//           <span class="btn-plus">+</span>
//           <span class="btn-dot"></span>
//           <span class="btn-text">Forest</span>
//         </div>
//         <div class="research-btn" data-project="1">
//           <span class="btn-plus">+</span>
//           <span class="btn-dot"></span>
//           <span class="btn-text">Yolo</span>
//         </div>
//       </div>
//       <div class="research-right">
//         <div class="research-panel active" data-project="0">
//           <h3>Forest: Privacy-Preserving Blockchain for Data Collaboration</h3>
//           <p>A distributed trusted privacy computing solution built for secure multi-party data collaboration. Designed for the China Mobile industrial track, Forest combines blockchain with privacy-preserving computation to enable controllable data sharing without exposing raw information. Led the project as team principal, covering system architecture, trusted collaboration flow, and the overall solution design for enterprise data cooperation scenarios.</p>
//         </div>
//         <div class="research-panel" data-project="1">
//           <h3>Qin Mountains Four Treasures Detection System</h3>
//           <p>A real-time wildlife monitoring system based on YOLOv8 and ESP32-CAM, targeting the “Four Treasures of the Qin Mountains” — giant panda, golden snub-nosed monkey, crested ibis, and takin. The system performs on-device image capture, cloud-side detection, and result logging, achieving over 95% accuracy on the evaluation set with second-level transmission. Also supports remote vehicle control for field deployment. Team member responsible for detection pipeline and system integration.</p>
//         </div>
//       </div>
//     </div>

//     <!-- Personal Interest -->
//     <div class="interest-cards" id="interest-cards">
//       <div class="interest-card">
//         <div class="interest-card-content">
//           <h3>Sports</h3>
//           <p>Staying active through basketball, running and fitness. Movement keeps both body and mind sharp.</p>
//         </div>
//         <div class="interest-card-bottom">
//           <span class="interest-plus">+</span>
//         </div>
//       </div>
//       <div class="interest-card">
//         <div class="interest-card-content">
//           <h3>Photography</h3>
//           <p>Capturing moments through the lens, exploring light, composition and visual storytelling.</p>
//         </div>
//         <div class="interest-card-bottom">
//           <span class="interest-plus">+</span>
//         </div>
//       </div>
//       <div class="interest-card">
//         <div class="interest-card-content">
//           <h3>Games</h3>
//           <p>From competitive esports to immersive single-player worlds, games are a source of inspiration and relaxation.</p>
//         </div>
//         <div class="interest-card-bottom">
//           <span class="interest-plus">+</span>
//         </div>
//       </div>
//     </div>
//   `;

//   var spacer = document.createElement('div');
//   spacer.id = 'welcome-spacer';
//   spacer.style.height = '920vh';

//   var content = document.getElementById('content-inner') || document.querySelector('.layout');
//   if (content) {
//     content.insertBefore(welcome, content.firstChild);
//     content.insertBefore(spacer, welcome.nextSibling);
//   }

//   // ===== 右侧节点导航 =====
//   if (!document.getElementById('side-nav')) {
//     var sideNav = document.createElement('div');
//     sideNav.id = 'side-nav';
//     sideNav.innerHTML = `
//       <div class="side-nav-item" data-section="0" title="Intro"></div>
//       <div class="side-nav-item" data-section="1" title="Current Research"></div>
//       <div class="side-nav-item" data-section="2" title="Publication"></div>
//       <div class="side-nav-item" data-section="3" title="Awards and Honors"></div>
//       <div class="side-nav-item" data-section="4" title="Finished Projects"></div>
//       <div class="side-nav-item" data-section="5" title="Personal Interest"></div>
//     `;
//     document.body.appendChild(sideNav);
//   }

//   const typedEl = document.getElementById('welcome-typed');
//   const cursorEl = document.getElementById('welcome-cursor');
//   const researchCard = document.getElementById('research-card');
//   const interestCards = document.getElementById('interest-cards');
//   const awardsSection = document.getElementById('awards-section');
//   const pubSection = document.getElementById('pub-section');
//   const projectsCard = document.getElementById('projects-card');
//   if (!typedEl) return;

//   if (researchCard) researchCard.classList.add('is-hidden');
//   if (interestCards) interestCards.classList.add('is-hidden');
//   if (awardsSection) awardsSection.classList.add('is-hidden');
//   if (pubSection) pubSection.classList.add('is-hidden');
//   if (projectsCard) projectsCard.classList.add('is-hidden');

//   // Current Research 按钮
//   const btns = document.querySelectorAll('#research-card .research-btn');
//   const panels = document.querySelectorAll('#research-card .research-panel');
//   btns.forEach(btn => {
//     btn.addEventListener('click', function () {
//       const index = this.getAttribute('data-index');
//       btns.forEach(b => b.classList.remove('active'));
//       this.classList.add('active');
//       panels.forEach(p => p.classList.remove('active'));
//       document.querySelector(`#research-card .research-panel[data-index="${index}"]`).classList.add('active');
//     });
//   });

//   // Finished Projects 按钮
//   const projectBtns = document.querySelectorAll('#projects-card .research-btn');
//   const projectPanels = document.querySelectorAll('#projects-card .research-panel');
//   projectBtns.forEach(btn => {
//     btn.addEventListener('click', function () {
//       const index = this.getAttribute('data-project');
//       projectBtns.forEach(b => b.classList.remove('active'));
//       this.classList.add('active');
//       projectPanels.forEach(p => p.classList.remove('active'));
//       document.querySelector(`#projects-card .research-panel[data-project="${index}"]`).classList.add('active');
//     });
//   });

//   let currentStage = 0;
//   let typing = false;

//   function typeText(text, callback) {
//     if (typing) return;
//     typing = true;
//     let i = 0;
//     typedEl.textContent = '';
//     cursorEl.style.opacity = '1';
//     function tick() {
//       if (i <= text.length) {
//         typedEl.textContent = text.substring(0, i);
//         i++;
//         setTimeout(tick, 65);
//       } else {
//         cursorEl.style.opacity = '0';
//         typing = false;
//         if (callback) callback();
//       }
//     }
//     tick();
//   }

//   function deleteText(callback) {
//     if (typing) return;
//     typing = true;
//     cursorEl.style.opacity = '1';
//     function tick() {
//       const current = typedEl.textContent;
//       if (current.length > 0) {
//         typedEl.textContent = current.slice(0, -1);
//         setTimeout(tick, 40);
//       } else {
//         cursorEl.style.opacity = '0';
//         typing = false;
//         if (callback) callback();
//       }
//     }
//     tick();
//   }

//   function showEl(el, display) {
//     if (!el || !el.classList.contains('is-hidden')) return;
//     el.classList.remove('is-hidden');
//     el.style.display = display || 'flex';
//     el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
//     el.style.opacity = '0';
//     el.style.transform = 'translateY(32px)';
//     requestAnimationFrame(function () {
//       requestAnimationFrame(function () {
//         el.style.opacity = '1';
//         el.style.transform = 'translateY(0)';
//         el.style.pointerEvents = 'auto';
//       });
//     });
//   }

//   function hideEl(el) {
//     if (!el || el.classList.contains('is-hidden')) return;
//     el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
//     el.style.opacity = '0';
//     el.style.transform = 'translateY(32px)';
//     el.style.pointerEvents = 'none';
//     setTimeout(function () {
//       el.classList.add('is-hidden');
//     }, 560);
//   }

//   function showResearchCard() { showEl(researchCard, 'flex'); }
//   function hideResearchCard() { hideEl(researchCard); }
//   function showInterestCards() { showEl(interestCards, 'flex'); }
//   function hideInterestCards() { hideEl(interestCards); }
//   function showAwards() { showEl(awardsSection, 'flex'); }
//   function hideAwards() { hideEl(awardsSection); }
//   function showPubs() { showEl(pubSection, 'flex'); }
//   function hidePubs() { hideEl(pubSection); }
//   function showProjects() { showEl(projectsCard, 'flex'); }
//   function hideProjects() { hideEl(projectsCard); }

//   function hideAllCards() {
//     hideResearchCard();
//     hideInterestCards();
//     hideAwards();
//     hidePubs();
//     hideProjects();
//   }

//   function updateSideNav() {
//     var sectionIndex = 0;
//     if (currentStage >= 8) sectionIndex = 5;
//     else if (currentStage >= 19) sectionIndex = 4;
//     else if (currentStage >= 11) sectionIndex = 3;
//     else if (currentStage >= 15) sectionIndex = 2;
//     else if (currentStage >= 5) sectionIndex = 1;
//     else sectionIndex = 0;

//     document.querySelectorAll('.side-nav-item').forEach(function (item, i) {
//       item.classList.toggle('active', i === sectionIndex);
//     });
//   }

//   function updateByScroll() {
//     const spacerEl = document.getElementById('welcome-spacer');
//     if (!spacerEl) return;

//     const rect = spacerEl.getBoundingClientRect();
//     const windowHeight = window.innerHeight;
//     let progress = 0;
//     if (rect.top < windowHeight) {
//       const scrolled = windowHeight - rect.top;
//       progress = Math.min(1, Math.max(0, scrolled / (rect.height * 0.8)));
//     }

//     const intro = document.querySelector('.intro-text');
//     const links = document.querySelector('.welcome-links');

//     // 1. Hi, I'm Samuel
//     if (progress >= 0.03 && currentStage === 0 && !typing) {
//       currentStage = 1;
//       typeText(text1, function () {
//         currentStage = 2;
//         if (intro) {
//           intro.style.opacity = '1';
//           intro.style.transform = 'translateY(0)';
//           intro.style.height = '';
//           intro.style.margin = '';
//           intro.style.overflow = '';
//         }
//         if (links) {
//           links.style.opacity = '1';
//           links.style.transform = 'translateY(0)';
//           links.style.height = '';
//           links.style.margin = '';
//           links.style.overflow = '';
//         }
//         updateSideNav();
//       });
//     }

//     // 2. → Current Research
//     if (progress >= 0.18 && currentStage === 2 && !typing) {
//       currentStage = 3;
//       if (intro) {
//         intro.style.opacity = '0';
//         intro.style.transform = 'translateY(28px)';
//         setTimeout(function () {
//           intro.style.height = '0';
//           intro.style.margin = '0';
//           intro.style.overflow = 'hidden';
//         }, 500);
//       }
//       if (links) {
//         links.style.opacity = '0';
//         links.style.transform = 'translateY(28px)';
//         setTimeout(function () {
//           links.style.height = '0';
//           links.style.margin = '0';
//           links.style.overflow = 'hidden';
//         }, 500);
//       }
//       hideAllCards();
//       deleteText(function () {
//         typeText(text2, function () {
//           currentStage = 5;
//           showResearchCard();
//           updateSideNav();
//         });
//       });
//     }

//     // 3. → Publication
//     if (progress >= 0.34 && currentStage === 5 && !typing) {
//       currentStage = 14;
//       hideAllCards();
//       deleteText(function () {
//         typeText(text3, function () {
//           currentStage = 15;
//           showPubs();
//           updateSideNav();
//         });
//       });
//     }

//     // 4. → Awards and Honors
//     if (progress >= 0.48 && currentStage === 15 && !typing) {
//       currentStage = 10;
//       hideAllCards();
//       deleteText(function () {
//         typeText(text4, function () {
//           currentStage = 11;
//           showAwards();
//           updateSideNav();
//         });
//       });
//     }

//     // 5. → Finished Projects
//     if (progress >= 0.62 && currentStage === 11 && !typing) {
//       currentStage = 18;
//       hideAllCards();
//       deleteText(function () {
//         typeText(text5, function () {
//           currentStage = 19;
//           showProjects();
//           updateSideNav();
//         });
//       });
//     }

//     // 6. → Personal Interest
//     if (progress >= 0.76 && currentStage === 19 && !typing) {
//       currentStage = 7;
//       hideAllCards();
//       deleteText(function () {
//         typeText(text6, function () {
//           currentStage = 8;
//           showInterestCards();
//           updateSideNav();
//         });
//       });
//     }

//     // ===== 回滑 =====

//     if (progress < 0.72 && currentStage === 8 && !typing) {
//       currentStage = 20;
//       hideInterestCards();
//       deleteText(function () {
//         typeText(text5, function () {
//           currentStage = 19;
//           showProjects();
//           updateSideNav();
//         });
//       });
//     }

//     if (progress < 0.58 && currentStage === 19 && !typing) {
//       currentStage = 21;
//       hideAllCards();
//       deleteText(function () {
//         typeText(text4, function () {
//           currentStage = 11;
//           showAwards();
//           updateSideNav();
//         });
//       });
//     }

//     if (progress < 0.44 && currentStage === 11 && !typing) {
//       currentStage = 16;
//       hideAwards();
//       deleteText(function () {
//         typeText(text3, function () {
//           currentStage = 15;
//           showPubs();
//           updateSideNav();
//         });
//       });
//     }

//     if (progress < 0.30 && currentStage === 15 && !typing) {
//       currentStage = 17;
//       hidePubs();
//       deleteText(function () {
//         typeText(text2, function () {
//           currentStage = 5;
//           showResearchCard();
//           updateSideNav();
//         });
//       });
//     }

//     if (progress < 0.14 && currentStage === 5 && !typing) {
//       currentStage = 6;
//       hideAllCards();
//       deleteText(function () {
//         typeText(text1, function () {
//           currentStage = 2;
//           if (intro) {
//             intro.style.opacity = '1';
//             intro.style.transform = 'translateY(0)';
//             intro.style.height = '';
//             intro.style.margin = '';
//             intro.style.overflow = '';
//           }
//           if (links) {
//             links.style.opacity = '1';
//             links.style.transform = 'translateY(0)';
//             links.style.height = '';
//             links.style.margin = '';
//             links.style.overflow = '';
//           }
//           updateSideNav();
//         });
//       });
//     }

//     // 保持状态
//     if (currentStage === 5 && progress >= 0.18 && progress < 0.34) {
//       if (!typing) typedEl.textContent = text2;
//     }
//     if (currentStage === 15) {
//       if (!typing) typedEl.textContent = text3;
//     }
//     if (currentStage === 11) {
//       if (!typing) typedEl.textContent = text4;
//     }
//     if (currentStage === 19) {
//       if (!typing) typedEl.textContent = text5;
//     }
//     if (currentStage === 8) {
//       if (!typing) typedEl.textContent = text6;
//     }

//     updateSideNav();
//   }

//   // 节点点击跳转
//   document.querySelectorAll('.side-nav-item').forEach(function (item) {
//     item.addEventListener('click', function () {
//       var section = parseInt(this.getAttribute('data-section'), 10);
//       var spacerEl = document.getElementById('welcome-spacer');
//       if (!spacerEl) return;
//       var total = spacerEl.offsetHeight * 0.8;
//       var targets = [0.06, 0.24, 0.40, 0.54, 0.68, 0.82];
//       var y = spacerEl.offsetTop + targets[section] * total - window.innerHeight * 0.3;
//       window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
//     });
//   });

//   window.addEventListener('scroll', updateByScroll, { passive: true });
//   updateByScroll();
// });

document.addEventListener('DOMContentLoaded', function () {
  if (!document.body.classList.contains('index') &&
      location.pathname !== '/' &&
      location.pathname !== '/index.html') {
    return;
  }

  // 隐藏原顶栏
  var header = document.getElementById('page-header');
  if (header) header.style.opacity = '0';

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
              <h3>Decoupling Confusion via Complementary Attention for Few-Shot Learning</h3>
              <p>Investigated the visual-semantic alignment bottlenecks of CLIP in downstream few-shot learning, identifying two intertwined challenges: inter-class confusion in the logit space and foreground-background confusion in the feature space. Designed PDC, BSD, and CAO modules to collaboratively eliminate representation bias, achieving state-of-the-art 16-shot accuracy of 80.15% across 11 benchmarks.</p>
            </div>
            <div class="research-panel" data-index="1">
              <h3>SMTrack: Subspace Memory via Low-Rank Manifold Modeling</h3>
              <p>A satellite video tracking framework that models target appearance history as a compact low-rank manifold subspace to effectively suppress transient noise and target drift under cluttered backgrounds. Responsible for preliminary literature research and early-stage algorithmic verification for the anchor-guided memory read mechanism.</p>
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
              <div class="pub-meta">Computer Vision · Few-Shot Learning</div>
            </div>
          </div>
          <div class="pub-item">
            <div class="pub-index">02</div>
            <div class="pub-body">
              <div class="pub-title">SMTrack: Subspace Memory via Low-Rank Manifold Modeling</div>
              <div class="pub-meta">Satellite Video Tracking · Computer Vision</div>
            </div>
          </div>
          <div class="pub-item">
            <div class="pub-index">03</div>
            <div class="pub-body">
              <div class="pub-title">请替换为你的第三篇论文标题</div>
              <div class="pub-meta">请替换为会议 / 期刊或领域</div>
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
              <p>A distributed trusted privacy computing solution built for secure multi-party data collaboration. Designed for the China Mobile industrial track, Forest combines blockchain with privacy-preserving computation to enable controllable data sharing without exposing raw information. Led the project as team principal, covering system architecture, trusted collaboration flow, and the overall solution design for enterprise data cooperation scenarios.</p>
            </div>
            <div class="research-panel" data-project="1">
              <h3>Qin Mountains Four Treasures Detection System</h3>
              <p>A real-time wildlife monitoring system based on YOLOv8 and ESP32-CAM, targeting the “Four Treasures of the Qin Mountains” — giant panda, golden snub-nosed monkey, crested ibis, and takin. The system performs on-device image capture, cloud-side detection, and result logging, achieving over 95% accuracy on the evaluation set with second-level transmission. Also supports remote vehicle control for field deployment. Team member responsible for detection pipeline and system integration.</p>
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
    var i = 0;
    el.textContent = '';
    if (cursor) cursor.style.opacity = '1';
    function tick() {
      if (i <= text.length) {
        el.textContent = text.substring(0, i);
        i++;
        setTimeout(tick, 55);
      } else {
        if (cursor) cursor.style.opacity = '0';
        if (done) done();
      }
    }
    tick();
  }

  // 进入视口时播放
  var pages = document.querySelectorAll('.home-page');
  var played = {};

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var page = entry.target;
      var id = page.id;
      if (played[id]) return;
      played[id] = true;

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
          if (card) {
            card.classList.add('show');
          }
        });
      } else if (card) {
        card.classList.add('show');
      }

      // 高亮节点
      var idx = parseInt(page.getAttribute('data-page'), 10);
      document.querySelectorAll('.side-nav-item').forEach(function (item, i) {
        item.classList.toggle('active', i === idx);
      });
    });
  }, { threshold: 0.45 });

  pages.forEach(function (p) { io.observe(p); });

  // 节点点击
  document.querySelectorAll('.side-nav-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var section = parseInt(this.getAttribute('data-section'), 10);
      var target = document.querySelector('.home-page[data-page="' + section + '"]');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});