var l1 = document.querySelector('#licz1');
var l2 = document.querySelector('#licz2');
var btn = document.querySelector('#dod');
var h3 = document.querySelector('#txt');

btn.addEventListener('click', function() {
    var li1 = l1.value;
    var li2 = l2.value;
    var suma = (parseInt(li1) + parseInt(li2))
    /*console.log(parseInt(li1) + parseInt(li2));
    */
    h3.innerText =  suma;
});



