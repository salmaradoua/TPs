let fahr=document.getElementById('FahrComp');
let cel =document.getElementById('celComp');
let F=0;
let C=0;
fahr.oninput=()=>{
    if(!isNaN(fahr.value)){
         F= (fahr.value-32)*5/9;
        cel.value=F;
        fahr.style.background='white';
        
    }else
    fahr.style.background='red';

}
cel.oninput=()=>{
    if(!isNaN(cel.value)){
        let  C= (32+cel.value)*9/5;
        fahr.value=C;
        cel.style.background='white';
        
    }else
    cel.style.background='red';

}
