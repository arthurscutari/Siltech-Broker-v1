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

