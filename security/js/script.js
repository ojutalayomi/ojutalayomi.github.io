var pi = document.querySelector("input");
var span = document.querySelectorAll(".button");
//var pin = pi.value;
/*function validatePIN (pin) {
  
    var reg = /^\d{4,6}\b/g
  
    
    if(pin.length == 4 || pin.length == 6){
        return reg.test(pin);
    }
        return false
    
  }
  
  console.log(validatePIN("1234"))// === true
  console.log(validatePIN("12345"))// === false
  console.log(validatePIN("123456"))// === true
*/
  function validatePIN(pin){
var pin = document.getElementById('value').value;
//var mobileNumber = document.getElementById('number').value;
 pinRegexPattern = /^\d{4}\b/g;
 mobRegexPattern = /^\d{3}\d{3}\d{4}$/;
if(pin.match(pinRegexPattern) || pin.length == 6){
 console.log("Pin is Validated!");
 console.log(pin);
 window.location.href ="/web/index.html";
 span[11].style.color ="#fff";
 return true;
 } else {
   console.log("You have entered an invalid Pin!");
   span[11].style.color ="#ffffff67";
   pi.style.className += "error"
   return false;
 }
}

let txt = "Please fill in your pin";
let msg = document.getElementById("msg");
let i = 0;
let typing = () =>{
  if(i < txt.length){
    setInterval(
      function(){
        msg.textContent += txt.charAt(i);
        i++
      },50)
  }
}
typing();