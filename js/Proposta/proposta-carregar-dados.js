function carregarDadosProposta(){

const propostaGerada = JSON.parse(localStorage.getItem('propostaGerada'));

console.log(propostaGerada.nome)

console.log(propostaGerada)

const nomeProposta = document.getElementById('nome-proposta-pdf')
const localProposta = document.getElementById('local-proposta-pdf')
const qtdPlacaProposta = document.getElementById('qtd-placa-proposta-pdf')
const areaProposta = document.getElementById('area-proposta-pdf')
const problemaProposta = document.getElementById('problema-proposta-pdf')
const solucaoProposta = document.getElementById('solucao-proposta-pdf')
const precoFinalProposta = document.getElementById('valor-final-proposta-pdf')
const inversorProposta = document.getElementById('inversor-proposta-pdf')
const telhadoProposta = document.getElementById('telhado-proposta-pdf')
const contaSemProposta = document.getElementById('conta-sem-proposta-pdf')
const contaComProposta = document.getElementById('conta-com-proposta-pdf')
const invenstimentoTabela = document.getElementById('valor-total-proposta-pdf')
const moduloProposta = document.getElementById('modulo-proposta-pdf')
const energiaGeradaProposta = document.getElementById('energia-proposta-pdf')
const valorReducao = document.getElementById('valor-reducao-proposta-pdf')
const valorEconomiaProposta = document.getElementById('valor-economia-proposta-pdf')
const retornoInvestimentoProposta = document.getElementById('retorno-investimeto-proposta-pdf')
const nomeAssinaturaProposta = document.getElementById('nome-assinatura-proposta-pdf')
const qtdPlacasModuloProposta = document.getElementById('placas-modulo-proposta-pdf');
const dataProposta = document.getElementById('data-proposta-pdf');
const kitProposta = document.getElementById('kit-proposta-pdf');


nomeAssinaturaProposta.textContent = propostaGerada.nome
nomeProposta.textContent = propostaGerada.nome + ","
localProposta.textContent = propostaGerada.local + " - SP"
qtdPlacaProposta.textContent = propostaGerada.placas
areaProposta.textContent = propostaGerada.area 
moduloProposta.textContent = propostaGerada.modulo
problemaProposta.textContent = propostaGerada.contaSemSiltech.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
solucaoProposta.textContent = propostaGerada.contaComSiltech.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
precoFinalProposta.textContent = propostaGerada.valorFinalProposta.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
inversorProposta.textContent = mostrarInversor()
telhadoProposta.textContent = propostaGerada.telhado
contaSemProposta.textContent = propostaGerada.contaSemSiltech.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
contaComProposta.textContent = propostaGerada.contaComSiltech.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

invenstimentoTabela.textContent = propostaGerada.valorFinalProposta.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
energiaGeradaProposta.textContent = propostaGerada.energiaGerada.toFixed(0) + " kWh"
valorReducao.textContent =  (propostaGerada.contaSemSiltech - propostaGerada.contaComSiltech ).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
valorEconomiaProposta.textContent = "LUCRO DE  " + propostaGerada.economiaEm15Anos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'
})+ " EM 15 ANOS" ;
retornoInvestimentoProposta.textContent = propostaGerada.economiaAnual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'
})
qtdPlacasModuloProposta.textContent = propostaGerada.placas
kitProposta.textContent = propostaGerada.energiaGerada / 1000 + "kWp";
dataProposta.textContent = dataPorExtenso();
function mostrarInversor() 
{

    if (propostaGerada.inversor === "1x 3kw") {

        return "01 inversor Huawei - 3kW"
    }
     if (propostaGerada.inversor === "1x 6kw") {

        return "01 inversor Huawei - 6kW"
    }
     if (propostaGerada.inversor === "1x 6kw + 1x 3kw") {

        return "02 Inversores Huawei - 3kW + 6kW"
    }
     if (propostaGerada.inversor === "2x 6kw") {

        return "02 inversores Huawei - 6kW"
     }
     if (propostaGerada.inversor === "3x 6kw") {

        return "03 inversores Huawei - 6kW"
    }
    if (propostaGerada.inversor === "4x 6kw") {

        return "014 inversores Huawei - 6kW"
    }
    

    
}
function dataPorExtenso(data = new Date()) {
    return data.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}
}