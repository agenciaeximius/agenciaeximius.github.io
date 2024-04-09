let down = document.querySelector('.down');

window.addEventListener('scroll', (e) => {
	if (window.scrollY < 240) {
		down.classList.remove('hide');
	} else {
		down.classList.add('hide');
	}
});
