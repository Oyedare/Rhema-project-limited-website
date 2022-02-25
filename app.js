const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');
const searchBtn = document.querySelector('#search-btn');
const searchForm = document.querySelector('.search-form');
const home = document.querySelector('.home')
const homecontents = document.querySelectorAll('.homecontent')
const buttons = document.querySelectorAll('.button')
menuBtn.addEventListener('click',()=>{
  navbar.classList.toggle('active')
  searchForm.classList.remove('active')
})
searchBtn.addEventListener('click',()=>{
  searchForm.classList.toggle('active')
  navbar.classList.remove('active')
});
window.onscroll = () =>{
  navbar.classList.remove('active')
  searchForm.classList.remove('active')
}
let currentSlide = 1;
let manualNav = function(manual){
homecontents.forEach((homecontent) =>{
  homecontent.classList.remove('active')
  buttons.forEach((button)=>{
    button.classList.remove('active')
  })
})
  homecontents[manual].classList.add('active');
  buttons[manual].classList.add('active');
}
buttons.forEach((button,i)=>{
  button.addEventListener('click', () =>{
    manualNav(i);
    currentSlide = i;
  })
})
let repeat = function(activeClass){
  let active = document.getElementsByClassName('active')
  let i = 1;
  let repeater = () =>{
    setTimeout(function(){
      [...active].forEach((activeSlide)=>{
        activeSlide.classList.remove('active')
      })
      homecontents[i].classList.add('active')
      buttons[i].classList.add('active')
      i++
      if(homecontents.length === i){
        i = 0;
      }
      if(i>= homecontents.length){
        return;
      }
      repeater()
    },10000)
  }
  repeater()
}
repeat()