// bugs to fix. adding too many things to history overflows the box. either make the box into a scroll box at a certain number of divs or find way to remove first div, move every div below that up,
//make sure the numbering used for history counter stays correct, then add new div at the bottom.
// fair amount of repeated code in places. try to make more DRY.
let calcArray = [];
let historyArray = [];
let tempHistoryArray = '';
let tempArray = ''; /* used as a  buffer in adding multiple digit numbers*/
let operatorAdded = true; // used to prevent operators being used twice in a row. also starting as true means an operator cant be added until a number has been
let equalsUsed = true; // used to only clear the display after a new number has been entered
let runningTotal = 0;
let historyCounter = 0;
let currentDisp = document.getElementById('currentDisplay');
let ansDisp = document.getElementById('ansDisplay');
let histDisplay = document.getElementById('historyDisplay');

// LISTENERS FOR BUTTONS
let zero = document.getElementById('zero');
zero.addEventListener('click', addZero);

function addZero() {
	if (equalsUsed == true) {
		clearDisp();
		equalsUsed = false;
	}
	tempArray += '0';
	currentDisp.innerText += 0;
	operatorAdded = false;
	tempHistoryArray += '0';
}

let doubleZero = document.getElementById('doublezero');
doubleZero.addEventListener('click', addTwoZeroes);

function addTwoZeroes() {
	if (equalsUsed == true) {
		clearDisp();
		equalsUsed = false;
	}
	addZero();
	addZero();
}

let one = document.getElementById('one');
one.addEventListener('click', addOne);

function addOne() {
	if (equalsUsed == true) {
		clearDisp();
		equalsUsed = false;
	}
	tempArray += '1';
	currentDisp.innerText += 1;
	operatorAdded = false;
	tempHistoryArray += '1';
}

let two = document.getElementById('two');
two.addEventListener('click', addTwo);

function addTwo() {
	if (equalsUsed == true) {
		clearDisp();
		equalsUsed = false;
	}
	tempArray += '2';
	currentDisp.innerText += 2;
	operatorAdded = false;
	tempHistoryArray += '2';
}

let three = document.getElementById('three');
three.addEventListener('click', addThree);

function addThree() {
	if (equalsUsed == true) {
		clearDisp();
		equalsUsed = false;
	}
	tempArray += '3';
	currentDisp.innerText += 3;
	operatorAdded = false;
	tempHistoryArray += '3';
}

let four = document.getElementById('four');
four.addEventListener('click', addFour);

function addFour() {
	if (equalsUsed == true) {
		clearDisp();
		equalsUsed = false;
	}
	tempArray += '4';
	currentDisp.innerText += 4;
	operatorAdded = false;
	tempHistoryArray += '4';
}

let five = document.getElementById('five');
five.addEventListener('click', addFive);

function addFive() {
	if (equalsUsed == true) {
		clearDisp();
		equalsUsed = false;
	}
	tempArray += '5';
	currentDisp.innerText += 5;
	operatorAdded = false;
	tempHistoryArray += '5';
}

let six = document.getElementById('six');
six.addEventListener('click', addSix);

function addSix() {
	if (equalsUsed == true) {
		clearDisp();
		equalsUsed = false;
	}
	tempArray += '6';
	currentDisp.innerText += 6;
	operatorAdded = false;
	tempHistoryArray += '6';
}

let seven = document.getElementById('seven');
seven.addEventListener('click', addSeven);

function addSeven() {
	if (equalsUsed == true) {
		clearDisp();
		equalsUsed = false;
	}
	tempArray += '7';
	currentDisp.innerText += 7;
	operatorAdded = false;
	tempHistoryArray += '7';
}

let eight = document.getElementById('eight');
eight.addEventListener('click', addEight);

function addEight() {
	if (equalsUsed == true) {
		clearDisp();
		equalsUsed = false;
	}
	tempArray += '8';
	currentDisp.innerText += 8;
	operatorAdded = false;
	tempHistoryArray += '8';
}

let nine = document.getElementById('nine');
nine.addEventListener('click', addNine);

function addNine() {
	if (equalsUsed == true) {
		clearDisp();
		equalsUsed = false;
	}
	tempArray += '9';
	currentDisp.innerText += 9;
	operatorAdded = false;
	tempHistoryArray += '9';
}

let decimal = document.getElementById('decimal');
decimal.addEventListener('click', addDecimal);

function addDecimal() {
	if (tempArray.includes('.')) {
		console.log('Error, too many decimal points');
		return 'Error, too many decimal points';
	} else {
		tempArray += '.';
		currentDisp.innerText += '.';
		tempHistoryArray += '.';
	}
}

// LISTENERS FOR OPERATORS
let plus = document.getElementById('plus');
plus.addEventListener('click', PLUS);

function PLUS() {
	if (operatorAdded == false) {
		calcArray.push(parseFloat(tempArray));
		tempArray = '';
		calcArray.push('+');
		currentDisp.innerText += '+';
		operatorAdded = true;
		tempHistoryArray += '+';
	}
}

let minus = document.getElementById('minus');
minus.addEventListener('click', MINUS);

function MINUS() {
	if (operatorAdded == false) {
		calcArray.push(parseFloat(tempArray));
		tempArray = '';
		calcArray.push('-');
		currentDisp.innerText += '-';
		operatorAdded = true;
		tempHistoryArray += '-';
	}
}

let times = document.getElementById('multiply');
times.addEventListener('click', MUTIPLY);

