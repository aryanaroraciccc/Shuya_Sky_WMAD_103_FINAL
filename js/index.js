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
