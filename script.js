const container = document.querySelector('.container');
const singleDice = document.querySelector('.singleDice');
let rollDice;
const addDice = document.querySelector('.addDice');
const body = document.querySelector('body');
const diceBag = document.querySelector('.dice');
const rollAll = document.querySelector('.rollAllDice');

const bagOfDice = () => {
	let bagOfNewDice = document.createElement('div');
	bagOfNewDice.classList.add('singleDice');
	diceBag.append(bagOfNewDice);
	dicePanel(bagOfNewDice);
	randomColor(bagOfNewDice);
};

const dicePanel = (bagOfNewDice) => {
	const diceNumber = document.createElement('p');
	diceNumber.classList.add('num');
	diceNumber.textContent = '?';
	bagOfNewDice.append(diceNumber);

	const rollBtn = document.createElement('button');
	rollBtn.classList.add('roll');
	rollBtn.textContent = 'Rzuć kostką';
	bagOfNewDice.append(rollBtn);

	const randomNumber = () => {
		let random = Math.floor(Math.random() * 6) + 1;
		diceNumber.textContent = random;
	};

	rollBtn.addEventListener('click', randomNumber);
};

const randomColor = (bagOfNewDice) => {
	let diceColor = Math.floor(Math.random() * 16777215).toString(16);
	bagOfNewDice.style.backgroundColor = '#' + diceColor;
};

const multiDice = () => {
	let allBtn = document.querySelectorAll('.roll');

	// allBtn.forEach(
	// 	button => button.click()
	// )

	// for (let i = 0; i < allBtn.length; i++) {
	// 	let button = allBtn[i];
	// 	button.click();

	let callBack = (rollButton) => rollButton.click();
	allBtn.forEach(callBack);

	// allBtn.forEach((button) => {
	// 	button.click();
	// });
};

addDice.addEventListener('click', bagOfDice);
rollAll.addEventListener('click', multiDice);
