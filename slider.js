const next=document.querySelector(".next");
const prev=document.querySelector(".prev");
const sliderInner=document.querySelector(".slider-inner");
const slider=document.querySelector(".slider");





let nindex=0;
let pindex=0

next.addEventListener('click',function(){
  nindex++;
  sliderInner.style.transform=`translateX(${-9.9*nindex}em)`;
  if (nindex==4){
    next.style.display="none";
  }
  if (nindex!=0){
    prev.style.display="block";
  }
})

prev.addEventListener('click',function(){
  nindex--;
  if (nindex==0){
    prev.style.display="none"
  }
  if (nindex!=4){
    next.style.display="block";
  }
  sliderInner.style.transform=`translateX(${-9.9*nindex}em)`})
  



















// var snamess=document.getElementsByClassName("WHYBBMobile")
// console.log(snamess)
// var ynindex=0;
// var xny=0
// var ynx=0
// snamess[0].addEventListener("touchstart",(e)=>{
// xny=e.touches[0].clientX;
// console.log(xny)
// })
// snamess[0].addEventListener("touchmove",function(e){
// ynx=e.touches[0].clientX;
// console.log(ynx)

// })
// snamess[0].addEventListener("touchend",(e)=>{
// if ((xny-ynx)>0){
//   ynindex++;
//   snamess[0].style.transform=`translateX(${-25*ynindex}em)`;}
// if ((xny-ynx)<0){
//   ynindex--;
//   snamess[0].style.transform=`translateX(${-25*ynindex}em)`;}
// })





  

 
  var condition = window.matchMedia("(max-width: 480px)")
  // console.log(condition)

  //  auto carasoul for why alphalyte phsl

  if(condition.matches)
{

  var check=0;
  phslfun()
  function  phslfun() {
  
  var sname=document.getElementsByClassName("phsl")
  
  
  
  for(let i=0;i<sname.length;i++)
  {
  sname[i].style.transform=`translateX(${-25*check}em)`;
  }
  check++
  if(check>sname.length-1){ check=0}
  
  setTimeout(phslfun,2000)
  }
  
  // auto carasoul for indian best teacher phsl
  phslfun2()
  var check2=0
  function  phslfun2() {
  
  var sname2=document.getElementsByClassName("phsl2")
  for(let i=0;i<sname2.length;i++)
  {
  sname2[i].style.transform=`translateX(${-15*check2}em)`;
  }
  check2++
  if(check2>sname2.length-2){ check2=0}
  
  setTimeout(phslfun2,2000)
  }
  
  // auto swap of one on one class
  phslfun3()
  var check3=0
  function  phslfun3() {
  
  var sname3=document.getElementsByClassName("phsl1")
  for(let i=0;i<sname3.length;i++)
  {
  sname3[i].style.transform=`translateX(${-31*check3}em)`;
  }
  check3++
  if(check3>sname3.length-1){ check3=0}
  
  setTimeout(phslfun3,2000)
  }
  

  const mobiledragslider_inner=document.querySelector(".mobiledragslider-inner");

  var xy=0;
  var yx=0;
  var preval=0;
  
  
  function wid (){
  const wid=mobiledragslider_inner.getElementsByClassName("boxs")[0].offsetWidth;
  const finalwid=(wid*9)-(wid*2)+10;
  return(finalwid);}
  
  
  setInterval(wid,1000)
  
  
  mobiledragslider_inner.addEventListener("touchstart",(e)=>{
    xy=e.touches[0].clientX;
  })
  
  mobiledragslider_inner.addEventListener("touchmove",function(e){
    yx=e.touches[0].clientX;
  })
  mobiledragslider_inner.addEventListener("touchend",(e)=>{
  
    let val=xy-yx;
    preval=preval+val;
    if (preval>wid())
    {
      preval=wid();
    }
    if (preval < -7)
    {
      preval=-0;
    }
    if (val>0)
  { 
      mobiledragslider_inner.style.transform=`translateX(${-preval}px)`
  }
   if (val<0)
    {
      mobiledragslider_inner.style.transform=`translateX(${-preval}px)`
  }
  })
  
  


  
  


}
else
{null}





var xny;
var ynx;
var check1=0;
window.onload=function(){
  const sname4=document.getElementsByClassName("slider-innerb")[0]
sname4.addEventListener("touchstart",(e)=>{
  xny=e.touches[0].clientX;
})

sname4.addEventListener("touchmove",function(e){
  ynx=e.touches[0].clientX;
})
sname4.addEventListener("touchend",(e)=>{

  let valn=xny-ynx;
  console.log(valn)

  
 
  if (valn>0)
{  check1++;
if (check1==5){
  check1=0;
}

    sname4.style.transform=`translateX(${-56*check1}em)`
}
 if (valn<0)
  {  
    --check1;
    if (check1==-1)
    {check1=4};
    sname4.style.transform=`translateX(${-56*check1}em)`
    
  }
  
}
);
}







