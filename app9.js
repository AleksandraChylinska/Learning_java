var oddLis = $('li:odd');
var evenLis = $('li:even');
var ul = $('ul');

evenLis.css('background-color', 'yellow');

ul.on('mouseenter', function() {
	evenLis.css('background-color', 'white');
	oddLis.css('background-color', 'yellow');
});

ul.on('mouseleave', function() {
	evenLis.css('background-color', 'yellow');
	oddLis.css('background-color', 'white');
});

var yes = $('#i-am-intrested-btn');
var imie = $('#name-input');
var tekst = $('#name-info');
var btn = $('.what-data');


//////////////////////////////////////


var yes = $('#i-am-intrested-btn');
var imie = $('#name-input');
var tekst = $('#name-info');
var btn = $('.what-data');


yes.on('click', function(){
  yes.toggleClass('checked');
});

imie.on('input', function(){

  tekst.text(imie.val());
});

btn.on('click', function(){
  var data=$(this).find(data-test.val());
  alert(data);
});