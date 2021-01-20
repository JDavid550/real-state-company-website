var slides=document.querySelector(".slider-items").children;
var controls=document.querySelector('.section_4').children;
var counter=document.querySelector('.numbers-counter').children;
var nextSlide=document.querySelector(".next_button");
var prevSlide=document.querySelector(".previous_button");
var totalSlides=slides.length;
var totalCounts=counter.length;
var index=0;

console.log(totalCounts)

nextSlide.onclick=function () {
    next("next");
}
prevSlide.onclick=function () {
    next("prev");
}

function next(direction){

  if(direction=="next"){
     index++;
      if(index==totalSlides && index==totalCounts){
       index=0;
      }
  } 
  else{
          if(index==0){
           index=totalSlides-1;
          }
          else{
           index--;
          }
   }

 for(i=0;i<slides.length;i++){
        slides[i].classList.remove("active");
        counter[i].classList.remove('active');
 }
 slides[index].classList.add("active"); 
 counter[index].classList.add('active');    

}