//---------------------------CANVASES VARIABLES----------------------------

const canvas_top = document.getElementById("canvastop");
const ctx_top = canvas_top.getContext("2d");

const canvas_bottom = document.getElementById("canvasbottom");
const ctx_bottom = canvas_bottom.getContext("2d");

canvas_top.width, canvas_bottom.width = 800;
canvas_top.height, canvas_bottom.height = 500;

//------------------------------BUTTON VARIABLES----------------------------

var menusettings_button = document.getElementById("menu_button");
var index_buttons = document.getElementsByClassName("index_buttons");
var start_choices = document.getElementsByClassName("start_scene");
var elfin_choices = document.getElementsByClassName("elfin_scene");
var ruins_choices = document.getElementsByClassName("ruins_scene");
var riddle_choices = document.getElementsByClassName("riddle_scene");
var cave_choices = document.getElementsByClassName("cave_scene");
var qs_choices = document.getElementsByClassName("qs_scene");
var final_choices = document.getElementsByClassName("final_scene");
var end_play_again = document.getElementsByClassName("end_play_again");

//------------------------------IMAGES----------------------------

//stores all images used in script
var imageRepository = new function(){

  this.playerSprite = new Image();
  this.playerSprite.src = "Sprites/rowansheet.png";

  this.indexImg = new Image();
  this.indexImg.src = "Backgrounds/startforest.png";

  this.indexText = new Image();
  this.indexText.src = "Text/indexText.png";

  this.startImg = new Image();
  this.startImg.src = "Backgrounds/startImg.png";

  this.startText = new Image();
  this.startText.src = "Text/startText.png";

  this.elfinImg = new Image();
  this.elfinImg.src = "Backgrounds/forest.png";

  this.elfinText = new Image();
  this.elfinText.src = "Text/elfinText.png";

  this.ruinsImg = new Image();
  this.ruinsImg.src = "Backgrounds/ruins.png";

  this.ruinsText = new Image();
  this.ruinsText.src = "Text/ruinsText.png";

  this.caveImg = new Image();
  this.caveImg.src = "Backgrounds/cave2.png";

  this.caveText = new Image();
  this.caveText.src = "Text/caveText.png";

  this.riddleImg = new Image();
  this.riddleImg.src = "Backgrounds/nimue2.png";

  this.riddleText = new Image();
  this.riddleText.src = "Text/riddleText.png";

  this.finalImg = new Image();
  this.finalImg.src = "Backgrounds/sunset.png";

  this.finalText = new Image();
  this.finalText.src = "Text/finalText.png";

  this.qsImg = new Image();
  this.qsImg.src = "Backgrounds/quicksand.png";

  this.qsText = new Image();
  this.qsText.src = "Text/qsText.png";

  this.endText = new Image();
  this.endText.src = "Text/endText.png";

  // this.mushroom = new Image();
  // this.mushroom.src = "Sprites/mushroom.png";

  // this.star = new Image();
  // this.star.src = "/Sprites/stars.png";

}

//------------------------------ON LOAD: INDEX PAGE----------------------------

//Hide most of the buttons, only show start ones
hideButtons(start_choices);
hideButtons(elfin_choices);
hideButtons(ruins_choices);
hideButtons(cave_choices);
hideButtons(qs_choices);
hideButtons(riddle_choices);
hideButtons(final_choices);
hideButtons(end_play_again);

//when game page loads:
window.onload = function() {
  newBackground(imageRepository.indexImg);
  shadowGradient();

  //source-over so text is put on top of background and gradient
  ctx_bottom.globalCompositeOperation = 'source-over';
  ctx_bottom.fillStyle = "white";
  newText(imageRepository.indexText);
};

function shadowGradient(){

  // Create gradient, from middle to borders
  var gradient = ctx_bottom.createRadialGradient(400, 400, 0, 400, 250, 250);
  // Opaque white in the middle
  gradient.addColorStop(0, 'rgba(255,255,255,0)');
  // Transparent white at the borders
  gradient.addColorStop(1, 'rgba(255,255,255,1)');
  ctx_bottom.globalCompositeOperation = 'destination-out';
  ctx_bottom.fillStyle = gradient;
  ctx_bottom.fillRect(0, 0, canvas_bottom.width, canvas_bottom.height);
}

//-------------------------START BUTTON: SOUND/BACKG--------------------------

//When user presses start game button:
function startFunction(){
  alert("Hi there! This game uses music & background sounds \nIf you would like to turn those off please go to settings.");
  startTimer();
  background_audio.play();
  background_audio.volume = 0.3;
  startAnimating(50); //start animating game character
  newBackground(imageRepository.startImg);
  newText(imageRepository.startText);
  hideButtons(index_buttons);
  showButtons(start_choices);
  showButtons(menusettings_button);

  progress_bar.style.width = "75px";
  progress_bar.innerHTML = "10%";
}

//----------------------------USER OPTIONS: BUTTONS--------------------------

