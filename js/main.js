const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', () => {
	menuMobile.classList.toggle('menu--open');
});

const swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper__button-right',
		prevEl: '.swiper__button-left',
	},
});