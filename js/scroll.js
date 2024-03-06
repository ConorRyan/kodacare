/*
This script adds a class to the body after scrolling 100px
and we used these body.scroll styles to create some on scroll 
animations with the navbar
*/
document.addEventListener('scroll', (e) => {
  const scroll = document.documentElement.scrollTop;
  if (scroll >= 100) {
    document.querySelector('body').classList.add('scroll')
  } else {
    document.querySelector('body').classList.remove('scroll')
  }
});