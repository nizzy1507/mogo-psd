const menuToggle = document.querySelector('.header-toggle');
const menuHeader = document.querySelector('.header-menu');
const expandClass = 'is-expand';

function openMenu() {
  menuHeader.classList.add(expandClass);
}

function closeMenu(e) {
  const isOutside =
    !e.target.matches('.header-toggle') && !menuHeader.contains(e.target);
  if (isOutside) {
    menuHeader.classList.remove(expandClass);
  }
}

menuToggle.addEventListener('click', openMenu);
window.addEventListener('click', closeMenu);

//------------- Accordion ---------------//
const wedoContent = document.querySelector('.wedo-content');

function handleAccordion(e) {
  const activeItem = document.querySelector('.wedo-item.active');
  const currentItem = e.target.closest('.wedo-item');
  const wedoHeader = currentItem.querySelector('.wedo-item-header');

  if (!wedoHeader) return;

  activeItem && activeItem.classList.remove('active');

  if (currentItem === activeItem) {
    currentItem.classList.remove('active');
    return;
  }
  currentItem.classList.toggle('active');
}

wedoContent.addEventListener('click', handleAccordion);

//------------- Slick slider ---------------//
$(document).ready(function () {
  $('.quote-container').slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
