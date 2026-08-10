const botaoAddPagamento = document.getElementById('botao-add-pagamento-negociacao')

botaoAddPagamento.addEventListener('click', esconderPagamento2)


function esconderPagamento2() {

   const containerAddPagamento = document.getElementById('container-campo-add')
   const containerPagamento2 = document.getElementById('container-pagamento-2')

   containerAddPagamento.classList.add('hidden')
   containerPagamento2.classList.remove('hidden')
    


}

const campoQuantidadeParcela1 = document.getElementById('campoQtdParcelas1')
const selectPagamento1 = document.getElementById('forma-pagamento-1-negociacao')

selectPagamento1.addEventListener('change', mostrarParcela1)

function mostrarParcela1(){


   if (selectPagamento1.value === "Á vista"){

      campoQuantidadeParcela1.classList.add('hidden')
   }
   else {

      campoQuantidadeParcela1.classList.remove('hidden')
   }
}
const campoQuantidadeParcela2 = document.getElementById('campoQtdParcelas2')
const selectPagamento2 = document.getElementById('forma-pagamento-2-negociacao')

selectPagamento2.addEventListener('change', mostrarParcela2)

function mostrarParcela2(){


   if (selectPagamento2.value === "Á vista"){

      campoQuantidadeParcela2.classList.add('hidden')
   }
   else {

      campoQuantidadeParcela2.classList.remove('hidden')
   }
}

const btnAbrirModal = document.getElementById('btn-pdf-negociacao')
const btnXmodal =  document.getElementById('btn-x-modal-negociacao')
const btnFecharModal = document.getElementById('btn-fechar-modal-negociacao')

btnAbrirModal.addEventListener('click', abrirModalNegociacao)
btnXmodal.addEventListener('click', fecharModalNegociacao)
btnFecharModal.addEventListener('click', fecharModalNegociacao)

function abrirModalNegociacao() {

    const fundoModal = document.getElementById('fundo-modal-negociacao')
   const modalNegociacao = document.getElementById('modal-negociacao')

   fundoModal.classList.remove('hidden')
      modalNegociacao.classList.remove('hidden')
}

function fecharModalNegociacao(){

   const fundoModal = document.getElementById('fundo-modal-negociacao')
   const modalNegociacao = document.getElementById('modal-negociacao')

   fundoModal.classList.add('hidden')
      modalNegociacao.classList.add('hidden')

}