//get progress bar so when user clicks on choices, progress bar grows
var progress_bar = document.getElementById("progressFill");

function choseElfin(){
  progress_bar.style.width = "150px";
  progress_bar.innerHTML = "20%";
  newBackground(imageRepository.elfinImg);
  newText(imageRepository.elfinText);
  hideButtons(start_choices);
  hideButtons(ruins_choices);
  showButtons(elfin_choices);
}

function choseRuins(){
  progress_bar.style.width = "150px";
  progress_bar.innerHTML = "20%";
  newBackground(imageRepository.ruinsImg);
  newText(imageRepository.ruinsText);
  hideButtons(start_choices);
  hideButtons(elfin_choices);
  showButtons(ruins_choices);
}

function riddleScene(){
  progress_bar.style.width = "375px";
  progress_bar.innerHTML = "50%";
  newBackground(imageRepository.riddleImg);
  newText(imageRepository.riddleText);
  hideButtons(ruins_choices);
  showButtons(riddle_choices);
}

function caveScene(){
  progress_bar.style.width = "450px";
  progress_bar.innerHTML = "60%";
  newBackground(imageRepository.caveImg);
  newText(imageRepository.caveText);
  hideButtons(elfin_choices);
  hideButtons(riddle_choices);
  showButtons(cave_choices);
}

function qsScene(){
  progress_bar.style.width = "375px";
  progress_bar.innerHTML = "50%";
  newBackground(imageRepository.qsImg);
  newText(imageRepository.qsText);
  hideButtons(elfin_choices);
  hideButtons(cave_choices);
  showButtons(qs_choices);
}

function finalScene(){
  progress_bar.style.width = "675px";
  progress_bar.innerHTML = "90%";
  newBackground(imageRepository.finalImg);
  newText(imageRepository.finalText);
  hideButtons(riddle_choices);
  hideButtons(cave_choices);
  hideButtons(qs_choices);
  showButtons(final_choices);
}

function endRace(){
  progress_bar.style.width = "710px";
  progress_bar.innerHTML = "100%";
  newBackground(imageRepository.finalImg);
  hideButtons(final_choices);
  showButtons(end_play_again);
  shadowGradient();

  ctx_bottom.globalCompositeOperation = 'source-over';
  ctx_bottom.fillStyle = "white";
  newText(imageRepository.endText);

}

//-----------------------------------PLAYER----------------------------------
/*
Code from Frank Laboratories on Youtube: Spritesheet aniamtion with vanilla
JavaScript: https://www.youtube.com/watch?v=EYf_JwzwTlQ
Some changes added/made by me to adapt code to my own project
*/

//array to keep track of what keys the user presses
const keys = [];

//js object to store data about player
const player = {
  x: 50, //position on the horizontal axis
  y: 350, //position on the vertical axis
  width: 180,  //based on spritesheet
  height: 300, //based on spritesheet
  frameX: 0, //frame we cut out from spritesheet
  frameY: 0,
  speed: 9, //how many pixels we move per animation
  moving: false //switch between walking and stopped
};


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
  ctx_top.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

//function(e) is a callback function taht will run the code whenever the event keydown happens
window.addEventListener("keydown", function(e){
  keys[e.keyCode] = true; //whenever key is pressed add to array
  player.moving = true;

});
window.addEventListener("keyup", function(e){
  delete keys[e.keyCode]; //remove previous key
  player.moving = false;
});

function movePlayer(){
  //if up arrow (key 38) is pressed and y position is more than 300px away from top
  if (keys[38] && player.y > 300){
    player.y -= player.speed;
    player.frameY = 4;
    player.moving = true;
  }
  //if left arrow (key 37) is pressed and x position is more than 0 away from left
  if (keys[37] && player.x > 0){
    player.x -= player.speed;
    player.frameY = 1;
    player.moving = true;
  }
  //if right arrow (key 39) is pressed
  if (keys[39] && player.x < canvas_top.width - player.width/2){
    player.x += player.speed;
    player.frameY = 2;
    player.moving = true;
  }
  //if down arrow (key 40) is pressed and y position is more than 335px away from top
  if (keys[40] && player.y < 335){
    player.y += player.speed;
    player.frameY = 3;
    player.moving = true;
  }
}//end movePlayer

function handlePlayerFrame(){
  if (player.frameX < 1 && player.moving) player.frameX++
  else player.frameX = 0;
}//end fucnction handlePlayerFrame


let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps){
  fpsInterval = 1000/fps; //value in miliseconds before next frame
  then = Date.now();
  startTime = then;
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  now = Date.now();
  elapsed = now - then;
  if (elapsed > fpsInterval){
    then = now - (elapsed % fpsInterval);
    ctx_top.clearRect(0,0, canvas_top.width, canvas_top.height);
    drawSprite(imageRepository.playerSprite, player.frameX * player.width, player.frameY * player.height, player.width, player.height, player.x, player.y, player.width / 2, player.height / 2);
    movePlayer();
    handlePlayerFrame();
  }
}

