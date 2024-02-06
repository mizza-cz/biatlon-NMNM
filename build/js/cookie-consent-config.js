window.cookieConsentSettings = (function () {
  function detectLanguageFromURL() {
    var langRegex = /^\/(de|en)\//;
    var match = window.location.pathname.match(langRegex);
    if (match) {
      return match[1];
    }
    return "cs";
  }

  var currentLang = detectLanguageFromURL();

  return {
    current_lang: currentLang,
    autoclear_cookies: true,
    theme_css: "/css/cookie-consent.css",
    page_scripts: true,
    languages: {
      cs: {
        consent_modal: {
          title: "Tato webová stránka používá cookies",
          description:
            'Tyto webové stránky používají k poskytování služeb, personalizaci reklam a analýze návštěvnosti soubory cookies. Některé z nich jsou k fungování stránky nezbytné, ale o některých můžete rozhodnout sami. Více o používání souborů cookies se dozvíte níže. Můžete je povolit všechny, jednotlivě vybrat nebo všechny odmítnout. Více informací získáte kdykoliv na stránce Zásady používání souborů cookies. <button type="button" data-cc="c-settings" class="cc-link">Nastavení cookies</button>',
          primary_btn: {
            text: "Přijmout vše",
            role: "accept_all",
          },
          secondary_btn: {
            text: "Pouze nezbytné",
            role: "accept_necessary",
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
                "Statistické cookies umožŘují majitelům webových stránek sledovat návštěvnost webových stránek. Anonymně sbírají a sdělují informace, které pomáhají k vylepšování obsahu stránek.",
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
                "Se souhlasem cookies sociálních médií se můžete připojit k vašim sociálním sítím a prostřednictvím nich sdílet obsah z naší webové stránky. Při vypnutí se nebude zobrazovat obsah ze sociálních sítí (Facebook, Twitter, Youtube a další).",
              toggle: {
                value: "social",
                enabled: false,
                readonly: false,
              },
            },
          ],
        },
      },
      en: {
        consent_modal: {
          title: "This website uses cookies",
          description:
            'These websites use cookies to provide services, personalize ads, and analyze traffic. Some of them are essential for the site to function, but you can decide on others. More about the use of cookies can be found below. You can enable all of them, select individual ones, or reject them all. More information is available anytime on the Cookies Policy page. <button type="button" data-cc="c-settings" class="cc-link">Cookie Settings</button>',
          primary_btn: {
            text: "Accept All",
            role: "accept_all",
          },
          secondary_btn: {
            text: "Essential Only",
            role: "accept_necessary",
          },
        },
        settings_modal: {
          title: "Cookie Settings",
          save_settings_btn: "Save my choices",
          accept_all_btn: "Accept All",
          reject_all_btn: "Reject All",
          close_btn_label: "Close",
          cookie_table_headers: [
            { col1: "Name" },
            { col2: "Domain" },
            { col3: "Expires" },
            { col4: "Description" },
          ],
          blocks: [
            {
              title: "Used Cookies",
              description:
                "These websites use cookies to provide services, personalize ads, and analyze traffic. Some of them are essential for the site to function, but you can decide on others.",
            },
            {
              title: "Functional Cookies – always allowed",
              description:
                "These cookie files are necessary for the basic functions of the site and are therefore always allowed.",
              toggle: {
                value: "necessary",
                enabled: true,
                readonly: true,
              },
            },
            {
              title: "Statistical Cookies",
              description:
                "Statistical cookies enable website owners to track website traffic. They anonymously collect and report information that helps improve the content of the site.",
              toggle: {
                value: "analytics",
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "Marketing Cookies",
              description:
                "Marketing cookies are used to track visitors on websites. The intention is to display ads that are relevant and interesting to the individual user and, therefore, more valuable to publishers and third-party advertisers.",
              toggle: {
                value: "targeting",
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "Social Media",
              description:
                "With the consent of social media cookies, you can connect to your social networks and share content from our website through them. When turned off, content from social networks (Facebook, Twitter, Youtube, and others) will not be displayed.",
              toggle: {
                value: "social",
                enabled: false,
                readonly: false,
              },
            },
          ],
        },
      },
      de: {
        consent_modal: {
          title: "Diese Website verwendet Cookies",
          description:
            'Diese Websites verwenden Cookies, um Dienste bereitzustellen, Anzeigen zu personalisieren und den Datenverkehr zu analysieren. Einige von ihnen sind für die Funktion der Website unerlässlich, über andere können Sie jedoch entscheiden. Weitere Informationen zur Verwendung von Cookies finden Sie unten. Sie können alle aktivieren, einzelne auswählen oder alle ablehnen. Weitere Informationen finden Sie jederzeit auf der Seite Cookie-Richtlinie. <button type="button" data-cc="c-settings" class="cc-link">Cookie-Einstellungen</button>',
          primary_btn: {
            text: "Alle akzeptieren",
            role: "accept_all",
          },
          secondary_btn: {
            text: "Nur Notwendige",
            role: "accept_necessary",
          },
        },
        settings_modal: {
          title: "Cookie-Einstellungen",
          save_settings_btn: "Meine Auswahl speichern",
          accept_all_btn: "Alle akzeptieren",
          reject_all_btn: "Alle ablehnen",
          close_btn_label: "Schließen",
          cookie_table_headers: [
            { col1: "Name" },
            { col2: "Domain" },
            { col3: "Ablaufdatum" },
            { col4: "Beschreibung" },
          ],
          blocks: [
            {
              title: "Verwendete Cookies",
              description:
                "Diese Websites verwenden Cookies, um Dienste bereitzustellen, Anzeigen zu personalisieren und den Datenverkehr zu analysieren. Einige von ihnen sind für die Funktion der Website unerlässlich, über andere können Sie jedoch entscheiden.",
            },
            {
              title: "Funktionale Cookies – immer erlaubt",
              description:
                "Diese Cookie-Dateien sind für die grundlegenden Funktionen der Website erforderlich und daher immer erlaubt.",
              toggle: {
                value: "necessary",
                enabled: true,
                readonly: true,
              },
            },
            {
              title: "Statistische Cookies",
              description:
                "Statistische Cookies ermöglichen es den Eigentümern von Websites, den Datenverkehr auf der Website zu verfolgen. Sie sammeln und berichten anonym über Informationen, die dazu beitragen, den Inhalt der Website zu verbessern.",
              toggle: {
                value: "analytics",
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "Marketing Cookies",
              description:
                "Marketing-Cookies werden verwendet, um Besucher auf Websites zu verfolgen. Die Absicht ist es, Anzeigen anzuzeigen, die für den einzelnen Benutzer relevant und interessant sind und daher für Herausgeber und Drittanbieter-Werbetreibende wertvoller sind.",
              toggle: {
                value: "targeting",
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "Soziale Medien",
              description:
                "Mit der Zustimmung zu Cookies von sozialen Medien können Sie sich mit Ihren sozialen Netzwerken verbinden und Inhalte von unserer Website über sie teilen. Wenn dies deaktiviert ist, wird kein Inhalt von sozialen Netzwerken (Facebook, Twitter, Youtube und andere) angezeigt.",
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
})();

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
    el.src = "/inc/cookie-consent-frame.html";
  });

document.querySelectorAll("[data-cookie-placeholder]").forEach(function (el) {
  el.addEventListener("click", function () {
    if (typeof el.dataset.cookiePlaceholder !== "undefined") {
      document.querySelector('[data-cc="c-settings"]').click();
    }
  });
});
