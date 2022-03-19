var countDownDate = new Date("mar 31, 2022 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

function link_hover(link){
  link.childNodes[0].classList.add("link_hover");
  link.childNodes[0].classList.remove("link_unhover");
}
function link_unhover(link){
  link.childNodes[0].classList.remove("link_hover");
  link.childNodes[0].classList.add("link_unhover");
}
function menu_open(){
  document.getElementById("menu").style.transform = "translate(-50%, 0)";
  document.getElementById("menu_before").style.backgroundColor ="#3946ba7e";
}
function menu_close(){
  document.getElementById("menu").style.transform = "translate(-50%, -130vh)";
  document.getElementById("menu_before").style.backgroundColor ="#3946ba00";
}