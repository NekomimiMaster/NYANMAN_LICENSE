/* =========================================================
 * NYANMAN LICENSE — アプリ本体
 * ---------------------------------------------------------
 * 役割:
 *   1) js/i18n/*.js のデータから全コンテンツを描画する
 *   2) 言語切替（国旗ボタン・localStorage・?lang= 対応）
 *   3) 規約内検索（一致するブロックだけを表示・<mark>強調）
 *   4) テーマ切替（ライト/ダーク）
 * 言語を追加する時は LANG_ORDER に言語コードを足し、
 * js/i18n/<code>.js を用意して index.html で読み込むだけ。
 * ========================================================= */
(function () {
  "use strict";

  var I18N = window.NYANMAN_I18N || {};
  var LANG_ORDER = ["ja", "en", "ko", "zh-CN", "zh-TW"];
  var LANGS = LANG_ORDER.filter(function (l) { return I18N[l]; });
  var STORE_LANG = "nyanman-license-lang";
  var STORE_THEME = "nyanman-license-theme";
  var SVG_NS = "http://www.w3.org/2000/svg";

  var STATUS = {
    ok:   { icon: "st-ok",   key: "statusOk" },
    ng:   { icon: "st-ng",   key: "statusNg" },
    cond: { icon: "st-cond", key: "statusCond" },
    ask:  { icon: "st-ask",  key: "statusAsk" },
    opt:  { icon: "st-opt",  key: "statusOpt" },
    note: { icon: "st-note", key: "statusNote" },
  };

  /* ---------- 小道具 ---------- */

  function store(key, val) {
    try {
      if (val === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, val);
    } catch (e) { return null; }
  }

  function el(tag, attrs) {
    var n = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === "class") n.className = v;
        else n.setAttribute(k, v === true ? "" : String(v));
      });
    }
    for (var i = 2; i < arguments.length; i++) {
      appendKid(n, arguments[i]);
    }
    return n;
  }

  function appendKid(n, kid) {
    if (kid === null || kid === undefined || kid === false) return;
    if (Array.isArray(kid)) { kid.forEach(function (k) { appendKid(n, k); }); return; }
    n.appendChild(kid.nodeType ? kid : document.createTextNode(String(kid)));
  }

  function svgIcon(id, cls) {
    var s = document.createElementNS(SVG_NS, "svg");
    s.setAttribute("class", cls || "icon");
    s.setAttribute("aria-hidden", "true");
    var u = document.createElementNS(SVG_NS, "use");
    u.setAttribute("href", "#" + id);
    s.appendChild(u);
    return s;
  }

  function statusBadge(status, ui) {
    var st = STATUS[status] || STATUS.ok;
    return el("span", { class: "badge st-" + status },
      svgIcon(st.icon, "icon"), el("span", null, ui[st.key]));
  }

  function anchorLink(id) {
    return el("a", { class: "anchor", href: "#" + id, "aria-label": "#" + id },
      svgIcon("ic-link", "icon"));
  }

  /* ---------- 検索用の文字正規化（NFKC + 小文字化 + カタカナ→ひらがな） ---------- */

  function foldChar(ch) {
    var s;
    try { s = ch.normalize("NFKC").toLowerCase(); } catch (e) { s = ch; }
    var out = "";
    for (var i = 0; i < s.length; i++) {
      var cc = s.charCodeAt(i);
      out += (cc >= 0x30a1 && cc <= 0x30f6) ? String.fromCharCode(cc - 0x60) : s.charAt(i);
    }
    return out;
  }

  function norm(str) {
    var out = "";
    for (var i = 0; i < str.length; i++) out += foldChar(str.charAt(i));
    return out;
  }

  function highlight(root, qn) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    var nd;
    while ((nd = walker.nextNode())) { if (nd.nodeValue.trim()) nodes.push(nd); }
    nodes.forEach(function (node) {
      var text = node.nodeValue;
      var normStr = "";
      var map = [];
      for (var i = 0; i < text.length; i++) {
        var f = foldChar(text.charAt(i));
        for (var j = 0; j < f.length; j++) map.push(i);
        normStr += f;
      }
      var ranges = [];
      var idx = normStr.indexOf(qn);
      while (idx !== -1) {
        ranges.push([map[idx], map[idx + qn.length - 1] + 1]);
        idx = normStr.indexOf(qn, idx + qn.length);
      }
      if (!ranges.length) return;
      var merged = [];
      ranges.forEach(function (r) {
        var last = merged[merged.length - 1];
        if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1]);
        else merged.push(r.slice());
      });
      var frag = document.createDocumentFragment();
      var pos = 0;
      merged.forEach(function (r) {
        if (r[0] > pos) frag.appendChild(document.createTextNode(text.slice(pos, r[0])));
        var m = document.createElement("mark");
        m.textContent = text.slice(r[0], r[1]);
        frag.appendChild(m);
        pos = r[1];
      });
      if (pos < text.length) frag.appendChild(document.createTextNode(text.slice(pos)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  /* ---------- 言語 ---------- */

  function detectLang() {
    var p = new URLSearchParams(location.search).get("lang");
    if (p && I18N[p]) return p;
    var saved = store(STORE_LANG);
    if (saved && I18N[saved]) return saved;
    var navLangs = navigator.languages || [navigator.language || "ja"];
    for (var i = 0; i < navLangs.length; i++) {
      var l = String(navLangs[i]);
      if (I18N[l]) return l;
      var low = l.toLowerCase();
      if (low.indexOf("ja") === 0) return "ja";
      if (low.indexOf("ko") === 0) return "ko";
      if (low === "zh-tw" || low === "zh-hk" || low.indexOf("zh-hant") === 0) return "zh-TW";
      if (low.indexOf("zh") === 0) return "zh-CN";
      if (low.indexOf("en") === 0) return "en";
    }
    return "ja";
  }

  var current = detectLang();
  var blocks = [];   // { el, html } — 検索対象ブロック
  var sections = []; // トップレベルセクション

  /* ---------- 描画 ---------- */

  function render() {
    var d = I18N[current];
    var ui = d.ui;
    document.documentElement.lang = d.meta.htmlLang;
    document.title = d.meta.docTitle;
    var descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute("content", d.meta.description);

    // ヒーロー
    text("heroEyebrow", d.hero.eyebrow);
    text("heroTitle", d.hero.title);
    text("heroLead", d.hero.lead);
    var badges = document.getElementById("heroBadges");
    badges.textContent = "";
    d.hero.badges.forEach(function (b) { badges.appendChild(el("span", { class: "hero-badge" }, b)); });
    text("ctaQuick", d.hero.ctaQuick);
    text("ctaTerms", d.hero.ctaTerms);

    // ナビ
    var chips = document.getElementById("navChips");
    chips.textContent = "";
    [["#quick", ui.navQuick], ["#terms", ui.navTerms], ["#conds", ui.navConds], ["#qa", ui.navQa], ["#info", ui.navInfo]]
      .forEach(function (pair) { chips.appendChild(el("a", { class: "chip", href: pair[0] }, pair[1])); });

    // 検索欄
    var input = document.getElementById("searchInput");
    input.placeholder = ui.searchPlaceholder;
    input.setAttribute("aria-label", ui.searchLabel);
    document.getElementById("searchClear").setAttribute("aria-label", ui.searchClear);
    document.getElementById("themeToggle").setAttribute("aria-label", ui.themeToggle);

    // 参考訳バナー
    var notice = document.getElementById("langNotice");
    notice.textContent = "";
    if (ui.langNotice) {
      notice.appendChild(svgIcon("st-note", "icon"));
      notice.appendChild(el("span", null, ui.langNotice));
      notice.hidden = false;
    } else {
      notice.hidden = true;
    }

    // 本文
    var app = document.getElementById("app");
    app.textContent = "";
    app.appendChild(renderQuick(d));
    app.appendChild(renderTerms(d));
    app.appendChild(renderConds(d));
    app.appendChild(renderQa(d));
    app.appendChild(renderInfo(d));

    // フッター
    var foot = document.getElementById("footLines");
    foot.textContent = "";
    d.footer.lines.forEach(function (line) { foot.appendChild(el("p", null, line)); });

    // 検索インデックスを作り直す
    blocks = Array.prototype.map.call(app.querySelectorAll("[data-search]"), function (b) {
      return { el: b, html: b.innerHTML };
    });
    sections = Array.prototype.slice.call(app.querySelectorAll("section.sec"));

    updateLangButtons();
  }

  function text(id, s) {
    var n = document.getElementById(id);
    if (n) n.textContent = s;
  }

  function secHeader(num, title) {
    return el("h2", { class: "sec-title" },
      el("span", { class: "sec-num" }, num),
      el("span", null, title));
  }

  // 01 早見表
  function renderQuick(d) {
    var ui = d.ui;
    var sec = el("section", { class: "sec", id: "quick" }, secHeader(d.quick.num, d.quick.title));
    sec.appendChild(el("p", { class: "sec-note" }, svgIcon("st-note", "icon"), el("span", null, d.quick.note)));

    var legend = el("div", { class: "legend" }, el("span", { class: "legend-title" }, ui.legendTitle));
    Object.keys(STATUS).forEach(function (s) { legend.appendChild(statusBadge(s, ui)); });
    sec.appendChild(legend);

    var grid = el("div", { class: "quick-grid" });
    d.quick.groups.forEach(function (g) {
      var card = el("div", { class: "card", "data-search": "" }, el("h3", { class: "card-title" }, g.title));
      var ul = el("ul", { class: "quick-list" });
      g.items.forEach(function (it) {
        var href = it.id.charAt(0) === "X" ? "#notes" : "#item-" + it.id;
        var li = el("li", null,
          el("a", { class: "quick-item", href: href },
            el("span", { class: "quick-ic" }, svgIcon(it.icon, "pic")),
            el("span", { class: "quick-body" },
              el("span", { class: "quick-label" },
                el("span", { class: "tag" }, it.id), " ", it.label),
              it.note ? el("span", { class: "quick-note" }, it.note) : null),
            statusBadge(it.status, ui)));
        ul.appendChild(li);
      });
      card.appendChild(ul);
      grid.appendChild(card);
    });
    sec.appendChild(grid);
    return sec;
  }

  // 02 基本条項
  function renderTerms(d) {
    var sec = el("section", { class: "sec", id: "terms" }, secHeader(d.terms.num, d.terms.title));

    var pre = d.terms.preamble;
    var preBlock = el("div", { class: "block", id: pre.id, "data-search": "" },
      el("h3", null, pre.title, anchorLink(pre.id)));
    pre.body.forEach(function (p) { preBlock.appendChild(el("p", null, p)); });
    sec.appendChild(preBlock);

    d.terms.articles.forEach(function (a) {
      var b = el("div", { class: "block", id: a.id, "data-search": "" },
        el("h3", null, a.title, anchorLink(a.id)));
      if (a.intro) b.appendChild(el("p", null, a.intro));
      if (a.defs) {
        var dl = el("dl", { class: "defs" });
        a.defs.forEach(function (def) {
          dl.appendChild(el("div", { class: "def-row" },
            el("dt", null, def.term), el("dd", null, def.def)));
        });
        b.appendChild(dl);
      }
      if (a.paras) {
        a.paras.forEach(function (p) {
          b.appendChild(el("p", null, p.t));
          if (p.sub) {
            var ul = el("ul", { class: "sub" });
            p.sub.forEach(function (s) { ul.appendChild(el("li", null, s)); });
            b.appendChild(ul);
          }
        });
      }
      sec.appendChild(b);
    });
    return sec;
  }

  // 03 個別条件
  function renderConds(d) {
    var ui = d.ui;
    var sec = el("section", { class: "sec", id: "conds" }, secHeader(d.conds.num, d.conds.title));
    sec.appendChild(el("p", { class: "sec-note" }, svgIcon("st-note", "icon"), el("span", null, d.conds.intro)));

    d.conds.sections.forEach(function (cs) {
      if (cs.groups) {
        // 2. 利用条件 — (1)〜(8) の各グループを検索ブロックにする
        var wrap = el("div", { class: "cond-wrap", id: cs.id },
          el("h3", { class: "cond-head" }, el("span", { class: "cond-no" }, cs.no), cs.title, anchorLink(cs.id)));
        cs.groups.forEach(function (g, gi) {
          var gid = cs.id + "-g" + (gi + 1);
          var gb = el("div", { class: "block", id: gid, "data-search": "" },
            el("h4", null, el("span", { class: "cond-no" }, g.no), g.title, anchorLink(gid)));
          g.items.forEach(function (it) {
            gb.appendChild(el("div", { class: "cond-item", id: it.id },
              el("div", { class: "cond-item-head" },
                el("span", { class: "tag" }, it.tag),
                el("span", { class: "cond-ic" }, svgIcon(it.icon, "pic")),
                statusBadge(it.status, ui)),
              el("p", { class: "cond-text" }, it.text),
              el("p", { class: "cond-verdict st-" + it.status }, it.verdict)));
          });
          if (g.after) gb.appendChild(el("p", { class: "after-note" }, g.after));
          wrap.appendChild(gb);
        });
        sec.appendChild(wrap);
      } else {
        var b = el("div", { class: "block", id: cs.id, "data-search": "" },
          el("h3", null, el("span", { class: "cond-no" }, cs.no), cs.title, anchorLink(cs.id)));
        if (cs.body) {
          cs.body.forEach(function (p, i) {
            var big = (cs.id === "cond-target" || cs.id === "cond-credit" || cs.id === "cond-hashtag" || (cs.id === "cond-version" && i === 0));
            b.appendChild(el("p", { class: big ? "cond-big" : null }, p));
          });
        }
        if (cs.notes) {
          cs.notes.forEach(function (nt) {
            b.appendChild(el("div", { class: "note-card" },
              el("span", { class: "note-tag" }, svgIcon("pic-alert", "icon"), el("span", null, nt.tag)),
              el("p", null, nt.text)));
          });
        }
        if (cs.rows) {
          var dl = el("dl", { class: "kv" });
          cs.rows.forEach(function (r) {
            var val = r.href
              ? el("a", { href: r.href, target: r.href.indexOf("http") === 0 ? "_blank" : null, rel: "noopener" }, r.v)
              : document.createTextNode(r.v);
            dl.appendChild(el("div", { class: "kv-row" }, el("dt", null, r.k), el("dd", null, val)));
          });
          b.appendChild(dl);
        }
        sec.appendChild(b);
      }
    });
    return sec;
  }

  // 04 Q&A
  function renderQa(d) {
    var sec = el("section", { class: "sec", id: "qa" }, secHeader(d.qa.num, d.qa.title));
    sec.appendChild(el("p", { class: "sec-note" }, svgIcon("st-note", "icon"), el("span", null, d.qa.intro)));
    d.qa.items.forEach(function (item, i) {
      var body = el("div", { class: "qa-a" }, el("p", null, item.a));
      if (item.refs && item.refs.length) {
        var refs = el("div", { class: "qa-refs" });
        item.refs.forEach(function (r) {
          refs.appendChild(el("a", { class: "ref", href: r.href }, svgIcon("ic-link", "icon"), el("span", null, r.label)));
        });
        body.appendChild(refs);
      }
      sec.appendChild(el("details", { class: "qa-item", id: item.id, "data-search": "" },
        el("summary", null,
          el("span", { class: "qa-q" }, "Q" + (i + 1)),
          el("span", { class: "qa-qtext" }, item.q),
          svgIcon("ic-chev", "chev")),
        body));
    });
    return sec;
  }

  // 05 改定履歴
  function renderInfo(d) {
    var sec = el("section", { class: "sec", id: "info" }, secHeader(d.info.num, d.info.title));
    var b = el("div", { class: "block", "data-search": "" });
    var dl = el("dl", { class: "kv" });
    d.info.history.forEach(function (h) {
      dl.appendChild(el("div", { class: "kv-row" },
        el("dt", null, "Ver " + h.ver),
        el("dd", null, h.date + " — " + h.note)));
    });
    b.appendChild(dl);
    sec.appendChild(b);
    return sec;
  }

  /* ---------- 言語ボタン ---------- */

  function buildLangButtons() {
    var box = document.getElementById("langSwitch");
    box.textContent = "";
    LANGS.forEach(function (l) {
      var m = I18N[l].meta;
      var btn = el("button", { class: "lang-btn", type: "button", "data-lang": l, "aria-pressed": "false", title: m.label },
        svgIcon(m.flag, "flag"), el("span", { class: "lang-label" }, m.label));
      btn.addEventListener("click", function () { setLang(l); });
      box.appendChild(btn);
    });
  }

  function updateLangButtons() {
    Array.prototype.forEach.call(document.querySelectorAll(".lang-btn"), function (b) {
      var on = b.getAttribute("data-lang") === current;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function setLang(l) {
    if (!I18N[l] || l === current) return;
    current = l;
    store(STORE_LANG, l);
    render();
    applySearch();
  }

  /* ---------- 検索 ---------- */

  function applySearch() {
    var d = I18N[current];
    var input = document.getElementById("searchInput");
    var statusLine = document.getElementById("searchStatus");
    var statusText = document.getElementById("searchStatusText");
    var clearBtn = document.getElementById("searchClear");
    var raw = input.value.trim();
    var qn = norm(raw);

    blocks.forEach(function (b) { b.el.innerHTML = b.html; });

    if (!qn) {
      blocks.forEach(function (b) {
        b.el.classList.remove("hit-hide");
        if (b.el.tagName === "DETAILS") b.el.removeAttribute("open");
      });
      sections.forEach(function (s) { s.classList.remove("hit-hide"); });
      statusLine.hidden = true;
      statusText.textContent = "";
      clearBtn.hidden = true;
      document.body.classList.remove("searching");
      return;
    }

    var count = 0;
    blocks.forEach(function (b) {
      var hit = norm(b.el.textContent).indexOf(qn) !== -1;
      b.el.classList.toggle("hit-hide", !hit);
      if (hit) {
        count++;
        highlight(b.el, qn);
        if (b.el.tagName === "DETAILS") b.el.setAttribute("open", "");
      }
    });
    sections.forEach(function (s) {
      var any = s.querySelector("[data-search]:not(.hit-hide)");
      s.classList.toggle("hit-hide", !any);
    });
    statusLine.hidden = false;
    statusText.textContent = count
      ? d.ui.searchHits.replace("{n}", count)
      : d.ui.searchNoHits.replace("{q}", raw);
    statusLine.classList.toggle("nohit", !count);
    clearBtn.hidden = false;
    document.body.classList.add("searching");
  }

  /* ---------- テーマ ---------- */

  function initTheme() {
    var q = new URLSearchParams(location.search).get("theme");
    var saved = (q === "dark" || q === "light") ? q : store(STORE_THEME);
    var dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }

  function toggleTheme() {
    var cur = document.documentElement.getAttribute("data-theme");
    var next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    store(STORE_THEME, next);
  }

  /* ---------- 起動 ---------- */

  function init() {
    initTheme();
    buildLangButtons();
    render();

    var input = document.getElementById("searchInput");
    var timer = null;
    input.addEventListener("input", function () {
      window.clearTimeout(timer);
      timer = window.setTimeout(applySearch, 150);
    });
    document.getElementById("searchClear").addEventListener("click", function () {
      input.value = "";
      applySearch();
      input.focus();
    });
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);

    var toTop = document.getElementById("toTop");
    toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    window.addEventListener("scroll", function () {
      toTop.classList.toggle("show", window.scrollY > 600);
    }, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
