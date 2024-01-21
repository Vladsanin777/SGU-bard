function resizeWindowHistory(){
    var size_new = window.innerWidth / window.innerHeight * 30
    for (let h5 of document.querySelectorAll('.history_SGU')){
        h5.style.fontSize = size_px(size_new)
    }
}
window.addEventListener("resize", resizeWindowHistory);
resizeWindowHistory()
