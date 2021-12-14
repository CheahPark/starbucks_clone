const aboutUsMenu = document.querySelector('.dropdown-aboutUs');
const careerMenu = document.querySelector('.dropdown-career');
const socialImpactMenu = document.querySelector('.dropdown-socialImpact');
const partnersMenu = document.querySelector('.dropdown-partners');
const orderPickupMenu = document.querySelector('.dropdown-orderPickup');
const menuBtn = document.querySelector('.menu-btn');
const menuWrap = document.querySelector('.menu-wrap');

const menuDiv = document.querySelector('.menu__list');
const menuBtnInWrap = document.querySelector('.btn__menu');
const menuSubWrap = document.querySelector('.submenu-wrap');

const submenuMenuBtn = document.querySelector('.submenu__menuDiv');

let aboutUsArrUp = false;
let careerArrUp = false;
let socialImpactArrUp = false;
let partnersArrUp = false;
let orderPickupArrUp = false;

// For the hamburger btn
let menuOpen = false;
let menuWrapOpen = false;
let menuSubWrapOpen = false;

// 1. check clicked dropdown menu
const chkClickedMenu = (selectedMenu, deg) => {
  switch (selectedMenu) {
    case 'aboutUs':
      if (aboutUsArrUp == false) {
        displayDropdown(aboutUsMenu);
        arrowToUp(selectedMenu, deg);
        aboutUsArrUp = true;
      } else {
        hideDropdown(aboutUsMenu);
        arrowToBack(selectedMenu);
        aboutUsArrUp = false;
      }
      break;
    case 'career':
      if (careerArrUp == false) {
        displayDropdown(careerMenu);
        arrowToUp(selectedMenu, deg);
        careerArrUp = true;
      } else {
        hideDropdown(careerMenu);
        arrowToBack(selectedMenu, deg);
        careerArrUp = false;
      }
      break;
    case 'socialImpact':
      if (socialImpactArrUp == false) {
        displayDropdown(socialImpactMenu);
        arrowToUp(selectedMenu, deg);
        socialImpactArrUp = true;
      } else {
        hideDropdown(socialImpactMenu);
        arrowToBack(selectedMenu);
        socialImpactArrUp = false;
      }
      break;
    case 'partners':
      if (partnersArrUp == false) {
        displayDropdown(partnersMenu);
        arrowToUp(selectedMenu, deg);
        partnersArrUp = true;
      } else {
        hideDropdown(partnersMenu);
        arrowToBack(selectedMenu);
        partnersArrUp = false;
      }
      break;
    case 'orderPickup':
      if (orderPickupArrUp == false) {
        displayDropdown(orderPickupMenu);
        arrowToUp(selectedMenu, deg);
        orderPickupArrUp = true;
      } else {
        hideDropdown(orderPickupMenu);
        arrowToBack(selectedMenu);
        orderPickupArrUp = false;
      }
      break;
    default:
      break;
  }
};

// 2. display or hide dropdown submenu
const displayDropdown = (dropdownClass) => {
  dropdownClass.style.visibility = 'visible';
  dropdownClass.style.height = 'auto';
};

const hideDropdown = (dropdownClass) => {
  dropdownClass.style.visibility = 'hidden';
  dropdownClass.style.height = 0;
  dropdownClass.style.overflow = 'hidden';
};

// 3. Rotate arrows
const arrowToUp = (selectedArr, deg) => {
  const arrDom = document.querySelector('.' + selectedArr);
  arrDom.style.setProperty('--rotate-degree', deg); //-180deg turn right
};

const arrowToBack = (selectedArr) => {
  const arrDom = document.querySelector('.' + selectedArr);
  arrDom.style.setProperty('--rotate-degree', '0deg');
};

const openSubMenu = () => {
  menuSubWrap.style.visibility = 'visible';
  menuSubWrap.style.width = '80vw';
};
const closeSubMenu = () => {
  menuSubWrap.style.width = 0;
  menuSubWrap.style.visibility = 'hidden';
};

// Add event listeners to footer sitemap header
document.querySelectorAll('.sitemap-header-container').forEach((container) => {
  container.addEventListener('click', (e) => {
    const selectedMenu = e.target.id;
    chkClickedMenu(selectedMenu);
  });
});

// Event listeners to arrow buttons
document.querySelectorAll('.arrow').forEach((arrow) => {
  arrow.addEventListener('click', (e) => {
    const selectedArrow = e.target.className;
    const arrowClassArr = selectedArrow.split(' ');
    const selectedMenuName = arrowClassArr.slice(-1)[0];
    const deg = '-180deg';

    chkClickedMenu(selectedMenuName, deg);
  });
});

document.querySelectorAll('.sitemap-header').forEach((header) => {
  header.addEventListener('click', (e) => {
    const selectedHeader = e.target.className;
    const classArr = selectedHeader.split(' ');
    const selectedHeaderName = classArr.slice(-1)[0];
    const deg = '180deg';

    chkClickedMenu(selectedHeaderName, deg);
  });
});

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuWrap.classList.add('open');
    menuOpen = true;
    menuWrapOpen = true;
  } else if (menuOpen) {
    menuBtn.classList.remove('open');
    menuWrap.classList.remove('open');

    menuOpen = false;
    menuWrapOpen = false;

    if (menuSubWrapOpen) {
      closeSubMenu();
      menuSubWrapOpen = false;
    }
  }
});

menuDiv.addEventListener('click', () => {
  openSubMenu();
  menuSubWrapOpen = true;
});

submenuMenuBtn.addEventListener('click', () => {
  closeSubMenu();
  menuSubWrapOpen = false;
});
