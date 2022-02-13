// $(document).ready(function () {
//     $("carrosel img:eq(0)").addClass("banner-ativo").show()
// })

// setInterval(slide, 3000)

// function slide() {



//     if ($(".banner-ativo").next().length) {
//         $(".banner-ativo").removeClass(".banner-ativo").hide().next().addClass(".banner-ativo").show()
//     } else {
//         $(".banner-ativo").removeClass().hide()
//         $("carrosel img:eq(0)").addClass("banner-ativo").show()
//     }
// }

$(document).ready(function () {

    $("#barras").click(function () {
        $("#menu").toggleClass("#menu-ativo")
    })
})



//     $("#barras").click(function () {
//         if ($("#menu").hasclass("#menu-ativo")) {
//             $("#menu").removeclass("#menu-ativo")
//         } else {
//             $("#menu").addclass("#menu-ativo")
//         }
//     })
// })

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
        titulo: "Como deixar seu jogo o mais realista possível",
        descricao: "Com mais de 1200 mods, um usuário do Redit transformou seu jogo em uma experiência ultra-realista."
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
    let espaco = document.getElementById("espaco-noticias")

    let template = "";

    for (let index = 0; index < listaNoticias.length; index++) {
        const noticias = listaNoticias[index];

        template += ` <div class="card-news">
        <img src="img/card news1.jpeg" alt="Skyrim news">
        <h3>${noticias.titulo}</h3>
        <p>${noticias.descricao}</p>
    </div>`
    }

    espaco.innerHTML = template
}