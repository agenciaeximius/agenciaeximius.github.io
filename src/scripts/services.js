try {
	let servicesContent = document.querySelector('.services--content');
	let servicesGrid = document.querySelector('.services--grid');
	let figure = servicesGrid && servicesGrid.querySelector('figure');
	let servicesBtns = document.querySelectorAll('.services--btn');
	let servicesSelect = document.querySelector('.services--menu');

	function removeServicesActive() {
		servicesBtns.forEach((btn) => {
			btn.classList.remove('active');
		});
	}

	servicesBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			removeServicesActive();

			let type = btn.dataset.btn;
			changeServicesContent(type);

			servicesSelect.value = type;
			btn.classList.add('active');
		});
	});

	servicesSelect.addEventListener('change', () => {
		changeServicesContent(servicesSelect.value);

		servicesBtns.forEach((btn) => {
			let type = btn.dataset.btn;
			if (type == servicesSelect.value) {
				removeServicesActive();
				btn.classList.add('active');
			}
		});
	});

	servicesBtns[0].click();

	function changeServicesContent(tag) {
		let h2, p;
		let img = new Image();
		img.alt = '';

		switch (tag) {
			// pt

			case 'site-pt':
				img.src = '../assets/services/site.svg';
				h2 = 'Criamos websites com as melhores tecnologias';
				p = 'Na era digital, ter um site é muito relevante para garantir a presença virtual de seu negócio, a fim de se destacar com profissionalismo, gerar credibilidade e conquistar mais clientes.';
				break;
			case 'social-media-pt':
				img.src = '../assets/services/social-media.svg';
				h2 = 'Artes criativas para se destacar nas redes sociais';
				p = 'Postagens elaboradas e visualmente atraentes que chamam atenção para seu negócio nas mídias sociais e contribuem para uma comunicação eficaz na captação de clientes.';
				break;
			case 'identity-pt':
				img.src = '../assets/services/identity.svg';
				h2 = 'Tenha uma identidade visual única, marcante e inovadora';
				p = 'É por meio da identidade visual que são transmitidos os valores e propósitos de uma marca, sendo indispensável	para qualquer negócio que busque alcançar o sucesso.';
				break;
			case 'card-pt':
				img.src = '../assets/services/card.svg';
				h2 = 'Fazemos cartões de visita digitais que geram destaque';
				p = 'O cartão de visita é a porta de entrada para o público conhecer seu negócio, contendo Ícones digitais que direcionam o cliente para a página com as informações que quiser.';
				break;
			case 'ux-pt':
				img.src = '../assets/services/ux.svg';
				h2 = 'Excelência em UI/UX Design que vai além da estética';
				p =
					'Desperte a excelência em sua plataforma com nosso expertise em UI e UX Design, uma vez que oferecemos soluções digitais que vão além da estética, proporcionando experiências intuitivas e envolventes para seus usuários.';
				break;
			case 'dig-menu-pt':
				img.src = '../assets/services/dig-menu.svg';
				h2 = 'Formulamos cardápios digitais exclusivos e modernos';
				p = 'Ter um cardápio digital melhora a experiência dos clientes e otimiza as operações do restaurante, tal modelo permite que os clientes vejam o cardápio de modo rápido e conveniente.';
				break;

			// en

			case 'site-en':
				img.src = '../assets/services/site.svg';
				h2 = 'We create websites with the best technologies';
				p = "In the digital age, having a website is crucial to ensure your business's online presence, helping you stand out with professionalism, build credibility, and attract more clients.";
				break;
			case 'social-media-en':
				img.src = '../assets/services/social-media.svg';
				h2 = 'Creative designs to stand out on social media';
				p = 'Carefully crafted and visually appealing posts that draw attention to your business on social media and contribute to effective communication in customer acquisition.';
				break;
			case 'identity-en':
				img.src = '../assets/services/identity.svg';
				h2 = 'Have a unique, striking, and innovative brand identity';
				p = "It's through brand identity that a brand's values and purposes are conveyed, making it essential for any business aiming for success.";
				break;
			case 'card-en':
				img.src = '../assets/services/card.svg';
				h2 = 'We create digital business cards that make an impression';
				p = 'The business card is the gateway for the public to know your business, containing digital icons that direct the client to the page with the desired information.';
				break;
			case 'ux-en':
				img.src = '../assets/services/ux.svg';
				h2 = 'Excellence in UI/UX Design that goes beyond aesthetics';
				p =
					"Enhance your platform's excellence with our expertise in UI and UX Design, offering digital solutions that go beyond aesthetics, providing intuitive and engaging experiences for your	users.";
				break;
			case 'dig-menu-en':
				img.src = '../assets/services/dig-menu.svg';
				h2 = 'We create exclusive and modern digital menus';
				p = 'Having a digital menu improves the customer experience and optimizes restaurant operations, allowing customers to view the menu quickly and conveniently.';
				break;
			default:
				throw new Error('Erro');
		}

		servicesContent.innerHTML = `<div><h2>${h2}</h2><p>${p}</p></div>`;
		figure.innerHTML = '';
		figure.append(img);
	}
} catch (e) {
	console.error(e);
}
