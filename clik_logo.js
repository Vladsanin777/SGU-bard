function fons_all(){
    return ['1654155663_7-phonoteka-org-p-vertikalnie-oboi-dlya-smartfona-krasivo-11.jpg', '175844-novaya_fantastika-krasochnost-purpur-fioletovyj-vizualnyj_effekt_osveshheniya-2160x3840.jpg', '1669789046_32-pibig-info-p-zhivie-oboi-kosmos-na-telefon-krasivo-34.jpg', 'Красивые-4к-обои-космос-на-телефон-13.jpeg', '4k-kosmos-oboi-na-telefon-15.jpg', '4k-kosmos-oboi-na-telefon-8.jpg', 'kosmos-4k-oboi-na-telefon-48.jpg', 'kosmos-4k-oboi-na-telefon-20.jpg', 'fioletovogo-tsveta-oboi-na-telefon-9.jpg']
}
function random_color(){
    return Math.floor(Math.random() * 3)
}

function ayrc_color(){
    return ['rgb(80, 180, 35)', 'rgb(40, 50, 220)', 'rgba(180, 180, 10)'][window.n_random];
}
function temn_color(){
    return ['rgba(20, 60, 10, 0.5)', 'rgba(20, 30, 65, 0.5)', 'rgba(65, 63, 25, 0.5)'][window.n_random];
}

function random_fons(){
    return Math.floor(Math.random() * fons_all().length)
}
function fons_random() {
    let random = random_fons()
    while (window.f_random == random){
        random = random_fons()
    }
    window.f_random = random
    document.querySelector("body").style.backgroundImage = `url(fons/${fons_all()[Math.floor(Math.random() * fons_all().length)]})`;
}

function size_ikonki_for_glav(){
    return Math.floor(window.innerWidth * 0.11 + 100)
}
function size_h5_for_glav(){
    return Math.floor(window.innerWidth * 0.011 + 15)
}
function size_px(size){
    return `${size}px`
}
function smenadizaina(){
    fons_random()
    let random = random_color()
    while (window.n_random == random){
        random = random_color()
    }
    window.n_random = random
    smenadizaina_1()
}
function smenadizaina_1(){

    document.querySelector(".logo_sgu").style.backgroundColor = temn_color();
    document.querySelector(".SGU_zagolovok").style.backgroundColor = temn_color();
    for ( let group of document.querySelectorAll(".new_univer_1")){
        group.style.backgroundColor = temn_color();
    }
    for ( let group of document.querySelectorAll(".new_univer_15")){
        group.style.backgroundColor = temn_color();

    }
    for ( let group of document.querySelectorAll(".new_univer_op_b")){
        group.style.backgroundColor = temn_color();
    }
    for (let button of document.querySelectorAll('button')) {
        button.style.borderColor = ayrc_color();
        button.style.backgroundColor = temn_color();
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
    var widthInPixels = size_vw(size_f(13) + 6)
    button = document.querySelector(".logo_sgu");
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
    resizeWindow_logo_sgu();
    resizeWindow_button_5();
    resizeWindow_SGU_zagolovok();
    resizeWindow_logo_png();
}



// Подписываемся на событие resize
window.addEventListener("resize", resizeWindow);
resizeWindow()
