const novaProposta = document.getElementById('btn-nova-proposta');
const moverNegociar = document.getElementById('btn-negociar-proposta')
const alterarProposta = document.getElementById('btn-alterar-proposta')

novaProposta.addEventListener('click', ()=> {

    propostaSelecionado()
    localStorage.removeItem('propostaGerada')
    limparCamposProposta()
    limparCamposResumo() 
})

moverNegociar.addEventListener('click', ()=> {

    negociacaoSelecionado()

})

alterarProposta.addEventListener('click', ()=> {

    propostaSelecionado()


})


