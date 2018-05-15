"use strict";
  


//document.addEventListener("DOMContentLoaded",
window.onload =
function boxSlides() {
    //means the funtcion starts after x seconds - the secons are at the end, THIS is premade function 
    setTimeout(function () {
        document.getElementById('cookie-box').style.bottom = '0px';
    }, 1000);
};

document.getElementById('close').onclick = function ByeByeBox() {
document.getElementById('cookie-box').style.bottom = '-220px';
};
    
 /*   window.onload = function() {  
        const cookie= document.getElementById("cookie-box");
        cookie.style.paddingBottom = ("100px;")
    }  


const closeButton =  document.getElementById("close");

closeButton.addEventListener('click', function() {
    
    this.parentNode.style.display = 'none';
    console.log("WORKS");
*/