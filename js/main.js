const userIcon = document.querySelector('.user-header__icon');

userIcon.addEventListener('click', (e) => {
	const userMenu = document.querySelector('.action-header__menu');
	userMenu.classList.toggle('active');
});