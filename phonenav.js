var icon1=document.getElementsByClassName("pnavicon1")[0]
var icon2=document.getElementsByClassName("pnavicon2")[1]
var icon3=document.getElementsByClassName("pnavicon3")[2]
var icon4=document.getElementsByClassName("pnavicon4")[3]
var icon5=document.getElementsByClassName("pnavicon5")[4]
var icon6=document.getElementsByClassName("pnavicon6")[5]
var icon7=document.getElementsByClassName("pnavicon7")[6]
var Pnav=document.getElementsByClassName("phnnav")[0]
var cbse=document.getElementsByClassName("cbseList")[0]
var icse=document.getElementsByClassName("icselist")[0]
var jee=document.getElementsByClassName("jeelist")[0]
var neet=document.getElementsByClassName("neetlist")[0]
var ncert=document.getElementsByClassName("ncertlist")[0]
var tution=document.getElementsByClassName("tutionlist")[0]
var mobnavbar=document.getElementsByClassName("allleftnavmob")[0];
var leftnavmovback=document.getElementsByClassName("leftnavmovback")[0];


var icon1=document.getElementsByClassName("icon1")[0]
var icon11=document.getElementsByClassName("icon11")[0]
var icon12=document.getElementsByClassName("icon12")[0]
var icon13=document.getElementsByClassName("icon13")[0]
var icon14=document.getElementsByClassName("icon14")[0]
var icon15=document.getElementsByClassName("icon15")[0]
var icon16=document.getElementsByClassName("icon16")[0]


var M_navdropdownicon=document.getElementsByClassName("M_navdropdownicon")[0];






M_navdropdownicon.addEventListener("click",()=>{
mobnavbar.style.display="block";
leftnavmovback.style.display="block"
})

function mobnavtog1(){
  mobnavbar.style.display="none";
  leftnavmovback.style.display="none";
}

function phnnav(){
    Pnav.classList.toggle("activelist1");
    cbse.classList.remove("activelist1")
    icse.classList.remove("activelist1")
jee.classList.remove("activelist1")
neet.classList.remove("activelist1")
ncert.classList.remove("activelist1")
tution.classList.remove("activelist1")
icon1.classList.toggle("deg180");
icon11.classList.remove("deg180")
icon12.classList.remove("deg180")
icon13.classList.remove("deg180")
icon14.classList.remove("deg180")
icon15.classList.remove("deg180")
icon16.classList.remove("deg180")


}

function cbsefun(){

cbse.classList.toggle("activelist1");
icse.classList.remove("activelist1")
jee.classList.remove("activelist1")
neet.classList.remove("activelist1")
ncert.classList.remove("activelist1")
tution.classList.remove("activelist1")


icon11.classList.toggle("deg180")
icon12.classList.remove("deg180")
icon13.classList.remove("deg180")
icon14.classList.remove("deg180")
icon15.classList.remove("deg180")
icon16.classList.remove("deg180")
}

function icsefun(){
  icse.classList.toggle("activelist1");
    cbse.classList.remove("activelist1")
    jee.classList.remove("activelist1")
neet.classList.remove("activelist1")
ncert.classList.remove("activelist1")
tution.classList.remove("activelist1")

icon11.classList.remove("deg180")
icon12.classList.toggle("deg180")
icon13.classList.remove("deg180")
icon14.classList.remove("deg180")
icon15.classList.remove("deg180")
icon16.classList.remove("deg180")
}

function jeefun(){
  jee.classList.toggle("activelist1");
    cbse.classList.remove("activelist1")
    icse.classList.remove("activelist1")
neet.classList.remove("activelist1")
ncert.classList.remove("activelist1")
tution.classList.remove("activelist1")

icon11.classList.remove("deg180")
icon12.classList.remove("deg180")
icon13.classList.toggle("deg180")
icon14.classList.remove("deg180")
icon15.classList.remove("deg180")
icon16.classList.remove("deg180")
}

function neetfun(){
  neet.classList.toggle("activelist1");
    cbse.classList.remove("activelist1")
    icse.classList.remove("activelist1")
    jee.classList.remove("activelist1")
ncert.classList.remove("activelist1")
tution.classList.remove("activelist1")

icon11.classList.remove("deg180")
icon12.classList.remove("deg180")
icon13.classList.remove("deg180")
icon14.classList.toggle("deg180")
icon15.classList.remove("deg180")
icon16.classList.remove("deg180")

}


function ncrtfun(){
  ncert.classList.toggle("activelist1");
    cbse.classList.remove("activelist1")
    icse.classList.remove("activelist1")
    jee.classList.remove("activelist1")
    neet.classList.remove("activelist1")
tution.classList.remove("activelist1")


icon11.classList.remove("deg180")
icon12.classList.remove("deg180")
icon13.classList.remove("deg180")
icon14.classList.remove("deg180")
icon15.classList.toggle("deg180")
icon16.classList.remove("deg180")
}

function tutionfun(){
  tution.classList.toggle("activelist1");
    cbse.classList.remove("activelist1")
    icse.classList.remove("activelist1")
    jee.classList.remove("activelist1")
    neet.classList.remove("activelist1")
    ncert.classList.remove("activelist1")

icon11.classList.remove("deg180")
icon12.classList.remove("deg180")
icon13.classList.remove("deg180")
icon14.classList.remove("deg180")
icon15.classList.remove("deg180")
icon16.classList.toggle("deg180")
}