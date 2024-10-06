const langSelected = document.querySelector('.lang--selected');
const langMenu = document.querySelector('.lang--menu');
const options = document.querySelectorAll('.lang--item');

function toggleLangMenu() {
	langMenu.classList.contains('active') ? langMenu.classList.remove('active') : langMenu.classList.add('active');
}

langSelected.addEventListener('click', toggleLangMenu);
window.addEventListener('click', (e) => {
	if (langMenu.classList.contains('active')) {
		if (e.target != langSelected && ![...options].includes(e.target)) langMenu.classList.remove('active');
	}
});
