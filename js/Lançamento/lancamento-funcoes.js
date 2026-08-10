    const inputCepLancamento = document.getElementById("input-cep-lancamento");
    const inputRuaLancamento = document.getElementById("input-rua-lancamento");
    const inputBairroLancamento = document.getElementById("input-bairro-lancamento");
    const inputCidadeLancamento = document.getElementById("input-cidade-lancamento");
    const inputEstadoLancamento = document.getElementById("input-estado-lancamento");
function carregarDadosLancamento(){

    const resumoQuantidadePlaca = document.getElementById('placas-resumo-lancamento')
    const resumoInversor = document.getElementById('inversor-resumo-lancamento')
    const resumoSistema = document.getElementById('sistema-resumo-lancamento')
    const resumoMcs = document.getElementById('mcs-resumo-lancamento')
    const resumoValorNegociado = document.getElementById('valor-negociado--resumo-lancamento')

    resumoQuantidadePlaca.textContent = proposta.placas
    resumoInversor.textContent = proposta.inversor
    resumoSistema.textContent = proposta.resumoSistema
    resumoMcs.textContent = proposta.mcs
    resumoValorNegociado = proposta.valorNegociado


}
async function buscarCep(cep) {

  
    const campoBairro = document.getElementById('input-bairro-lancamento')
    const campoCidade = document.getElementById('input-cidade-lancamento')
    const campoUf = document.getElementById('input-estado-lancamento')
    const campoRua = document.getElementById('input-rua-lancamento')

    const resumoCep = document.getElementById('endereco-resumo-lancamento')
    const resumoRua = document.getElementById('rua-resumo-lancamento')
        const resumoBairro = document.getElementById('bairro-resumo-lancamento')
            const resumoCidade = document.getElementById('cidade-resumo-lancamento')
                const resumoEstado = document.getElementById('estado-resumo-lancamento')





    cep = cep.replace(/\D/g, "");

    if (cep.length !== 8) return;

    try {

        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json();

        if (dados.erro) {
            alert("CEP não encontrado.");
            return;
        }

        inputRuaLancamento.value = dados.logradouro;
        inputBairroLancamento.value = dados.bairro;
        inputCidadeLancamento.value = dados.localidade;
        inputEstadoLancamento.value = dados.uf;

        proposta.bairro = campoBairro.value
        proposta.rua = campoRua.value
        proposta.cidade = campoCidade.value
        proposta.estado = campoUf.value

        resumoBairro.textContent = proposta.bairro
        resumoCidade.textContent = proposta.cidade
        resumoRua.textContent = proposta.rua
        resumoEstado.textContent = proposta.estado
        

    } catch (erro) {

        console.error("Erro ao consultar o CEP:", erro);

    }

}

