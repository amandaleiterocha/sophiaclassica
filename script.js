let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("#campo-busca");
let dados = [];

// Carrega os dados do JSON e renderiza todos os cards inicialmente.
window.addEventListener('DOMContentLoaded', async () => {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
});

function iniciarBusca() {
    realizarBusca();
}

function renderizarCards(dadosParaRenderizar) {
    cardContainer.innerHTML = "";

    for (let dado of dadosParaRenderizar) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
                <p>${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
                <p>${dado.tags}</p>
        `;
        cardContainer.appendChild(article);
    }
}

function realizarBusca() {
    const termoBusca = campoBusca.value.toLowerCase().trim();
    const resultados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) || 
        dado.descricao.toLowerCase().includes(termoBusca)
    );
    renderizarCards(resultados);
}
