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


document.addEventListener("DOMContentLoaded", function() {
  const aboutCards = document.querySelectorAll("[class^='about__card-']");
  
  // Function to apply grayscale to other cards when hovering over any card
  function applyGrayscale(event) {
    const hoveredCard = event.target;
    for (const card of aboutCards) {
      if (card !== hoveredCard) {
        card.classList.add("grayscale");
      }
    }
    hoveredCard.classList.add("scale");
  }

  // Function to remove grayscale and scaling when not hovering over any card
  function removeEffects() {
    for (const card of aboutCards) {
      card.classList.remove("grayscale");
      card.classList.remove("scale");
    }
  }

  // Event listeners for hover in and out on all cards
  for (const card of aboutCards) {
    card.addEventListener("mouseenter", applyGrayscale);
    card.addEventListener("mouseleave", removeEffects);
  }
});







const seasonCardsFood = document.querySelectorAll(".season [class*='--food_pic']");
const seasonCardsWine = document.querySelectorAll(".season [class*='--wine_pic']");

function showFoodPrice(event) {
  const card = event.currentTarget;
  card.classList.add('grayscale2');
  const priceElement = card.querySelector('.f-price');
  priceElement.classList.remove('f-hidden');
}

function hideFoodPrice(event) {
  const card = event.currentTarget;
  card.classList.remove('grayscale2');
  const priceElement = card.querySelector('.f-price');
  priceElement.classList.add('f-hidden');
}

function showWinePrice(event) {
  const card = event.currentTarget;
  card.classList.add('grayscale2');
  const priceElement = card.querySelector('.w-price');
  priceElement.classList.remove('w-hidden');
}

function hideWinePrice(event) {
  const card = event.currentTarget;
  card.classList.remove('grayscale2');
  const priceElement = card.querySelector('.w-price');
  priceElement.classList.add('w-hidden');
}

seasonCardsFood.forEach((card) => {
  card.addEventListener("mouseenter", showFoodPrice);
  card.addEventListener("mouseleave", hideFoodPrice);
});

seasonCardsWine.forEach((card) => {
  card.addEventListener("mouseenter", showWinePrice);
  card.addEventListener("mouseleave", hideWinePrice);
});


function showContent() {
  const loaderWrapper = document.querySelector('.loader-wrapper');
  const contentWrapperMain = document.querySelector('.l-main');
  const contentWrapperHeader = document.querySelector('.l-header');
  const contentWrapperFooter = document.querySelector('.l-footer');

  // Hide the loader wrapper using opacity transition
  loaderWrapper.style.opacity = 0;

  // After the opacity transition completes, show the content
  loaderWrapper.addEventListener('transitionend', function handleTransitionEnd() {
    loaderWrapper.removeEventListener('transitionend', handleTransitionEnd);
    loaderWrapper.style.display = 'none';
    contentWrapperMain.style.display = 'block';
    contentWrapperHeader.style.display = 'flex';
    contentWrapperFooter.style.display = 'grid';
  });
}

// Attach the showContent function to the window's load event
window.addEventListener('load', showContent);
