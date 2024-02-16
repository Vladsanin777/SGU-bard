function findScrollableElements() {
	const scrollableElements = [];
	const allElements = document.querySelectorAll('*');
	var i = 0;
	for (const element of allElements) {
		try{
			console.log(element)
			var overflowX = element[overflowX];
			var overflowY = element[overflowY];
			console.log(overflowX)
			console.log(overflowY)
		}finally{
			scrollableElements.push(element);
		}
		

		
	}
	console.log("поиск работает" + scrollableElements)
	return scrollableElements;
}

function scroll(){

	const scrollableElements = findScrollableElements();
	cvonsole.log(scrollableElements)
	for (scrollbar of scrollableElements){
		scrollbar.addEventListener("scroll", () => {
			const scrollTop = container.scrollTop;
			const scrollHeight = container.scrollHeight;
			const clientHeight = container.clientHeight;

			const scrollbarColor = (scrollTop / (scrollHeight - clientHeight)) * 100;
			console.log(scrollbarColor)
			scrollbar.style.backgroundColor = `hsl(${scrollbarColor}, 100%, 50%)`;
			console.log("hj3")
		});
		console.log("h")
	}
	console.log("hj")
}
scroll()