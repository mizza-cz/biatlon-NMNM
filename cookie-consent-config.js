window.cookieConsentSettings = {
  current_lang: "cs",
  autoclear_cookies: true,
  theme_css: isLocalhost
    ? "./css/cookie-consent.min.css"
    : "/front/dist/css/cookie-consent.min.css",
  page_scripts: true,
  languages: {
    cs: {
      consent_modal: {
        title: "Tato webová stránka používá cookies",
        description:
          'Tyto webové stránky používají k poskytování služeb, personalizaci reklam a analýze návštěvnosti soubory cookies. Některé z nich jsou k fungování stránky nezbytné, ale o některých můžete rozhodnout sami. Více o používání souborů cookies se dozvíte níže. Můžete je povolit všechny, jednotlivě vybrat nebo všechny odmítnout. Více informací získáte kdykoliv na stránce Zásady používání souborů cookies. <button type="button" data-cc="c-settings" class="cc-link">Nastavení cookies</button>',
        primary_btn: {
          text: "Přijmout vše",
          role: "accept_all", // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: "Pouze nezbytné",
          role: "accept_necessary", // 'settings' or 'accept_necessary'
        },
      },
      settings_modal: {
        title: "Nastavení cookies",
        save_settings_btn: "Uložit moje volby",
        accept_all_btn: "Přijmout vše",
        reject_all_btn: "Odmítnout vše",
        close_btn_label: "Zavřít",
        cookie_table_headers: [
          { col1: "Název" },
          { col2: "Doména" },
          { col3: "Platnost do" },
          { col4: "Popis" },
        ],
        blocks: [
          {
            title: "Používaní cookies",
            description:
              "Tyto webové stránky používají k poskytování služeb, personalizaci reklam a analýze návštěvnosti soubory cookies. Některé z nich jsou k fungování stránky nezbytné, ale o některých můžete rozhodnout sami.",
          },
          {
            title: "Funkční cookies – vždy povoleno",
            description:
              "Tyto soubory cookie jsou nutné pro základní funkce stránky, a jsou proto vždy povolené.",
            toggle: {
              value: "necessary",
              enabled: true,
              readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
            },
          },
          {
            title: "Statistické cookies",
            description:
              "Statistické cookies umožňují majitelům webových stránek sledovat návštěvnost webových stránek. Anonymně sbírají a sdělují informace, které pomáhají k vylepšování obsahu stránek.",
            toggle: {
              value: "analytics", // your cookie category
              enabled: false,
              readonly: false,
            },
          },
          {
            title: "Marketingové cookies",
            description:
              "Marketingové cookies jsou používány pro sledování návštěvníků na webových stránkách. Záměrem je zobrazit reklamu, která je relevantní a zajímavá pro jednotlivého uživatele a tímto hodnotnější pro vydavatele a inzerenty třetích stran.",
            toggle: {
              value: "targeting",
              enabled: false,
              readonly: false,
            },
          },
          {
            title: "Sociální média",
            description:
              "Se souhlasem cookies sociálních médií se můžete připojit k vašim sociálním sítím a prostřednictvím nich sdílet obsah z naší webové stránky. Při vypnutí se nebude zobrazovat obsah ze sociálních sítí (Facebook, Twitter neboli X, YouTube, Instagram a další).",
            toggle: {
              value: "social",
              enabled: false,
              readonly: false,
            },
          },
        ],
      },
    },
  },
};

window.addEventListener(
  "message",
  function (e) {
    if (e.data === "cc-settings") {
      document.querySelector('[data-cc="c-settings"]').click();
    }
  },
  false
);

document
  .querySelectorAll(
    '[data-src][data-cookiecategory="social"][data-placeholder]'
  )
  .forEach(function (el) {
    el.src = isLocalhost
      ? "./cookie-consent-frame.html"
      : "/front/dist/cookie-consent-frame.html";
  });

document.querySelectorAll("[data-cookie-placeholder]").forEach(function (el) {
  el.addEventListener("click", function () {
    if (typeof el.dataset.cookiePlaceholder !== "undefined") {
      document.querySelector('[data-cc="c-settings"]').click();
    }
  });
});

