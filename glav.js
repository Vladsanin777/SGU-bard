function size_glavBorder(x){
    return Math.floor(window.innerWidth / x);
}


function resizeWindow_glav_button(){
    var size_bi = size_px(size_glavBorder(22))
    console.log(size_bi)
    var size_bi_1 = size_px(size_glavBorder(50))
    for (let button of document.querySelectorAll('.button_glav')) {
        button.style.borderRadius = size_bi;
        button.style.paddingBottom = size_bi_1;
    }
}
function resizeWindow_glav_h5(){
    var size_bi = `${size_px(size_glavBorder(50))} 0px`;
    for (let h5 of document.querySelectorAll('h5')) {
        h5.style.padding = size_bi;
    }
}


function resizeWindow_1(){
    resizeWindow_glav_button();
    resizeWindow_glav_h5();
}

window.addEventListener("resize", resizeWindow_1);
resizeWindow_1();
