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
