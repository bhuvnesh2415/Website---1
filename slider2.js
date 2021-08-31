const nexts=document.querySelector(".nextnextb");
const prevs=document.querySelector(".prevprevb");
const sliderB=document.querySelector(".slider-innerb");
let ni=0;
let pi=0

nexts.addEventListener('click',function(){
  ni++;
  sliderB.style.transform=`translateX(${-56.2*ni}em)`;
  if (ni==5){
    nexts.style.display="none";
  }
  if (ni!=0){
    prevs.style.display="block";
  }
  
})

prevs.addEventListener('click',function(){
  ni--;


  if (ni==0){
    prevs.style.display="none";
  }
  if (ni!=5){
    nexts.style.display="block";
  }
  sliderB.style.transform=`translateX(${-56.2*ni}em)`})


// bhu
  



