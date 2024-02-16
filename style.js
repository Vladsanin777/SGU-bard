function format_style(){
    console.log(window.innerHeight / window.innerWidth)
    if (window.innerHeight / window.innerWidth < 1.1){
        logo_img = document.querySelector(".logo_png");
        logo_img.style.height = "10vh";
        logo_img.style.width = "10vh";
        logo_button = document.querySelector(".logo_sgu");
        logo_button.style.height = "15vh";
        logo_button.style.width = "15vh";
    }else if(window.innerHeight / window.innerWidth > 1.8){
        logo_img = document.querySelector(".logo_png");
        logo_img.style.height = "4vh";
        logo_img.style.width = "4vh";
        logo_button = document.querySelector(".logo_sgu");
        logo_button.style.height = "6vh";
        logo_button.style.width = "6vh";
    }else{
        logo_img = document.querySelector(".logo_png");
        logo_img.style.height = "7vh";
        logo_img.style.width = "7vh";
        logo_button = document.querySelector(".logo_sgu");
        logo_button.style.height = "10vh";
        logo_button.style.width = "10vh";
    }
}
format_style()
window.addEventListener("resize", format_style);