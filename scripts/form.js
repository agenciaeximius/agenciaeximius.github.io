let form = document.querySelector('form');

function sendEmail({ target, ...rest }) {
	let [name, email, tel, msg] = target;
	window.location.href.includes('pt-BR')
		? Email.send({
				Host: 'smtp.elasticemail.com',
				Username: 'agencia@eximiusdesign.com.br',
				Password: 'E3C3749254A8B37396808EC84CE6497491CF',
				To: 'agencia@eximiusdesign.com.br',
				From: 'agencia@eximiusdesign.com.br',
				Subject: `Contato de ${name.value}`,
				Body: `
					Nome do usuário: ${name.value}<br />
					E-mail do usuário: ${email.value}<br />
					Telefone/WhatsApp do usuário: ${tel.value}<br />
					Mensagem:<br />
					${msg.value}
					`,
		  }).then(() => alert('E-mail enviado! Logo entraremos em contato.'))
		: Email.send({
				Host: 'smtp.elasticemail.com',
				Username: 'agencia@eximiusdesign.com.br',
				Password: 'E3C3749254A8B37396808EC84CE6497491CF',
				To: 'agencia@eximiusdesign.com.br',
				From: 'agencia@eximiusdesign.com.br',
				Subject: `Contact from ${name.value}`,
				Body: `
                    User's Name: ${name.value}<br />
                    User's Email: ${email.value}<br />
                    User's Phone/WhatsApp: ${tel.value}<br />
                    Message:<br />
                    ${msg.value}
                    `,
		  }).then(() => alert('Email sent! We will contact you soon.'));
}
form.addEventListener('submit', (e) => {
	e.preventDefault();
	sendEmail(e);
});
