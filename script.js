let button=document.getElementById('btn');
let mainText_color= "white";
let mainBg_color = "rgba(10, 10, 10, 0.9)";
let isNignt = false;
let texts=document.getElementsByClassName('maincolor');
let btn2=document.getElementById('btn2');
btn2.addEventListener('click',()=>{
   if(isNignt){
      document.body.style.background=mainText_color;
      isNignt= false;
      for (const element of texts) {
         element.style.color = mainBg_color;
      }
      btn2.innerHTML='<i class="fa-regular fa-moon"></i>';
      btn2.style.color='black';
   }else{
      document.body.style.background=mainBg_color;
      isNignt = true;
      for (const element of texts) {
         element.style.color = mainText_color;
      }
      btn2.innerHTML='<i class="fa-regular fa-sun"></i>';
      btn2.style.color='white';

   }
})

button.addEventListener('click',()=>{
   if(isNignt){
      document.body.style.background=mainText_color;
      isNignt= false;
      for (const element of texts) {
         element.style.color = mainBg_color;
      }
      button.innerHTML='Night';
   }else{
      document.body.style.background=mainBg_color;
      isNignt = true;
      for (const element of texts) {
         element.style.color = mainText_color;
      }
      button.innerHTML='Light';
   }
})
