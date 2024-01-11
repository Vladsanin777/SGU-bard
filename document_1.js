function random_color(){
    return Math.floor(Math.random() * 3)
}
function ayrc_color(){
    return ['rgb(80, 180, 35, 0.5)', 'rgb(40, 50, 220, 0.5)', 'rgb(180, 180, 10, 0.5)'][window.n_random];
}
function temn_color(){
    return ['rgb(20, 60, 10, 0.5)', 'rgb(20, 30, 65, 0.5)', 'rgb(65, 63, 25, 0.5)'][window.n_random];
}
function document_1(){
    document.querySelector(".button_glav").style.backgroundColor = temn_color();
}
document_1()
