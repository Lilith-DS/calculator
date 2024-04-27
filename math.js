let a = ''; //first number
let b = ''; //second number
let sign = ''; //operation sign
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.']; //numbers
const action = ['/','x','-','+']; //symbols

const out = document.querySelector('.calculator-screen p'); //calculator-screen

function clearAll() {
	a = '';
	b = ''; 
	sign = ''; 
	finish = false;
	out.textContent = 0;
}

document.querySelector('.symb-ac').onclick = clearAll; //AC

document.querySelector('.buttons').onclick = (event) => {
	if(!event.target.classList.contains('btn')) return; //нажата не кнопка
	if(event.target.classList.contains('AC')) return; //нажата АС

	out.textContent = '';

	const key = event.target.textContent; //получить нажатую кнопку

	//если нажата 0-9 или .
	if (digit.includes(key)) { 
		if (b === '' && sign === '') {
			a += key;
			out.textContent = a;
			
		} else if (a!== '' && b!== '' && finish) {
			b = key;
			finish = false;
			out.textContent = b;
		} else {
			b += key;
			out.textContent = b;
		}
		console.log(a, b, sign);
		return;
	}
	
	//если нажато / Х + -
	if (action.includes(key)) { 
		sign = key;
		out.textContent = sign;
		console.log(a, b, sign);
		return;
	}

	//если нажато =
	if (key === '=') {
		if (b === '') b = a;
		switch (sign) {
		case "+":
			a = (+a) + (+b);
			break;
		case "-":
			a = a - b;
			break;
		case "x":
			a = a * b;
			break;
		case "/":
			if (b === '0') {
				out.textContent = 'Ошибка';
				a = '';
				b = '';
				sign = '';
				return;
			}
			a = a / b;
			break;
		}
		finish = true;
		out.textContent = a;
		console.log(a, b, sign);
	}
}