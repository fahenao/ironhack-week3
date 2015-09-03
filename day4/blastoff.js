function blastOff(count) {

	var currentCount = count; // = 5
	
	function callback() {
		console.log(currentCount);
		if (currentCount === 0) {
			console.log("Blast off!!")
		} else {
			currentCount -= 1;
			setTimeout(callback,1000);	
		}
	}

	setTimeout(callback, 1000); //waits 1 second
}

blastOff(5);