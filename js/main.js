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



//* SLIDERS =================================

const mainSlider = new Swiper('.main-slider__container', {
	// Optional parameters
	loop: true,
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	speed: 800,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const lotSlider = new Swiper('.lots__slider', {
	// Optional parameters
	loop: true,
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	speed: 800,

	// Navigation arrows
	navigation: {
		nextEl: '.control-lots__arrow-next',
		prevEl: '.control-lots__arrow-prev',
	},
});