const btnStart = document.querySelector('.start');
const btnPause = document.querySelector('.pause');
const btnStop = document.querySelector('.stop');
const btnClear = document.querySelector('.clear');
const btnArchiv = document.querySelector('.archiv');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.timelist');

const btnInfo = document.querySelector('.info');
const modalShadow = document.querySelector('.modal-shadow');
const btnCloseModal = document.querySelector('.close');

const btnTheme = document.querySelector('.theme');
const themePalette = document.querySelector('.theme-palette');
const themeList = themePalette.querySelectorAll('p');
let root = document.documentElement;

let timeCounter;
let seconds = 0;
let minutes = 0;

let timesArr = [];

//START BUTTON FUNCTION
const startStoper = () => {
	clearInterval(timeCounter);
	timeCounter = setInterval(() => {
		seconds++;
		if (seconds % 60 == 0) {
			minutes++;
			seconds = 0;
		}

		if (seconds < 10) {
			stopwatch.textContent = `${minutes}:0${seconds}`;
		} else {
			stopwatch.textContent = `${minutes}:${seconds}`;
		}
	}, 1000);
};
//PAUSE BUTTON FUNCTION
const pauseStoper = () => {
	clearInterval(timeCounter);
};

//STOP BUTTON FUNCTION
const stopStoper = () => {
	if (stopwatch.textContent !== '0:00') {
		time.innerHTML = `<span>Ostatni czas:</span> ${stopwatch.textContent}`;
		time.style.visibility = 'visible';
		timesArr.push(stopwatch.textContent);
	}
	clearStuff();
};

//CLEAR FUNCTIONS
const clearStuff = () => {
	clearInterval(timeCounter);
	seconds = 0;
	minutes = 0;
	timeList.textContent = '';
	timeList.style.display = 'none';
	stopwatch.textContent = '0:00';
};
const clearStoper = () => {
	clearStuff();
	time.textContent = '';
	time.style.visibility = 'hidden';
	timesArr = [];
};

//SHOWING TIMES LISTS
const showArchiv = () => {
	if (timeList.style.display === 'none') {
		timeList.style.display = 'block';
		timesArr.forEach(time => {
			const newTime = document.createElement('li');
			newTime.innerHTML = `Pomiar nr ${
				timesArr.indexOf(time) + 1
			}: <span>${time}</span> `;
			timeList.appendChild(newTime);
		});
	} else {
		const timeListElements = document.querySelectorAll('li');
		timeListElements.forEach(time => {
			time.remove();
		});
		timeList.style.display = 'none';
	}
};

//SHOW/HIDE INFO FUNCTIONS
const showInfo = () => {
	modalShadow.style.display = 'block';
};

const hideInfo = () => {
	modalShadow.style.display = 'none';
};

//THEME FUNCTIONS:
const themePanelDisplay = () => {
	if (themePalette.style.display === 'none') {
		themePalette.style.display = 'block';
	} else {
		themePalette.style.display = 'none';
	}
};
const changeColor = e => {
	root.style.setProperty('--first-color', `${e.style.color}`);
};
themeList.forEach(color => {
	color.addEventListener('click', changeColor(color));
});

//BUTTON ACTIONS
btnStart.addEventListener('click', startStoper);
btnPause.addEventListener('click', pauseStoper);
btnStop.addEventListener('click', stopStoper);
btnArchiv.addEventListener('click', showArchiv);
btnClear.addEventListener('click', clearStoper);
btnInfo.addEventListener('click', showInfo);
btnCloseModal.addEventListener('click', hideInfo);
btnTheme.addEventListener('click', themePanelDisplay);
