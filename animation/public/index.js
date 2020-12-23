	/* click event control start */ 
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