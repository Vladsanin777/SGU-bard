function format_style(){
    var logo_button = document.querySelector(".logo_sgu");
    var logo_img = document.querySelector(".logo_png");
    console.log(window.innerHeight / window.innerWidth)
    if (window.innerHeight / window.innerWidth < 1){
        logo_img.style.height = "10vh";
        logo_img.style.width = "10vh";
        logo_button.style.height = "15vh";
        logo_button.style.width = "15vh";
    }else if(window.innerHeight / window.innerWidth > 1.7){
        logo_img.style.height = "4vh";
        logo_img.style.width = "4vh";
        logo_button.style.height = "6vh";
        logo_button.style.width = "6vh";
    }else{
        logo_img.style.height = "7vh";
        logo_img.style.width = "7vh";
        logo_button.style.height = "10vh";
        logo_button.style.width = "10vh";
    }
}
format_style()
window.addEventListener("resize", format_style);