function dirPag(pag, guia) {
    fetch(pag)
    .then(resposta => {
        return resposta.text()
        
    })
    .then(html => {
        consolecontent.innerHTML = html
    })

    guia.style.backgroundColor = 'black'
    window.document.getElementById('homespan').style.backgroundColor = '#2B2B2B'
}

let consolecontent = window.document.getElementById('consolecontent')

let cttlink = window.document.getElementById('cttlink')
let hablink = window.document.getElementById('hablink')

cttlink.addEventListener('click', () => dirPag('paginas/contato.html', cttlink))
hablink.addEventListener('click', () => dirPag('paginas/skills.html', hablink))

