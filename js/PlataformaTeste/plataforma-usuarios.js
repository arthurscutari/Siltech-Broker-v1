


function atualizarColaborador () {

    const usuario = Number(localStorage.getItem("usuarioAtivo"));
    const colaborador = document.getElementById('usuario-plataforma')
    const cargo = document.getElementById('cargo-plataforma')

    if (usuario === 1) {

        colaborador.textContent = "Arthur Alvarez"
        cargo.textContent = "Desenvolvedor"
    }
    else if(usuario === 2){

        colaborador.textContent = "Alex Coelho"
        cargo.textContent = "Diretor Comercial"
    }
    else if(usuario === 3){

        colaborador.textContent = "Pedro Henrique"
        cargo.textContent = "Diretor Comercial"
    }
    else if(usuario === 4){

        colaborador.textContent = "Gabriel Sato"
        cargo.textContent = 'Diretor Administrativo / Financeiro'
    }
    else if(usuario === 5){

        colaborador.textContent = "Gustavo Munhoz"
        cargo.textContent = "Representante de Vendas"
        visualizacoInfoSdr()

    }
    else if(usuario === 6){

        colaborador.textContent = "Pedro Toqueton"
        cargo.textContent = "Representante de Vendas"
        visualizacoInfoSdr()
    }
    else if(usuario === 7){

        colaborador.textContent = "Breno Celino"
        cargo.textContent = "Representante de Vendas"
        visualizacoInfoSdr()
    }
     else if(usuario === 8){

        colaborador.textContent = "Diego Mattos"
        cargo.textContent = "Representante de Vendas"
        visualizacoInfoSdr()
    }
}

atualizarColaborador()

function visualizacoInfoSdr() {

    const dadosResumo = document.querySelectorAll('.validar-sdr');

    dadosResumo.forEach(elemento => {
        elemento.classList.add('hidden');
    });

}
