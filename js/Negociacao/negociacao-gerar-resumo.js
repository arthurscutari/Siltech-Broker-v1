

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


    campoPagamento1.addEventListener('input', atualizarDadosNavegacao)
    valorNegociado.addEventListener('input', atualizarDadosNavegacao)

    formaPagamento1.addEventListener('change', atualizarDadosNavegacao)
    formaPagamento2.addEventListener('change', atualizarDadosNavegacao)

    parcelasPagamento1.addEventListener('change', atualizarDadosNavegacao)
    parcelasPagamento2.addEventListener('change', atualizarDadosNavegacao)

    function inserirValorNegociado(){

      proposta.valorNegociado = valorNegociado.value

    }
    function inserirPagamento1(){

      proposta.valorPagamento1 = campoPagamento1.value

    }
    function inserirPagamento2(){

      proposta.valorPagamento2 =
    Number(proposta.valorNegociado) -
    Number(campoPagamento1.value);

    }
    function inserirFormaPagamento1(){


      proposta.formaDePagamento1 = formaPagamento1.value


    }
    function inserirFormaPagamento2(){
      proposta.formaDePagamento2 = formaPagamento2.value
    }
    function inserirParcelas1(){


      proposta.parcelasPagamento1 = parcelasPagamento1.value

    }
    function inserirParcelas2(){


      proposta.parcelasPagamento2 = parcelasPagamento2.value
    }
   function inserirValorMcs() {

    const valorOriginal = Number(proposta.valorFinalProposta);
    const margemOriginal = 42;
    const custo = valorOriginal * (1 - margemOriginal / 100);

    const novoValor = Number(proposta.valorNegociado);

    let novaMargem = ((novoValor - custo) / novoValor) * 100;

    
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "1") {
        novaMargem -= 3.14;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "2") {
        novaMargem -= 4.41;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "3") {
        novaMargem -= 5.2;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "4") {
        novaMargem -= 6;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "5") {
        novaMargem -= 6.79;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "6") {
        novaMargem -= 7.58;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "7") {
        novaMargem -= 8.52;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "8") {
        novaMargem -= 9.31;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "9") {
        novaMargem -= 10.1;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "10") {
        novaMargem -= 10.9;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "11") {
        novaMargem -= 11.69;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "12") {
        novaMargem -= 12.48;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "13") {
        novaMargem -= 13.27;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "14") {
        novaMargem -= 14.07;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "15") {
        novaMargem -= 14.86;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "16") {
        novaMargem -= 15.65;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "17") {
        novaMargem -= 16.44;
    }
    if (formaPagamento1.value === "Cartão de Crédito" && parcelasPagamento1.value === "18") {
        novaMargem -= 17.23;
    }

    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "1") {
        novaMargem -= 3.14;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "2") {
        novaMargem -= 4.41;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "3") {
        novaMargem -= 5.2;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "4") {
        novaMargem -= 6;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "5") {
        novaMargem -= 6.79;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "6") {
        novaMargem -= 7.58;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "7") {
        novaMargem -= 8.52;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "8") {
        novaMargem -= 9.31;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "9") {
        novaMargem -= 10.1;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "10") {
        novaMargem -= 10.9;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "11") {
        novaMargem -= 11.69;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "12") {
        novaMargem -= 12.48;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "13") {
        novaMargem -= 13.27;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "14") {
        novaMargem -= 14.07;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "15") {
        novaMargem -= 14.86;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "16") {
        novaMargem -= 15.65;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "17") {
        novaMargem -= 16.44;
    }
    if (formaPagamento2.value === "Cartão de Crédito" && parcelasPagamento2.value === "18") {
        novaMargem -= 17.23;
    }
    if (novaMargem < 0) {
        novaMargem = 0;
    }

    proposta.mcs = Number(novaMargem.toFixed(1));
}
function inserirDesconto(){

    const valorAtual = Number(proposta.valorFinalProposta);
    const valorNegociado = Number(proposta.valorNegociado);

    proposta.desconto = ((valorAtual - valorNegociado) / valorAtual) * 100;
}
   //Calcular dados da variavel Proposta
