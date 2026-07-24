

const botaoDicaTeste = document.getElementById("botao-dica-teste")
const botaoDicaConsumo = document.getElementById("botao-dica-consumo")
const botaoDicaExpansao = document.getElementById("botao-dica-expansao")

botaoDicaTeste.addEventListener('click', mostrarDicaTeste)
botaoDicaExpansao.addEventListener('click', mostrarDicaExpansão)
botaoDicaConsumo.addEventListener('click', mostrarDicaConsumo)



function mostrarDicaTeste(){

    const textoDica = document.getElementById('texto-dica-teste')

    textoDica.classList.toggle('hidden')

}
function mostrarDicaConsumo(){

    const textoDica = document.getElementById('texto-dica-consumo')

    textoDica.classList.toggle('hidden')

}
function mostrarDicaExpansão(){

    const textoDica = document.getElementById('texto-dica-expansao')

    textoDica.classList.toggle('hidden')

}

const mudarInversor = document.getElementById('inversor-proposta')

mudarInversor.addEventListener('change', mudarHibrido)

function mudarHibrido(){




    const containerHibrido = document.getElementById('main-hibrido-proposta')
    const containerConsumo = document.getElementById('main-consumo-proposta')

    if(mudarInversor.value === "Híbrido") {

       containerHibrido.classList.remove('hidden')
       containerConsumo.classList.add('hidden')
    }
    else if (mudarInversor.value === "String Ongrid"){

        containerConsumo.classList.remove('hidden')
        containerHibrido.classList.add('hidden')
    }
}

function esconderPlataforma(){

    const logo = document.querySelector('.logo-plataforma')
    const header = document.querySelector('.header-plataforma')
    const nav = document.querySelector('.navegacao-plataforma')
    const user = document.querySelector('.usuario-plataforma')
    const config = document.querySelector('.configuracao-plataforma')
    const main = document.querySelector('.main-plataforma')

    header.classList.add('hidden')
    logo.classList.add('hidden')
    nav.classList.add('hidden')
    user.classList.add('hidden')
    config.classList.add('hidden')

    main.classList.add('mudarGrid')
}
function mostrarPlataforma(){

    const logo = document.querySelector('.logo-plataforma')
    const header = document.querySelector('.header-plataforma')
    const nav = document.querySelector('.navegacao-plataforma')
    const user = document.querySelector('.usuario-plataforma')
    const config = document.querySelector('.configuracao-plataforma')
    const main = document.querySelector('.main-plataforma')

    header.classList.remove('hidden')
    logo.classList.remove('hidden')
    nav.classList.remove('hidden')
    user.classList.remove('hidden')
    config.classList.remove('hidden')

    main.classList.remove('mudarGrid')
}