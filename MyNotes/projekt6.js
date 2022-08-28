//BUTTONS
const addBtn = document.querySelector('.addNote');
const clearAllBtn = document.querySelector('.clearAll');
const cancelBtn = document.querySelector('.cancel');
const saveBtn = document.querySelector('.save');
const clearYesBtn = document.querySelector('.yes');
const clearNoBtn = document.querySelector('.no');
const deleteNoteBtn = document.getElementsByClassName('delete');

//PANELS
const notePanel = document.querySelector('.note-panel');
const clearPanel = document.querySelector('.clear-panel');
const noteArea = document.querySelector('.note-area');
//LABELS
const categoryLabel = document.querySelector('#category');
const textArea = document.querySelector('#text');

//ERROR
const error = document.querySelector('.error');

let noteID = 0;
let selectedCategory;
//SHOW/HIDE CLEAR PANEL
const clearPanelDisplay = () => {
	if (clearPanel.style.display === 'none') {
		clearPanel.style.display = 'flex';
	} else {
		clearPanel.style.display = 'none';
	}
};

//SHOW/HIDE NOTE PANEL
const notePanelDisplay = () => {
	if (notePanel.style.display === 'none') {
		setDefaultValues();
		notePanel.style.display = 'flex';
	} else {
		notePanel.style.display = 'none';
	}
};

//SETTING DEFAULT VALUES TO LABELS
const setDefaultValues = () => {
	categoryLabel.selectedIndex = '0';
	textArea.value = '';
	error.style.visibility = 'hidden';
};

//CHECKING IF EVERY LABEL HAS BEEN FILLED
const checkForm = () => {
	if (
		categoryLabel.options[categoryLabel.selectedIndex].value !== '0' &&
		textArea.value !== ''
	) {
		selectCategory();
		addNote();
		notePanelDisplay();
	} else {
		error.style.visibility = 'visible';
	}
};

//CREATING NEW NOTE
const addNote = () => {
	const newNote = document.createElement('div');
	newNote.classList.add('note');
	newNote.setAttribute('id', noteID);
	noteArea.appendChild(newNote);
	newNote.innerHTML = `<div class="note-header">
    <h3 class="note-title">${selectedCategory}</h3>
<button class="delate" onclick="deleteNote(${noteID})">
<i class="fas fa-times icon">
</i></button>
</div>

<div class="note-body">
    ${textArea.value}
</div>`;
	changeColor(newNote);
	noteID++;
};

//CHANGE NOTE BGC COLOR
const changeColor = note => {
	switch (selectedCategory) {
		case 'Zakupy':
			note.style.backgroundColor = 'rgb(72,255,0)';
			break;
		case 'Praca':
			note.style.backgroundColor = 'rgb(255,243,0)';
			break;
		case 'Inne':
			note.style.backgroundColor = 'rgb(0,170,255)';
			break;
	}
};

//SAVE VALUE FROM CATEGORY LABEL
const selectCategory = () => {
	selectedCategory = categoryLabel.options[categoryLabel.selectedIndex].text;
};

//REMOVE SINGLE NOTE
const deleteNote = id => {
	const noteToDelate = document.getElementById(id);
	noteArea.removeChild(noteToDelate);
};

const clearAllNotes = () => {
	const notesToDelete = noteArea.querySelectorAll('.note');
	notesToDelete.forEach(note => {
		note.remove();
	});
	clearPanelDisplay();
};

clearAllBtn.addEventListener('click', clearPanelDisplay);
clearNoBtn.addEventListener('click', clearPanelDisplay);
addBtn.addEventListener('click', notePanelDisplay);
cancelBtn.addEventListener('click', notePanelDisplay);
saveBtn.addEventListener('click', checkForm);
clearYesBtn.addEventListener('click', clearAllNotes);
