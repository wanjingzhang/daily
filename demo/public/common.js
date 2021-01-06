	
	/* ---------------------------------------- 常用js功能 ----------------------------------------*/
	/**
	 * 1. 节流
	 * @param {*} handler 
	 * @param {*} wait 
	 */
	function throttle(handler, wait) { 
		var lastTime = 0; 
		return function () {
		
			var nowTime = new Date().getTime();
	
			if (nowTime - lastTime > wait) {
				handler.apply(this, arguments);
				lastTime = nowTime;
			} 
		}
	}
	// subBtn.addEventListener('click', throttle(ajaxForm, 1000), false)

	/**
	 * 1. 防抖
	 * @param {*} handler 
	 * @param {*} delay 
	 */
	function debounce(handler, delay) {
		var timer;
	 
		return function () {
			var self = this, arg = arguments;
	 
			clearTimeout(timer);
	 
			timer = setTimeout(function () {
				handler.apply(self, arg)
			}, delay)
		}
	}  
	// searchInput.addEventListener('keyup', debounce(showAll, 500), false)
	/* click event control end */

	/**
	 * 2. 可视区域添加绘制
	 */
	function showArea(){
		var items = document.querySelectorAll(".timeline li"); 
		function isElementInViewport(el) {
		  var rect = el.getBoundingClientRect();
		  return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		  );
		}
		
		function callbackFunc() {
		  for (var i = 0; i < items.length; i++) {
			if (isElementInViewport(items[i])) {
			  if(!items[i].classList.contains("in-view")){
				items[i].classList.add("in-view");
			  }
			} else if(items[i].classList.contains("in-view")) {
				items[i].classList.remove("in-view");
			}
		  }
		}
		 
		window.addEventListener("load", callbackFunc);
		window.addEventListener("scroll", callbackFunc);
	}


	// 1. 高度
	document.documentElement.clientHeight   // html 可见高度
	document.body.clientHeight              // body 可见高度
	document.documentElement.scrollHeight   // html 总高度
	document.body.scrollHeight              // body 总高度

	// 1.//元素顶端到可见区域顶端的距离
	var obj2 = $('.index-tips')[0];
	var top2 = obj2.getBoundingClientRect().top; 

	// 1. Array indexOf
	const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
	console.log(beasts.indexOf('bison')); // 1

	// 1. ceratejs
	var loader = new createjs.LoadQueue(true);
	// loader.installPlugin(createjs.Sound);
	var imgArray = [];
	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("progress", handleProgress);
	loader.addEventListener("fileload", handleFileLoad);
	imgArray = mainLoading().concat(indextiploading());
	imgArray.push({ src: cdn_url+"sound/intro.mp3", "id": "intro_sound", "is_loop": false });
	imgArray.push({ src: cdn_url+"sound/main.mp3", "id": "main_sound", "is_loop": true });
	imgArray.push({ src: cdn_url+"sound/coin.mp3", "id": "coin_sound", "is_loop": false });
	for (var k = 1; k < 6; k++) {
		imgArray.push({ src: cdn_url+"sound/" + k + ".mp3", "id": "jie" + k + "_sound", "is_loop": true });
	}
	loader.loadManifest(imgArray);

	// 1. krpanoSWFObject 

	 