
function resizeWindow_not_glav_button(){
    var size_bi = size_px(size_f(2))
    for (let button of document.querySelectorAll('.new_univer_op_b')) {
        button.style.borderRadius = size_bi;
        button.style.padding = size_bi;
    }
    console.log("ДА")
}


function resizeWindow_not_glav_div(){
    
}


function resizeWindow_2(){
    resizeWindow_not_glav_button();
    resizeWindow_not_glav_div();
}

window.addEventListener("resize", resizeWindow_2);
resizeWindow_2();
