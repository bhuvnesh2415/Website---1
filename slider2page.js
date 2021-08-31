var len=document.querySelectorAll(".innersecondsliderbox");
var left=document.getElementsByClassName("leftofsl")[0];
var right=document.getElementsByClassName("rightofsl")[0];
var a=0;
function fnleftofsl(){
  if(a==0){
    a=5;
  }
  a--;
    document.getElementsByClassName("innersecondslider")[0].style.transform=`translateX(${-25*a}em)`
    ;
    console.log(a);
   
 
}
function fnrightofsl(){
  a++;
  console.log(a);
  if(a==5){
    a=0;
  }

    document.getElementsByClassName("innersecondslider")[0].style.transform=`translateX(${-25*a}em)`
    
}