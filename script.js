const btnSolicitacao = document.querySelector('.solicitacao');
const btnAnalise = document.querySelector('.analise');
const btnAprovacao = document.querySelector('.aprovacao');
const btn = document.querySelectorAll('.btn');
const img = document.querySelector('#imagem-third');
const paragrafo = document.querySelector('.paragrafo__third');

let count = 1;
document.querySelector('#radio1').checked = true;

setInterval(function () {
    nexImage()
}, 5000);

function nexImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.querySelector('#radio' + count).checked = true;
}


