const limparDados = document.getElementById('btn-limpar-plataforma')


limparDados.addEventListener('click', (e) => {

    e.preventDefault();
    localStorage.removeItem('propostaGerada')

})
   
