function attResumoNome(){

    const nomeResumo = document.getElementById('nome-resumo-proposta')

    proposta.nome = nomeFormularioProposta.value
    nomeResumo.textContent = proposta.nome

}
function attResumoTelefone(){

    const telefoneResumo = document.getElementById('telefone-resumo-proposta')

    proposta.telefone = telefoneFormularioProposta.value
    console.log(proposta.nome)
    telefoneResumo.textContent = proposta.telefone

}
function attResumoTeste () {

        const testeResumo = document.getElementById('teste-resumo-proposta')
        const canalResumo = document.getElementById('canal-resumo-proposta')
        const canalContainerProposta = document.getElementById('canal-container-proposta')

        if(testeFormularioProposta.checked) {


            proposta.teste = "Sim"
            testeResumo.textContent = proposta.teste
            proposta.canal = "Teste"
            canalResumo.textContent = proposta.canal
            canalContainerProposta.classList.add('hidden')
        }
        else {

            testeResumo.textContent = "Não"
            canalResumo.textContent = ""
            canalContainerProposta.classList.remove('hidden')
        }
    

}
function attResumoCanal() {

         const canalResumo = document.getElementById('canal-resumo-proposta')

         proposta.canal = canalFormularioProposta.value
         canalResumo.textContent = proposta.canal
}
function attResumoModulo(){

    const moduloResumo = document.getElementById('modulo-resumo-proposta')

    proposta.modulo = moduloFormularioProposta.value
    moduloResumo.textContent = proposta.modulo
}
function attResumoPromocao(){

    const promocaoResumo = document.getElementById('promocao-resumo-proposta')

    proposta.promocao = promocaoFormularioProposta.value
    promocaoResumo.textContent = proposta.promocao
}
function calcularPlacaComEnergia() {

    const quantidadePlaca = document.getElementById('quantidade-placa-proposta');
    const energiaGerada = document.getElementById('modulo-proposta');

        let energia = 0;

        if (energiaGerada.value === '575Wp Tier 1') energia = 575;
        if (energiaGerada.value === '585Wp Tier 1') energia = 585;
        if (energiaGerada.value === '610Wp Tier 1') energia = 610;
        if (energiaGerada.value === '700Wp Tier 1') energia = 700;

        const consumo = document.getElementById('consumo-energia-proposta').value;
        const hsp = Number(document.getElementById('hsp-proposta').textContent);
        const eficiencia = 0.8;

        const geracaoMensal = (hsp * energia * 30 * eficiencia) / 1000;
        const resultado = Math.ceil(consumo / geracaoMensal);

        if (energia === 0) {
        
            return  'Selecione o módulo';
        }

        if (!hsp || hsp <= 0) {
            quantidadePlaca.textContent = 'Selecione o HSP';
            return "Selecione o HSP"
        }

        if (Number.isNaN(resultado)) {
            return "Erro de Cálculo"
        }

        return resultado
        // quantidadePlaca.textContent = resultado;
}
function attResumoQuantidadePlaca() {

    const quantidadePlaca = document.getElementById('quantidade-placa-proposta')
    const quantidadePlacaResumo = document.getElementById('placas-resumo-proposta')
    const campoEnergia = document.getElementById('consumo-energia-proposta')
     const inversorResumo = document.getElementById('inversor-resumo-proposta')
    campoEnergia.value = ""


    quantidadePlaca.textContent = consumoPlacas.value
    proposta.placas = quantidadePlaca.textContent
    quantidadePlacaResumo.textContent = proposta.placas

    calcularArea()
    custoInstalacao()
    custoEquipamento()
    calcularEnergia()
    custoHomologacao()

    attResumoCustoEquipamento()
    attCustoHomologacao()
    attResumoCalcularEnergia()
    attResumoArea()
    attResumoCustoInstalacao()

     inversorResumo.textContent = proposta.inversor
}
function attResumoQuantidadeEnergia() {

    const quantidadePlaca = document.getElementById('quantidade-placa-proposta')
    const quantidadePlacaResumo = document.getElementById('placas-resumo-proposta')
    const campoPlacas = document.getElementById('consumo-placa-proposta')
         const inversorResumo = document.getElementById('inversor-resumo-proposta')

    campoPlacas.value = ""

    quantidadePlaca.textContent = calcularPlacaComEnergia();
    proposta.placas = quantidadePlaca.textContent
    quantidadePlacaResumo.textContent = proposta.placas

    
    calcularArea()
    custoInstalacao()
    custoEquipamento()
    calcularEnergia()
    custoHomologacao()


    attResumoCalcularEnergia()
    attResumoArea()
    attResumoCustoInstalacao()
    attResumoCustoEquipamento()
    attCustoHomologacao()
         inversorResumo.textContent = proposta.inversor


}
function attResumoExpansao(){

    const expansaoResumo = document.getElementById('espansao-resumo-proposta')

    if(expansaoFormularioProposta.checked){

        proposta.expansao = "Sim"
        expansaoResumo.textContent = proposta.expansao
        campoQtdExpansao.classList.remove('hidden')
    }
    else{
            const qtdExpansaoResumo = document.getElementById('qtd-expansao-resumo-proposta')

        proposta.expansao = "Não"
        expansaoResumo.textContent = proposta.expansao
        campoQtdExpansao.classList.add('hidden')

        qtdExpansaoResumo.textContent = "0"
    }
}
function attQtdExpansao(){


    const qtdExpansaoResumo = document.getElementById('qtd-expansao-resumo-proposta')

    proposta.qtdExpansao = qtdExpansaoFormularioProposta.value 
    qtdExpansaoResumo.textContent = proposta.qtdExpansao

}
function attResumoPrecoKwh(){

    const precoKwhResumo = document.getElementById('preco-kwh-resumo-proposta')

    if(precoKwhFormularioProposta.value === ""){

         proposta.precoKwh = 0.95
        contaSemSiltech()
        attResumoContaSemSiltech()
        
    }
    else {
         proposta.precoKwh = precoKwhFormularioProposta.value
        contaSemSiltech()
        attResumoContaSemSiltech()
        economiaAnual()
        attEconomiaAnual ()
    }

     precoKwhResumo.textContent = formatarMoeda(proposta.precoKwh)
     
}
function attResumoInstalacao(){

    const instalacaoResumo = document.getElementById("instalacao-resumo-proposta")

    proposta.instalacao = instalacaoFormularioProposta.value
    instalacaoResumo.textContent = proposta.instalacao

    contaComSiltech()
    
    attResumoContaComSiltech()
}
function attResumoTelhado(){

    const telhadoResumo = document.getElementById("telhado-resumo-proposta")

    proposta.telhado = telhadoFormularioProposta.value
    telhadoResumo.textContent = proposta.telhado
    custoTelhado();
    custoRetorno()
    custoMercadoriaVendida()
    
    attResumoCustoRetorno()
    attResumoCmv()
    attResumoCustoTelhado()

}

