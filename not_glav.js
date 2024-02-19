function size_gl(x){
    return Math.floor(window.innerWidth / x);
}

function size_slolbets_div_not_glav(){
    return Math.floor(window.innerWidth * 0.01 + 300)
}
function size_margin_div_not_glav(){
    return Math.floor(window.innerWidth / 50 + 3)
}
function resizeWindow_not_glav_button(){
    var size_bi = size_px(size_f(2))
    const size_font = size_px(window.innerWidth / window.innerHeight * 10 + 10)
    for (let button of document.querySelectorAll('.new_univer_op_b')) {
        button.style.borderRadius = size_bi;
    }
}


function resizeWindow_not_glav_div(){
    var size_bi_1 = size_px(size_gl(50))
    var widthInPixels = size_px(size_slolbets_div_not_glav() + 150)
    var size_margin = size_px(size_margin_div_not_glav())
    for (let div of document.querySelectorAll('.new_univer_15')) {
        div.style.paddingBottom = size_bi_1;
        div.style.width = widthInPixels;
        div.style.margin = size_margin
    }
}


function resizeWindow_2(){
    resizeWindow_not_glav_button();
    resizeWindow_not_glav_div();
}

window.addEventListener("resize", resizeWindow_2);
resizeWindow_2();
