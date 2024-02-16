function color_document(){
  document.querySelector(".div_all_class_document").style.backgroundColor = temn_color();
}
color_document()





function format_document(){
    console.log(window.innerHeight / window.innerWidth < 1.1)
    var div_2 = document.querySelector(".div_all_class_document");
    var div_1 = document.querySelector(".osnova_document");
    var div_3 = document.querySelector(".new_inst");
    div_2.style.borderRadius = "50px";
    if (window.innerHeight / window.innerWidth < 1.1){
        div_3.style.height = "80vh";
        div_2.style.height = "80vh";
        div_2.style.overflowY = "scroll";
        div_3.style.overflowY = "scroll";
        div_3.style.width = "70vw"
        div_1.style.display = "flex";
        div_2.style.display = "grid";
        div_2.style.paddingBottom = size_px(window.innerWidth / 50);
        div_2.style.width = size_px(window.innerWidth * 0.01 + 300);
        div_2.style.margin = size_px(window.innerWidth / 50 + 3);
        div_2.style.marginTop = "0px";
    }else{
        div_3.style.width = "100vw"
        div_3.style.height = "auto";
        div_2.style.overflowY = "auto";
        div_3.style.overflowY = "auto";
        div_1.style.display = "grid";
        div_2.style.display = "block";
        div_2.style.textAlign = "center";
        div_2.style.marginBottom = "2vh";
        div_2.style.width = "90vw";
        div_2.style.margin = "0 auto";
        div_2.style.marginBottom = "3vw";
        div_2.style.height = "auto";
        document.querySelector(".osnova_document").style.display = "grid";
    }
}
format_document()

window.addEventListener("resize", format_document);
//width: 90vw;
//margin: 0 auto;
