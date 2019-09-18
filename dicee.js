const images = document.querySelectorAll("img");
const span = document.querySelector("span");
const playButton = document.querySelector("button");
const randomNum = [];

//Replace the image with a random dice, loop trhough the two images
for(let i = 0; i < images.length; i++) {
	randomNum[i] = generateRandomNum();
	//change source attribute of image
	images[i].src = `images/dice${randomNum[i]}.png`;

	//determine a winner, change heading
	if(i === 1) {
		if(randomNum[0] > randomNum[i]) {
			span.innerHTML = "1";
		} else if(randomNum[0] < randomNum[i]) {
			span.innerHTML = "2";
		} else {
			span.innerHTML = "1 and 2";
		}
	}
}

//Create random Integer between 1 and 6
function generateRandomNum() {
	return Math.floor(Math.random() * 6) + 1;
}

//Reload page if user clicks on play again button
function reloadPage() {
	location.reload();
}
