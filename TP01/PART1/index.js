   /*console.log('hello word');
// utiliser let or const
//object litteral syntaxe:

const Circle ={
    //propritee de l'objet
    radius:1,
    location:{
        x:1,
        y:1
    },
    //methode de l'objet
    Draw : function(){
        console.log('draw');
    }
};*/


//definir l'objet a l'aide des factory and constructor

//  FACTORY FUNCTION
function CreateCircle(r){
    return{

        radius:r,
       draw: function(){
           console.log('draw');
       }
    };
}
let cir = CreateCircle(2);
cir.draw();
//cunstructeur function
//function Circle2(r){
  //  this.radius =r;
    //this.draw= function(){
      //  console.log('draw');
    //}

//}
//const anotherCircle = new Circle2(1);
// const  Circle=CreateCircle(1);
//Circle.Draw();
