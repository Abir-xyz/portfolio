// ----------------------------------------------------

// ----------------------------------------------------

// navbar togglers
const navToggler = document.querySelector('.nav-bar');
const navExit = document.querySelector('.nav-x');
const navBar = document.querySelector('.navbar-links');
const scrollWrapper = document.querySelector('body');

navToggler.addEventListener('click', function () {
  navBar.classList.toggle('show-navbar');
  navToggler.classList.add('hide-navToggler');
  navExit.classList.add('show-navX');
  scrollWrapper.classList.add('unscroll');
});

navExit.addEventListener('click', function () {
  navBar.classList.toggle('show-navbar');
  navExit.classList.remove('show-navX');
  navToggler.classList.remove('hide-navToggler');
  scrollWrapper.classList.remove('unscroll');
});

// navbar >>> dark_light

const navDark = document.querySelector('.navbar-dark');
const navLight = document.querySelector('.navbar-light');
const content = document.body;

navDark.addEventListener('click', function dark__mode() {
  content.classList.add('content-black');
  content.classList.remove('content-light');
  navDark.classList.add('hide-navDark');
  navLight.classList.add('show-navLight');
  localStorage.setItem('dark_mode', 'yes');
});

navLight.addEventListener('click', function () {
  content.classList.remove('content-black');
  content.classList.add('content-light');
  navLight.classList.remove('show-navLight');
  navDark.classList.remove('hide-navDark');
  localStorage.setItem('dark_mode', 'no');
});

// localStorage for dark mode
let darkMode = localStorage.getItem('dark_mode');

if (darkMode === 'yes') {
  content.classList.add('content-black');
  content.classList.remove('content-light');
  navDark.classList.add('hide-navDark');
  navLight.classList.add('show-navLight');
} else {
  content.classList.remove('content-black');
  content.classList.add('content-light');
  navLight.classList.remove('show-navLight');
  navDark.classList.remove('hide-navDark');
}

// navLink-wrapper exits on click
// idk how to this but here is the comment anyway

// ---- nav fixed

const navWrapper = document.querySelector('.nav-wrapper');

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navWrapper.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navWrapper.classList.add('fixed-nav');
  } else {
    navWrapper.classList.remove('fixed-nav');
  }
});

// --- form input get's reset after submitting
// const form = document.querySelector('.contact_form');

// form.addEventListener('submit', function handleSubmit(e) {
//   e.preventDefault();
//   form.submit();
//   form.reset();
//   return false;
// });

// --------------------------
// form

// const form = document.querySelector('.contact_form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   form.submit();
//   form.reset();
// });

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   form.submit();
//   form.reset();
// });