//Funções de custo
function attResumoArea(){

     const areaResumoProposta = document.getElementById('area-resumo-proposta')

     areaResumoProposta.textContent = proposta.area + " m²"
 }
 function attResumoCustoTelhado(){

        const custoTelhadoResumo = document.getElementById('custo-telhado-resumo-proposta')

        custoTelhadoResumo.textContent = formatarMoeda(proposta.custoTelhado)

        economiaAnual()
        attEconomiaAnual ()
        economiaEm15Anos()
        attEconomiaEm15Anos()
        valorFinalProposta()
        attValorFinalProposta()
 }
  function attResumoCustoInstalacao(){

        const custoInstalacaoResumo = document.getElementById('custo-instalacao-resumo-proposta')

        custoInstalacaoResumo.textContent = formatarMoeda(proposta.custoInstalacao)
    
 }
 function attResumoCustoEquipamento(){

            const custoEquipamentoResumo = document.getElementById('custo-equipamento-resumo-proposta')

            custoEquipamentoResumo.textContent = formatarMoeda(proposta.custoEquipamento)
 }
 function attResumoContaComSiltech() {

    const contaComSiltechResumo = document.getElementById('conta-com-siltech-resumo-proposta')

    contaComSiltechResumo.textContent = formatarMoeda(proposta.contaComSiltech)
 }
  function attResumoContaSemSiltech() {

    const contaSemSiltechResumo = document.getElementById('conta-sem-siltech-resumo-proposta')

    contaSemSiltechResumo.textContent = formatarMoeda(proposta.contaSemSiltech)
 }
 function  attResumoCalcularEnergia(){

    const calcularEnergiaResumo = document.getElementById('energia-gerada-resumo-proposta')

    calcularEnergiaResumo.textContent = formatarMoeda(proposta.energiaGerada)
 }
 function attCustoHomologacao(){

    const custoHomologacaoResumo = document.getElementById('custo-homologacao-resumo-proposta')

    custoHomologacaoResumo.textContent = formatarMoeda(proposta.custoHomologacao)
 }
 function attResumoCmv(){

    const cmvResumo = document.getElementById('cmv-resumo-proposta')

    cmvResumo.textContent = formatarMoeda(proposta.cmv)
 }
 function attResumoCustoRetorno() {

    const retornoResumo = document.getElementById('retorno-resumo-proposta')

    retornoResumo.textContent = formatarMoeda(proposta.custoRetorno)
 }
 function attEconomiaAnual () {

    const ecomoniaAnualResumo = document.getElementById('economia-anual-resumo-proposta')

    ecomoniaAnualResumo.textContent = formatarMoeda(proposta.economiaAnual)
 }
 function attEconomiaEm15Anos(){

    const economiaEm15AnosResumo = document.getElementById('economia-15-resumo-proposta')

    economiaEm15AnosResumo.textContent = formatarMoeda(proposta.economiaEm15Anos)
 }
 function attValorFinalProposta(){

    const valorFinalPropostaResumo = document.getElementById('valor-final-resumo-proposta')
    valorFinalPropostaResumo.textContent = formatarMoeda(proposta.valorFinalProposta)
 }