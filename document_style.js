function color_document(){
  document.querySelector(".div_all_class_document").style.backgroundColor = temn_color();
}
color_document()


function format_document(){
    if (window.innerHeight / window.innerWidth > 1.1){
        document.querySelector(".osnova_document").style.display = "inline-blokc";
    }else{
        document.querySelector(".osnova_document")//.style.display = "flex";
    }
}

//width: 90vw;
//margin: 0 auto;
