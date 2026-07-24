const containerEnviarDados = document.getElementById('container-enviar')

const baixarPdf = document.getElementById('btn-baixar-proposta')

baixarPdf.addEventListener('click', (e)=>{

    e.preventDefault();

    containerEnviarDados.classList.add("hidden")
    esconderPlataforma()
    setTimeout(() => {

        window.print()

        containerEnviarDados.classList.remove("hidden")
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
        }, 100)


    
})