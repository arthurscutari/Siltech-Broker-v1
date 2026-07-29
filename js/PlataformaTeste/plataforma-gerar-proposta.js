

let proposta = {

    //Valor da solicitação Appscript
    tipo:"registrarProposta",
    id:0,
    data:0,
    colaborador:"",
    //propriedades do formulario
    nome:"",
    telefone:0,
    teste:"Não",
    canal:"",
    local:"",
    modulo:"",
    inversor:"",
    hsp:0,
    promocao:"",
    placas:0,
    expansao:"",
    qtdExpansao:0,
    precoKwh:0,
    instalacao:"",
    telhado:"",
    //Calculos solicitados
    kitPlaca:0,
    area:0,
    cmv:0,
    energiaGerada:0,
    custoTelhado:0,
    custoHomologacao:0,
    custoRetorno:0,
    custoEquipamento:0,
    contaSemSiltech:0,
    contaComSiltech:0,
    economiaAnual:0,
    economiaEm15Anos:0,
    valorFinalProposta:0,
    //Calculos de Negociação
    desconto:0,
    formaDePagamento1:"",
    valorPagamento1:0,
    parcelasPagamento1:0,
    formaDePagamento2:"",
    valorPagamento2:0,
    parcelasPagamento2:0,
    mcs:0,
    resultado:"",
    valorNegociado:0,
    //Variaveis de lancamento
    cliente:"",
    cpf:0,
    rg:0,
    email:"",
    cep:0,
    rua:"",
    bairro:"",
    numero:0,
    cidade:"",
    estado:"",
    numeroInstalacao:0,
    obra:"Não",
    obsObra:"Não",
    unificacao:"Não",
     obsUnificacao:"Não",
    adequacao:"Não",
     obsAdequacao:"Não",
    reforma:"Não",
     obsReforma:"Não",
    embutido:"Não",
     obsEmbutido:"Não",
    sdr:"",
    closer:"",
    bu:"",
    canalLancamento:"",
    unidade:"",
    observacao:""

}
//Código nome proposta
const nomeFormularioProposta = document.getElementById('nome-proposta')
nomeFormularioProposta.addEventListener('input', attResumoNome)

//Código telefone proposta
const telefoneFormularioProposta = document.getElementById('telefone-proposta')
telefoneFormularioProposta.addEventListener('input',attResumoTelefone)

//Código para teste de proposta
const testeFormularioProposta = document.querySelector('.teste-proposta')

testeFormularioProposta.addEventListener('change', attResumoTeste)

//Código para canal de vendas
const canalFormularioProposta = document.getElementById('canal-proposta')

canalFormularioProposta.addEventListener('change',attResumoCanal)
//Código para modulo
const moduloFormularioProposta = document.getElementById('modulo-proposta')

moduloFormularioProposta.addEventListener('change', attResumoModulo)

//Código para promoção

const promocaoFormularioProposta = document.getElementById('promocao-proposta')

promocaoFormularioProposta.addEventListener('input',attResumoPromocao)

//Código gerar quantidade de placas

const consumoPlacas = document.getElementById('consumo-placa-proposta')

consumoPlacas.addEventListener('input', attResumoQuantidadePlaca)


const consumoEnergia = document.getElementById('consumo-energia-proposta')

consumoEnergia.addEventListener('input', attResumoQuantidadeEnergia)

//Código para gerar expansão

const expansaoFormularioProposta = document.querySelector('.expansao-proposta')
const campoQtdExpansao = document.getElementById('container-qtd-expansao-proposta')

expansaoFormularioProposta.addEventListener('change',attResumoExpansao)


//Código cquantidade de placas expansivas.

const qtdExpansaoFormularioProposta = document.getElementById('qtd-expansao-proposta')

qtdExpansaoFormularioProposta.addEventListener('input', attQtdExpansao)

//Código para preco do kWh

const precoKwhFormularioProposta = document.getElementById('preco-kwh-proposta')

precoKwhFormularioProposta.addEventListener('input', attResumoPrecoKwh)


//Código para instalacao

const instalacaoFormularioProposta = document.getElementById('instalacao-proposta')

instalacaoFormularioProposta.addEventListener('change', attResumoInstalacao)

//Código para telhado

const telhadoFormularioProposta = document.getElementById('telhado-proposta')

telhadoFormularioProposta.addEventListener('change', attResumoTelhado)


///////////////////////////////////////////////////////////////////

const gerarPdf = document.getElementById('botao-gerar-pdf-proposta')

gerarPdf.addEventListener('click', ()=>{

    const usuarioAtivo = document.getElementById('usuario-plataforma')
    const dataResumo = document.getElementById('data-resumo-proposta')
    const idResumo = document.getElementById('id-resumo-proposta')
    const colaboradorResumo = document.getElementById('colaborador-resumo-proposta')

    

    proposta.data = gerarDataProposta()
    proposta.colaborador = usuarioAtivo.textContent
    proposta.id = gerarIdProposta()
    proposta.kitPlaca = proposta.placas * calcularPotencia() / 1000


    dataResumo.textContent = proposta.data
    idResumo.textContent = proposta.id
    colaboradorResumo.textContent = proposta.colaborador

    localStorage.setItem('propostaGerada', JSON.stringify(proposta));

    const url = "https://script.google.com/macros/s/AKfycbyXRfH1QwCzoPUaS3jFkDUBP42nreLTUoizqjFUxsPxwTRFycQ8bF6rzRbbNucih6GV/exec";

        fetch(url, {
            method: "POST",
            body: JSON.stringify(proposta)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });


       carregarDadosProposta()
       propostaPdfSelecionado()
       carregarProspostaNegociacao()
       carregarDadosLancamento()
})