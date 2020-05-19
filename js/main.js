const userIcon = document.querySelector('.user-header__icon'),
	burger = document.querySelector('.menu-burger'),
	menuBody = document.querySelector('.menu-body');

// Icon region user
userIcon.addEventListener('click', (e) => {
	const userMenu = document.querySelector('.action-header__menu');
	userMenu.classList.toggle('active');
});

// Burger-menu
burger.addEventListener('click', (e) => {
	burger.classList.toggle('active');
	menuBody.classList.toggle('active');
});

//* SLIDER =================================
var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	loop: true,
	observer: true,
	observeParents: true,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});