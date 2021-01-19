var slides=document.querySelector(".slider-items").children;
var controls=document.querySelector('.section_4').children;
var nextSlide=document.querySelector(".previous_button");
var prevSlide=document.querySelector(".next_button");
var totalSlides=slides.length;
var index=0;
console.log(slides);
nextSlide.onclick=function () {
    next("next");
}
prevSlide.onclick=function () {
    next("prev");
}

function next(direction){

  if(direction=="next"){
     index++;
      if(index==totalSlides){
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
 }
 slides[index].classList.add("active");     

}