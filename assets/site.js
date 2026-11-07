(function () {
  "use strict";

  var EN = {
    "meta.title": "AgentBell · Local notifications for Claude Code, Codex & Gemini CLI",
    "meta.description": "AgentBell is a Windows / macOS / Linux local desktop notification center that does one thing: when Claude Code, Codex, Gemini CLI or any agent finishes, or gets stuck on permission, a question, or rate limits, a pinned card lands in the corner. Windows and macOS also get global hotkeys, back-to-terminal, fullscreen and idle detection, and a tray; Wayland uses the XDG portal for hotkeys. Waiting reasons, run timelines, read-only actions, rule routing, field search, archived history, and stats all stay on 127.0.0.1.",

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

    "hero.eyebrow": "LOCAL NOTIFICATION CENTER · WINDOWS / MACOS / LINUX",
    "hero.title": "Agents clock out.<br><em>The bell calls.<br>You come back.</em>",
    "hero.lead": "A local notification center that does exactly one thing. When Claude Code, Codex, or Gemini CLI finishes a turn — or gets stuck on permission, a question, or a rate limit — a pinned card appears in the corner. Replay the run timeline, open the session, and route by reason or project.",
    "hero.cta": "Download for Windows / macOS / Linux",
    "hero.gh": "View on GitHub",
    "hero.note": "Windows x64 / arm64 · macOS 14+ · Linux x64 / arm64 · listens on 127.0.0.1 only",
    "hero.device": "AgentBell · Notification Center",
    "hero.deviceAlt": "AgentBell notification center: permission, question, and rate-limit waits shown together, with status and source filters on the left",
    "hero.float.agent": "Claude Code",
    "hero.float.status": "Waiting",
    "hero.float.title": "Approval needed: npm install",
    "hero.float.meta": "Permission · 2m",
    "hero.float.action": "View record",

    "why.label": "01 / WHY",
    "why.title": "You don't need<br>to watch it run.",
    "why.lead": "Agent work happens in a terminal, but waiting shouldn't own your attention. AgentBell does “it's done” well, and stays quiet the rest of the time.",
    "why.1.title": "Walk away if you like",
    "why.1.body": "Hand the task to the agent, take your time back. One alert per turn — never in the middle.",
    "why.2.title": "Sounds off only when it should",
    "why.2.body": "Quiet hours, fullscreen and meeting suppression, lock-screen retention, success-to-center-only — the bell knows when to hold back.",
    "why.3.title": "Back to the scene in one click",
    "why.3.body": "Even without a source hint, AgentBell traces the local connection back to the sender process; the card offers “Back to terminal” and brings the host window forward with keyboard focus.",
    "why.4.title": "A receipt when it gets stuck",
    "why.4.body": "Waiting for permission, an answer, or a rate limit is no longer silence. The card names the reason, the run timeline records start, wait, resume, and finish — and only what needs you escalates.",

    "features.label": "02 / FEATURES",
    "features.title": "Small tool,<br>nothing missing.",
    "features.lead": "No orchestration, no model proxy, no data uploads. Notifications, waits, timelines, and rule routing all stay on this machine.",
    "feature.toast.title": "Pinned cards",
    "feature.toast.body": "Three popup modes and four skins; the fullscreen overlay covers every display, with the card placed where you configure it — or keep the card on the primary display and leave only the backdrop on the rest.",
    "feature.toast.sample": "Login page refactor done",
    "feature.toast.back": "Back to terminal →",
    "feature.center.title": "Notification center",
    "feature.center.body": "Stack status, field search, and agent-source filters; recently active sessions flow into Running automatically. 1,000-item history with 7/30/90-day stats, CSV export, batch archive, and grouping.",
    "feature.launch.title": "Agent launcher",
    "feature.launch.body": "Detects and launches 11 agents, with chat/ beside the install as the default workspace.",
    "feature.launch.sample": "\"Fix the login flow\"",
    "feature.runtime.title": "Portable runtime",
    "feature.runtime.body": "One click installs Node LTS and 7 official agent CLIs — no system PATH changes.",
    "feature.focus.title": "Back to terminal",
    "feature.focus.body": "Auto-detects the sender process, walks the parent chain to the host window, and makes sure keyboard focus really lands — runs nothing.",
    "feature.local.title": "Local first",
    "feature.local.body": "HTTP bound to 127.0.0.1 only, history in local SQLite. No account, no telemetry.",
    "feature.wait.title": "Waiting alerts",
    "feature.wait.body": "Permission, questions, rate limits, and context overflows each name their reason. Inferred tail states are marked; Running can show only waiting sessions.",
    "feature.wait.pill1": "Permission",
    "feature.wait.pill2": "Question",
    "feature.wait.pill3": "Rate limit",
    "feature.timeline.title": "Timeline & read-only actions",
    "feature.timeline.body": "Start, wait, resume, and finish form one run. “View record” and “Timeline” open local details only — no commands are executed.",
    "feature.timeline.step1": "Start",
    "feature.timeline.step2": "Wait",
    "feature.timeline.step3": "Resume",
    "feature.timeline.step4": "Finish",
    "feature.rules.title": "Rule routing",
    "feature.rules.body": "Match by wait reason, needs_input, duration, and project to override priority, acknowledgement, and channels — effective as soon as you save, with a test run that shows which rule a sample notification matches.",

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
    "screens.center.caption": "The waiting reason sits right on the card; status, agent-source, and search filters stack, so sessions needing input stand out.",
    "screens.stats.caption": "Completion rate, average duration, and 7/30/90-day trends with CSV export; run timelines add run success, P50/P90, and total waiting.",
    "screens.launcher.caption": "Detection, project selection, and one-click launch for 11 agents.",
    "screens.runtime.caption": "Node, 7 CLIs, component status — install or uninstall from a single page.",
    "screens.settings.caption": "Appearance, interruption policy, self-update, rules, and external channels.",
    "screens.hint": "Screenshots use the isolated debug port 18776; the default is 127.0.0.1:8765.",
    "screens.alt.center": "Notification center with permission, question, and rate-limit waits",
    "screens.alt.stats": "Statistics",
    "screens.alt.launcher": "Agent launcher",
    "screens.alt.runtime": "Runtime",
    "screens.alt.settings": "Settings",

    "updates.label": "04 / UPDATES",
    "updates.title": "Nine releases,<br>from waiting to three platforms.",
    "updates.lead": "2.13 named the wait, 2.14 wired up hooks, 2.15 tidied multi-display cards, 2.16 brought the alerts to Linux, 2.17 added AppImage, deb, and rpm, 2.18 reaches Windows ARM64 and macOS, 2.18.1 fixes the arm64 tests, 2.18.2 completes the checksums, and 2.19 fills in sessions, search, archiving, and platform signing.",
    "updates.2190.title": "Sessions, search, and platform parity",
    "updates.2190.body": "The session page adds Codex, Gemini, Grok, and OpenCode's database as sources, and waiting inference now covers the first three. Search accepts status:, source:, priority:, session:, run:, and ack: field filters; statistics add 7/30/90-day ranges and CSV export; notifications can be batch-archived and grouped by date or source; the tray gains quick Do Not Disturb, and rules gain a test run. macOS adds global hotkeys, back-to-terminal, idle/fullscreen/meeting/lock inference, portable Node, and in-place zip updates; Wayland registers hotkeys through the XDG portal; CI supports Windows Authenticode, macOS Developer ID signing, notarization, and stapling.",
    "updates.2182.title": "Complete checksums",
    "updates.2182.body": "Fixes the release checksums: the Windows x64 and arm64 packaging jobs both wrote SHA256SUMS.txt, so the merged file lost AgentBell-arm64.exe and its versioned copy. Each architecture now writes SHA256SUMS-windows-arch.txt, and the merged SHA256SUMS.txt covers all 16 downloadable assets, including Windows ARM64. Behavior matches 2.18.1.",
    "updates.2181.title": "arm64 test fixes",
    "updates.2181.body": "Fixes the tests on arm64 build hosts: updater and asset-selection cases no longer rely on the host architecture, passing machine explicitly so both x64 and arm64 selection rules are covered; the time-formatting case now converts older timestamps across DST. Behavior matches 2.18.0, which was never published because its arm64 tests failed; 2.18.1 completes the Windows x64/ARM64, macOS, and Linux dual-architecture release.",
    "updates.2180.title": "Windows ARM64 and macOS builds",
    "updates.2180.body": "Windows now ships a native Arm64 AgentBell-arm64.exe alongside the x64 AgentBell.exe; the updater picks the asset that matches the running architecture and never swaps them. macOS gets Intel and Apple Silicon dmg/zip builds, with config, logs, and the database in ~/Library/Application Support/AgentBell while the app bundle stays read-only. macOS keeps the tray, cards, notification center, history, sounds, and hooks, but not global hotkeys, back-to-terminal, idle/fullscreen inference, portable Node, or in-place updates; a new version opens the Release page. Linux also gains notification sounds and a native port-conflict hint.",
    "updates.2171.title": "Four Linux package formats",
    "updates.2171.body": "Both x64 and arm64 now ship tar.gz, AppImage, deb, and rpm: the tarball runs after extraction and still updates in place, the AppImage runs as a single file after chmod +x, and deb / rpm installs are managed by the system package manager. All four formats come from one CI pipeline with SHA-256 checksums. AppImage and system-package installs no longer attempt in-place updates; download a new package or upgrade with the package manager. The v2.17.0 tag was never published because its CI run failed; 2.17.1 fixes AppImage tool path resolution and a test timing boundary without changing behavior.",
    "updates.2161.title": "Linux x64 / arm64 builds",
    "updates.2161.body": "AgentBell now ships portable Linux builds: download AgentBell-linux-x64.tar.gz or AgentBell-linux-arm64.tar.gz and run ./AgentBell after extracting — no Python or Qt install needed. X11 sessions get global hotkeys, back-to-terminal with window focus, fullscreen and meeting detection, lock/idle detection, the tray, agent terminal launching, and hook integration. On Wayland, popups, the notification center, and the tray still work, while global hotkeys, window focus, and fullscreen/idle detection fall back with a notice. 2.16.1 fixes Linux test coverage and cross-platform path parsing; behavior matches 2.16.0.",
    "updates.2150.title": "Fullscreen cards on the primary display only",
    "updates.2150.body": "Overlay mode still covers every display, and a new option keeps the fullscreen card on the primary display only: secondary screens show just the backdrop. Confirming on any screen, clicking any backdrop, or timing out closes them all together.",
    "updates.2140.title": "One-click agent notification hooks",
    "updates.2140.body": "The Runtime page now connects waiting and finished hooks for Claude Code, Gemini CLI, and Grok in one click, with Codex connected through notify. Changes can be previewed before writing, are backed up automatically, and can be undone in one click.",
    "updates.2130.title": "Rules route by reason, duration, and project",
    "updates.2130.body": "Rules now match wait reason, needs_input, min/max duration, and project. Tasks waiting on permission, coming from a project, or running over 10 minutes can raise priority, require acknowledgement, and switch channels. Saved rules apply immediately, including to locally inferred waits.",
    "updates.2120.title": "“View record” and “Timeline” read-only actions",
    "updates.2120.body": "Notifications can declare session and timeline actions; popups and the center open the local session or run directly. Both read only the notification's own session_id / run_id, ignore external values, run no commands, and never grant approval.",
    "updates.2110.title": "One run, one timeline",
    "updates.2110.body": "Start, wait, resume, and finish for the same run_id are appended to run_events. Cards replay stages and durations; stats add run count, run success rate, P50/P90 duration, and total waiting.",
    "updates.2100.title": "Waiting input now has a reason",
    "updates.2100.body": "Permission, questions, rate limits, and context overflows are labelled on the card, and Running can show only waiting sessions. Explicit /notify reports and read-only inference from Claude Code / Qoder session tails are both supported; inferred states are marked.",
    "updates.2910.title": "Update-ready on first run",
    "updates.2910.body": "The generated config.json now points at 1wu-davy-2/AgentBell with the startup check on, so a fresh download checks Releases about 9 seconds after launch. Existing configs with an empty repo are left untouched.",
    "updates.latest": "Latest",
    "updates.more": "All releases",
    "posters.count": "2.13.0 / 2 posters",
    "posters.lead": "Two posters for 2.13.0. Click to open full size.",
    "posters.a": "Waiting comes with a receipt.",
    "posters.b": "The agent waits. You don’t.",
    "posters.alt.a": "AgentBell 2.13.0 poster: waiting, with a receipt.",
    "posters.alt.b": "AgentBell 2.13.0 poster: the agent waits, you don’t.",

    "start.label": "05 / START",
    "start.title": "Three steps,<br>and the bell takes over the wait.",
    "start.step1.title": "Download and run",
    "start.step1.body": "On Windows, download AgentBell.exe (x64) or AgentBell-arm64.exe, drop it into any writable folder, and double-click it; if SmartScreen appears, choose “More info → Run anyway”. On macOS, download the dmg for your architecture, drag AgentBell.app into Applications, and right-click → Open on first launch. On Linux, choose tar.gz (extract and run ./AgentBell), AppImage (chmod +x and run), or deb / rpm (install with apt / dnf); every format ships for both architectures.",
    "start.step2.title": "Set a token",
    "start.step2.body": "Open config.json next to the exe and fill in token; leave it empty to disable auth — local use only.",
    "start.step3.title": "Have your agent call /notify",
    "start.step3.body": "POST once at the end of a turn. The toolbar's “Copy agent instructions” hands the spec straight to your agent.",
    "start.terminal.title": "AGENT INSTRUCTIONS",
    "start.copy": "Copy",
    "start.copyAria": "Copy agent instructions",
    "start.terminal.note": "wait_reason drives waiting alerts, run_id and phase build the timeline, and origin.pid gets you the back-to-terminal button.",
    "start.copied": "Copied",

    "runtime.label": "06 / RUNTIME",
    "runtime.title": "Node included,<br>so you don't have to.",
    "runtime.lead": "No Node setup required. On the Runtime page, one click installs official Node LTS and 7 agent CLIs into runtime/ beside the app. macOS and Linux install the same runtime from tar.xz archives, with the same folder layout as Windows.",
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
    "faq.q4": "Which systems are supported?",
    "faq.a4": "Windows x64 / arm64, macOS 14+ (Intel and Apple Silicon), and Linux x64 / arm64. Windows and macOS have the full feature set, including global hotkeys, back-to-terminal, idle/fullscreen/meeting/lock inference, portable Node, and in-place updates; back-to-terminal on macOS needs accessibility permission. Linux ships as tar.gz, AppImage, deb, and rpm: X11 sessions match those desktop capabilities, while Wayland registers hotkeys through the XDG GlobalShortcuts portal but does not let apps raise other windows, so focus entries explain the limitation.",
    "faq.q11": "Does the fullscreen alert appear on every display?",
    "faq.a11": "By default, yes. Overlay mode covers each display with the same card, and you can enable “card on primary display only” so secondary screens show just the backdrop. Confirming, clicking any backdrop, or timing out closes them all. Corner and center modes stay on the primary display.",
    "faq.q5": "How do updates work?",
    "faq.a5": "The first-run config.json already points at 1wu-davy-2/AgentBell with the startup check enabled; AgentBell checks about 9 seconds after launch, and the tray and preferences can check manually. Updates download over GitHub HTTPS only, verify size and SHA-256, then replace on exit, back up, and restart. Windows, macOS, and portable Linux builds update in place; macOS uses the release zip. AppImage and deb / rpm installs do not update in place — download a new package or upgrade with apt / dnf. In source mode it downloads the installer but never replaces the running Python process.",
    "faq.q7": "What are the live sessions under Running?",
    "faq.a7": "If a scanned session was written to within the last two scan cycles (240 seconds by default), it appears as a read-only card under Running so you can see which agents are still working. It is not written to history, never counts toward All, and hides when scanning is off.",
    "faq.q8": "Are waiting alerts detected automatically?",
    "faq.a8": "Both paths work: agents can explicitly report needs_input and wait_reason through /notify; with session scanning on, AgentBell can also infer them locally from the tails of Claude Code, Qoder, Codex, Gemini, and Grok sessions. Inferred states are marked, the session files are only read, never written.",
    "faq.q9": "What can rules route?",
    "faq.a9": "Rules match wait reason, needs_input, duration range, and project, then override priority, acknowledgement, quiet-hour bypass, popup mode, and external channels. Project is the last segment of the working directory, case-insensitive; later matching rules override scalar fields, channels accumulate, and saving applies immediately.",
    "faq.q10": "Do “View record” and “Timeline” run commands?",
    "faq.a10": "No. Both actions read only the notification's own session_id or run_id and open a local session record or run timeline. They ignore external values, never call a shell, and offer no approval, auto-continue, or prompt sending.",
    "faq.q6": "Why no web version?",
    "faq.a6": "AgentBell is deliberately a native PySide6 window: closer to the desktop, less intrusive, and no browser tab to keep around.",

    "cta.title": "Next time your agent clocks out,<br><em>let the bell look.</em>",
    "cta.sub": "Windows x64 / arm64 · macOS 14+ · Linux x64 / arm64 · v2.19.0 · MIT License",
    "cta.download": "Download for Windows / macOS / Linux",
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
