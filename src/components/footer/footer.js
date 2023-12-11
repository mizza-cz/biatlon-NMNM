document.addEventListener("DOMContentLoaded", function () {
  var btnUp = document.getElementById("btnUp");

  // Добавляем обработчик события клика на кнопку
  btnUp.addEventListener("click", function () {
    // Вызываем функцию для скроллинга на верх страницы
    scrollToTop();
  });

  // Функция для скроллинга на верх страницы
  function scrollToTop() {
    // Используем метод scrollIntoView для прокрутки на верх страницы
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
