var pi = document.querySelector("input");
var span = document.querySelectorAll(".button");
//var pin = pi.value;
/*function validatePIN (pin) {
  
    var reg = /^\d{4,6}$/
  
    
    if(pin.length == 4 || pin.length == 6){
        return reg.test(pin);
    }
        return false
    
  }
  
  console.log(validatePIN("1234"))// === true
  console.log(validatePIN("12345"))// === false
  console.log(validatePIN("123456"))// === true
*/
  function validatePIN(){
var pin = pi.value;
var mob = document.querySelector('h5');
 pinRegexPattern = /^\d{4}$/;
 mobRegexPattern = /^\d{6}$/;
if(pin.match(pinRegexPattern) || pin.match(mobRegexPattern)){
 console.log(pin);
 //window.location.href ="/web/index.html";
 mob.innerText = "Pin is Validated";
 pi.style.borderColor = "green";
 return true;
 } else if(pin.length == 0) {
  mob.innerText = "Please fill in your pin";
  pi.style.borderColor = "#15202b";
  return false;
 }else {
   mob.innerText = "You have entered an invalid Pin!";
   pi.style.borderColor = "red";
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