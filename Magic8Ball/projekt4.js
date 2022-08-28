const input = document.querySelector("input");
const ball = document.getElementById("ball8");
const error = document.querySelector(".error");
const answer = document.querySelector(".answer");

//SHOWING AND CLEARING ERROR AND ANSWERS MESSAGES
const showError = (e, msg) => {
	e.textContent = msg;
};
const clearTexts = (e, a) => {
	e.textContent = "";
	a.textContent = "";
};

//CHECKING INPUT VALUE
const checkInput = e => {
	if (input.value === "") {
		showError(error, "Należy uzupełnić treść pytania.");
	} else if (input.value.slice(-1) !== "?") {
		showError(error, "Odpowiedź musi być zakończona znakiem zapytania");
	} else {
		chooseAnswer(answer);
	}
};

//CHOOSING AND SHOWING ANSWER
const chooseAnswer = e => {
	const answers = [
		"Tak :)",
		"Nie :(",
		"Nie chcesz tego wiedzieć!",
		"Być może :/",
	];
	const answersCounter = Math.floor(Math.random() * answers.length);
	e.innerHTML = `<span>Odpowiedź: </span> ${answers[answersCounter]}`;
};

//BALL ANIMATION
const ballAnimation = e => {
	e.classList.add("shake-animation");
	setTimeout(el => {
		e.classList.remove("shake-animation");
	}, 1000);
};

//BALL ON CLICK ACTION
ball.addEventListener("click", () => {
	clearTexts(error, answer);
	ballAnimation(ball);
	setTimeout(checkInput, 1000);
});
