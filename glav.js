function size_glavBorder(x){
    return Math.floor(window.innerWidth / x);
}
function size_glavBorder_fontSize(x){
    return Math.round(window.innerWidth * 0.011 + 10)
}
function size_ikonki_for_glav(){
    return Math.floor(window.innerWidth * 0.11 + 100)
}

function resizeWindow_glav_button(){
    var size_bi = size_px(size_glavBorder(22))
    var size_bi_1 = size_px(size_glavBorder(50))
    for (let button of document.querySelectorAll('.button_glav')) {
        button.style.borderRadius = size_bi;
        button.style.paddingBottom = size_bi_1;
    }
}
function resizeWindow_glav_h5(){
    var size_bi = size_px(size_glavBorder_fontSize(20))
    var size_bi_1 = `${size_px(size_glavBorder(50))} 0px`;
    for (let h5 of document.querySelectorAll('h5')) {
        h5.style.padding = size_bi_1;
        h5.style.fontSize = size_bi;
    }
}
function resizeWindow_ikonki_glav(){
    var widthInPixels_n = size_ikonki_for_glav()
    var widthInPixels = size_px(widthInPixels_n)
    for (let button of document.querySelectorAll('.img_glav')) {
        button.style.width = widthInPixels;
        button.style.height = widthInPixels;
    }
}

function resizeWindow_1(){
    resizeWindow_glav_button();
    resizeWindow_glav_h5();
    resizeWindow_ikonki_glav();
}

window.addEventListener("resize", resizeWindow_1);
resizeWindow_1();


function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Тесты
console.log(gcd(1600, 900));