const current_cookie = document.cookie;

function changed() {
  var ccCookieValue = getCookieValue("cc_cookie");

  try {
    ccCookieData = JSON.parse(ccCookieValue);
  } catch (e) {
    ccCookieData = null;
  }

  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 14);

  // Определить, выбраны ли 'Přijmout vše', 'Marketingové cookies' или 'Sociální média'
  var isAcceptAll = ccCookieData && ccCookieData.accept_all;
  var isMarketingCookies =
    ccCookieData && ccCookieData.level.includes("targeting");
  var isSocialMedia = ccCookieData && ccCookieData.level.includes("social");

  if (isAcceptAll || isMarketingCookies) {
    document.cookie =
      "cc_cookie_cancel=0; expires=" +
      expirationDate.toUTCString() +
      "; path=/";

    // Отобразить блок adsbygoogle
    document.querySelectorAll(".adsbygoogle").forEach(function (el) {
      el.style.display = "block";
      el.style.overflow = "visible";
    });

    document.querySelectorAll(".adsbygoogle-noablate").forEach(function (el) {
      el.style.display = "none";
    });

    // Проверить наличие EmbedContainer перед изменением стиля
    var embedContainers = document.querySelectorAll(".EmbedContainer");
    if (embedContainers.length > 0) {
      embedContainers.forEach(function (el) {
        el.style.display = isSocialMedia ? "block" : "none";
      });
    }

    localStorage.setItem("cookieConsentAccepted", "true");
  } else {
    // Скрыть блок adsbygoogle
    document.querySelectorAll(".adsbygoogle").forEach(function (el) {
      el.style.display = "none";
    });

    // Скрыть блок EmbedContainer
    var embedContainers = document.querySelectorAll(".EmbedContainer");
    if (embedContainers.length > 0) {
      embedContainers.forEach(function (el) {
        el.style.display = "none";
      });
    }

    localStorage.setItem("cookieConsentAccepted", "false");
  }
}

// Остальной код остается без изменений

document.querySelectorAll(" .adsbygoogle").forEach(function (el) {
  el.style.display = "none";
});
document.querySelectorAll(".EmbedContainer").forEach(function (el) {
  el.style.display = "none";
});

var initialCookies = document.cookie;

setInterval(function () {
  var currentCookies = document.cookie;

  if (currentCookies !== initialCookies) {
    initialCookies = currentCookies;
    changed();
  }
}, 500);

document.addEventListener("DOMContentLoaded", function () {
  var isCookieConsentAccepted = localStorage.getItem("cookieConsentAccepted");

  if (isCookieConsentAccepted === "true") {
    document.querySelectorAll(" .adsbygoogle").forEach(function (el) {
      el.style.display = "block";
    });
  } else {
    document.querySelectorAll(" .adsbygoogle").forEach(function (el) {
      el.style.display = "none";
    });
  }
});

document.addEventListener("click", function (event) {
  var target = event.target;

  if (target.id === "c-s-bn" || target.id === "s-rall-bn") {
    buttonClickHandler();
  }
});

function buttonClickHandler() {
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 14);
  document.cookie =
    "cc_cookie_cancel=1; expires=" + expirationDate.toUTCString() + "; path=/";
}

function getCookieValue(cookieName) {
  var cookieValue = document.cookie.replace(
    new RegExp("(?:(?:^|.*;\\s*)" + cookieName + "\\s*\\=\\s*([^;]*).*$)|^.*$"),
    "$1"
  );
  return cookieValue ? decodeURIComponent(cookieValue) : null;
}

window.addEventListener(
  "message",
  function (e) {
    if (e.data === "cc-settings") {
      const isMarketingSelected = document
        .querySelector(".cc-btn.cc-marketing")
        .classList.contains("cc-btn-active");
      const embedContainers = document.querySelectorAll(
        '[data-cookiecategory="social"]'
      );

      if (isMarketingSelected) {
        embedContainers.forEach(function (container) {
          container.style.display = "none";
        });
      } else {
        embedContainers.forEach(function (container) {
          container.style.display = "block";
        });
      }
    }
  },
  false
);
