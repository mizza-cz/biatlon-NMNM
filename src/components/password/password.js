document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("frm-passwordForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      var passwordField = document.getElementById("frm-passwordForm-password");
      var errorMessageDiv = document.getElementById("password-error-message");
      var language = window.cookieConsentSettings.current_lang; // Используем текущий язык из cookieConsentSettings
      var messages = {
        cs: "Prosím, vyplňte pole hesla.",
        en: "Please fill in the password field.",
        de: "Bitte füllen Sie das Passwortfeld aus.",
      };
      var errorMessage = messages[language] || messages["en"]; // Фоллбек на английский, если язык не найден

      errorMessageDiv.style.display = "none"; // Скрыть сообщение об ошибке перед проверкой

      if (!passwordField.value) {
        // Если поле пустое
        errorMessageDiv.textContent = errorMessage; // Сообщение об ошибке на выбранном языке
        errorMessageDiv.style.display = "block"; // Показать сообщение об ошибке
        showTooltip(passwordField, errorMessage); // Показать тултип с ошибкой
      } else if (passwordField.value.length < 3) {
        // Проверка на минимальную длину
        errorMessageDiv.textContent = errorMessage; // Сообщение об ошибке на выбранном языке
        errorMessageDiv.style.display = "block"; // Показать сообщение об ошибке
        showTooltip(passwordField, errorMessage); // Показать тултип с ошибкой
      } else {
        hideTooltip(passwordField); // Скрыть тултип, если всё в порядке
      }
    });
  }
});

function showTooltip(element, message) {
  // Создать элемент тултипа и показать его рядом с элементом, вызвавшим ошибку
  var tooltip = document.createElement("div");
  tooltip.setAttribute("class", "password-tooltip");
  tooltip.textContent = message;
  document.body.appendChild(tooltip);

  // Расположение тултипа
  var rect = element.getBoundingClientRect();
  tooltip.style.position = "absolute";
  tooltip.style.top = rect.top + 20 + "px";
  tooltip.style.left = rect.left + "px";
  tooltip.style.backgroundColor = "red";
  tooltip.style.color = "white";
  tooltip.style.padding = "5px";
  tooltip.style.borderRadius = "5px";
  tooltip.style.zIndex = "1000";
}

function hideTooltip(element) {
  // Удалить тултип, если он существует
  var tooltip = document.querySelector(".password-tooltip");
  if (tooltip) {
    document.body.removeChild(tooltip);
  }
}
