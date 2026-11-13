/* =====================================================
   Swetha Maruthaiyan | Portfolio
   Small, dependency-free script.
   ===================================================== */

/* ---------- Settings you can edit ---------- */
const PROFILE = {
  // Your GitHub profile address. The GitHub card in the Contact section is hidden if this is left empty.
  github: "https://github.com/swethamaruthi18-cmyk"
};

(function () {
  "use strict";

  // Lets the stylesheet know JavaScript is running (used for the reveal animation).
  document.documentElement.classList.add("js");

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("nav-toggle");
  var panel = document.getElementById("nav-links");

  function setMenu(open) {
    if (!toggle || !panel) return;
    panel.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    panel.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenu(false);
    });
  }

  /* ---------- Highlight the current section in the menu ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute("href")); })
    .filter(Boolean);

  function markActive(id) {
    navLinks.forEach(function (link) {
      if (link.getAttribute("href") === "#" + id) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) markActive(entry.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (section) { spy.observe(section); });
  }

  /* ---------- Scroll reveal ---------- */
  var revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var reveal = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    revealItems.forEach(function (item) { reveal.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add("in"); });
  }

  /* ---------- Copy email address ---------- */
  var copyButton = document.getElementById("copy-email");
  var emailText = document.getElementById("email-text");

  function flash(label) {
    copyButton.textContent = label;
    setTimeout(function () { copyButton.textContent = "Copy address"; }, 1800);
  }

  function selectEmail() {
    try {
      var range = document.createRange();
      range.selectNodeContents(emailText);
      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      flash("Selected, press copy");
    } catch (error) { /* nothing more to do */ }
  }

  if (copyButton && emailText) {
    copyButton.addEventListener("click", function () {
      var address = emailText.textContent.trim();
      try {
        navigator.clipboard.writeText(address).then(function () { flash("Copied"); }, selectEmail);
      } catch (error) {
        selectEmail();
      }
    });
  }

  /* ---------- GitHub link (shown only when set above) ---------- */
  var githubCard = document.getElementById("github-card");
  var githubLink = document.getElementById("github-link");
  var githubText = document.getElementById("github-text");

  if (PROFILE.github && githubCard && githubLink && githubText) {
    githubLink.setAttribute("href", PROFILE.github);
    githubText.textContent = PROFILE.github.replace(/^https?:\/\/(www\.)?/, "");
    githubCard.hidden = false;
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
