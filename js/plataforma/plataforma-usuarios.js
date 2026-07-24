
const usuarios = {
    1: {
        nome: 'Arthur Alvarez',
        cargo: 'Desenvolvedor'
    },
    2: {
        nome: 'Alex Coelho',
        cargo: 'Diretor Comercial'
    },
    3: {
        nome: 'Pedro Henrique',
        cargo: 'Diretor Operacional'
    },
    4: {
        nome: 'Gabriel Sato',
        cargo: 'Diretor Administrativo / Financeiro'
    },
    5: {
        nome: 'Alef Ferreira',
        cargo: 'SDR'
    },
    6: {
        nome: 'Pedro Brito',
        cargo: 'SDR'
    }
}

const usuarioAtivo = localStorage.getItem('usuarioAtivo')
const usuario = usuarios[usuarioAtivo]

if (usuario) {

    document.querySelectorAll('.usuario-ativo')
        .forEach(el => el.textContent = usuario.nome)

    document.querySelectorAll('.colaborador-ativo')
        .forEach(el => el.textContent = usuario.cargo)

}
