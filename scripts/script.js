// Função que mostra páginas diferentes dentro da div estilizada.
function dirPag(pag, guia) {
    fetch(pag)
    .then(resposta => {
        return resposta.text()
        
    })
    .then(html => {
        consolecontent.innerHTML = html
        if (guia === 'cttlink') {
            FormularioHome() 
        }
    })

    document.querySelectorAll('nav a').forEach(aba => {
        aba.id == guia ? aba.style.backgroundColor = 'black' : aba.style.backgroundColor = '#2B2B2B'
    })

}

function FormularioHome() {
    const form = document.getElementById('form');
    const feedback = document.getElementById('feedback-form');

    
if (form) {
    form.addEventListener('submit', (e) => {SubmitForm(e, form, feedback)})
}
}


async function SubmitForm(e, formulario, div) {   
   
        e.preventDefault();
        const formData = new FormData(formulario);
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
                div.textContent = 'Mensagem enviada com sucesso, obrigada! \u{1F596} ';
                div.style.display = 'block';
                formulario.reset();
            } else {
                div.textContent = 'Erro ao enviar. Tente novamente, por favor.';
                div.style.display = 'block';
            }
        } catch (err) {
            div.textContent = 'Erro de conexão. Tente novamente, por favor.';
            div.style.display = 'block';
        }
    
}

//Selecionando elementos de html e evento de click
let consolecontent = window.document.getElementById('consolecontent')
let cttlink = window.document.getElementById('cttlink')
let hablink = window.document.getElementById('hablink')



cttlink.addEventListener('click', (e) => {e.preventDefault(); dirPag('paginas/contato.html', 'cttlink')})
hablink.addEventListener('click', (e) => {e.preventDefault(); dirPag('paginas/skills.html', 'hablink')})


