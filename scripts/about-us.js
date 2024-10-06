let aboutContent = document.querySelector('.about--content');
let aboutBtns = document.querySelectorAll('.about--btn');
let aboutSelect = document.querySelector('.about--select');

function removeAboutActive() {
	aboutBtns.forEach((btn) => {
		btn.classList.remove('active');
	});
}

aboutBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		removeAboutActive();

		let type = btn.dataset.btn;
		changeAboutContent(type);

		aboutSelect.value = type;
		btn.classList.add('active');
	});
});

aboutSelect.addEventListener('change', () => {
	changeAboutContent(aboutSelect.value);

	aboutBtns.forEach((btn) => {
		let type = btn.dataset.btn;
		if (type == aboutSelect.value) {
			removeAboutActive();
			btn.classList.add('active');
		}
	});
});

aboutBtns[0].click();

function changeAboutContent(tag) {
	let h2, p, content;

	switch (tag) {
		// pt

		case 'team-pt':
			h2 = 'Quem faz acontecer';
			p = 'Especialistas em soluções digitais, somos focados em agregar valor e transformar negócios por meio da tecnologia de ponta.';
			content = `
				<div class='team'>
					<div class='fig'>
						<div class='img-container'>
							<img src='../assets/team/vinicius.webp' alt='Foto de Vinícius Davi' />
						</div>
						<p>Vinícius Davi</p>
					</div>
					<div class='fig'>
						<div class='img-container'>
							<img src='../assets/team/igor.webp' alt='Foto de Igor Marinho' />
						</div>
						<p>Igor Marinho</p>
					</div>
				</div>
			`;
			break;
		case 'values-pt':
			h2 = 'O que valorizamos';
			p = 'Nossos valores são os pilares que fundamentam nosso modelo de trabalho e refletem aquilo que acreditamos.';
			content = `
				<div class='values'>
					<ul>
						<li>
							<img src='../assets/values/integrity.svg' alt='' />
							<div>
								<h3>Integridade</h3>
								<p>Possuímos uma conduta ética e honesta, agindo com respeito e mantendo a confiança.</p>
							</div>
						</li>
						<li>
							<img src='../assets/values/collab.svg' alt='' />
							<div>
								<h3>Colaboração</h3>
								<p>Mais do que entregar projetos, buscamos colaborar com seu negócio, atendendo a suas necessidades.</p>
							</div>
						</li>
						<li>
							<img src='../assets/values/responsibility.svg' alt='' />
							<div>
								<h3>Responsabilidade</h3>
								<p>Temos o comprometimento como guia e a honestidade como princípio fundamental em nossos serviços.</p>
							</div>
						</li>
						<li>
							<img src='../assets/values/innovation.svg' alt='' />
							<div>
								<h3>Inovação</h3>
								<p>A cada entrega, temos como objetivo agregar valor com melhorias e renovações para seus propósitos.</p>
							</div>
						</li>
					</ul>
				</div>
			`;
			break;
		case 'segments-pt':
			h2 = 'Setores que atendemos';
			p = 'Seja qual for o ramo de seu negócio, podemos te ajudar a se posicionar com destaque no ambiente digital.';
			content = `
				<div class='segments'>
					<ul>
						<li>
							<img src='../assets/segments/aesthetics.svg' alt='' />
							<p>Estética</p>
						</li>
						<li>
							<img src='../assets/segments/fitness.svg' alt='' />
							<p>Fitness</p>
						</li>
						<li>
							<img src='../assets/segments/clothing.svg' alt='' />
							<p>Vestuário</p>
						</li>
						<li>
							<img src='../assets/segments/gastronomy.svg' alt='' />
							<p>Gastronomia</p>
						</li>
						<li>
							<img class='border' src='../assets/segments/automotive.svg' alt='' />
							<p>Automotivo</p>
						</li>
						<li>
							<img class='border' src='../assets/segments/education.svg' alt='' />
							<p>Educação</p>
						</li>
						<li>
							<img class='border' src='../assets/segments/advocacy.svg' alt='' />
							<p>Advocacia</p>
						</li>
						<li>
							<img class='border' src='../assets/segments/pet-shop.svg' alt='' />
							<p>Pet Shop</p>
						</li>
						<li>
							<img class='border' src='../assets/segments/architecture.svg' alt='' />
							<p>Arquitetura</p>
						</li>
						<li>
							<img class='border' src='../assets/segments/technology.svg' alt='' />
							<p>Tecnologia</p>
						</li>
						<li>
							<img class='border' src='../assets/segments/odontology.svg' alt='' />
							<p>Odontologia</p>
						</li>
						<li>
							<img class='border' src='../assets/segments/self-employed.svg' alt='' />
							<p>Autônomos</p>
						</li>
					</ul>
				</div>
			`;
			break;
		case 'methodology-pt':
			h2 = 'Nosso fluxo de trabalho';
			p = 'Contamos com as melhores metodologias em nosso processo de trabalho, juntando organização, eficiência e propósito.';
			content = `
				<div class='methodology'>
					<ul>
						<li>
							<p>1.</p>
							<div>
								<h3>Start</h3>
								<p>Reunião para alinhamento das necessidades do projeto, onde o briefing é realizado e os objetivos são definidos.</p>
							</div>
						</li>
						<li>
							<p>2.</p>
							<div>
								<h3>Design</h3>
								<p>Geração de soluções de design alinhadas à identidade visual de seu negócio, de modo preciso e moderno.</p>
							</div>
						</li>
						<li>
							<p>3.</p>
							<div>
								<h3>Desenvolvimento</h3>
								<p>Construção dos projetos, onde configuramos e damos vida às melhorias pensadas em cada detalhe para você.</p>
							</div>
						</li>
						<li>
							<p>4.</p>
							<div>
								<h3>Delivery</h3>
								<p>Entrega das soluções digitais desenvolvidas, além do acompanhamento efetuado posteriormente.</p>
							</div>
						</li>
					</ul>
				</div>
			`;
			break;

		// en

		case 'team-en':
			h2 = 'Who makes it happen';
			p = 'Specialists in digital solutions, we are focused on adding value and transforming businesses through cutting-edge technology.';
			content = `
				<div class='team'>
					<div class='fig'>
						<div class='img-container'>
							<img src='../assets/team/vinicius.webp' alt='Photo of Vinícius Davi' />
						</div>
						<p>Vinícius Davi</p>
					</div>
					<div class='fig'>
						<div class='img-container'>
							<img src='../assets/team/igor.webp' alt='Photo of Igor Marinho' />
						</div>
						<p>Igor Marinho</p>
					</div>
				</div>
			`;
			break;
		case 'values-en':
			h2 = 'What we value';
			p = 'Our values are the pillars that support our work model and reflect what we believe in.';
			content = `
				<div class='values'>
					<ul>
						<li>
							<img src='../assets/values/integrity.svg' alt='' />
							<div>
								<h3>Integrity</h3>
								<p>We act with ethics and honesty, respecting others and maintaining trust.</p>
							</div>
						</li>
						<li>
							<img src='../assets/values/collab.svg' alt='' />
							<div>
								<h3>Collaboration</h3>
								<p>More than delivering projects, we aim to collaborate with your business, meeting your needs.</p>
							</div>
						</li>
						<li>
							<img src='../assets/values/responsibility.svg' alt='' />
							<div>
								<h3>Responsibility</h3>
								<p>Commitment is our guide, and honesty is a fundamental principle in our services.</p>
							</div>
						</li>
						<li>
							<img src='../assets/values/innovation.svg' alt='' />
							<div>
								<h3>Innovation</h3>
								<p>With every delivery, we aim to add value with improvements and innovations to your goals.</p>
							</div>
						</li>
					</ul>
				</div>
			`;
			break;
		case 'segments-en':
			h2 = 'Areas we serve';
			p = 'No matter the sector of your business, we can help you shine in the digital environment.';
			content = `
				<div class='segments'>
					<ul>
						<li>
							<img src='../assets/segments/aesthetics.svg' alt='' />
							<p>Aesthetics</p>
						</li>
						<li>
							<img src='../assets/segments/fitness.svg' alt='' />
							<p>Fitness</p>
						</li>
						<li>
							<img src='../assets/segments/clothing.svg' alt='' />
							<p>Clothing</p>
						</li>
						<li>
							<img src='../assets/segments/gastronomy.svg' alt='' />
							<p>Gastronomy</p>
						</li>
						<li>
							<img class='border' src='../assets/segments/automotive.svg' alt='' />
							<p>Automotive</p>
						</li>
						<li>
							<img class='border' src='../assets/segments/education.svg' alt='' />
							<p>Education</p>
						</li>
						<li>
							<img class='border' src='../assets/segments/advocacy.svg' alt='' />
							<p>Advocacy</p>
						</li>
						<li>
							<img class='border' src='../assets/segments/pet-shop.svg' alt='' />
							<p>Pet Shop</p>
						</li>
						<li>
							<img class='border' src='../assets/segments/architecture.svg' alt='' />
							<p>Architecture</p>
						</li>
						<li>
							<img class='border' src='../assets/segments/technology.svg' alt='' />
							<p>Technology</p>
						</li>
						<li>
							<img class='border' src='../assets/segments/odontology.svg' alt='' />
							<p>Odontology</p>
						</li>
						<li>
							<img class='border' src='../assets/segments/self-employed.svg' alt='' />
							<p>Freelancer</p>
						</li>
					</ul>
				</div>
			`;
			break;
		case 'methodology-en':
			h2 = 'Our workflow';
			p = 'We use the best methodologies in our work process, combining organization, efficiency, and purpose.';
			content = `
				<div class='methodology'>
					<ul>
						<li>
							<p>1.</p>
							<div>
								<h3>Start</h3>
								<p>Meeting to align the project needs, where the briefing is carried out and the objectives are defined.</p>
							</div>
						</li>
						<li>
							<p>2.</p>
							<div>
								<h3>Design</h3>
								<p>Generating design solutions aligned with your business's visual identity in a precise and modern way.</p>
							</div>
						</li>
						<li>
							<p>3.</p>
							<div>
								<h3>Development</h3>
								<p>Building projects where we configure and bring to life the improvements thought out in every detail for you.</p>
							</div>
						</li>
						<li>
							<p>4.</p>
							<div>
								<h3>Delivery</h3>
								<p>Delivery of the developed digital solutions, along with ongoing support afterward.</p>
							</div>
						</li>
					</ul>
				</div>
			`;
			break;
		default:
			throw new Error('Erro');
	}

	aboutContent.innerHTML = `<h2>${h2}</h2><p>${p}</p>${content}`;
}
