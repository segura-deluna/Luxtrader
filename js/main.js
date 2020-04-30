const userIcon = document.querySelector('.user-header__icon'),
	burger = document.querySelector('.menu-burger'),
	menuBody = document.querySelector('.menu-body');


userIcon.addEventListener('click', (e) => {
	const userMenu = document.querySelector('.action-header__menu');
	userMenu.classList.toggle('active');
});

burger.addEventListener('click', (e) => {
	burger.classList.toggle('active');
	menuBody.classList.toggle('active');
});