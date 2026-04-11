// Função que mostra páginas diferentes dentro da div estilizada.
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
//Selecionando elementos de html e evento de click
let consolecontent = window.document.getElementById('consolecontent')
let cttlink = window.document.getElementById('cttlink')
let hablink = window.document.getElementById('hablink')
cttlink.addEventListener('click', (e) => {e.preventDefault(); dirPag('paginas/contato.html', cttlink)})
hablink.addEventListener('click', (e) => {e.preventDefault(); dirPag('paginas/skills.html', hablink)})
