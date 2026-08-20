const campoNomeLancamento = document.getElementById('input-cliente-lancamento')

campoNomeLancamento.addEventListener('input', attResumoNomeLancamento)

const campoCpfLancamento = document.getElementById('input-cpf-lancamento')

campoCpfLancamento.addEventListener('input', attResumoCpfLancamento)

const campoRgLancamento = document.getElementById('input-rg-lancamento')

campoRgLancamento.addEventListener('input', attResumoRgLancamento)

const campoEmailLancamento = document.getElementById('input-e-mail-lancamento')

campoEmailLancamento.addEventListener('input', attResumoEmailLancamento)

const campoCepLancamento = document.getElementById('input-cep-lancamento')

campoCepLancamento.addEventListener("input", () => {

    const cep = inputCepLancamento.value.replace(/\D/g, "");
    const resumoCepLancamento = document.getElementById('cep-resumo-lancamento')
  proposta.cep = campoCepLancamento.value
    resumoCepLancamento.textContent = proposta.cep


    if (cep.length === 8) {
        buscarCep(cep);
        

    }

});
 const campoNumeroLancamento = document.getElementById('input-numero-lancamento')

 campoNumeroLancamento.addEventListener('input', attResumoNumeroLancamento)

 const campoNumeroInstalacaoLancamento = document.getElementById('input-numero-instalacao-lancamento')

 campoNumeroInstalacaoLancamento.addEventListener('input', attResumoNumeroInstalacaoLancamento)

 //Selects
const swipeLocalLancamento = document.querySelector('.swipeLocal')

 swipeLocalLancamento.addEventListener('change', attResumoLocalObraLancamento )

 const swipeUnificacaoLancamento = document.querySelector('.swipeUnificacao')

 swipeUnificacaoLancamento.addEventListener('change', attResumoUnificacaoLancamento )

  const swipeAdequacaoLancamento = document.querySelector('.swipeAdequacao')

 swipeAdequacaoLancamento.addEventListener('change', attResumoAdequacaoLancamento )

   const swipeReformaLancamento = document.querySelector('.swipeReforma')

 swipeReformaLancamento.addEventListener('change', attResumoReformaLancamento )

   const swipeEmbutidoLancamento = document.querySelector('.swipeEmbutido')

 swipeEmbutidoLancamento.addEventListener('change', attResumoEmbutidoLancamento )

 const campoSdrLancamento = document.getElementById('input-sdr-lancamento')

 campoSdrLancamento.addEventListener('change', attResumoSdrLancamento)

 const campoCloserLancamento = document.getElementById('input-closer-lancamento')

 campoCloserLancamento.addEventListener('change', attResumoCloserLancamento)

  const campoBuLancamento = document.getElementById('input-bu-lancamento')

 campoBuLancamento.addEventListener('change', attResumoBuLancamento)

 
  const campoCanalLancamento = document.getElementById('input-canal-lancamento')

 campoCanalLancamento.addEventListener('change', attResumoCanalLancamento)

  const campoConcessionariaLancamento = document.getElementById('input-concessionaria-lancamento')

 campoConcessionariaLancamento.addEventListener('change', attResumoConcessionariaLancamento)

   const campoUnidadeLancamento = document.getElementById('input-unidade-lancamento')

 campoUnidadeLancamento.addEventListener('change', attResumoUnidadeLancamento)

    const campoObservacaoLancamento = document.getElementById('textarea-observacao')

 campoObservacaoLancamento.addEventListener('input', attResumoObservacaoLancamento)

 //Textarea

 const textareaObra = document.getElementById('textarea-local')

 textareaObra.addEventListener('input', attTextareaObra)

 const textareaUnificacao = document.getElementById('textarea-unificacao')

 textareaUnificacao.addEventListener('input', attTextareaUnificacao)

 
 const textareaAdequacao = document.getElementById('textarea-adequacao')

 textareaAdequacao.addEventListener('input', attTextareaAdequacao)

 
 const textareaReforma = document.getElementById('textarea-reforma')

 textareaReforma.addEventListener('input', attTextareaReforma)

  const textareaEmbutido = document.getElementById('textarea-embutido')

 textareaEmbutido.addEventListener('input', attTextareaEmbutido)