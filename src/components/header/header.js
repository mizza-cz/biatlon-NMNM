headerNavOpenerClick();

function headerNavOpenerClick() {
  const bodyEl = document.querySelector("body");
  const headerNavOpener = document.querySelector(".js-header__opener");
  const headerCloser = document.querySelector(".js-header__closer"); // Изменено на .js-header__closer

  if (!bodyEl || !headerNavOpener || !headerCloser) {
    return;
  }

  headerNavOpener.addEventListener("click", function () {
    if (!this.classList.contains("is-open")) {
      bodyEl.classList.add("is-nav-open");
      this.classList.add("is-open");
      headerCloser.classList.remove("is-open");
    } else {
      bodyEl.classList.remove("is-nav-open");
      this.classList.remove("is-open");
    }
  });

  headerCloser.addEventListener("click", function () {
    // Добавлен обработчик для headerCloser
    if (headerNavOpener.classList.contains("is-open")) {
      bodyEl.classList.remove("is-nav-open");
      headerNavOpener.classList.remove("is-open");
    }
  });
}

var e,
  t = window.location.hash;
"" != t &&
  (e = $("a[name='" + t + "']")).length &&
  $("html,body").animate({ scrollTop: e.offset().top }, "slow"),
  $(window).bind("scroll", function () {
    100 < $(window).scrollTop()
      ? $(".header").addClass("fixed")
      : $(".header").removeClass("fixed");
  });
