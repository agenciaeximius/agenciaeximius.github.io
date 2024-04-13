let contentDiv = document.querySelector('.services--content');
let btns = document.querySelectorAll('.services_btn');
let select = document.querySelector('.services--menu');

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

btns.forEach((btn) => btn.click());
btns[0].click();

function changeContent(tag) {
	let content;
	let img = new Image();

	switch (tag) {
		case 'site':
			img.src = '../assets/servicos/site.svg';
			content = `
            <div>
                <h2>Criamos websites com as melhores tecnologias</h2>
                <p>Na era digital, ter um site é muito relevante para garantir a presença virtual de seu negócio, a fim de se destacar com profissionalismo, gerar credibilidade e conquistar mais clientes.</p>
			</div>            
            `;
			break;
		case 'social-media':
			img.src = '../assets/servicos/social-media.svg';
			content = `
            <div>
                <h2>Artes criativas para se destacar nas redes sociais</h2>
                <p>Postagens elaboradas e visualmente atraentes que chamam atenção para seu negócio nas mídias sociais e contribuem para uma comunicação eficaz na captação de clientes.</p>
			</div>
            `;
			break;
		case 'identidade':
			img.src = '../assets/servicos/identidade.svg';
			content = `
            <div>
                <h2>Tenha uma identidade visual única, marcante e inovadora</h2>
                <p>É por meio da identidade visual que são transmitidos
				os valores e propósitos de uma marca, sendo indispensável
				para qualquer negócio que busque alcançar o sucesso.</p>
			</div>
            `;
			break;
		case 'cartao':
			img.src = '../assets/servicos/cartao.svg';
			content = `
            <div>
                <h2>Fazemos cartões de visita digitais que geram destaque</h2>
                <p>O cartão de visita é a porta de entrada para o público conhecer seu negócio, contendo Ícones digitais que direcionam o cliente para a página com as informações que quiser.</p>
			</div>
            `;
			break;
		case 'ppt':
			img.src = '../assets/servicos/ppt.svg';
			content = `
                <div>
                    <h2>Construímos apresentações digitais profissionais</h2>
                    <p>Agregue uma experiência eficaz e impactante para o público por meio de apresentações profissionais em PowerPoint com organização e coerência visual que garantem credibilidade.</p>
                </div>
                `;
			break;
		case 'cardapio':
			img.src = '../assets/servicos/cardapio.svg';
			content = `
            <div>
                <h2>Formulamos cardápios digitais exclusivos e modernos</h2>
                <p>Ter um cardápio digital melhora a experiência dos clientes e otimiza as operações do restaurante, tal modelo permite que os clientes vejam o cardápio de modo rápido e conveniente.</p>
			</div>
            `;
			break;
		case 'artes':
			img.src = '../assets/servicos/divulgacao.svg';
			content = `
            <div>
                <h2>Divulgue seus projetos e serviços de forma profissional</h2>
                <p>Potencialize a visibilidade de seus produtos e serviços com artes digitais estratégicas e consistentes que cativam, envolvem e conquistam a atenção do seu público-alvo para o seu negócio.</p>
			</div>
            `;
			break;
		case 'ux':
			img.src = '../assets/servicos/ux.svg';
			content = `
            <div>
                <h2>Excelência em UI/UX Design que vai além da estética</h2>
                <p>Desperte a excelência em sua plataforma com nosso expertise em UI e UX Design, uma vez que oferecemos soluções digitais que vão além da estética, proporcionando experiências intuitivas e envolventes para seus usuários.</p>
			</div>
            `;
			break;
		default:
			throw new Error('Erro');
	}

	contentDiv.innerHTML = content;
	contentDiv.append(img);
}
