//
/*var d = new Date();
let s = d.getSeconds();
let m = d.getMinutes() + s / 60;
let h = d.getHours() + m / 60;

 for(var i=0 in setInterval(60*60*1000)){
  document.getElementById("hourhand").setAttribute("transform","rotate" + (h * 30) + ",50,50)");
}
 document.getElementById("minutehand").setAttribute("transform", "rotate(" + (m * 6) + ", 50, 50)");




 document.getElementById("secondhand").setAttribute("transform", "rotate(" + (s * 6) + ", 50, 50)");
 */
 setInterval(setClock, 1000)

 const hourHand = document.querySelector('#hourhand')
 const minuteHand = document.querySelector('#minutehand')
 const secondHand = document.querySelector('#secondhand')
 
 function setClock() {
   const currentDate = new Date()
   const secondsRatio = currentDate.getSeconds() / 60
   const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
   const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
   setRotation(secondHand, secondsRatio)
   setRotation(minuteHand, minutesRatio)
   setRotation(hourHand, hoursRatio)
 }
 
 function setRotation(element, rotationRatio) {
   element.setAttribute("transform", "rotate(" + (rotationRatio * 360) + ", 50, 50)")
 }
 

 setClock()
 const prod1=(a,b)=> a*b;
 prod1(3,4);
 const prod2=(a)=>(b)=>a*b;
 let e=prod2(3,4);
 console.log(e);

