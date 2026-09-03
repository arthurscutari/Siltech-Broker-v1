/*Variaveis da Section*/

const dashboardSection = document.getElementById('section-dashboard');
const propostaSection = document.getElementById('section-proposta');
const historicoSection = document.getElementById('section-historico');
const negociacaoSection = document.getElementById('section-negociacao');
const lancamentoSection = document.getElementById('section-lancamento');

const dashboardNav = document.getElementById('dashboard-navegacao')
const iconeDashboard = document.getElementById('icone-dashboard')
const textoDashboard = document.getElementById('texto-dashboard')

const propostaNav = document.getElementById('proposta-navegacao')
const iconeProposta = document.getElementById('icone-proposta')
const textoProposta = document.getElementById('texto-proposta')

const historicoNav = document.getElementById('historico-navegacao')
const iconeHistorico = document.getElementById('icone-historico')
const textoHistorico = document.getElementById('texto-historico')

const negociacaoNav = document.getElementById('negociacao-navegacao')
const iconeNegociacao = document.getElementById('icone-negociacao')
const textoNegociacao = document.getElementById('texto-negociacao')

const lancamentoNav = document.getElementById('lancamento-navegacao')
const iconeLancamento = document.getElementById('icone-lancamento')
const textoLancamento = document.getElementById('texto-lancamento')

dashboardNav.addEventListener('click', dashboardSelecionado)
propostaNav.addEventListener('click', propostaSelecionado)
historicoNav.addEventListener('click', historicoSelecionado)



/*Variaveis de Header*/

const tituloHeader = document.getElementById('titulo-header')
const subtituloHeader = document.getElementById('subtitulo-header')
const iconeHeader = document.getElementById('icone-header')



