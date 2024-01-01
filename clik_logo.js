function random_color(){
    return Math.floor(Math.random() * 3)
}

function smenadizaina(){
    let random = random_color()
    if (window.n_random == random){
        random = random_color
    } else {
        window.n_random = random
    }
    document.body.style.backgroundColor = ['rgb(30, 65, 25)', 'rgb(25, 30, 65)', 'rgb(65, 63, 25)'][window.n_random];
    document.querySelector(".bacground_2").style.backgroundColor = ['rgb(84, 194, 21)', 'rgb(0, 0, 255)', 'rgb(243, 219, 3)'][window.n_random]
    for ( let button of document.querySelectorAll(".button_5")){
        button.style.backgroundColor = ['rgb(30, 65, 25)', 'rgb(25, 30, 65)', 'rgb(65, 63, 25)'][window.n_random];
    }
    document.querySelector(".new_univer").style.backgroundColor = ['rgb(84, 194, 21)', 'rgb(0, 0, 255)', 'rgb(243, 219, 3)'][window.n_random];
    document.querySelector(".new_univer_1").style.backgroundColor = ['rgb(30, 65, 25)', 'rgb(25, 30, 65)', 'rgb(65, 63, 25)'][window.n_random];
    for ( let group of document.querySelectorAll(".new_univer_15")){
        group.style.backgroundColor = ['rgb(30, 65, 25)', 'rgb(25, 30, 65)', 'rgb(65, 63, 25)'][window.n_random];
    }
    for ( let text of document.querySelectorAll(".new_univer_1236")){
        text.style.backgroundColor = ['rgb(84, 194, 21)', 'rgb(0, 0, 255)', 'rgb(243, 219, 3)'][window.n_random];
    }
    for ( let text of document.querySelectorAll(".new_univer_op")){
        text.style.backgroundColor = ['rgb(84, 194, 21)', 'rgb(0, 0, 255)', 'rgb(243, 219, 3)'][window.n_random];
    }
    for ( let group of document.querySelectorAll(".new_univer_op_b")){
        group.style.backgroundColor = ['rgb(30, 65, 25)', 'rgb(25, 30, 65)', 'rgb(65, 63, 25)'][window.n_random];
    }
}
smenadizaina()