//-----------------------------PROMPT USER ANSWERS----------------------------

//Nimue riddle prompt
var answer_riddle = document.getElementById("riddle_man_choice");

answer_riddle.onclick = function(){
  var riddle_answer = prompt("What is your answer to the riddle, you have one try\n Don't hit cancel unless you want to get killed... :)",
                            "Answer...");
  switch(riddle_answer.toLowerCase()){
    case "man":
      finalScene();
      break;
    default:
      overDeath();
  }
}


//Ruins spell prompt
var ivy_spell = document.getElementById("ruins_spell_choice");

ivy_spell.onclick = function(){
  var ivy_answer = prompt("Type the - Lumos Solem - spell to make it work!",
                            "Spell...");
  switch(ivy_answer.toLowerCase()){
    case "lumos solem":
      riddleScene();
      break;
    default:
      overDeath();
  }
}


//Chose who to kill prompt - end
var kill_choice = document.getElementById("final_kill_choice");

kill_choice.onclick = function(){
  var kill_answer = prompt("Who will it be? Type mom or dad to answer",
                            "Mom or Dad...");
  switch(kill_answer.toLowerCase()){
    case "mom":
      endRace();
      break;
    case "dad":
      endRace();
      break;
    default:
      overDeath();
  }
}

//--------------------------------GAME TIMER-------------------------------
/*
Code from Ishan on Code pen: 5 minute countdown timer with JavaScript:
https://codepen.io/ishanbakshi/pen/pgzNMv?css-preprocessor=postcss
Some changes added/made by me to adapt code to my own project
*/

var timer_var = document.getElementById("timer");
timer_var.innerHTML = 005 + ":0" + 0;

function startTimer(){

  var present_time = timer_var.innerHTML;
  var timeArray = present_time.split(/[:]+/);
  var minutes = timeArray[0];
  var seconds = checkSecond((timeArray[1] - 1));

  if(seconds==59) {minutes = minutes - 1;}

  timer_var.innerHTML = minutes + ":" + seconds;
  console.log(minutes)
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec;}
  if (sec < 0) { sec = "59";}
  return sec;
}

//------------------------------MODAL->SETTINGS----------------------------

// Get the modal, button that opens it and span to close it
var settings_modal = document.getElementById("settingsModal");
var settings_button = document.getElementById("settings_button");
var span = document.getElementsByClassName("close")[0];

settings_button.onclick = function() {
  settings_modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  settings_modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == settings_modal) {
    settings_modal.style.display = "none";
  }
}

//------------------------------MODAL->GAME OVER----------------------------

// Get the modal & button that opens it
var modal_over = document.getElementById("gameOverModal");
var modaldeath_para = document.getElementById("gameover");
var play_again_button = document.getElementById("playAgain");
var choices_log = document.getElementById("choicesLog");

function gameOver() {
  modal_over.style.display = "block";
}

function playAgain(){
  reloadOver();
  modal_over.style.display = "none";
}

function overDeath(){
  modaldeath_para.innerHTML = "Oh no! You died! You were close to the finish line but your decision got you killed... What would you like to do next";
  modal_over.style.display = "block";
}

//------------------------------MUTE/UNMUTE BUTTON----------------------------

var background_audio = document.getElementById("forestAudio");
var mutesettings_button = document.getElementById("muteButton");
background_audio.muted = false; //sound not mute when game starts

function toggle_mute() {
  if (background_audio.muted === false) {
    background_audio.muted = true;
    mutesettings_button.innerHTML = "UNMUTE";
  }
  else {
    background_audio.muted = false;
    mutesettings_button.innerHTML = "MUTE";
  }
}

//------------------------------STORE BUTTONS'S ID----------------------------





//------------------------------REUSABLE FUNCTIONS----------------------------

function newBackground(img){
  ctx_bottom.clearRect(0,0 , canvas_bottom.width, canvas_bottom.height);
  ctx_bottom.drawImage(img, 0, 0, canvas_bottom.width, canvas_bottom.height);
}

function newText(text_img){
  ctx_bottom.drawImage(text_img, 0, 0, canvas_bottom.width, canvas_bottom.height);
}

//not used
function drawGifs(mush_img){
  ctx_bottom.drawImage(mush_img, 350, 370);
  ctx_bottom.drawImage(star_img, 700, 50);
}

function reload(){
    var go_back = confirm("Are you sure you want to go back to the main menu? \nYour progress will be lost and choices won\'t be saved");

    if (go_back == true){
      window.location.reload();
    }
    else {
      return false;
    }
}

function reloadOver(){
  window.location.reload();
}

function goBack(){ window.history.back(); }

function hideButtons(x){
  var i;

  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
}

function showButtons(x){
  var i;

  for(i = 0; i < x.length; i++){
    x[i].style.display = "";
  }
}
