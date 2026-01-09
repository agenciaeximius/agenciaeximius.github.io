try {
	const form = document.querySelector('form');

	const isPtBr = window.location.href.includes('pt-BR');

	async function sendEmail({ target }) {
		const [nameInput, emailInput, telInput, msgInput] = target;

		const data = {
			name: nameInput.value,
			email: emailInput.value,
			tel: telInput.value,
			msg: msgInput.value,
		};

		const submitBtn = form.querySelector('button[type="submit"]');
		const originalText = submitBtn ? submitBtn.innerText : '';
		if (submitBtn) {
			submitBtn.innerText = isPtBr ? 'Enviando...' : 'Sending...';
			submitBtn.disabled = true;
			submitBtn.style.cursor = 'not-allowed';
		}

		try {
			const response = await fetch('../core_api.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (response.ok && result.status === 'success') {
				alert(isPtBr ? 'E-mail enviado! Logo entraremos em contato.' : 'Email sent! We will contact you soon.');
				form.reset();
			} else {
				throw new Error(result.message || 'Erro desconhecido');
			}
		} catch (error) {
			console.error('Erro no envio:', error);
			alert(isPtBr ? 'Houve um erro ao enviar sua mensagem. Tente novamente mais tarde.' : 'There was an error sending your message. Please try again later.');
		} finally {
			if (submitBtn) {
				submitBtn.innerText = originalText;
				submitBtn.disabled = false;
				submitBtn.style.cursor = 'pointer';
			}
		}
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		sendEmail(e);
	});
} catch (e) {
	console.error('Erro no script de email:', e);
}
