'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == undefined) {
    return;
  }
  scrollTo(link);
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact')
homeContactBtn.addEventListener('click', () => {
  scrollTo('#contact');
});

// Make home slowly fade to transparent as the window scrolls down
const homeContent = document.querySelector('.home__container')
const homeContentHeight = homeContent.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // console.log(1 - window.scrollY / homeContentHeight); <-- 잘 기억 해두기. (복습 필요)
  homeContent.style.opacity = 1 - window.scrollY/homeContentHeight
})

// Show "arrow up" btn when scroll down
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
  if (window.scrollY > homeContentHeight / 2) {
    arrowUp.classList.add('visible')
  } else {
    arrowUp.classList.remove('visible')
  }
})

// Handle click on the "arrow up" btn
arrowUp.addEventListener('click', () => {
  scrollTo('#home');
})





function scrollTo(selector) {
  const scrollTo = document.querySelector(selector)
  scrollTo.scrollIntoView({
    behavior: "smooth"
  });
} 