window.n_random = Math.floor(Math.random() * 3)
// Установка цвета фона
document.body.style.backgroundColor = ['rgb(30, 65, 25)', 'rgb(25, 30, 65)', 'rgb(65, 63, 25)'][window.n_random];
//rgb(84, 194, 21)
console.log(window.n_random)
document.querySelector(".bacground_2").style.backgroundColor = ['rgb(84, 194, 21)', 'rgb(0, 0, 255)', 'rgb(243, 219, 3)'][window.n_random]
for ( let button of document.querySelectorAll(".button_5")){
    button.style.backgroundColor = ['rgb(30, 65, 25)', 'rgb(25, 30, 65)', 'rgb(65, 63, 25)'][window.n_random];
}