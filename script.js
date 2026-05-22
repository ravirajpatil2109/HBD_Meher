/* =============================================
   BIRTHDAY SURPRISE — script.js
   ============================================= */
 
// ============================================================
// ⚙️  CONFIGURATION — Edit these values to customize
// ============================================================
const CONFIG = {
  managerName: "MEHER",
  password: "05052026",
  birthday: "May 5",

  // Birthday Message
  message: `𝐇𝐚𝐩𝐩𝐲 𝐁𝐢𝐫𝐭𝐡𝐝𝐚𝐲 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧, 𝐏𝐮𝐫𝐚 𝐏𝐚𝐤𝐢𝐬𝐭𝐚𝐧 🎂

𝐀𝐫𝐞𝐞 𝐛𝐡𝐚𝐢, 4 𝐬𝐚𝐚𝐥 𝐡𝐨 𝐠𝐚𝐲𝐞 𝐦𝐢𝐥𝐤𝐞… 𝐚𝐧𝐝 𝐬𝐭𝐢𝐥𝐥 𝐟𝐞𝐞𝐥𝐬 𝐥𝐢𝐤𝐞 𝐰𝐞 𝐦𝐞𝐭 𝐣𝐮𝐬𝐭 𝐲𝐞𝐬𝐭𝐞𝐫𝐝𝐚𝐲 𝐢𝐧 𝐜𝐨𝐥𝐥𝐞𝐠𝐞. 𝐘𝐨𝐮’𝐯𝐞 𝐚𝐥𝐰𝐚𝐲𝐬 𝐛𝐞𝐞𝐧 𝐭𝐡𝐚𝐭 𝐟𝐮𝐧𝐧𝐲 𝐠𝐮𝐲 𝐰𝐡𝐨 𝐜𝐚𝐧 𝐦𝐚𝐤𝐞 𝐚𝐧𝐲𝐨𝐧𝐞 𝐥𝐚𝐮𝐠𝐡 𝐚𝐧𝐝 𝐭𝐡𝐚𝐭 𝐬𝐨𝐥𝐢𝐝 𝐬𝐮𝐩𝐩𝐨𝐫𝐭 𝐬𝐲𝐬𝐭𝐞𝐦 𝐣𝐨 𝐡𝐚𝐦𝐞𝐬𝐡𝐚 𝐫𝐞𝐚𝐝𝐲 𝐫𝐞𝐡𝐭𝐚 𝐡𝐚𝐢 - 𝐭𝐢𝐦𝐞, 𝐣𝐚𝐠𝐚𝐡, 𝐤𝐮𝐜𝐡 𝐛𝐡𝐢 𝐦𝐚𝐭𝐭𝐞𝐫 𝐧𝐚𝐡𝐢 𝐤𝐚𝐫𝐭𝐚!

𝐁𝐡𝐚𝐢, 𝐦𝐚𝐢𝐧 𝐩𝐫𝐨𝐮𝐝𝐥𝐲 𝐤𝐞𝐡 𝐬𝐚𝐤𝐭𝐚 𝐡𝐨𝐨𝐧 👉🏻 𝐭𝐮 𝐚𝐬𝐥𝐢 𝐛𝐚𝐧𝐝𝐚 𝐡𝐚𝐢! 💯

𝐀𝐮𝐫 𝐡𝐚𝐚𝐧, 𝐥𝐢𝐟𝐞 𝐦𝐞 𝐤𝐮𝐜𝐡 𝐥𝐨𝐠 𝐝𝐨𝐨𝐫 𝐡𝐨 𝐣𝐚𝐭𝐞 𝐡𝐚𝐢… 𝐛𝐮𝐭 𝐦𝐚𝐢𝐧 𝐡𝐨𝐨𝐧 𝐧𝐚 𝐛𝐡𝐚𝐢 𝐡𝐚𝐦𝐞𝐬𝐡𝐚 𝐭𝐞𝐫𝐞 𝐬𝐚𝐚𝐭𝐡.
𝐅𝐨𝐫 𝐞𝐯𝐞𝐫𝐲 𝐦𝐨𝐨𝐝 𝐬𝐰𝐢𝐧𝐠, 𝐞𝐯𝐞𝐫𝐲 𝐜𝐡𝐚𝐢 𝐛𝐫𝐞𝐚𝐤, 𝐞𝐯𝐞𝐫𝐲 𝐥𝐚𝐭𝐞-𝐧𝐢𝐠𝐡𝐭 𝐛𝐚𝐚𝐭 - 𝐦𝐚𝐢𝐧 𝐡𝐨𝐨𝐧 𝐛𝐫𝐨 🫂

𝐁𝐚𝐬 𝐚𝐚𝐣 𝐜𝐡𝐢𝐥𝐥 𝐦𝐚𝐚𝐫, 𝐟𝐮𝐥𝐥 𝐞𝐧𝐣𝐨𝐲 𝐤𝐚𝐫, 𝐚𝐮𝐫 𝐲𝐚𝐚𝐝 𝐫𝐚𝐤𝐡
"𝐓𝐞𝐫𝐚 𝐛𝐡𝐚𝐢 𝐭𝐞𝐫𝐞 𝐬𝐚𝐚𝐭𝐡 𝐡𝐚𝐦𝐞𝐬𝐡𝐚 𝐤𝐡𝐚𝐝𝐚 𝐡𝐚𝐢." 💪🔥

𝐋𝐨𝐯𝐞 𝐲𝐨𝐮, 𝐛𝐡𝐚𝐢.
𝐎𝐧𝐜𝐞 𝐚𝐠𝐚𝐢𝐧, 𝐇𝐚𝐩𝐩𝐲 𝐁𝐢𝐫𝐭𝐡𝐝𝐚𝐲! 🥳🎉`,
};
  // ============================================================
   
   
  /* ──────────────────────────────────────────────
     INIT
     ────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
    // Patch manager name everywhere
    document.querySelectorAll("#word3 em, .hero-title em").forEach(el => {
      el.textContent = CONFIG.managerName;
    });
   
    initCursor();
    initLoading();
    initParticleBackground();
    initAOS();
    initCarousel();
    initLightbox();
    initBalloons();
    initInteractiveBalloons();
    initTypedMessage();
    initSurpriseLock();
    initFireworks();
    initMusic();
  });
   
   
  /* ──────────────────────────────────────────────
     CUSTOM CURSOR
     ────────────────────────────────────────────── */
  function initCursor() {
    const glow = document.getElementById("cursor-glow");
    const dot  = document.getElementById("cursor-dot");
    if (!glow || !dot) return;
   
    let mx = 0, my = 0, gx = 0, gy = 0;
   
    document.addEventListener("mousemove", e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top  = my + "px";
    });
   
    (function animGlow() {
      gx += (mx - gx) * 0.08;
      gy += (my - gy) * 0.08;
      glow.style.left = gx + "px";
      glow.style.top  = gy + "px";
      requestAnimationFrame(animGlow);
    })();
   
    document.querySelectorAll("button, a, .gallery-card, .wish-card, .dot").forEach(el => {
      el.addEventListener("mouseenter", () => {
        dot.style.transform = "translate(-50%,-50%) scale(2.5)";
      });
      el.addEventListener("mouseleave", () => {
        dot.style.transform = "translate(-50%,-50%) scale(1)";
      });
    });
  }
   
   
  /* ──────────────────────────────────────────────
     LOADING SCREEN
     ────────────────────────────────────────────── */
  function initLoading() {
    const screen  = document.getElementById("loading-screen");
    const bar     = document.getElementById("loader-bar");
    const textEl  = document.getElementById("loader-text");
    const messages = [
      "Something special is coming...",
      "Wrapping surprises with care...",
      "Lighting up the candles...",
      "Almost ready for you! ✨"
    ];
   
    let progress = 0;
    let msgIdx   = 0;
   
    const interval = setInterval(() => {
      progress += Math.random() * 4 + 1.5;
      if (progress >= 100) { progress = 100; clearInterval(interval); }
      bar.style.width = progress + "%";
   
      const newIdx = Math.floor((progress / 100) * messages.length);
      if (newIdx !== msgIdx && newIdx < messages.length) {
        msgIdx = newIdx;
        textEl.style.opacity = 0;
        setTimeout(() => {
          textEl.textContent = messages[msgIdx];
          textEl.style.opacity = 1;
        }, 300);
      }
   
      if (progress === 100) {
        setTimeout(finishLoading, 600);
      }
    }, 60);
   
    function finishLoading() {
      screen.classList.add("hidden");
      // Reveal hero words
      setTimeout(() => revealHeroWords(), 500);
      // Start hero confetti
      setTimeout(() => launchHeroConfetti(), 1200);
    }
  }
   
  function revealHeroWords() {
    ["word1","word2","word3"].forEach((id, i) => {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.classList.add("visible");
      }, i * 250);
    });
  }
   
   
  /* ──────────────────────────────────────────────
     PARTICLE BACKGROUND (canvas)
     ────────────────────────────────────────────── */
  function initParticleBackground() {
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
   
    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;
   
    window.addEventListener("resize", () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    });
   
    const COLORS = ["#ff4dac","#a855f7","#38bdf8","#fbbf24","#34d399"];
    const particles = Array.from({length: 90}, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.5 + 0.2,
    }));
   
    (function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      });
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    })();
  }
   
   
  /* ──────────────────────────────────────────────
     HERO CONFETTI
     ────────────────────────────────────────────── */
  function launchHeroConfetti() {
    if (typeof confetti === "undefined") return;
    const defaults = { startVelocity: 30, spread: 360, ticks: 80, zIndex: 5 };
    const fire = (particleRatio, opts) => confetti({
      ...defaults,
      particleCount: Math.floor(200 * particleRatio),
      origin: { x: Math.random(), y: Math.random() * 0.5 },
      ...opts
    });
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2,  { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1,  { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1,  { spread: 120, startVelocity: 45 });
  }
   
   
  /* ──────────────────────────────────────────────
     AOS
     ────────────────────────────────────────────── */
  function initAOS() {
    if (typeof AOS === "undefined") return;
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true, offset: 60 });
  }
   
   
  /* ──────────────────────────────────────────────
     FLOATING BALLOONS (hero)
     ────────────────────────────────────────────── */
  function initBalloons() {
    const container = document.getElementById("hero-balloons");
    if (!container) return;
    const emojis = ["🎈","🎉","🎊","🎀","🌟","✨","💫","🌸","🥳","🎂"];
    const colors = ["#ff4dac","#a855f7","#38bdf8","#fbbf24","#34d399"];
   
    function spawnBalloon() {
      const el = document.createElement("div");
      el.className = "balloon";
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = Math.random() * 95 + "%";
      el.style.fontSize = (Math.random() * 1.5 + 1.2) + "rem";
      const duration = Math.random() * 8 + 7;
      el.style.animation = `float-balloon ${duration}s linear forwards`;
      el.style.animationDelay = "0s";
      container.appendChild(el);
      setTimeout(() => el.remove(), duration * 1000 + 500);
    }
   
    for (let i = 0; i < 8; i++) setTimeout(spawnBalloon, i * 500);
    setInterval(spawnBalloon, 1200);
  }
   
   
  /* ──────────────────────────────────────────────
     CAROUSEL
     ────────────────────────────────────────────── */
  function initCarousel() {
    const track   = document.getElementById("carousel-track");
    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");
    const dotsEl  = document.getElementById("carousel-dots");
    if (!track) return;
   
    const slides = track.querySelectorAll(".gallery-slide");
    let current = 0;
   
    // Build dots
    slides.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dot.addEventListener("click", () => goTo(i));
      dotsEl.appendChild(dot);
    });
   
    function goTo(idx) {
      current = (idx + slides.length) % slides.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      dotsEl.querySelectorAll(".dot").forEach((d,i) => d.classList.toggle("active", i === current));
    }
   
    prevBtn.addEventListener("click", () => goTo(current - 1));
    nextBtn.addEventListener("click", () => goTo(current + 1));
   
    // Auto play
    setInterval(() => goTo(current + 1), 4000);
   
    // Touch / swipe
    let touchStartX = 0;
    track.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, {passive:true});
    track.addEventListener("touchend",   e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    });
  }
   
   
  /* ──────────────────────────────────────────────
     LIGHTBOX
     ────────────────────────────────────────────── */
  function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lbImg    = document.getElementById("lightbox-img");
    const lbClose  = document.getElementById("lightbox-close");
    if (!lightbox) return;
   
    document.querySelectorAll(".gallery-card").forEach(card => {
      card.addEventListener("click", () => {
        const src = card.dataset.lightbox || card.querySelector("img").src;
        lbImg.src = src;
        lightbox.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      });
    });
   
    lbClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });
   
    function closeLightbox() {
      lightbox.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }
   
   
  /* ──────────────────────────────────────────────
     INTERACTIVE BALLOONS (cursor follow)
     ────────────────────────────────────────────── */
  function initInteractiveBalloons() {
    const zone = document.getElementById("balloon-zone");
    const hint = zone ? zone.querySelector(".interactive-hint") : null;
    if (!zone) return;
    const emojis = ["🎈","🌟","✨","🎉","💖","🎊","🌸","🦋","⭐","🥳"];
    let hintHidden = false;
   
    zone.addEventListener("mousemove", e => {
      if (!hintHidden) {
        if (hint) hint.style.opacity = "0";
        hintHidden = true;
      }
      const rect = zone.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spawnCursorBalloon(zone, x, y);
    });
   
    // Touch support
    zone.addEventListener("touchmove", e => {
      e.preventDefault();
      if (!hintHidden) { if (hint) hint.style.opacity = "0"; hintHidden = true; }
      const rect = zone.getBoundingClientRect();
      const touch = e.touches[0];
      spawnCursorBalloon(zone, touch.clientX - rect.left, touch.clientY - rect.top);
    }, {passive:false});
  }
   
  let lastSpawn = 0;
  function spawnCursorBalloon(container, x, y) {
    const now = Date.now();
    if (now - lastSpawn < 80) return;
    lastSpawn = now;
    const emojis = ["🎈","🌟","✨","🎉","💖","🎊","🌸","🦋","⭐","🥳"];
    const el = document.createElement("div");
    el.className = "cursor-balloon";
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = x + "px";
    el.style.top  = y + "px";
    el.style.fontSize = (Math.random() * 1.2 + 0.9) + "rem";
    container.appendChild(el);
    setTimeout(() => {
      el.style.transition = "all 0.8s ease";
      el.style.transform  = `translate(-50%, -${Math.random() * 60 + 40}px) scale(0)`;
      el.style.opacity    = "0";
    }, 50);
    setTimeout(() => el.remove(), 900);
  }
   
   
  /* ──────────────────────────────────────────────
     TYPED MESSAGE
     ────────────────────────────────────────────── */
  function initTypedMessage() {
    const container = document.getElementById("typed-message");
    if (!container) return;
   
    const text = CONFIG.message;
    let idx = 0;
    let hasStarted = false;
   
    const cursor = document.createElement("span");
    cursor.className = "cursor-blink";
    container.appendChild(cursor);
   
    function type() {
      if (idx < text.length) {
        const char = text[idx++];
        const textNode = document.createTextNode(char);
        container.insertBefore(textNode, cursor);
        setTimeout(type, char === "\n" ? 120 : 18);
      }
    }
   
    // Start when section is visible
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !hasStarted) {
        hasStarted = true;
        setTimeout(type, 400);
      }
    }, { threshold: 0.3 });
   
    observer.observe(document.getElementById("message"));
  }
   
   
  /* ──────────────────────────────────────────────
     SURPRISE LOCK
     ────────────────────────────────────────────── */
  function initSurpriseLock() {
    const unlockBtn  = document.getElementById("unlock-btn");
    const pwForm     = document.getElementById("password-form");
    const submitBtn  = document.getElementById("submit-btn");
    const pwInput    = document.getElementById("password-input");
    const errorMsg   = document.getElementById("error-msg");
    const reveal     = document.getElementById("surprise-reveal");
    const lockCard   = document.getElementById("lock-card");
    if (!unlockBtn) return;
   
    unlockBtn.addEventListener("click", () => {
      pwForm.classList.remove("hidden");
      unlockBtn.style.display = "none";
      pwInput.focus();
    });
   
    submitBtn.addEventListener("click", checkPassword);
    pwInput.addEventListener("keydown", e => { if (e.key === "Enter") checkPassword(); });
   
    function checkPassword() {
      const val = pwInput.value.trim();
      if (val === CONFIG.password) {
        // ✅ Correct
        errorMsg.classList.add("hidden");
        lockCard.style.transition = "all 0.5s ease";
        lockCard.style.opacity = "0";
        lockCard.style.transform = "scale(0.8)";
   
        setTimeout(() => {
          lockCard.style.display = "none";
          reveal.classList.remove("hidden");
          burstSurpriseConfetti();
        }, 500);
      } else {
        // ❌ Wrong
        errorMsg.classList.remove("hidden");
        pwInput.classList.add("shake");
        pwInput.value = "";
        setTimeout(() => pwInput.classList.remove("shake"), 600);
      }
    }
  }
   
  function burstSurpriseConfetti() {
    if (typeof confetti === "undefined") return;
    const end = Date.now() + 3000;
   
    (function frame() {
      confetti({ particleCount: 6, angle: 60,  spread: 55, origin: {x: 0, y: 0.6} });
      confetti({ particleCount: 6, angle: 120, spread: 55, origin: {x: 1, y: 0.6} });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }
   
   
  /* ──────────────────────────────────────────────
     FIREWORKS (celebration section)
     ────────────────────────────────────────────── */
  function initFireworks() {
    const canvas = document.getElementById("fireworks-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
   
    let W, H;
    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    resize();
    new ResizeObserver(resize).observe(canvas.parentElement);
   
    const COLORS = ["#ff4dac","#a855f7","#38bdf8","#fbbf24","#34d399","#fb923c","#fff"];
    const particles = [];
   
    function Firework(x, y) {
      this.x = x; this.y = y;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.sparks = Array.from({length: 55}, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1.5;
        return {
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          r: Math.random() * 2.5 + 0.5,
        };
      });
    }
   
    // Only animate when in view
    let inView = false;
    const observer = new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
    }, { threshold: 0.1 });
    observer.observe(canvas.parentElement);
   
    // Spawn fireworks periodically
    setInterval(() => {
      if (!inView) return;
      particles.push(new Firework(
        Math.random() * W,
        Math.random() * H * 0.7
      ));
    }, 800);
   
    (function draw() {
      requestAnimationFrame(draw);
      if (!inView) return;
      ctx.fillStyle = "rgba(5,5,15,0.2)";
      ctx.fillRect(0, 0, W, H);
   
      particles.forEach((fw, fi) => {
        let alive = false;
        fw.sparks.forEach(s => {
          if (s.alpha <= 0) return;
          alive = true;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fillStyle = fw.color;
          ctx.globalAlpha = s.alpha;
          ctx.fill();
          s.x += s.vx;
          s.y += s.vy + 0.04; // gravity
          s.vx *= 0.97;
          s.vy *= 0.97;
          s.alpha -= 0.018;
        });
        ctx.globalAlpha = 1;
        if (!alive) particles.splice(fi, 1);
      });
    })();
  }
   
   
  /* ──────────────────────────────────────────────
     BACKGROUND MUSIC
     ────────────────────────────────────────────── */
  function initMusic() {
    const btn  = document.getElementById("music-btn");
    const icon = document.getElementById("music-icon");
    if (!btn) return;
   
    // Using a royalty-free public domain birthday melody via CDN
    // Replace "src" with your own audio file path: "assets/audio/birthday.mp3"
    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0.35;
    // NOTE: Set your own audio file here, or leave blank for silent mode
    audio.src = "aaj-ki-party-song.mp3";
   
    let playing = false;
   
    btn.addEventListener("click", () => {
      if (!playing) {
        audio.play().then(() => {
          playing = true;
          icon.className = "fa-solid fa-pause";
          btn.classList.add("playing");
        }).catch(() => {
          // Autoplay blocked — let user try again
        });
      } else {
        audio.pause();
        playing = false;
        icon.className = "fa-solid fa-music";
        btn.classList.remove("playing");
      }
    });
  }
   
   
  /* ──────────────────────────────────────────────
     GSAP SCROLL ANIMATIONS (bonus polish)
     ────────────────────────────────────────────── */
  window.addEventListener("load", () => {
    if (typeof gsap === "undefined") return;
   
    gsap.registerPlugin(ScrollTrigger);
   
    // Gallery section glow reveal
    gsap.from("#gallery .section-header h2", {
      scrollTrigger: { trigger: "#gallery", start: "top 75%" },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
   
    // Wish cards stagger
    gsap.from(".wish-card", {
      scrollTrigger: { trigger: ".wishes-grid", start: "top 80%" },
      opacity: 0,
      y: 60,
      stagger: 0.12,
      duration: 0.9,
      ease: "power3.out",
    });
   
    // Lock section entrance
    gsap.from(".lock-card", {
      scrollTrigger: { trigger: "#surprise-lock", start: "top 70%" },
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "back.out(1.4)",
    });
   
    // Parallax shapes in message section
    gsap.to(".shape-1", {
      scrollTrigger: {
        trigger: "#message",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
      y: -120,
      x: 60,
    });
    gsap.to(".shape-2", {
      scrollTrigger: {
        trigger: "#message",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
      y: 80,
      x: -60,
    });
  });