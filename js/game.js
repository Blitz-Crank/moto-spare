'use strict';
var score =0;
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
var Uname = prompt('Welcome to our Gussing Game, Whats your name ?');
if(confirm(`Hello  ${ Uname } are you ready for the game ? :) `)){
  alert('CLICK on the boxes to show the questions ... :P ');}
else {
  alert('Why not ... Just CLICK on the boxes to show the questions... ');
}
var sec = document.querySelector('#section');
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
      alert('No .. I am a Wheel ');
    }
    var weell = document.getElementById('weel');
    weell.style.backgroundImage = 'url(\'../img/weels.png\')';
    weell.style.backgroundSize = 'cover';
  }else if (e.target.id === 'mirror'){
    var mirror =prompt('Guess who I am .... I am on the right, left and middle of the car , The girls use me only to check thier "MAKEUP" ??? ').toLowerCase();
    if(mirror === 'mirror'){
      alert('Correct I am a Mirror ..');
      score++; 
      console.log(score);}
    else {
      alert('No .. I am a Mirror ');
      
    }
    console.log(score);
    var mirrorr = document.getElementById('mirror');
    mirrorr.style.backgroundImage = 'url(\'../img/mirror.jpg\')';
    mirrorr.style.backgroundSize = 'cover';
  }else if (e.target.id === 'break'){
    var breaks =prompt('Guess who I am .... I reduce the speed of the car and stop it ??? ').toLowerCase();
    if(breaks === 'breaks' || breaks === 'break'){
      alert('Correct I am the Breaks ..');
      score++;
      console.log(score); console.log(score);}
    else {
      alert('No .. I am the Breaks ');
    }
    var breakss = document.getElementById('break');
    breakss.style.backgroundImage = 'url(\'../img/break.jpg\')';
    breakss.style.backgroundSize = 'cover';
  }else if (e.target.id === 'stearing'){
    var stearing =prompt('Guess who I am .... I am the wheel that used to steer the car ??? ').toLowerCase();
    if(stearing === 'stearing'){
      alert('Correct I am the Steering ..');
      score++;
      console.log(score);}
    else {
      alert('No .. I am the Steering ');
    }
    var stearingg = document.getElementById('stearing');
    stearingg.style.backgroundImage = 'url(\'../img/steering-wheel-png.jpg\')';
    stearingg.style.backgroundSize = 'cover';
  }else if (e.target.id === 'light'){
    var light =prompt('Guess who I am .... I turn on at night to light the way in front of the car  ??? ').toLowerCase();
    if(light === 'light' || light === 'lights'){
      alert('Correct I am the car Lights ..');
      score++; console.log(score);}
    else {
      alert('No .. I am the car Lights ');
    }
    var lightt = document.getElementById('light');
    lightt.style.backgroundImage = 'url(\'../img/light.png\')';
    lightt.style.backgroundSize = 'cover';
  }
  alertScore.textContent = `Great job .... your Score is : ${score} / 5 `;

}



