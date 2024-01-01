// Инициализация переменных
const video = document.querySelector("video");
const menu = document.querySelector(".menu");

// Запуск видео при загрузке страницы
//video.play();

// Открытие меню при нажатии на кнопку
//menu.addEventListener("click", function() {
  //this.classList.toggle("open");
//});

// Настройка адаптивного дизайна
const isMobile = window.innerWidth < 768;

// Настройка дизайна для мобильных устройств
const videoTemp = document.querySelector("video");
if (isMobile) {
  menu.classList.add("mobile");
  videoTemp.style.height = "50vh";
}

window.n_random = Math.floor(Math.random() * 3)
// Установка цвета фона
document.body.style.backgroundColor = ['rgb(30, 65, 25)', 'rgb(25, 30, 65)', 'rgb(65, 63, 25)'][window.n_random];