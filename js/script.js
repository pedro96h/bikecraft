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

// Exibir pergunta //

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta (event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('expandida');
    const ativa = resposta.classList.contains('expandida');
    pergunta.setAttribute('aria-expanded',ativa);
}

function eventoPergunta (pergunta) {
    pergunta.addEventListener('click',ativarPergunta);
};

perguntas.forEach(eventoPergunta);

// biblioteca de img //

const galeria = document.querySelectorAll('.bicicleta-imagem img');
const galeriaContainer = document.querySelector('.bicicleta-imagem');

function trocarImagem (event) {
    const img = event.currentTarget;
    const media = window.matchMedia('( min-width : 1000px )').matches;
    if(media) {
        galeriaContainer.prepend(img);
    }
}

function eventoGaleria (img) {
    img.addEventListener('click',trocarImagem);
}

galeria.forEach(eventoGaleria);

// Animacao // 

if(window.SimpleAnime) {
    new SimpleAnime();
}
