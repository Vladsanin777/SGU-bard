function random_color(){
    return Math.floor(Math.random() * 3)
}

function ayrc_color(){
    return ['rgb(80, 180, 35)', 'rgb(40, 50, 220', 'rgb(180, 180, 10)'][window.n_random];
}
function temn_color(){
    return ['rgb(20, 60, 10)', 'rgb(20, 30, 65)', 'rgb(65, 63, 25)'][window.n_random];
}
function smenadizaina(){
    let random = random_color()
    if (window.n_random == random){
        random = random_color
    } else {
        window.n_random = random
    }
    document.body.style.backgroundColor = temn_color();
    for ( let group of document.querySelectorAll(".bacground_2")){
      group.style.backgroundColor = ayrc_color();
    }
    for ( let button of document.querySelectorAll(".button_5")){
        button.style.backgroundColor = temn_color();
    }
    for ( let group of document.querySelectorAll(".new_univer")){
      group.style.backgroundColor = ayrc_color();
    }
    for ( let group of document.querySelectorAll(".new_univer_1")){
        group.style.backgroundColor = temn_color();
    }
    for ( let group of document.querySelectorAll(".new_univer_15")){
        group.style.backgroundColor = temn_color();
    }
    for ( let text of document.querySelectorAll(".new_univer_1236")){
        text.style.backgroundColor = ayrc_color();
    }
    for ( let text of document.querySelectorAll(".new_univer_op")){
        text.style.backgroundColor = ayrc_color();
    }
    for ( let group of document.querySelectorAll(".new_univer_op_b")){
        group.style.backgroundColor = temn_color();
    }

}

smenadizaina()
