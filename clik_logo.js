function fons_all(){
    return ['1626974759_15-kartinkin-com-p-anime-vertikalnie-anime-krasivo-16.jpg', 'bikini-styles-anime-girl-cartoon_739685-139.avif', 'an-anime-girl-with-bikini-in-the-flower-garden_889073-731.avif', '1c1882de-e309-9c39-bc30-e265a65312ff.jpeg']
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
  document.body.appendChild(fon_k);
}


function smenadizaina(){
    fons_random()
    let random = random_color()
    if (window.n_random == random){
        random = random_color
    } else {
        window.n_random = random
    }


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
