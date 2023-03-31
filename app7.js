var h1 = document.querySelector('h1');
var numInput = document.querySelector('#num');
var weightInput = document.querySelector('#weight');
var addBtn = document.querySelector('#add');
var resetBtn = document.querySelector('#reset');
var numberInfo = document.querySelector('#numbers-info');

var numbers = [];
var weights = [];

resetBtn.addEventListener('click', function() {
    numbers = [];
    // @TODO: Resetowanie nie działa dla wag!
    
    h1.innerText = '';
    numberInfo.innerText = '';
});

addBtn.addEventListener('click', function() {
    
    var num = numInput.value;
    var weight = weightInput.value;
    
    numInput.value = '';
    
    numbers.push(parseFloat(num) * parseFloat(weight));
    weights.push(parseFloat(weight));
    
    var sum = 0;
    
    for (var el of numbers) {
        sum = sum + el;
    }
    
    var weightsSum = 0;
    
    for (var el of weights) {
        weightsSum = weightsSum + el;
    }
    
    var avg = sum / weightsSum;
    
    h1.innerText = avg;
    numberInfo.innerText = numbers.join(', ');
    // @TODO: Przydałoby się znaleźć jakiś bardziej elegancki sposób wypisywania dodanych ocen.
    
});
