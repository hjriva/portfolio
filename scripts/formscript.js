const form = document.getElementById('form');
const feedback = document.getElementById('feedback-form');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        try {
            const response = await fetch('https://api.staticforms.xyz/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    accessKey: 'sf_83f31632ca0040cf3df65811',
                    ...Object.fromEntries(formData)
                })
            });
            const result = await response.json();
            if (result.success) {
                feedback.textContent = '✅ Mensagem enviada com sucesso!';
                feedback.style.display = 'block';
                form.reset();
            } else {
                feedback.textContent = '❌ Erro ao enviar. Tente novamente.';
                feedback.style.display = 'block';
            }
        } catch (err) {
            feedback.textContent = '❌ Erro de conexão.';
            feedback.style.display = 'block';
        }
    });
}