function inserirParcela () {

  const formaPagamento = document.getElementById('forma-pagamento-1-negociacao')
  const parcelaPagamento = document.getElementById('parcela-pagamento-1-negociacao')

  if ( formaPagamento.value === "Cartão de Crédito" && parcelaPagamento.value === 1){

    console.log('Mudou')
  }

}
   
     function atualizarDadosNavegacao(){
      inserirValorNegociado()
      inserirPagamento1()
      inserirPagamento2()
      inserirFormaPagamento1()
      inserirFormaPagamento2()
      inserirParcelas1()
      inserirParcelas2()
      inserirParcela ()
      inserirValorMcs() 
      inserirDesconto()
      
      atualizarResumoNegociacao()
    }
    //Funções de atualização de resumo

    function atualizarResumoNegociacao(){

      attResumoDesconto()
      attResumoValorPagamento1()
      attResumoValorPagamento2()
      attResumoTipoPagamento1()
      attResumoTipoPagamento2()
      attQtdParcelas1()
      attQtdParcelas2()
      attMcs()
      attResultadoMcs()
      attValorNegociado()
      attResultadoMcs()
      attResumoMcs()
    }
    function attResumoDesconto(){

      const campoDescontoNegociacao = document.getElementById('desconto-negociacao-proposta')
      const resumoDescontoNegociacao = document.getElementById('desconto-resumo-negociacao')
      campoDescontoNegociacao.textContent = proposta.desconto.toFixed(1) + "%"
      resumoDescontoNegociacao.textContent = proposta.desconto.toFixed(1) + "%"

    }
    function attResumoValorPagamento1(){

      const resumoValorPagamento1 = document.getElementById('valor-1-resumo-negociacao')

      resumoValorPagamento1.textContent = formatarMoeda(proposta.valorPagamento1)
    }
    function attResumoValorPagamento2(){

      const resumoValorPagamento2 = document.getElementById('valor-2-resumo-negociacao')
      const campoPagamento2 = document.getElementById('valor-pagamento-2')

      campoPagamento2.value = proposta.valorPagamento2
      resumoValorPagamento2.textContent = formatarMoeda(proposta.valorPagamento2)

    }
    function attResumoTipoPagamento1(){
      const resumoFormaPagamento1 = document.getElementById('forma-1-pagamento-resumo-negociacao')
      
      if(proposta.formaDePagamento1 === 'Á vista'){

        proposta.parcelasPagamento1 = "Á vista"
      }
      resumoFormaPagamento1.textContent = proposta.formaDePagamento1
    }
    function attResumoTipoPagamento2(){
      const resumoFormaPagamento2 = document.getElementById('forma-2-pagamento-resumo-negociacao')

      if(proposta.formaDePagamento2 === 'Á vista'){

        proposta.parcelasPagamento2 = "Á vista"
      }
      resumoFormaPagamento2.textContent = proposta.formaDePagamento2
    }
    function attQtdParcelas1(){
      const resumoQtdParcelas1 = document.getElementById('parcelas-1-resumo-negociacao')

      resumoQtdParcelas1.textContent = proposta.parcelasPagamento1
    }
     function attQtdParcelas2(){
      const resumoQtdParcelas2 = document.getElementById('parcelas-2-resumo-negociacao')

      resumoQtdParcelas2.textContent = proposta.parcelasPagamento2
    }
    function attMcs(){
      const campoMcs = document.getElementById('mcs-negociacao')

      campoMcs.textContent = proposta.mcs
    }
    function attResumoMcs(){
    const resumoMcsNegociacao = document.getElementById('mcs-resumo-negociacao')
      resumoMcsNegociacao.textContent = proposta.mcs

    }
    function attValorNegociado(){

      const resumoValorNegociadoNegociacao = document.getElementById('valor-negociado-resumo-negociacao')

      resumoValorNegociadoNegociacao.textContent = formatarMoeda(proposta.valorNegociado)
    }
     function attResultadoMcs(){


        const valorMcs = proposta.mcs;
        const containerAnalise = document.getElementById('container-item-analise')
        const emojiAnalise = document.getElementById('icone-resultado-negociacao')
        const tituloAnalise = document.getElementById('titulo-resultado-negociacao')
        const textoAnalise = document.getElementById('texto-mcs-negociacao')
        const resumoResultadoMcs = document.getElementById('resultado-mcs-resumo-negociacao')


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