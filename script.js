'use strict';

async function getUrlFotos(raca) {
    let url = `https://dog.ceo/api/breed/${raca}/images`;
    let response = await fetch(url);
    let data = await response.json();
    return data.message;
};

function criarFoto(urlFoto) {
    let foto = document.createElement('img');
    foto.src = urlFoto;
    foto.className = 'foto';
    return foto;
};

async function preencherGaleria() {
    let galeria = document.getElementById('containerGaleria');
    let raca = document.getElementById('raca').value;
    let urlFotos = await getUrlFotos(raca);

    let fotos = urlFotos.map(criarFoto);
    galeria.replaceChildren(...fotos);
};

document.getElementById('pesquisar').addEventListener('click', preencherGaleria);