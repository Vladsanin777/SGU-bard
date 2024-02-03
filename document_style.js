function color_document(){
  document.querySelector(".div_all_class_document").style.backgroundColor = temn_color();
}
color_document()

function resizeWindow_div_Choice(){
  const div = document.querySelector(".div_all_class_document")
}
function resizeWindow_1(){
  resizeWindow_div_Choice()
}



// Подписываемся на событие resize
window.addEventListener("resize", resizeWindow_1);
resizeWindow_1()
