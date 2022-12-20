// document.querySelector('video').defaultPlaybackRate = 0.5;
// document.querySelector('video').play(); 
// var vid = document.getElementById("video");
// vid.volume = 1.0;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let cart = document.getElementById('cart');
let cart2 = document.getElementById('cart2');
cart.onmouseout = function() {
    cart.style.display = "none";
    cart2.style.display= "block";
}
cart2.onmouseover = function() {
    cart.style.display = "block";
    cart2.style.display= "none";
}


 var arrayImg= [
    'C:\Users\а\Desktop\finImages\eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMTEyNjcvaW1hZ2UvMTY2ODAzNjExMi9jaG9wLXRoZW0tdm9jYWxzLWktdm9jYWwtY2hvcC1iZWF0cy5wbmciLCJ0aW1lc3RhbXAiOm51bGwsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOj.png',
    'C:\Users\а\Desktop\finImages\eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMTEyNjcvaW1hZ2UvMTY3MDM1NDQyMy93b3JsZC1jdXAtb2YtYmVhdHMtdGV4dC1sb2dvLS5qcGciLCJ0aW1lc3RhbXAiOm51bGwsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjQwMCwiaG.png',
    'C:\Users\а\Desktop\finImages\eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMTEyNjcvaW1hZ2UvMTY2OTQ0MDk3NC9zdG9yeXRlbGxpbmctYmVhdHMtY292ZXIucG5nIiwidGltZXN0YW1wIjpudWxsLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiZmlsbCIsIndpZHRoIjo0MDAsImhlaWdodC.png',
    'C:\Users\а\Desktop\finImages\eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMTEyNjcvaW1hZ2UvUmlKVnFFQjl3ZmQ3L2p1bGNvdmVyLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDB9fX0=.png',
    'C:\Users\а\Desktop\finImages\eyJidWNrZXQiOiJwcm9kLWJ0cy1wbGF5bGlzdCIsImtleSI6InByb2QvcGxheWxpc3QvYXJ0d29yay9QTDUwMDU5NTgvYXJ0d29yay5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiZmlsbCIsIndpZHRoIjo0MDAsImhlaWdodCI6NDAwfX19.png'
 ];


 for(var i = 0; i < 5; i++) {
    
    arrayImg[i].onmouseout = function() {
        document.getElementsByClassName('i')[i].style.position = 'absolute  ';
        document.getElementsByClassName('i')[i].style.display= 'block';
    }
 }
 let slideIndex = 1;
 showSlides(slideIndex);
 
 // Next/previous controls
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 // Thumbnail image controls
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
 }
 const input = document.querySelector('.input-field');

function showSubmitButton() {
    const submit = document.querySelector('.submit-container');

    if (input.value.includes('@gmail.com') || input.value.includes('@mail.ru')) {
        submit.style.opacity = '1';
    } else {
        submit.style.opacity = '0';
    }
}
input.addEventListener('input', showSubmitButton);

var subs = document.getElementById('sbtn');
subs.onclick= function() {
  subs.style.backgroundColor = "green";
  subs.innerHTML = 'Done!';
}

var images = [
  'C:\Users\а\Desktop\finImages\eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMTEyNjcvaW1hZ2UvMTY2ODAzNjExMi9jaG9wLXRoZW0tdm9jYWxzLWktdm9jYWwtY2hvcC1iZWF0cy5wbmciLCJ0aW1lc3RhbXAiOm51bGwsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOj.png',
  'C:\Users\а\Desktop\finImages\eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMTEyNjcvaW1hZ2UvMTY3MDM1NDQyMy93b3JsZC1jdXAtb2YtYmVhdHMtdGV4dC1sb2dvLS5qcGciLCJ0aW1lc3RhbXAiOm51bGwsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjQwMCwiaG.png',
  'C:\Users\а\Desktop\finImages\eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMTEyNjcvaW1hZ2UvMTY2OTQ0MDk3NC9zdG9yeXRlbGxpbmctYmVhdHMtY292ZXIucG5nIiwidGltZXN0YW1wIjpudWxsLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiZmlsbCIsIndpZHRoIjo0MDAsImhlaWdodC.png',
  'C:\Users\а\Desktop\finImages\eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMTEyNjcvaW1hZ2UvUmlKVnFFQjl3ZmQ3L2p1bGNvdmVyLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDB9fX0=.png',
  'C:\Users\а\Desktop\finImages\eyJidWNrZXQiOiJwcm9kLWJ0cy1wbGF5bGlzdCIsImtleSI6InByb2QvcGxheWxpc3QvYXJ0d29yay9QTDUwMDU5NTgvYXJ0d29yay5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiZmlsbCIsIndpZHRoIjo0MDAsImhlaWdodCI6NDAwfX19.png'
];
var currentpic = 0;
var lastpic = images.length-1;
function nextslide()
{
    if (currentpic == lastpic)
    {
        currentpic = 0;
        document.getElementById('slide').src = images[currentpic];
    }
    else
    {
        currentpic++;
        document.getElementById('slide').src = images[currentpic];
    }
}