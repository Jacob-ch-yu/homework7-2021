var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume*100 +"%"

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("changing CSS")
	video.classList.add("oldSchool");
});


document.querySelector("#orig").addEventListener("click", function() {
	console.log("changing CSS")
	video.classList.remove("oldSchool");
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video")
	video.playbackRate *=.95
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video")
	video.playbackRate /=.95
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 15 <  video.duration) {
		console.log("Skip Video")
		console.log("Current" + video.currentTime)
		video.currentTime += 15
		console.log("New" +video.currentTime)
	}
// issue here
	else {
		video.currentTime = 0
	}


});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume")
	console.log(this.value)
	video.volume = this.value /100
	document.querySelector("#volume").innerHTML = this.value +"%"
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted===false) {
		video.muted = true
		console.log("Mute Video")
		document.querySelector("#mute").innerHTML = "Unmute"

	}
	else{
		video.muted = false
		console.log("Unmute Video")
		document.querySelector("#mute").innerHTML = "Mute"
	}
});


