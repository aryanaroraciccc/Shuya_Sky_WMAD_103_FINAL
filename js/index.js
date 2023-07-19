const menuButton = document.getElementById('js-menu-button')
menuButton.addEventListener('click', menuHandler)

function menuHandler() {
  const headerNav = document.getElementsByClassName('l-header__list')[0]
  if (headerNav.style.display === 'block') {
    headerNav.style.display = 'none'
  } else {
    headerNav.style.display = 'block'
  }
}

const path = window.location.pathname
const menuItems = document.getElementsByClassName('l-header__list-item-link')
for (var i = 0; i < menuItems.length; i++) {
  const menuItem = menuItems[i]
  const linkPath = menuItem.getAttribute('href')
  if (path === linkPath) {
    menuItem.classList.add('isActive')
  }
}



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

