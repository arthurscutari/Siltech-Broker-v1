

function carregarProspostaNegociacao(){
const clienteNegociacao = document.getElementById('cliente-negociacao-proposta')
const dataNegociacao = document.getElementById('data-negociacao-proposta')
const placasNegociacao = document.getElementById('placas-negociacao-proposta')
const inversorNegociacao = document.getElementById('inversor-negociacao-proposta')
const valorFinalNegociacao = document.getElementById('valor-final-negociacao-proposta')

const resumoIdProposta = document.getElementById('id-resumo-negociacao')
const resumoValorPropostaNegociacao = document.getElementById('valor-final-resumo-negociacao')

resumoIdProposta.textContent = proposta.id
resumoValorPropostaNegociacao.textContent = formatarMoeda(proposta.valorFinalProposta)


clienteNegociacao.textContent = proposta.nome
dataNegociacao.textContent = proposta.data
placasNegociacao.textContent = proposta.placas
inversorNegociacao.textContent = proposta.inversor
valorFinalNegociacao.textContent = formatarMoeda(proposta.valorFinalProposta)



}



    const precoAtualNegociacao = document.getElementById('valor-final-negociacao-proposta')
    const valorNegociado = document.getElementById('valor-negociado-proposta')
    const campoPagamento1 = document.getElementById('valor-pagamento-1')

    const formaPagamento1 = document.getElementById('forma-pagamento-1-negociacao')
    const formaPagamento2 = document.getElementById('forma-pagamento-2-negociacao')

    
    const parcelasPagamento1 = document.getElementById('parcela-pagamento-1-negociacao')
    const parcelasPagamento2 = document.getElementById('parcela-pagamento-2-negociacao')


    campoPagamento1.addEventListener('input', attResumoPagamento)
    valorNegociado.addEventListener('input', attResumoValorNegociado)

    formaPagamento1.addEventListener('change', attResumoFormaPagamento1)
    formaPagamento2.addEventListener('change', attResumoFormaPagamento2)

    parcelasPagamento1.addEventListener('change', attResumoParcelas1)
    parcelasPagamento2.addEventListener('change', attResumoParcelas2)

    function attResumoValorNegociado(){

      const resumoValorNegociado = document.getElementById('valor-negociado-resumo-negociacao')
      const resumoDesconto = document.getElementById('desconto-resumo-negociacao')
      const campoDesconto = document.getElementById('desconto-negociacao-proposta')

      const campoMcs = document.getElementById('mcs-negociacao')
      const resumoMcs = document.getElementById('mcs-resumo-negociacao')

      proposta.valorNegociado = valorNegociado.value
      resumoValorNegociado.textContent = proposta.valorNegociado

      calcularDesconto();
      resumoDesconto.textContent = proposta.desconto
      campoDesconto.textContent = proposta.desconto
      

      proposta.mcs = calcularMcs();
      campoMcs.textContent = proposta.mcs
      resumoMcs.textContent = proposta.mcs

      resultadoMcs()
    }
    function attResumoPagamento(){

      const campoValorNegociado = document.getElementById('valor-negociado-proposta')
      const campoValorPagamento1 = document.getElementById('valor-pagamento-1')
      const campoValorPagamento2 = document.getElementById('valor-pagamento-2')

      const resumoValorPagamento1 =  document.getElementById('valor-1-resumo-negociacao')
      const resumoValorPagamento2 = document.getElementById('valor-2-resumo-negociacao')

      proposta.valorPagamento1 = campoPagamento1.value

       proposta.valorPagamento2 = campoValorNegociado.value - campoValorPagamento1.value
        campoValorPagamento2.value =   proposta.valorPagamento2

         resumoValorPagamento1.textContent = formatarMoeda(proposta.valorPagamento1)
        resumoValorPagamento2.textContent = formatarMoeda(proposta.valorPagamento2)



    }
    function calcularDesconto(){

      const valorAtual = proposta.valorFinalProposta
      const valorNegociado = proposta.valorNegociado
      let resultado = 0

      
      resultado = (((valorAtual - valorNegociado) / valorAtual) * 100)
      proposta.desconto = resultado.toFixed(1) + "%"

      return proposta.desconto

    }
    function attResumoFormaPagamento1(){

      const resumoFormaPagamento1 = document.getElementById('forma-1-pagamento-resumo-negociacao')

      proposta.formaDePagamento1 = formaPagamento1.value
      resumoFormaPagamento1.textContent = proposta.formaDePagamento1

    }
    function attResumoFormaPagamento2(){

        const resumoFormaPagamento2 = document.getElementById('forma-2-pagamento-resumo-negociacao')

      proposta.formaDePagamento2 = formaPagamento2.value
      resumoFormaPagamento2.textContent = proposta.formaDePagamento2
    }
    function attResumoParcelas1(){

      const resumoQtdParcelas1 = document.getElementById('parcelas-1-resumo-negociacao')

      proposta.parcelasPagamento1 = parcelasPagamento1.value
      resumoQtdParcelas1.textContent = proposta.parcelasPagamento1

    }
    function attResumoParcelas2(){

        const resumoQtdParcelas2 = document.getElementById('parcelas-2-resumo-negociacao')

      proposta.parcelasPagamento2 = parcelasPagamento2.value
      resumoQtdParcelas2.textContent = proposta.parcelasPagamento2
    }
    function calcularMcs() {



          const valorOriginal = proposta.valorFinalProposta;
          const margemOriginal = 37;

          const custo = valorOriginal * (1 - margemOriginal / 100);

          const novoValor = proposta.valorNegociado;

          const novaMargem = ((novoValor - custo) / novoValor) * 100;

          if (novaMargem < 0 ){

              return 0
          }
          else {

              return novaMargem.toFixed(1);

          }


    }
    function resultadoMcs(){


        const valorMcs = proposta.mcs;
        const containerAnalise = document.getElementById('container-item-analise')
        const emojiAnalise = document.getElementById('icone-resultado-negociacao')
        const tituloAnalise = document.getElementById('titulo-resultado-negociacao')
        const textoAnalise = document.getElementById('texto-mcs-negociacao')
        const resumoResultadoMcs = document.getElementById('resultdo-resumo-negociacao')


        textoAnalise.classList.remove('verde', 'laranja', 'vermelho');
        tituloAnalise.classList.remove('verde', 'laranja', 'vermelho');
        containerAnalise.classList.remove('fundo-verde','fundo-laranja', 'fundo-vermelho');
        emojiAnalise.removeAttribute('class')
        emojiAnalise.classList.add('bi' ,'bi-emoji-expressionless', 'icone-valor-negociacao')
        resumoResultadoMcs.textContent = "Aguardando análise"
        if (valorMcs >= 30 ){

            textoAnalise.classList.add('verde')
            tituloAnalise.classList.add('verde')
            textoAnalise.textContent = "Aprovado"
            emojiAnalise.removeAttribute('class')
              emojiAnalise.classList.add('bi' ,'bi-emoji-smile', 'icone-valor-negociacao', 'verde')
            containerAnalise.classList.add('fundo-verde')
              resumoResultadoMcs.textContent = "Aprovado"

        }
        else if (valorMcs >= 27 && valorMcs <= 29.99 ) {

            textoAnalise.classList.add('laranja')
            tituloAnalise.classList.add('laranja')
            textoAnalise.textContent = "Autorização"
            emojiAnalise.removeAttribute('class')
              emojiAnalise.classList.add('bi' ,'bi-emoji-surprise', 'icone-valor-negociacao', 'laranja')
            containerAnalise.classList.add('fundo-laranja')
              resumoResultadoMcs.textContent = "Autorização"

        }
        else if  (valorMcs <= 26.99 ){

            textoAnalise.classList.add('vermelho')
            tituloAnalise.classList.add('vermelho')
            textoAnalise.textContent = "Reprovado"
            emojiAnalise.removeAttribute('class')
              emojiAnalise.classList.add('bi' ,'bi-emoji-frown', 'icone-valor-negociacao', 'vermelho')
            containerAnalise.classList.add('fundo-vermelho')
                resumoResultadoMcs.textContent = "Reprovado"

        }
    }
   