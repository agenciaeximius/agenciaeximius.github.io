let contentDiv = document.querySelector('.about--content');
let btns = document.querySelectorAll('.about--btn');
let select = document.querySelector('.about--select');

function removeActive() {
	btns.forEach((btn) => {
		btn.classList.remove('active');
	});
}

btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		removeActive();

		let type = btn.dataset.btn;
		changeContent(type);

		select.value = type;
		btn.classList.add('active');
	});
});

select.addEventListener('change', () => {
	changeContent(select.value);

	btns.forEach((btn) => {
		let type = btn.dataset.btn;
		if (type == select.value) {
			removeActive();
			btn.classList.add('active');
		}
	});
});

btns[0].click();

function changeContent(tag) {
	let content;

	switch (tag) {
		case 'time':
			content = `
            <h2>Quem faz acontecer</h2>
            <p>Somos uma dupla da Universidade Federal do ABC, focada em
            gerar soluções digitais de qualidade com tecnologia.</p>
			<div class="time">
				<div class="fig">
					<div class="img-container">
						<img src="./assets/time/vinicius.jpg" alt="Foto de Vinícius Davi" />					
					</div>
					<p>Vinícius Davi</p>
				</div>
				<div class="fig">
					<div class="img-container">
						<img src="./assets/time/igor.jpg" alt="Foto de Igor Marinho" />
					</div>
					<p>Igor Marinho</p>
				</div>
			</div>
			
            `;
			break;
		case 'valores':
			content = `
            <h2>O que valorizamos</h2>
            <p>Nossos valores são os pilares que fundamentam nosso modelo de trabalho e refletem aquilo que acreditamos.</p>
			<div class="valores">
				<ul>
					<li>
						<img src="./assets/valores/integ.svg" alt="" />
						<div>
							<h3>Integridade</h3>
							<p>Possuímos uma conduta ética e honesta, agindo com
							respeito e mantendo a confiança.</p>
						</div>
					</li>
					<li>
						<img src="./assets/valores/colab.svg" alt="" />
						<div>
							<h3>Colaboração</h3>
							<p>Mais do que entregar projetos, buscamos colaborar
							com seu negócio, atendendo a suas necessidades.</p>
						</div>
					</li>
					<li>
						<img src="./assets/valores/responsa.svg" alt="" />
						<div>
							<h3>Responsabilidade</h3>
							<p>Temos o comprometimento como guia e a honestidade
							como princípio fundamental em nossos serviços.</p>
						</div>
					</li>
					<li>
						<img src="./assets/valores/inov.svg" alt="" />
						<div>
							<h3>Inovação</h3>
							<p>A cada entrega, temos como objetivo agregar valor com
							melhorias e renovações para seus propósitos.</p>
						</div>
					</li>
				</ul>
			</div>
            `;
			break;
		case 'segmentos':
			content = `
            <h2>Setores que atendemos</h2>
            <p>Seja qual for o ramo de seu negócio, podemos te ajudar
            a se posicionar com destaque no ambiente digital.</p>
			<div class="segmentos">
				<ul>
					<li>
						<img src="./assets/segmentos/estetica.svg" alt="" />
						<p>Estética</p>
					</li>
					<li>
						<img src="./assets/segmentos/fitness.svg" alt="" />
						<p>Fitness</p>
					</li>
					<li>
						<img src="./assets/segmentos/vestuario.svg" alt="" />
						<p>Vestuário</p>
					</li>
					<li>
						<img src="./assets/segmentos/gastronomia.svg" alt="" />
						<p>Gastronomia</p>
					</li>
					<li>
						<img class="border" src="./assets/segmentos/automotivo.svg" alt="" />
						<p>Automotivo</p>
					</li>
					<li>
						<img class="border" src="./assets/segmentos/educacao.svg" alt="" />
						<p>Educação</p>
					</li>
					<li>
						<img class="border" src="./assets/segmentos/advocacia.svg" alt="" />
						<p>Advocacia</p>
					</li>
					<li>
						<img class="border" src="./assets/segmentos/pet-shop.svg" alt="" />
						<p>Pet Shop</p>
					</li>
					<li>
						<img class="border" src="./assets/segmentos/arquitetura.svg" alt="" />
						<p>Arquitetura</p>
					</li>
					<li>
						<img class="border" src="./assets/segmentos/tecnologia.svg" alt="" />
						<p>Tecnologia</p>
					</li>
					<li>
						<img class="border" src="./assets/segmentos/odontologia.svg" alt="" />
						<p>Odontologia</p>
					</li>
					<li>
						<img class="border" src="./assets/segmentos/autonomos.svg" alt="" />
						<p>Autônomos</p>
					</li>
				</ul>
			</div>
            `;
			break;
		case 'metodologia':
			content = `
            <h2>Nosso fluxo de trabalho</h2>
            <p>Contamos com as melhores metodologias em nosso processo
            de trabalho, juntando organização, eficiência e propósito.</p>
			<div class="metodologia">
				<ul>
					<li>
						<p>1.</p>
						<div>
							<h3>Start</h3>
							<p>Reunião para alinhamento das necessidades do projeto,
							onde o briefing é realizado e os objetivos são definidos.</p>
						</div>
					</li>
					<li>
						<p>2.</p>
						<div>
							<h3>Design</h3>
							<p>Geração de soluções de design alinhadas à identidade
							visual de seu negócio, de modo preciso e moderno.</p>
						</div>
					</li>
					<li>
						<p>3.</p>
						<div>
							<h3>Desenvolvimento</h3>
							<p>Construção dos projetos, onde configuramos e damos
							vida às melhorias pensadas em cada detalhe para você.</p>
						</div>
					</li>
					<li>
						<p>4.</p>
						<div>
							<h3>Delivery</h3>
							<p>Entrega das soluções digitais desenvolvidas, além do
							acompanhamento efetuado posteriormente.</p>
						</div>
					</li>
				</ul>
			</div>
            `;
			break;
		default:
			throw new Error('Erro');
	}

	contentDiv.innerHTML = content;
}
