function fons_all(){
    return ['1654155663_7-phonoteka-org-p-vertikalnie-oboi-dlya-smartfona-krasivo-11.jpg', '175844-novaya_fantastika-krasochnost-purpur-fioletovyj-vizualnyj_effekt_osveshheniya-2160x3840.jpg', '1669789046_32-pibig-info-p-zhivie-oboi-kosmos-na-telefon-krasivo-34.jpg', 'Красивые-4к-обои-космос-на-телефон-13.jpeg', '4k-kosmos-oboi-na-telefon-15.jpg', '4k-kosmos-oboi-na-telefon-8.jpg', 'kosmos-4k-oboi-na-telefon-48.jpg', 'kosmos-4k-oboi-na-telefon-20.jpg', 'fioletovogo-tsveta-oboi-na-telefon-9.jpg']
}
function random_color(){
    return Math.floor(Math.random() * 3)
}

function ayrc_color(){
    return ['rgb(80, 180, 35 / 0.5)', 'rgb(40, 50, 220 / 0.5)', 'rgb(180, 180, 10 / 0.5)'][window.n_random];
}
function temn_color(){
    return ['rgb(20, 60, 10, 0.5)', 'rgb(20, 30, 65, 0.5)', 'rgb(65, 63, 25, 0.5)'][window.n_random];
}

function random_fons(){
    return Math.floor(Math.random() * fons_all().length)
}
function fons_random() {
    const fon_k = document.createElement('div');
    fon_k.classList.add('BG');

    const img_k = document.createElement('img');
    img_k.classList.add('BGD');
    let random = random_fons()
    while (window.f_random == random){
        random = random_fons()
    }
    window.f_random = random
    // Use the `src` property instead of `style.backgroundImage`
    img_k.src = `fons/${fons_all()[Math.floor(Math.random() * fons_all().length)]}`;

    fon_k.appendChild(img_k);
    return fon_k
}


function smenadizaina(){
    document.body.appendChild(fons_random())
    let random = random_color()
    while (window.n_random == random){
        random = random_color()
    }
    window.n_random = random
    document.querySelector(".logo_sgu").style.backgroundColor = temn_color();
    document.querySelector(".SGU_zagolovok").style.backgroundColor = temn_color();
    for ( let button of document.querySelectorAll(".button_5")){
        button.style.backgroundColor = temn_color();
    }
    for ( let group of document.querySelectorAll(".new_univer_1")){
        group.style.backgroundColor = temn_color();
    }
    for ( let group of document.querySelectorAll(".new_univer_15")){
        group.style.backgroundColor = temn_color();

    }
    for ( let group of document.querySelectorAll(".new_univer_op_b")){
        group.style.backgroundColor = temn_color();
    }

}
smenadizaina();

function size_vw(size){
    return `${size}vw`
}

function size_vh(size){
    return `${size}vh`
}

function size_f(sensitivity){

    // Получаем ширину и высоту окна
    var b = window.innerWidth;
    var a = window.innerHeight;
    return (((a - b) / (a + b) * 100) + 100) / sensitivity;
}

function resizeWindow_logo_sgu() {
    var widthInPixels = size_vw(size_f(15) + 5)
    button = document.querySelector(".logo_sgu")
    button.style.width = widthInPixels;
    button.style.height = widthInPixels;
    button.style.marginRight = size_vw(size_f(30))
    button.style.marginTop = size_vw(size_f(100))
}



function resizeWindow_button_5(){
    for ( var button of document.querySelectorAll(".button_5")){
        button.style.width = size_vw(size_f(15) + 10);
        button.style.height = size_vw(size_f(120) + 3);
        button.style.fontSize = size_vw(size_f(80) + 1);
        button.style.marginRight = size_vw(size_f(80));
        button.style.marginLeft = size_vw(size_f(80));
    }
}

function resizeWindow_SGU_zagolovok(){
    const button = document.querySelector(".SGU_zagolovok")
    button.style.marginBottom = size_vw(size_f(180) + 1)
    button.style.fontSize = size_vw(size_f(140) + 2.7);
    button.style.height = size_vw(size_f(120) + 3);
    button.style.fontSize = size_vw(size_f(80) + 1);
    button.style.width = size_vw(size_f(5) + 45);
}

function resizeWindow_logo_png(){
    const img = document.querySelector(".logo_png")
    var widthInPixels = size_vw(size_f(20) + 5)
    img.style.width = widthInPixels;
    img.style.height = widthInPixels;
}

function resizeWindow(){
    resizeWindow_logo_sgu()
    resizeWindow_button_5()
    resizeWindow_SGU_zagolovok();
    resizeWindow_logo_png()
}


// Подписываемся на событие resize
window.addEventListener("resize", resizeWindow);
resizeWindow()




function showSalute() {
    // Создаём контейнер для салюта.
    var container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);
    console.log("gvh")
    // Создаём отдельные ракеты.
    for (var i = 0; i < 10; i++) {
        console.log()
        var rocket = document.createElement("div");
        rocket.classList.add("rocket");
        container.appendChild(rocket);

        // Задаём начальные координаты ракеты.
        rocket.style.top = Math.random() * 500 + "px";
        rocket.style.left = Math.random() * 500 + "px";

        // Задаём скорость и направление движения ракеты.
        var speed = Math.random() * 10 + 5;
        var direction = Math.random() * 360;
        rocket.style.transform = "translate(0, 0) rotate(" + direction + "deg)";

        // Запускаем анимацию движения ракеты.
        var animation = setInterval(function() {
            // Изменяем координаты ракеты.
            rocket.style.top = rocket.style.top - speed + "px";
            rocket.style.left = rocket.style.left - speed * Math.cos(direction) + "px";

            // Если ракета вышла за пределы экрана, удаляем её.
            if (rocket.style.top < 0 || rocket.style.left < 0 || rocket.style.top > window.innerHeight || rocket.style.left > window.innerWidth) {
                container.removeChild(rocket);
              clearInterval(animation);
            }
        }, 20);
    }
}

// Добавляем обработчик события к кнопке.
document.querySelector(".SGU_zagolovok").addEventListener("click", showSalute);
