
function size_set(x){
    return Math.floor(window.innerWidth / x);
}

function resizeWindow_button_set() {
    var widthInPixels = size_px(size_set(10) + 10)
    for (button of document.querySelectorAll(".button_set")){
        button.style.width = widthInPixels;
        button.style.height = widthInPixels;
    }
}


function resizeWindow_img_set() {
    var widthInPixels = size_px(size_set(15) + 10)
    for (img of document.querySelectorAll(".img_set")){
        img.style.width = widthInPixels;
        img.style.height = widthInPixels;
        img.style.margin = '1.5vw'
    }
}


function resizeWindow_img_sotset() {
    var widthInPixels = size_px(size_set(20) + 10)
    for (button of document.querySelectorAll(".sotset")){
        button.style.fontSize = widthInPixels;
    }
}


function resizeWindow_5(){
    resizeWindow_button_set();
    resizeWindow_img_set();
    resizeWindow_img_sotset();
}



// Подписываемся на событие resize
window.addEventListener("resize", resizeWindow_5);
resizeWindow_5()
