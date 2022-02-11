// function mostrarPopup() {
//     window.alert("Hello World!")
// }

let = document.getElementById("campo-email");

function enviarEmail() {
    let emailDigitado = email.value;
    console.log(emailDigitado)
}

let listaNoticias = [
    {
        titulo: "Ediçao de 10 anos de Skyrim",
        descricao: "Finalmente fomos presenteados com a maravilhosa e lindíssma edição de ainversário desse incrível jogasso"
    },
    {
        titulo: "The Elder Scrools 6",
        descricao: "Acompanhe todas as atualizações sobre a futara obra de arte chama TES6"
    },
    {
        titulo: "Como deixar seu jogo o masi realista possível",
        descricao: "Com mais de 1200 mods, um usuário do Redit transformou seu jogo em uma experiência ultra-realista. Quase imperceptível da realidade"
    },
    {
        titulo: "Update 4.0 da Skyrim Special Edition",
        descricao: "Acompanhe tudo o que entrou de novo na nova atualização de Skyrim SE."
    },
    {
        titulo: "Os mods mais comédia de Skyrim",
        descricao: "Jogue com os x-men, Thomas o trem, John Cena, Goku e muito mais com essa lista irada que criamos para você!"
    },
    {
        titulo: "Jogue Morrowind no Skyrim!",
        descricao: "Com esse mod incrivel você consegue jogar a campanha principal de Morrowind na engine do Skyrim."
    },
]

function renderizarNoticias() {
    let espaco = document.getElementById("espaco-niticias")

    let template = "";

    for (let index = 0; index < listaNoticias.length; index++) {
        const noticias = listaNoticias[index];

        template += ` <div class="card-news">
        <img src="img/card news1.jpeg" alt="Skyrim news">
        <h3>Título da notícia</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aut iure, consequatur
            voluptatem sint dolore ab eos fuga eius cumque et repellat fugiat eveniet rem omnis,
            unde modi doloribus reprehenderit.</p>
    </div>`
    }

    espaco.innerHTML = template

}