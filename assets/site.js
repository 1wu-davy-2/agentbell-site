(function () {
  "use strict";

  var EN = {
    "meta.title": "AgentBell · Local notifications for Claude Code, Codex & Gemini CLI",
    "meta.description": "AgentBell is a Windows notification center that does one thing: when Claude Code, Codex, Gemini CLI or any agent finishes a turn, a pinned card lands in the corner of your screen. History, stats, agent-source filters, live sessions in Running, back-to-terminal, and a one-click runtime.",

    "a11y.skip": "Skip to content",
    "a11y.home": "AgentBell home",
    "a11y.nav": "Page navigation",
    "a11y.preview": "AgentBell notification center preview",
    "a11y.footer": "Footer navigation",
    "theme.toDark": "Switch to dark theme",
    "theme.toLight": "Switch to light theme",

    "nav.why": "Why",
    "nav.features": "Features",
    "nav.screens": "Screens",
    "nav.updates": "Updates",
    "nav.start": "Start",
    "nav.runtime": "Runtime",
    "nav.faq": "FAQ",
    "nav.download": "Download",

    "hero.eyebrow": "LOCAL NOTIFICATION CENTER · WINDOWS DESKTOP",
    "hero.title": "Agents clock out.<br><em>The bell calls.<br>You come back.</em>",
    "hero.lead": "A local notification center that does exactly one thing. When Claude Code, Codex, or Gemini CLI finishes a turn, a pinned card appears in the corner of your screen — no tab-switching, no missed last message.",
    "hero.cta": "Download for Windows",
    "hero.gh": "View on GitHub",
    "hero.note": "Single portable exe · ~58 MB · listens on 127.0.0.1 only",
    "hero.device": "AgentBell · Notification Center",
    "hero.deviceAlt": "AgentBell notification center: live sessions under Running, with status and source filters on the left",
    "hero.float.agent": "Claude Code",
    "hero.float.status": "Done",
    "hero.float.title": "Weekly report ready",
    "hero.float.meta": "12 pages · 8m30s",
    "hero.float.action": "Back to terminal",

    "why.label": "01 / WHY",
    "why.title": "You don't need<br>to watch it run.",
    "why.lead": "Agent work happens in a terminal, but waiting shouldn't own your attention. AgentBell does “it's done” well, and stays quiet the rest of the time.",
    "why.1.title": "Walk away if you like",
    "why.1.body": "Hand the task to the agent, take your time back. One alert per turn — never in the middle.",
    "why.2.title": "Sounds off only when it should",
    "why.2.body": "Quiet hours, fullscreen and meeting suppression, lock-screen retention, success-to-center-only — the bell knows when to hold back.",
    "why.3.title": "Back to the scene in one click",
    "why.3.body": "Even without a source hint, AgentBell traces the local connection back to the sender process; the card offers “Back to terminal” and brings the host window forward with keyboard focus.",

    "features.label": "02 / FEATURES",
    "features.title": "Small tool,<br>nothing missing.",
    "features.lead": "No orchestration, no model proxy, no data uploads. Just notifications, history, and getting back to the terminal — done well.",
    "feature.toast.title": "Pinned cards",
    "feature.toast.body": "Three popup modes, four skins, configurable placement on fullscreen — without stealing focus.",
    "feature.toast.sample": "Login page refactor done",
    "feature.toast.back": "Back to terminal →",
    "feature.center.title": "Notification center",
    "feature.center.body": "Stack status, search, and agent-source filters; recently active sessions flow into Running automatically. 1,000-item history with a 7-day trend.",
    "feature.launch.title": "Agent launcher",
    "feature.launch.body": "Detects and launches 11 agents, with chat/ beside the install as the default workspace.",
    "feature.launch.sample": "\"Fix the login flow\"",
    "feature.runtime.title": "Portable runtime",
    "feature.runtime.body": "One click installs Node LTS and 7 official agent CLIs — no system PATH changes.",
    "feature.focus.title": "Back to terminal",
    "feature.focus.body": "Auto-detects the sender process, walks the parent chain to the host window, and makes sure keyboard focus really lands — runs nothing.",
    "feature.local.title": "Local first",
    "feature.local.body": "HTTP bound to 127.0.0.1 only, history in local SQLite. No account, no telemetry.",

    "common.done": "Done",
    "common.running": "Running",

    "screens.label": "03 / SCREENS",
    "screens.title": "One window,<br>every receipt.",
    "screens.tablist": "Screenshots",
    "screens.tab.center": "Center",
    "screens.tab.stats": "Stats",
    "screens.tab.launcher": "Launcher",
    "screens.tab.runtime": "Runtime",
    "screens.tab.settings": "Settings",
    "screens.center.caption": "Status, agent-source, and search filters stack; active sessions flow into Running, with “Back to terminal” right on the card.",
    "screens.stats.caption": "Completion rate, average duration, and a 7-day trend, computed from local history.",
    "screens.launcher.caption": "Detection, project selection, and one-click launch for 11 agents.",
    "screens.runtime.caption": "Node, 7 CLIs, component status — install or uninstall from a single page.",
    "screens.settings.caption": "Appearance, interruption policy, self-update, rules, and external channels.",
    "screens.hint": "Screenshots use the isolated debug port 18776; the default is 127.0.0.1:8765.",
    "screens.alt.center": "Notification center with live sessions under Running",
    "screens.alt.stats": "Statistics",
    "screens.alt.launcher": "Agent launcher",
    "screens.alt.runtime": "Runtime",
    "screens.alt.settings": "Settings",

    "updates.label": "04 / UPDATES",
    "updates.title": "Recent fixes,<br>all about the wait.",
    "updates.lead": "From filters and source detection to Running, the last few releases removed the most common interruptions.",
    "updates.299.title": "Live sessions in Running",
    "updates.299.body": "Sessions written within the last two scan cycles appear as read-only cards under Running, with agent, project, last activity, and record count. They follow source filters and search, and never count toward All.",
    "updates.298.title": "Agent-source filter and update prefill",
    "updates.298.body": "Source moved to the title row, and a new source dropdown stacks with status and search. The installer now prefills the update repo and checks about 9 seconds after launch.",
    "updates.297.title": "“Back to terminal” now takes keyboard focus",
    "updates.297.body": "When Windows foreground lock refuses a plain raise, AgentBell tries attaching input queues and SwitchToThisWindow before falling back to a notice — only after you click.",
    "updates.295.title": "No more filter freeze; automatic source detection",
    "updates.295.body": "Switching status filters no longer hangs for about 10 seconds. When origin or source is missing, AgentBell traces the local connection to the sender process and fills it in.",
    "updates.latest": "Latest",
    "updates.more": "All releases",

    "start.label": "05 / START",
    "start.title": "Three steps,<br>and the bell takes over the wait.",
    "start.step1.title": "Download and double-click",
    "start.step1.body": "Drop AgentBell.exe into any writable folder and run it. If SmartScreen appears, choose “More info → Run anyway”.",
    "start.step2.title": "Set a token",
    "start.step2.body": "Open config.json next to the exe and fill in token; leave it empty to disable auth — local use only.",
    "start.step3.title": "Have your agent call /notify",
    "start.step3.body": "POST once at the end of a turn. The toolbar's “Copy agent instructions” hands the spec straight to your agent.",
    "start.terminal.title": "AGENT INSTRUCTIONS",
    "start.copy": "Copy",
    "start.copyAria": "Copy agent instructions",
    "start.terminal.note": "Agents can also send origin.pid and friends to get the back-to-terminal button.",
    "start.copied": "Copied",

    "runtime.label": "06 / RUNTIME",
    "runtime.title": "Node included,<br>so you don't have to.",
    "runtime.lead": "No Node setup required. On the Runtime page, one click installs official Node LTS and 7 agent CLIs into runtime/ beside the app.",
    "runtime.node": "Official LTS portable build · SHASUMS256 verified",
    "runtime.agents": "7 official npm CLIs · installed into runtime/agents",
    "runtime.cc": "Separate portable app — direct download link",
    "runtime.deepseek": "Injected into Claude Code as a provider preset",
    "runtime.note": "No admin rights · no system PATH changes · individual uninstall and re-check",
    "runtime.tree.node": "official LTS portable",
    "runtime.tree.agents": "7 official CLIs",
    "runtime.tree.cache": "npm cache",
    "runtime.tree.npmrc": "isolated npm config",
    "runtime.tree.tools": "versions and checksums",

    "privacy.label": "07 / BOUNDARIES",
    "privacy.title": "Notifications happen<br>only over 127.0.0.1.",
    "privacy.0.title": "Cloud dependencies",
    "privacy.0.body": "No account, no telemetry, no reporting.",
    "privacy.1.title": "The only listener",
    "privacy.1.body": "HTTP binds to loopback only; nothing is exposed to the LAN.",
    "privacy.2.title": "Local history",
    "privacy.2.body": "Notifications and stats stay on this machine, 1,000 items by default, clearable anytime.",

    "faq.label": "08 / FAQ",
    "faq.title": "You might be wondering.",
    "faq.q1": "Which agents are supported?",
    "faq.a1": "Detection and launching cover Claude Code, Claude Desktop, Codex, Gemini CLI, Grok Build, OpenCode, OpenClaw, Hermes, Pi, MiniMax Code, and Antigravity. The runtime only installs 7 of them — the official npm CLIs.",
    "faq.q2": "Does it need admin rights?",
    "faq.a2": "No. Node and the CLIs live in runtime/ beside the app; nothing is written to global system folders or the system PATH.",
    "faq.q3": "Is any data uploaded?",
    "faq.a3": "No. The HTTP service listens on 127.0.0.1 only, history lives in a local SQLite file, and there is no account, sync, or telemetry.",
    "faq.q4": "macOS / Linux support?",
    "faq.a4": "Toasts, the notification center, and the HTTP service run from source. The tray, global hotkeys, fullscreen/meeting detection, back-to-terminal, and portable Node are Windows-only. The runtime currently supports Windows only.",
    "faq.q5": "How do updates work?",
    "faq.a5": "The installer already points at 1wu-davy-2/AgentBell and checks about 9 seconds after launch; the tray and preferences can check manually. Updates download over GitHub HTTPS only, verify size and SHA-256, then replace on exit, back up, and restart. In source mode it downloads the installer but never replaces the running Python process.",
    "faq.q7": "What are the live sessions under Running?",
    "faq.a7": "If a scanned session was written to within the last two scan cycles (240 seconds by default), it appears as a read-only card under Running so you can see which agents are still working. It is not written to history, never counts toward All, and hides when scanning is off.",
    "faq.q6": "Why no web version?",
    "faq.a6": "AgentBell is deliberately a native PySide6 window: closer to the desktop, less intrusive, and no browser tab to keep around.",

    "cta.title": "Next time your agent clocks out,<br><em>let the bell look.</em>",
    "cta.sub": "Windows 10 / 11 · v2.9.9 · MIT License",
    "cta.download": "Download for Windows",
    "cta.gh": "View on GitHub",

    "footer.tag": "A local notification center, made for AI agents.",
    "footer.source": "Source",
    "footer.releases": "Releases",
    "footer.readme": "Docs",
    "footer.en": "English README",
    "footer.license": "MIT License · © 2026 1wu-davy-2",
    "footer.note": "No third-party scripts · no tracking"
  };

  var root = document.documentElement;
  var langBtn = document.getElementById("langBtn");
  var themeBtn = document.getElementById("themeBtn");
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  var THEME_KEY = "agentbell-site-theme";
  var elements = [].slice.call(
    document.querySelectorAll("[data-i18n],[data-i18n-html],[data-i18n-attr],[data-i18n-aria]")
  );
  var originalTitle = document.title;
  var originals = new WeakMap();

  elements.forEach(function (el) {
    var record = {};
    if (el.hasAttribute("data-i18n")) record.text = el.textContent;
    if (el.hasAttribute("data-i18n-html")) record.html = el.innerHTML;
    if (el.hasAttribute("data-i18n-aria")) record.aria = el.getAttribute("aria-label");
    if (el.hasAttribute("data-i18n-attr")) {
      record.attrs = el
        .getAttribute("data-i18n-attr")
        .split(",")
        .map(function (pair) {
          var split = pair.indexOf(":");
          var name = pair.slice(0, split).trim();
          var key = pair.slice(split + 1).trim();
          return [name, key, el.getAttribute(name)];
        })
        .filter(function (entry) {
          return entry[0] && entry[1];
        });
    }
    originals.set(el, record);
  });

  function readStoredLang() {
    try {
      var saved = window.localStorage.getItem("agentbell-site-lang");
      if (saved === "en" || saved === "zh") return saved;
    } catch (error) {
      /* storage can be unavailable; fall back to Chinese */
    }
    return "zh";
  }

  function syncThemeButton(langCode) {
    if (!themeBtn) return;
    var dark = root.getAttribute("data-theme") === "dark";
    var label =
      langCode === "en"
        ? dark
          ? EN["theme.toLight"]
          : EN["theme.toDark"]
        : dark
          ? "切换到浅色主题"
          : "切换到深色主题";
    themeBtn.setAttribute("aria-label", label);
    themeBtn.setAttribute("title", label);
  }

  function applyTheme(theme, persist) {
    var next = theme === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    if (themeMeta) {
      themeMeta.setAttribute("content", next === "dark" ? "#080B10" : "#F6F5F1");
    }
    syncThemeButton(lang);
    if (persist === false) return;
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch (error) {
      /* ignore */
    }
  }

  function applyLanguage(lang) {
    var en = lang === "en";
    root.lang = en ? "en" : "zh-CN";
    document.title = en ? EN["meta.title"] : originalTitle;

    elements.forEach(function (el) {
      var record = originals.get(el);
      if (!record) return;
      if (record.text !== undefined) {
        var text = en ? EN[el.getAttribute("data-i18n")] : record.text;
        if (text !== undefined) el.textContent = text;
      }
      if (record.html !== undefined) {
        var html = en ? EN[el.getAttribute("data-i18n-html")] : record.html;
        if (html !== undefined) el.innerHTML = html;
      }
      if (record.aria !== undefined) {
        var aria = en ? EN[el.getAttribute("data-i18n-aria")] : record.aria;
        if (aria !== undefined) el.setAttribute("aria-label", aria);
      }
      if (record.attrs) {
        record.attrs.forEach(function (entry) {
          var value = en ? EN[entry[1]] : entry[2];
          if (value !== null && value !== undefined) el.setAttribute(entry[0], value);
        });
      }
    });

    if (langBtn) {
      langBtn.textContent = en ? "中文" : "EN";
      langBtn.setAttribute("aria-label", en ? "切换到中文" : "Switch to English");
    }

    syncThemeButton(lang);

    try {
      window.localStorage.setItem("agentbell-site-lang", lang);
    } catch (error) {
      /* ignore */
    }
  }

  var lang = readStoredLang();
  applyLanguage(lang);

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      lang = lang === "zh" ? "en" : "zh";
      applyLanguage(lang);
    });
  }

  var theme = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  applyTheme(theme, false);

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      theme = theme === "dark" ? "light" : "dark";
      applyTheme(theme);
    });
  }

  /* ---------- screenshot tabs ---------- */
  var tablist = document.querySelector(".tab-list");
  if (tablist) {
    var tabs = [].slice.call(tablist.querySelectorAll('[role="tab"]'));
    var panels = tabs.map(function (tab) {
      return document.getElementById(tab.getAttribute("aria-controls"));
    });

    var activateTab = function (tab, moveFocus) {
      tabs.forEach(function (item, index) {
        var on = item === tab;
        item.classList.toggle("is-active", on);
        item.setAttribute("aria-selected", on ? "true" : "false");
        item.tabIndex = on ? 0 : -1;
        var panel = panels[index];
        if (!panel) return;
        panel.hidden = !on;
        if (on) {
          panel.classList.remove("is-active");
          void panel.offsetWidth;
          panel.classList.add("is-active");
        } else {
          panel.classList.remove("is-active");
        }
      });
      if (moveFocus) tab.focus();
    };

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        activateTab(tab, false);
      });
      tab.addEventListener("keydown", function (event) {
        var next = null;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = tabs.length - 1;
        if (next === null) return;
        event.preventDefault();
        activateTab(tabs[next], true);
      });
    });
  }

  /* ---------- copy agent instructions ---------- */
  var copyBtn = document.getElementById("copyBtn");
  var code = document.getElementById("code");
  var copiedToast = document.getElementById("toastCopied");
  var copiedTimer = null;

  function legacyCopy(text) {
    return new Promise(function (resolve, reject) {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.top = "-1000px";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      var ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (error) {
        ok = false;
      }
      area.remove();
      if (ok) resolve();
      else reject(new Error("copy failed"));
    });
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () {
        return legacyCopy(text);
      });
    }
    return legacyCopy(text);
  }

  if (copyBtn && code) {
    copyBtn.addEventListener("click", function () {
      copyText(code.innerText.trim())
        .then(function () {
          if (!copiedToast) return;
          copiedToast.hidden = false;
          window.clearTimeout(copiedTimer);
          copiedTimer = window.setTimeout(function () {
            copiedToast.hidden = true;
          }, 1800);
        })
        .catch(function () {
          var selection = window.getSelection();
          if (!selection) return;
          var range = document.createRange();
          range.selectNodeContents(code);
          selection.removeAllRanges();
          selection.addRange(range);
        });
    });
  }

  /* ---------- top bar state + active nav ---------- */
  var topbar = document.querySelector(".topbar");
  var navLinks = [].slice.call(document.querySelectorAll(".nav-links a"));
  var sections = navLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);
  var queued = false;

  function syncScroll() {
    queued = false;
    if (topbar) topbar.classList.toggle("scrolled", window.scrollY > 8);
    var marker = window.scrollY + window.innerHeight * 0.32;
    var activeId = null;
    sections.forEach(function (section) {
      if (section.offsetTop <= marker) activeId = section.id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + activeId);
    });
  }

  function requestScrollSync() {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(syncScroll);
  }

  window.addEventListener("scroll", requestScrollSync, { passive: true });
  window.addEventListener("resize", requestScrollSync);
  syncScroll();

  /* ---------- scroll reveal ---------- */
  var revealItems = [].slice.call(document.querySelectorAll("[data-reveal]"));
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  }
})();
