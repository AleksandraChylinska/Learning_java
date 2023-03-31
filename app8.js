var btn = document.querySelector('.send');
var counter = document.querySelector('#basket-count');
 
btn.addEventListener('click', function() {
    
    btn.classList.add('bought');
    btn.innerText = 'Kupiono';
    btn.disabled = true;
    
    counter.innerText = 1;
    
});