if (document.querySelector('.swiper')) {
	const swiper = new Swiper('.swiper', {
		direction: 'horizontal',
		navigation: {
			nextEl: '.swiper--next',
			prevEl: '.swiper--prev',
			disabledClass: 'disabled',
		},
		slidesPerView: 1,
		spaceBetween: 30,
		grabCursor: true,
		centeredSlides: true,
		autoplay: true,
	});
}

// galeria

if (document.querySelector('.gallery'))
	if (SimpleLightbox) {
		let gallery = new SimpleLightbox('.gallery a');
	}

// nav

const select = document.querySelector('.projects-page--menu');
const currentPath = window.location.pathname;
if (select) {
	let found = false;
	for (let i = 0; i < select.options.length; i++) {
		const optionValue = select.options[i].value;

		if (currentPath === optionValue) {
			select.selectedIndex = i;
			found = true;
			break;
		}
	}

	if (!found && currentPath.includes('/pt-BR/projetos/')) {
		select.value = '/pt-BR/projetos/';
	}

	select.addEventListener('change', function () {
		window.location.href = this.value;
	});
}