function attResumoNomeLancamento () {

    const resumoNomeLancamento = document.getElementById('cliente-resumo-lancamento')

    proposta.cliente = campoNomeLancamento.value
    resumoNomeLancamento.textContent = proposta.cliente
}
function attResumoCpfLancamento () {

    const resumoCpfLancamento = document.getElementById('cpf-resumo-lancamento')

    proposta.cpf = campoCpfLancamento.value
    resumoCpfLancamento.textContent = proposta.cpf
}
function attResumoRgLancamento () {

    const resumoRgLancamento = document.getElementById('rg-resumo-lancamento')

    proposta.rg = campoRgLancamento.value
    resumoRgLancamento.textContent = proposta.rg
}
function attResumoEmailLancamento () {

    const resumoEmailLancamento = document.getElementById('e-mail-resumo-lancamento')

    proposta.email = campoEmailLancamento.value
    resumoEmailLancamento.textContent = proposta.email
}
function attResumoNumeroLancamento(){

    const resumoNumero = document.getElementById('numero-resumo-lancamento')
    proposta.numero = campoNumeroLancamento.value
    resumoNumero.textContent = proposta.numero
    
}
function attResumoNumeroInstalacaoLancamento(){

       const resumoNumeroInstalacaoLancamento = document.getElementById('numero-instalacao-resumo-lancamento')

    proposta.numeroInstalacao = campoNumeroInstalacaoLancamento.value
    resumoNumeroInstalacaoLancamento.textContent = proposta.numeroInstalacao
    
}
function attResumoLocalObraLancamento(){

    const resumoLocal = document.getElementById('local-resumo-lancamento')

    if(swipeLocalLancamento.checked) {


        proposta.localObra = "Sim"
        resumoLocal.textContent = proposta.localObra
    }
   else {

        proposta.localObra = "Não"
        resumoLocal.textContent = proposta.localObra

   }
      
}
function attResumoUnificacaoLancamento(){

    const resumoUnificacao = document.getElementById('unificacao-resumo-lancamento')

    if(swipeUnificacaoLancamento.checked) {


        proposta.unificacao = "Sim"
        resumoUnificacao.textContent = proposta.unificacao
    }
   else {

        proposta.unificacao = "Não"
        resumoUnificacao.textContent = proposta.unificacao

   }
      
}
function attResumoAdequacaoLancamento(){

    const resumoAdequacao = document.getElementById('adequacao-resumo-lancamento')

    if(swipeAdequacaoLancamento.checked) {


        proposta.adequacao = "Sim"
        resumoAdequacao.textContent = proposta.adequacao
    }
   else {

        proposta.adequacao = "Não"
        resumoAdequacao.textContent = proposta.adequacao

   }
      
}
function attResumoReformaLancamento(){

    const resumoReforma = document.getElementById('reforma-resumo-lancamento')

    if(swipeReformaLancamento.checked) {


        proposta.reforma = "Sim"
        resumoReforma.textContent = proposta.reforma
    }
   else {

        proposta.reforma = "Não"
        resumoReforma.textContent = proposta.reforma

   }
      
}
function attResumoEmbutidoLancamento(){

    const resumoEmbutido = document.getElementById('embutido-resumo-lancamento')

    if(swipeEmbutidoLancamento.checked) {


        proposta.embutido = "Sim"
        resumoEmbutido.textContent = proposta.embutido
    }
   else {

        proposta.embutido = "Não"
        resumoEmbutido.textContent = proposta.embutido

   }
      
}
function attResumoSdrLancamento() {

    const resumoSdr = document.getElementById('sdr-resumo-lancamento')

    proposta.sdr = campoSdrLancamento.value
    resumoSdr.textContent = proposta.sdr
}
function attResumoCloserLancamento() {

    const resumoCloser = document.getElementById('closer-resumo-lancamento')

    proposta.closer = campoCloserLancamento.value
    resumoCloser.textContent = proposta.closer
}
function attResumoBuLancamento() {

    const resumoBu = document.getElementById('bu-resumo-lancamento')

    proposta.bu = campoBuLancamento.value
    resumoBu.textContent = proposta.bu
}
function attResumoCanalLancamento() {

    const resumoCanal = document.getElementById('canal-resumo-lancamento')

    proposta.canalLancamento = campoCanalLancamento.value
    resumoCanal.textContent = proposta.canalLancamento
}

function attResumoUnidadeLancamento() {

    const resumoUnidade = document.getElementById('unidade-resumo-lancamento')

    proposta.unidade = campoUnidadeLancamento.value
    resumoUnidade.textContent = proposta.unidade
}
function attResumoObservacaoLancamento() {

    const resumoObservacao = document.getElementById('observacao-resumo-lancamento')

    proposta.observacao = campoObservacaoLancamento.value
    resumoObservacao.textContent = proposta.observacao
}
function attTextareaObra(){

    proposta.obsObra = textareaObra.value
}
function attTextareaUnificacao(){

    proposta.obsUnificacao = textareaUnificacao.value
}
function attTextareaAdequacao(){

    proposta.obsAdequacao = textareaAdequacao.value
}

function attTextareaReforma(){

    proposta.obsReforma = textareaReforma.value
}
function attTextareaEmbutido(){

    proposta.obsEmbutido = textareaEmbutido.value
}