var block1 = document.querySelector ('.block1');
var block2 = document.querySelector ('.block2');
var block3 = document.querySelector ('.block3');
var block4 = document.querySelector ('.block4');
var block5 = document.querySelector ('.block5');
var block6 = document.querySelector ('.block6');

var button1 = document.querySelector('.block-link1');
var button2 = document.querySelector('.block-link2');
var button3 = document.querySelector('.block-link3');
var button4 = document.querySelector('.block-link4');
var button5 = document.querySelector('.block-link5');
var button6 = document.querySelector('.block-link6');

var block01 = document.querySelector('.block-1');
var block02 = document.querySelector('.block-2');
var block03 = document.querySelector('.block-3');
var block04 = document.querySelector('.block-4');
var block05 = document.querySelector('.block-5');
var block06 = document.querySelector('.block-6');

var openlink = document.querySelector('.menu-open');
var mobiactive = document.querySelector('.mobi-active');
var linkone = document.querySelector('.link-one');
var black = document.querySelector('.black');
// var blocklink1 = document.querySelector('.block-link1');

openlink.addEventListener('click', function() {
  mobiactive.classList.add('opened');
  black.classList.add('opened');
});

linkone.addEventListener('click', function() {
mobiactive.classList.remove('opened');
black.classList.remove('opened');
});

button1.addEventListener('click', function() {
  button1.classList.toggle('opened');
  block01.classList.toggle('opened');
  linkinner.classList.toggle('opened');
});

button2.addEventListener('click', function() {
  button2.classList.toggle('opened');
  block02.classList.toggle('opened');
  linkinner.classList.toggle('opened');
});

button3.addEventListener('click', function() {
  button3.classList.toggle('opened');
  block03.classList.toggle('opened');
  linkinner.classList.toggle('opened');
});

button4.addEventListener('click', function() {
  button4.classList.toggle('opened');
  block04.classList.toggle('opened');
  linkinner.classList.toggle('opened');
});

button5.addEventListener('click', function() {
  button5.classList.toggle('opened');
  block05.classList.toggle('opened');
  linkinner.classList.toggle('opened');
});

button6.addEventListener('click', function() {
  button6.classList.toggle('opened');
  block06.classList.toggle('opened');
  linkinner.classList.toggle('opened');
});









button1.addEventListener('click', function() {
  block1.classList.toggle('opened');
  
});

button2.addEventListener('click', function() {
  block2.classList.toggle('opened');
  
});

button3.addEventListener('click', function() {
  block3.classList.toggle('opened');
  
});

button4.addEventListener('click', function() {
  block4.classList.toggle('opened');
  
});

button5.addEventListener('click', function() {
  block5.classList.toggle('opened');
  
});

button6.addEventListener('click', function() {
  block6.classList.toggle('opened');
  
});


