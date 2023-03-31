var inputA = document.querySelector('#num-a');
var inputB = document.querySelector('#num-b');
var addBtn = document.querySelector('#add');
var subtractBtn = document.querySelector('#subtract');
var multiplyBtn = document.querySelector('#multiply');
var divideBtn = document.querySelector('#divide');
var powerBtn = document.querySelector('#power');
var h1 = document.querySelector('h1');

addBtn.addEventListener('click', function() {
	var a = parseFloat(inputA.value);
	var b = parseFloat(inputB.value);
	var result = a + b;
	h1.innerText = a + " + " + b + " = " + result;
});

subtractBtn.addEventListener('click', function() {
	var a = parseFloat(inputA.value);
	var b = parseFloat(inputB.value);
	var result = a - b;
	h1.innerText = a + " - " + b + " = " + result;
});

multiplyBtn.addEventListener('click', function() {
	var a = parseFloat(inputA.value);
	var b = parseFloat(inputB.value);
	var result = a * b;
	h1.innerText = a + " * " + b + " = " + result;
});

divideBtn.addEventListener('click', function() {
	var a = parseFloat(inputA.value);
	var b = parseFloat(inputB.value);
	if (b === 0) {
    	h1.innerText = 'Co Ty, nie umiem dzielić przez 0, wpisz coś innego!';
	} else {
    	var result = a / b;
    	h1.innerText = a + " / " + b + " = " + result;
	}
});

powerBtn.addEventListener('click', function() {
	var a = parseFloat(inputA.value);
	var b = parseFloat(inputB.value);
	var result = a;
	for (var i = 1; i < b; i++) {
    	result = result * a;
	}
	h1.innerText = a + " ^ " + b + " = " + result;
});
