//  Ativação de menu //
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
    const url = window.location.href;
    const href = '/'+link.href.split('/')[3].split('.')[0];
    if(url.includes(href)) {
        link.classList.add('ativo');
    }
};

links.forEach(ativarLink);

// Passagem de parametros na url //

const parametros = new URLSearchParams(window.location.search);

function passagemParametro(parametro){
    // const element = document.querySelector('#seguro');
    const element = document.getElementById(parametro);
    if(element) {
        element.checked = true;
    }
}

parametros.forEach(passagemParametro);