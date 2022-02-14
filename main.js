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
  navbarMenu.classList.remove('open');
  scrollTo(link);
});

// Navbar toggle button for small screen
const navbarToglleBtn =document.querySelector('.navbar__toggle-btn');
navbarToglleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
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

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  projectContainer.classList.add('anim-out');

  // Remove selection form the previous previous item and select new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');
  console.log(target)

  setTimeout(() => {
  // 1)방법
    projects.forEach((project) => {
      if(filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300)

  // 2)방법
  // for (let project of projects) {
  //   console.log(project);
  // }

  // 3)방법
  // let project;
  // for (let i = 0; i < projects.length; i++){
  //   project = projects[i];
  //   console.log(project);
  // }

  // console.log(filter);
});



function scrollTo(selector) {
  const scrollTo = document.querySelector(selector)
  scrollTo.scrollIntoView({
    behavior: "smooth"
  });
} 