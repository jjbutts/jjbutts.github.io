// Simple Coin Toss Game


// Get Button Elements
var heads = document.getElementById("heads");
var tails = document.getElementById("tails");
var result = document.getElementById("result");
var winDisplay = document.getElementById("winCount");
var lossDisplay = document.getElementById("lossCount");
var percentDisplay = document.getElementById("winPercent");
var image = document.getElementById("image");
var headsWin = document.getElementById("headsWin");
var tailsWin = document.getElementById("tailsWin");
var count = 0;
var winCount = 0;
var headsCount = 0;
var tailsCount = 0;


// Set the correct side of coin
function setSide(){
	var rand = Math.random();
	if(rand >= 0.5) {
		return 1;
	} else {
		return 0;
	}
}


function tossCoin(guess) {
	var correct = setSide();
	console.log(correct);
	
	count++;
	correct == 0 ? headsCount++ : tailsCount++;
	headsWin.innerHTML = ((headsCount/count) * 100).toFixed(2);
	tailsWin.innerHTML = ((tailsCount/count) * 100).toFixed(2);

	if (guess == correct) {
		result.innerHTML = "WINNER!";
		result.style.color = "#16A085";
		winCount++;
		winDisplay.innerHTML = winCount;
	} else {
		result.innerHTML = "LOSER!";
		result.style.color = "#e74c3c";
		lossDisplay.innerHTML = count - winCount;
	}
	percentDisplay.innerHTML = ((winCount/count)*100).toFixed(2);
	if (((winCount/count)*100).toFixed(2) >= 50) {
		percentDisplay.style.color = "#16A085";
	} else {
		percentDisplay.style.color = "#e74c3c";
	}
	if(correct == 0) {
		image.src="img/heads.png";
	} else {
		image.src="img/tails.png";
	}

}

heads.onclick = function(){
	tossCoin(0);		
};

tails.onclick = function(){
	tossCoin(1);
};