function dashboardSelecionado(){

    const containerPropostaPdf = document.getElementById('section-pdf')

    propostaNav.classList.remove('fundo-selecao')
    iconeProposta.classList.remove('cor-selecao')
    textoProposta.classList.remove('cor-selecao')
    
    dashboardNav.classList.add('fundo-selecao')
    iconeDashboard.classList.add('cor-selecao')
    textoDashboard.classList.add('cor-selecao')

    historicoNav.classList.remove('fundo-selecao')
    iconeHistorico.classList.remove('cor-selecao')
    textoHistorico.classList.remove('cor-selecao')


    tituloHeader.textContent = "Dashboard"
    subtituloHeader.textContent = "Acompanhe os principais indicadores e processos da plataforma."
    iconeHeader.removeAttribute('class')
    iconeHeader.classList.add('bi', 'bi-columns-gap', 'icone-header-plataforma')

    dashboardSection.classList.add('showFlex');
    propostaSection.classList.remove('showGrid');
    historicoSection.classList.remove('showFlex');
    negociacaoSection.classList.remove('showGrid');
    lancamentoSection.classList.remove('showGrid');
    containerPropostaPdf.classList.remove('showFlex')
    limparCamposProposta()
    limparCamposResumo()

}
function propostaSelecionado(){

    const containerPropostaPdf = document.getElementById('section-pdf')

    propostaNav.classList.add('fundo-selecao')
    iconeProposta.classList.add('cor-selecao')
    textoProposta.classList.add('cor-selecao')

    dashboardNav.classList.remove('fundo-selecao')
    iconeDashboard.classList.remove('cor-selecao')
    textoDashboard.classList.remove('cor-selecao')



    historicoNav.classList.remove('fundo-selecao')
    iconeHistorico.classList.remove('cor-selecao')
    textoHistorico.classList.remove('cor-selecao')




    tituloHeader.textContent = "Proposta Comercial"
    subtituloHeader.textContent = "Elabore uma proposta comercial preenchendo as informações abaixo."
    iconeHeader.removeAttribute('class')
    iconeHeader.classList.add('bi' ,'bi-file-earmark-text', 'icone-header-plataforma')

    dashboardSection.classList.remove('showFlex');
    propostaSection.classList.add('showGrid');
    historicoSection.classList.remove('showFlex');
    negociacaoSection.classList.remove('showGrid');
    lancamentoSection.classList.remove('showGrid');
    containerPropostaPdf.classList.remove('showFlex')

   
}
function historicoSelecionado(){

        const containerPropostaPdf = document.getElementById('section-pdf')

      propostaNav.classList.remove('fundo-selecao')
    iconeProposta.classList.remove('cor-selecao')
    textoProposta.classList.remove('cor-selecao')

   dashboardNav.classList.remove('fundo-selecao')
    iconeDashboard.classList.remove('cor-selecao')
    textoDashboard.classList.remove('cor-selecao')

    historicoNav.classList.add('fundo-selecao')
    iconeHistorico.classList.add('cor-selecao')
    textoHistorico.classList.add('cor-selecao')

    tituloHeader.textContent = "Histórico"
    subtituloHeader.textContent = "Consulte propostas, negociações e lançamentos realizados anteriormente."
    iconeHeader.removeAttribute('class')
    iconeHeader.classList.add('bi' ,'bi-clock-history', 'icone-header-plataforma')

    dashboardSection.classList.remove('showFlex');
    propostaSection.classList.remove('showGrid');
    historicoSection.classList.add('showFlex');
    negociacaoSection.classList.remove('showGrid');
     lancamentoSection.classList.remove('showGrid');
    containerPropostaPdf.classList.remove('showFlex')
    limparCamposProposta()
    limparCamposResumo()
}
function negociacaoSelecionado(){

        const containerPropostaPdf = document.getElementById('section-pdf')

    propostaNav.classList.add('fundo-selecao')
    iconeProposta.classList.add('cor-selecao')
    textoProposta.classList.add('cor-selecao')

     dashboardNav.classList.remove('fundo-selecao')
    iconeDashboard.classList.remove('cor-selecao')
    textoDashboard.classList.remove('cor-selecao')

    historicoNav.classList.remove('fundo-selecao')
    iconeHistorico.classList.remove('cor-selecao')
    textoHistorico.classList.remove('cor-selecao')

    tituloHeader.textContent = "Negociação"
    subtituloHeader.textContent = "Gerencie negociações, ajuste condições comerciais e acompanhe as tratativas com o cliente."
    iconeHeader.removeAttribute('class')
    iconeHeader.classList.add('bi' ,'bi-briefcase', 'icone-header-plataforma')

    dashboardSection.classList.remove('showFlex');
    propostaSection.classList.remove('showGrid');
    historicoSection.classList.remove('showFlex');
    negociacaoSection.classList.add('showGrid');
    lancamentoSection.classList.remove('showGrid');
    containerPropostaPdf.classList.remove('showFlex')

}
function lancamentoSelecionado(){

        const containerPropostaPdf = document.getElementById('section-pdf')


    dashboardNav.classList.remove('fundo-selecao')
    iconeDashboard.classList.remove('cor-selecao')
    textoDashboard.classList.remove('cor-selecao')

    propostaNav.classList.add('fundo-selecao')
    iconeProposta.classList.add('cor-selecao')
    textoProposta.classList.add('cor-selecao')

     historicoNav.classList.remove('fundo-selecao')
    iconeHistorico.classList.remove('cor-selecao')
    textoHistorico.classList.remove('cor-selecao')

    tituloHeader.textContent = "Lançamento da proposta"
    subtituloHeader.textContent = "Realize o cadastro final do cliente e conclua o processo de contratação."
    iconeHeader.removeAttribute('class')
    iconeHeader.classList.add('bi' ,'bi-person-up', 'icone-header-plataforma')

    dashboardSection.classList.remove('showFlex');
    propostaSection.classList.remove('showGrid');
    historicoSection.classList.remove('showFlex');
    negociacaoSection.classList.remove('showGrid');
    lancamentoSection.classList.add('showGrid');
    containerPropostaPdf.classList.remove('showFlex')
}
function propostaPdfSelecionado(){

    const containerPropostaPdf = document.getElementById('section-pdf')

    containerPropostaPdf.classList.add('showFlex')
    propostaSection.classList.remove('showGrid')

    tituloHeader.textContent = "Proposta em PDF"
    subtituloHeader.textContent = "Proposta gerada em PDF, faço o download ou imprima a proposta"
    iconeHeader.removeAttribute('class')
    iconeHeader.classList.add('bi' ,'bi-filetype-pdf', 'icone-header-plataforma')

}

const btnSair = document.getElementById('botao-sair-plataforma')

btnSair.addEventListener('click',(e) => {

    e.preventDefault()
    window.location.href = "index.html"
})