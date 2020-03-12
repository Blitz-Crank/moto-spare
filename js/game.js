'use strict';
var score =0;
<<<<<<< HEAD
=======
console.log(score);
var alertScore = document.getElementById('alertScore');
var ScoreHeader = document.getElementById('ScoreHeader');
ScoreHeader.textContent = 'Your Score ...  ';
// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById('myBtn');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];
// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
};
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
>>>>>>> c96fbbffa62d47d679750e28d99df45ac42df926
var Uname = prompt('Welcome to our Gussing Game, Whats your name ?');
if(confirm(`Hello  ${ Uname } are you ready for the game ? :) `)){
  alert('OK lets Start ..... ');}
else {
  alert('Why not ... Just try it and you will like it ... ');
}
var sec = document.querySelector('#section');
<<<<<<< HEAD
=======

>>>>>>> c96fbbffa62d47d679750e28d99df45ac42df926
sec.addEventListener('click', question);
function question (e){
  console.log(e.target);
  if(e.target.id === 'weel' ){
    var weel =prompt('Guess who I am .... I look round and you can find me in the car in four places ??? ').toLowerCase();
    if(weel === 'wheel' || weel === 'wheels'){
      alert('Correct I am a Wheel ..');
      score++;
      console.log(score);
    }
    else {
      alert('No .. I am a Weel ');
    }
    var weell = document.getElementById('weel');
    weell.style.backgroundImage = 'url(\'../img/weels.png\')';
    weell.style.backgroundSize = 'cover';
  }else if (e.target.id === 'mirror'){
    var mirror =prompt('Guess who I am .... I am on the right, left and middle of the car , you use me to see the cars behind you  ??? ').toLowerCase();
    if(mirror === 'mirror'){
      alert('Correct I am a Mirror ..');
<<<<<<< HEAD
      score++;}
    else {
      alert('No .. I am a Mirror ');
    }
=======
      score++; 
      console.log(score);}
    else {
      alert('No .. I am a Mirror ');
      
    }
    console.log(score);
>>>>>>> c96fbbffa62d47d679750e28d99df45ac42df926
    var mirrorr = document.getElementById('mirror');
    mirrorr.style.backgroundImage = 'url(\'../img/mirror.jpg\')';
    mirrorr.style.backgroundSize = 'cover';
  }else if (e.target.id === 'break'){
    var breaks =prompt('Guess who I am .... I reduce the speed of the car and stop it ??? ').toLowerCase();
    if(breaks === 'breaks' || breaks === 'break'){
      alert('Correct I am the Breaks ..');
<<<<<<< HEAD
      score++;}
=======
      score++;
      console.log(score); console.log(score);}
>>>>>>> c96fbbffa62d47d679750e28d99df45ac42df926
    else {
      alert('No .. I am the Breaks ');
    }
    var breakss = document.getElementById('break');
    breakss.style.backgroundImage = 'url(\'../img/break.jpg\')';
    breakss.style.backgroundSize = 'cover';
  }else if (e.target.id === 'stearing'){
    var stearing =prompt('Guess who I am .... I am the wheel that used to steer the car ??? ').toLowerCase();
    if(stearing === 'steering'){
      alert('Correct I am the Steering ..');
<<<<<<< HEAD
      score++;}
=======
      score++;
      console.log(score);}
>>>>>>> c96fbbffa62d47d679750e28d99df45ac42df926
    else {
      alert('No .. I am the Steering ');
    }
    var stearingg = document.getElementById('stearing');
    stearingg.style.backgroundImage = 'url(\'../img/steering-wheel-png.jpg\')';
    stearingg.style.backgroundSize = 'cover';
  }else if (e.target.id === 'light'){
    var light =prompt('Guess who I am .... II turn on at night to light the way in front of the car  ??? ').toLowerCase();
    if(light === 'light' || light === 'lights'){
      alert('Correct I am the car Lights ..');
<<<<<<< HEAD
      score++;}
=======
      score++; console.log(score);}
>>>>>>> c96fbbffa62d47d679750e28d99df45ac42df926
    else {
      alert('No .. I am the car Lights ');
    }
    var lightt = document.getElementById('light');
    lightt.style.backgroundImage = 'url(\'../img/light.png\')';
    lightt.style.backgroundSize = 'cover';
  }
<<<<<<< HEAD
}
// var battary =prompt('Guess who I am .... I am one of the main items and I provied the power for the car  ??? ').toLowerCase();
// if(battary === 'battary'){
//   alert('Correct I am a Battary ..');
//   score++;}
// else {
//   alert('No .. I am a Battary ');
// }
// var battaryy = document.getElementById('battary');
// battaryy.style.backgroundImage = 'url(\'../img/battery.jpg\')';
// battaryy.style.backgroundSize = 'cover';
// var motor =prompt('Guess who I am .... I am  a machine designed to convert one form of energy into mechanical energy  ??? ').toLowerCase();
// if(motor === 'motor' || motor === 'engin'){
//   alert('Correct I am a Motor ..');
//   score++;}
// else {
//   alert('No .. I am a Motor ');
// }
// var motorr = document.getElementById('motor');
// motorr.style.backgroundImage = 'url(\'../img/motor.jpg\')';
// motorr.style.backgroundSize = 'cover';
// var handBreak =prompt('Guess who I am .... I reduces the car speed and helps it to stop completely ??? ').toLowerCase();
// if(handBreak === 'handbreak' || handBreak === 'hand break' ){
//   alert('Correct I am the HandBreak ..');
//   score++;}
// else {
//   alert('No .. I am the HandBreak ');
// }
// var handBreakk = document.getElementById('handBreak');
// handBreakk.style.backgroundImage = 'url(\'../img/handBreak.png\')';
// handBreakk.style.backgroundSize = 'cover';
// var key =prompt('Guess who I am .... I open the car and start it  ??? ').toLowerCase();
// if(key === 'key'){
//   alert('Correct I am the Key ..');
//   score++;}
// else {
//   alert('No .. I am the Key ');
// }
// var keyy = document.getElementById('key');
// keyy.style.backgroundImage = 'url(\'../img/key.png\')';
// keyy.style.backgroundSize = 'cover';
console.log(score);
var alertScore = document.getElementById('alertScore');
alertScore.textContent = `Great job .... your Score is : ${score} / 5 `;
var ScoreHeader = document.getElementById('ScoreHeader');
ScoreHeader.textContent = 'Your Score ...  ';
// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById('myBtn');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];
// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
};
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

=======
  alertScore.textContent = `Great job .... your Score is : ${score} / 5 `;

}
>>>>>>> c96fbbffa62d47d679750e28d99df45ac42df926

