var secondcircle=document.querySelector(".secondcircle")
var forcolour=document.querySelector(".forcolour")
secondcircle.addEventListener("click",function(){
    forcolour.style.left =0;
});
var flag=0
secondcircle.addEventListener("click",function(){
if(flag===0)
{forcolour.style.left =0;
flag=1
}
else{
forcolour.style.left ="-110%"
flag=0
}
});
var thirdcircle=document.querySelector(".thirdcircle")
var forthirdcolour=document.querySelector(".forthirdcolour")
thirdcircle.addEventListener("click",function(){
    forthirdcolour.style.left =0;
});
var flag=0
thirdcircle.addEventListener("click",function(){
if(flag===0)
{forthirdcolour.style.left =0;
flag=1
}
else{
    forthirdcolour.style.left ="-110%"
flag=0
}
});
var fourthcircle=document.querySelector(".fourthcircle")
var forforcolour=document.querySelector(".forforcolour")
fourthcircle.addEventListener("click",function(){
   forforcolour.style.left =0;
});
var flag=0
fourthcircle.addEventListener("click",function(){
if(flag===0)
{forforcolour.style.left =0;
flag=1
}
else{
    forforcolour.style.left ="-110%"
flag=0
}
});
var fifthcircle=document.querySelector(".fifthcircle")
var fivecolour=document.querySelector(".fivecolour")
fifthcircle.addEventListener("click",function(){
    fivecolour.style.left =0;
});
var flag=0
fifthcircle.addEventListener("click",function(){
if(flag===0)
{fivecolour.style.left =0;
flag=1
}
else{
   fivecolour.style.left ="-110%"
flag=0
}
});