function MUTIPLY() {
	if (operatorAdded == false) {
		calcArray.push(parseFloat(tempArray));
		tempArray = '';
		calcArray.push('*');
		currentDisp.innerText += '*';
		operatorAdded = true;
		tempHistoryArray += '*';
	}
}

let division = document.getElementById('divide');
division.addEventListener('click', DIVIDE);

function DIVIDE() {
	if (operatorAdded == false) {
		calcArray.push(parseFloat(tempArray));
		tempArray = '';
		calcArray.push('/');
		currentDisp.innerText += '/';
		operatorAdded = true;
		tempHistoryArray += '/';
	}
}

let clear = document.getElementById('clear');
clear.addEventListener('click', clearDisp);

function clearDisp() {
	calcArray = [];
	currentDisp.innerText = '';
	ansDisp.innerText = '';
	tempArray = '';
	runningTotal = 0;
	tempHistoryArray = '';
}

let backspace = document.getElementById('backspace');
backspace.addEventListener('click', removeLast);

function removeLast() {
	if (tempArray.length > 0) {
		currentDisp.innerText = currentDisp.innerText.slice(0, currentDisp.innerText.length - 1);
		tempArray = tempArray.slice(0, tempArray.length - 1);
		tempHistoryArray = tempHistoryArray.slice(0, tempHistoryArray.length - 1);
	}
}

let clearHist = document.getElementById('resetHist');
clearHist.addEventListener('click', delHist);

function delHist() {
	histDisplay.innerText = '';
	historyCounter = 0;
	historyArray = [];
	clearDisp();
}

let equals = document.getElementById('equals');
equals.addEventListener('click', EQUALS);

function EQUALS() {
	if (operatorAdded == false) {
		historyArray.push(tempHistoryArray);
		tempHistoryArray = '';
		console.log(calcArray);
		if (tempArray != '') {
			calcArray.push(parseFloat(tempArray));
		}
		if (calcArray.length > 3 && calcArray.length % 2 != 0) {
			while (calcArray.length >= 5) {
				if (calcArray.length > 3 && calcArray.length % 2 != 0) {
					while (calcArray.length >= 5) {
						if (calcArray.indexOf('*', 2) >= 1 || calcArray.indexOf('/', 2) >= 1) {
							let newIndex;
							if (calcArray.indexOf('*', 2) != -1) {
								newIndex = calcArray.indexOf('*');
								let num1 = calcArray[newIndex - 1];
								let num2 = calcArray[newIndex + 1];
								let test = multiply(num1, num2);
								calcArray.splice(newIndex - 1, 3, test);
								newIndex = '';
							} else if (calcArray.indexOf('/', 2) != -1) {
								newIndex = calcArray.indexOf('/');
								let num1 = calcArray[newIndex - 1];
								let num2 = calcArray[newIndex + 1];
								if (num1 == 0 || num2 == 0) {
									console.log('Division by zero error');
									currentDisp.innerText = 'Error';
									ansDisp.innerText = 'Error';
									return;
								} else {
									let test = divide(num1, num2);
									calcArray.splice(newIndex - 1, 3, test);
									newIndex = '';
								}
							}
						} else {
							let num1 = calcArray[0];
							let num2 = calcArray[2];
							let operator = calcArray[1];
							if (operator == '*') {
								let test = multiply(num1, num2);
								calcArray.splice(0, 3, test);
							} else if (operator == '/') {
								if (num1 == 0 || num2 == 0) {
									console.log('Division by zero error');
									currentDisp.innerText = 'Error';
									ansDisp.innerText = 'Error';
									return;
								} else {
									let test = divide(num1, num2);
									calcArray.splice(0, 3, test);
								}
							} else if (operator == '+') {
								let test = add(num1, num2);
								calcArray.splice(0, 3, test);
							} else if (operator == '-') {
								let test = subtract(num1, num2);
								calcArray.splice(0, 3, test);
							}
						}
					}
				}
			}
		}
		if (calcArray.length == 3) {
			let num1 = calcArray[0];
			let num2 = calcArray[2];
			let operator = calcArray[1];
			if (operator == '*') {
				runningTotal += multiply(num1, num2);
			} else if (operator == '/') {
				if (num1 == 0 || num2 == 0) {
					console.log('Division by zero error');
					currentDisp.innerText = 'Error';
					ansDisp.innerText = 'Error';
					return;
				} else {
					runningTotal += divide(num1, num2);
				}
			} else if (operator == '+') {
				runningTotal += add(num1, num2);
			} else if (operator == '-') {
				runningTotal += subtract(num1, num2);
			}
		}
		console.log(runningTotal);
		let ansStr = runningTotal.toString();
		if (ansStr.length > 8) {
			ansDisp.innerText = runningTotal.toPrecision(4);
			tempArray = '';
			let newDiv = document.createElement('div');
			newDiv.innerText = `${historyCounter + 1}) ${historyArray[historyCounter]} = ${runningTotal.toPrecision(
				4
			)}`;
			histDisplay.appendChild(newDiv);
			runningTotal = 0;
			currentDisp.innerText = '';
			historyCounter++;
		} else {
			ansDisp.innerText = runningTotal;
			tempArray = '';
			let newDiv = document.createElement('div');
			newDiv.innerText = `${historyCounter + 1}) ${historyArray[historyCounter]} = ${runningTotal}`;
			histDisplay.appendChild(newDiv);
			runningTotal = 0;
			currentDisp.innerText = '';
			historyCounter++;
		}
	}
	operatorAdded = true;
	equalsUsed = true;
}

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}
