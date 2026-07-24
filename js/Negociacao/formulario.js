const botaoAddPagamento = document.getElementById('botao-add-pagamento-negociacao')

botaoAddPagamento.addEventListener('click', esconderPagamento2)


function esconderPagamento2() {

   const containerAddPagamento = document.getElementById('container-campo-add')
   const containerPagamento2 = document.getElementById('container-pagamento-2')

   containerAddPagamento.classList.add('hidden')
   containerPagamento2.classList.remove('hidden')
    


}