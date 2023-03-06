// document.getElementById('currentYear').innerHTML="Hello";
// document.getElementsByClassName('currentYear').innerHTML="Hello"

const element = document.getElementById('currentYear');
const currentYr = new Date();
currentYr.getFullYear();

element.innerHTML=currentYr.getFullYear();
