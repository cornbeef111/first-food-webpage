let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let delivery = document.getElementById('delivery');
let eat = document.getElementById('eatin');
let pickup = document.getElementById('pickup');
let delivery1 = document.getElementById('delivery1');
let eat1 = document.getElementById('eatin1');
let pickup1 = document.getElementById('pickup1');
let delivery2 = document.getElementById('delivery2');
let eat2 = document.getElementById('eatin2');
let pickup2 = document.getElementById('pickup2');


document.addEventListener('DOMContentLoaded',function(){
     second.style.display='none';
     third.style.display='none';
});
document.addEventListener('click',function(){
    if (delivery.checked===true){
         first.style.display='block';
         second.style.display='none';
         third.style.display='none';
    }
    if(pickup.checked===true){
        first.style.display='none';
        second.style.display='block';
        third.style.display='none';
    }
    if(eat.checked===true){
        first.style.display='none';
        second.style.display='none';
        third.style.display='block';
    }
});
document.addEventListener('click',function(){
    if (delivery1.checked===true){
        first.style.display='block';
        second.style.display='none';
        third.style.display='none';
   }
   if(pickup1.checked===true){
       first.style.display='none';
       second.style.display='block';
       third.style.display='none';
   }
   if(eat1.checked===true){
       first.style.display='none';
       second.style.display='none';
       third.style.display='block';
   }
});
document.addEventListener('click',function(){
    if (delivery2.checked===true){
        first.style.display='block';
        second.style.display='none';
        third.style.display='none';
   }
   if(pickup2.checked===true){
       first.style.display='none';
       second.style.display='block';
       third.style.display='none';
   }
   if(eat2.checked===true){
       first.style.display='none';
       second.style.display='none';
       third.style.display='block';
   } 
});

document.addEventListener('DOMContentLoaded',function(){
    x.style.display='none';
});
let offcanvas = document.getElementById('forcanvas');
let x = document.getElementById('forx');
let nav = document.getElementById('fornav');
let logo = document.getElementById('loogo');

offcanvas.addEventListener('click',function(){
    if (forcanvas=true){
        offcanvas.style.display='none';
        x.style.display='block';
        nav.style.display='block';
        // logo.style.marginTop='75px';
    };
});

x.addEventListener('click',function(){
    if(true){
        offcanvas.style.display='block';
        nav.style.display='none';
        x.style.display='none';
        // logo.style.marginTop='5px';
     };
});