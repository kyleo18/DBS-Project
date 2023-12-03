"use strict";

window.onload = function init() {
  

    document.getElementById("q1").onclick =
        function () {
            var p = document.getElementById("paragraph1");
            p.style.display = "block"; 
            var p2 = document.getElementById("paragraph2");
            p2.style.display = "none"; 
            var p3 = document.getElementById("paragraph3");
            p3.style.display = "none"; 
            var p4 = document.getElementById("paragraph4");
            p4.style.display = "none"; 
        };
    document.getElementById("q2").onclick =
        function () {
            var p = document.getElementById("paragraph1");
            p.style.display = "none";
            var p2 = document.getElementById("paragraph2");
            p2.style.display = "block";
            var p3 = document.getElementById("paragraph3");
            p3.style.display = "none";
            var p4 = document.getElementById("paragraph4");
            p4.style.display = "none";
        };
    document.getElementById("q3").onclick =
        function () {
            var p = document.getElementById("paragraph1");
            p.style.display = "none";
            var p2 = document.getElementById("paragraph2");
            p2.style.display = "none";
            var p3 = document.getElementById("paragraph3");
            p3.style.display = "block";
            var p4 = document.getElementById("paragraph4");
            p4.style.display = "none";         
        };
    document.getElementById("q4").onclick =
        function () {
            var p = document.getElementById("paragraph1");
            p.style.display = "none";
            var p2 = document.getElementById("paragraph2");
            p2.style.display = "none";
            var p3 = document.getElementById("paragraph3");
            p3.style.display = "none";
            var p4 = document.getElementById("paragraph4");
            p4.style.display = "block";
        };




   
 
    render();
}
// Sets up the Frame Buffer Objects

function displayText1() {
    var text = document.getElementById("textField");
    text.style.display = "block";
}
function render() {
    
}