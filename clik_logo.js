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
function fons_random() {
  const fon_k = document.createElement('div');
  fon_k.classList.add('BG');

  const img_k = document.createElement('img');
  img_k.classList.add('BGD');
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
    img = document.querySelector(".logo_sgu")
    img.style.width = widthInPixels;
    img.style.height = widthInPixels;
    img.style.marginRight = size_vw(size_f(30))
}



function resizeWindow_button_5(){
    for ( var button of document.querySelectorAll(".button_5")){
        button.style.width = size_vw(size_f(15) + 10);
        button.style.height = size_vw(size_f(30) + 2);
        button.style.fontSize = size_vw(size_f(60));
        button.style.marginRight = size_vw(size_f(80));
        button.style.marginLeft = size_vw(size_f(80));
        button.style.marginBottom = size_vw(size_f(60))
    }
}

function resizeWindow_h1(){
    h1 = document.querySelector("h1")
    h1.style.margin = `${size_vw(size_f(180) + 1)} 0px`
    h1.style.fontSize = size_vw(size_f(180) + 2.7);
}

function resizeWindow(){
    resizeWindow_logo_sgu()
    resizeWindow_button_5()
    resizeWindow_h1()
}


// Подписываемся на событие resize
window.addEventListener("resize", resizeWindow);
resizeWindow()
