

let carrer = document.getElementById('carrer');
let circle = document.getElementById('cercle');

    function update(e){
    let left =e.clientX;
    let top = e.clientY;    
  //  circle.style.left =left+ 'px';
    //circle.style.top = top + 'px';
    circle.style.right=(left-9)+ 'px';
    circle.style.bottom=(top-9)+ 'px';
    console.log("x=",left,"y=",top);
    }
    
circle.onmouseenter=()=>
 circle.style.background='green';
 circle.onmouseleave=()=>
 circle.style.background='transparent';
 circle.onmousedown=()=>
 circle.style.background='';
 carrer.addEventListener('mousemove',update,true);