'use strict';

var score =0;

var Uname = prompt('Welcome to our Gussing Game, Whats your name ?');

if(confirm(`Hello  ${ Uname } are you ready for the game ? :) `)){
  alert('OK lets Start ..... ');}
else {
  alert('Why not ... Just try it and you will like it ... ');
}


var weel =prompt('Guess who I am .... I look round and you can find me in the car in four places ??? ');
if(weel === 'weel' || weel === 'weels'){
  alert('Correct I am a Weel ..');
  score++;}
else {
  alert('No .. I am a Weel ');
}
var weell = document.getElementById('weel');
weell.style.backgroundImage = 'url(\'../img/weels.png\')';
weell.style.backgroundSize = 'cover';



var mirror =prompt('Guess who I am .... I am on the right, left and middle of the car , you use me to see the cars behind you  ??? ');
if(mirror === 'mirror'){
  alert('Correct I am a Mirror ..');
  score++;}
else {
  alert('No .. I am a Mirror ');
}
var mirrorr = document.getElementById('mirror');
mirrorr.style.backgroundImage = 'url(\'../img/mirror.jpg\')';
mirrorr.style.backgroundSize = 'cover';


var battary =prompt('Guess who I am .... I am one of the main I tems and I provied the power for the car  ??? ');
if(battary === 'battary'){
  alert('Correct I am a Battary ..');
  score++;}
else {
  alert('No .. I am a Battary ');
}
var battaryy = document.getElementById('battary');
battaryy.style.backgroundImage = 'url(\'../img/battery.jpg\')';
battaryy.style.backgroundSize = 'cover';
