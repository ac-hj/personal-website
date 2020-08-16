var i = 0;
var txt = 'Hi, I\'m Acelyn'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriterEffect() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriterEffect, speed);
  }
}

function finalType() {
	setTimeout(typeWriterEffect, 1000);
}