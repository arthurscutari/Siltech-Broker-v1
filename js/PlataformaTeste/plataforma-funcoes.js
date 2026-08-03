const contribuicao = 0.37
const comissao = 0.05
const impostos = 0.06
const retorno = 550
const inflacao = 0.01

function calcularDados(){

  //Inserindo dados na variável Proposta, para calcular posteriormente
  inserirNome()
  inserirTelefone()
  inserirTeste()
  inserirCanal()
  inserirModulo()
  inserirPromocao()
  inserirQuantidade()
  inserirExpansao()
  inserirQtdExpansao()
  inserirPrecoKwh()
  inserirInstalacao()
  inserirTelhado()

//Calculando dados a partir das variaveis preenchidas na Proposta

  gerarIdProposta() 
  gerarDataProposta()
  calcularArea()
  calcularPotencia() 
  custoEquipamento() 
  custoTelhado() 
  custoHomologacao() 
  custoInstalacao() 
  calcularEnergia() 
  contaComSiltech() 
  contaSemSiltech() 
  custoMercadoriaVendida() 
  valorFinalProposta() 
  custoExpansao() 
  economiaEm15Anos() 
  economiaAnual() 
  custoRetorno()

  atualizarResumo()

  console.log(proposta)
}
function inserirNome(){

    const nomeResumo = document.getElementById('nome-resumo-proposta')
    proposta.nome = nomeFormularioProposta.value
}
function inserirTelefone(){

    const telefoneResumo = document.getElementById('telefone-resumo-proposta')

    proposta.telefone = telefoneFormularioProposta.value
    telefoneResumo.textContent = proposta.telefone

}
function inserirTeste () { 
    
        const canalContainerProposta = document.getElementById('canal-container-proposta')

        if(testeFormularioProposta.checked) {


            proposta.teste = "Sim"
            canalContainerProposta.classList.add('hidden')
        }
        else {
            proposta.teste = "Não"
            canalContainerProposta.classList.remove('hidden')
 
        }
    

}
function inserirCanal() {

        if(proposta.teste === "Sim"){
           proposta.canal = 'Teste'
        }
        else {
             proposta.canal = canalFormularioProposta.value
        }
}
function inserirModulo(){

    proposta.modulo = moduloFormularioProposta.value
}
function inserirPromocao(){

    proposta.promocao = promocaoFormularioProposta.value
}
function calcularPlacaComEnergia() {

    const energiaGerada = document.getElementById("modulo-proposta");

    let energia = 0;

    if (energiaGerada.value === "575Wp Tier 1") energia = 575;
    if (energiaGerada.value === "585Wp Tier 1") energia = 585;
    if (energiaGerada.value === "610Wp Tier 1") energia = 610;
    if (energiaGerada.value === "700Wp Tier 1") energia = 700;

    const consumo = Number(document.getElementById("consumo-energia-proposta").value);
    const hsp = Number(proposta.hsp);

    if (energia === 0) {
      return "Aguardando Módulo"
    }
    if (!hsp) {
    return "Aguardando Hsp"
    }
    if (!consumo) {
      
      return "Aguardando Consumo"
    }
    const geracaoMensal = (hsp * energia * 30 * 0.8) / 1000;

    return Math.ceil(consumo / geracaoMensal);

}
function inserirQuantidade() {

    const consumoEnergia = document.getElementById("consumo-energia-proposta");
    const consumoPlacas = document.getElementById("consumo-placa-proposta");

    if (consumoEnergia.value.trim() !== "") {

        inserirQuantidadeEnergia();

    } else if (consumoPlacas.value.trim() !== "") {

        inserirQuantidadePlaca();

    } else {

        proposta.placas = 0;

    }

}
function inserirQuantidadePlaca() {

    
    const campoEnergia = document.getElementById('consumo-placa-proposta')

  
    proposta.placas = consumoPlacas.value
}
function inserirQuantidadeEnergia() {

    
    const campoPlacas = document.getElementById('consumo-energia-proposta')

    proposta.placas = calcularPlacaComEnergia()

    

}
function inserirExpansao(){

    if(expansaoFormularioProposta.checked){

        proposta.expansao = "Sim"
        campoQtdExpansao.classList.remove('hidden')
    }
    else{

        proposta.expansao = "Não"
        campoQtdExpansao.classList.add('hidden')
    }
}
function inserirQtdExpansao(){

    proposta.qtdExpansao = qtdExpansaoFormularioProposta.value 

}
function inserirPrecoKwh(){

    if(precoKwhFormularioProposta.value === ""){

         proposta.precoKwh = 0.95
        
    }
    else {
         proposta.precoKwh = precoKwhFormularioProposta.value
    }
     
}
function inserirInstalacao(){

    proposta.instalacao = instalacaoFormularioProposta.value

}
function inserirTelhado(){

    proposta.telhado = telhadoFormularioProposta.value

}


//Calculos automáticos, não depende de inserção de dados, utilizma dados já preenchido.
function gerarIdProposta() {
    const hoje = new Date();

    const data =
      hoje.getFullYear() +
      String(hoje.getMonth() + 1).padStart(2, "0") +
      String(hoje.getDate()).padStart(2, "0");

    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let codigo = "";

    for (let i = 0; i < 3; i++) {
      codigo += caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    return `PROP${data}${codigo}`;
  }
function gerarDataProposta() {
    const hoje = new Date();

    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();

    return `${dia}/${mes}/${ano}`;
}
function calcularArea(){

    proposta.area = proposta.placas * 3

 }
  //OK
  function custoEquipamento() {
    const inversor3kw = 1450;
    const inversor6kw = 2450;

    const potencia3kw = 3;
    const potencia6kw = 6;

    const expansao = Number(proposta.qtdExpansao);
    const placas = Number(proposta.placas);
    const placaTotal = placas + expansao;

    if (placaTotal >= 4 && placaTotal <= 8) {
      let valorPlaca = 825;
      let potenciaTotal = 0;


      proposta.custoEquipamento = inversor3kw + valorPlaca * placas
      proposta.inversor = "1x 3kw"
      potenciaTotal = potencia3kw
      return potenciaTotal
      // return {
      //   valorTotal: inversor3kw + valorPlaca * placas,
      //   potenciaTotal: potencia3kw,
      //   inversor: "1x 3kw",
      // };
    }
    if (placaTotal >= 9 && placaTotal <= 15) {
      let valorPlaca = 800;
      let potenciaTotal = 0;

       proposta.custoEquipamento = inversor6kw + valorPlaca * placas
      potenciaTotal = potencia6kw
      proposta.inversor = "1x 6kw"
       return potenciaTotal
      // return {
      //   valorTotal: inversor6kw + valorPlaca * placas,
      //   potenciaTotal: potencia6kw,
      //   inversor: "1x 6kw",
      // };
    }
    if (placaTotal >= 16 && placaTotal <= 23) {
      let valorPlaca = 775;
      let potenciaTotal = 0;

      proposta.custoEquipamento = inversor6kw + inversor3kw + valorPlaca * placas
      potenciaTotal = potencia6kw + potencia3kw
      proposta.inversor = "1x 6kw + 1x 3kw"
       return potenciaTotal
      // return {
      //   valorTotal: inversor6kw + inversor3kw + valorPlaca * placas,
      //   potenciaTotal: potencia6kw + potencia3kw,
      //   inversor: "1x 6kw + 1x 3kw",
      // };
    }
    if (placaTotal >= 24 && placaTotal <= 30) {
      let valorPlaca = 750;
      let potenciaTotal = 0;
      proposta.custoEquipamento = inversor6kw * 2 + valorPlaca * placas
      proposta.inversor = "2x 6kw"
      potenciaTotal = potencia6kw * 2
       return potenciaTotal
      // return {
      //   valorTotal: inversor6kw * 2 + valorPlaca * placas,
      //   potenciaTotal: potencia6kw * 2,
      //   inversor: "2x 6kw",
      // };
    }
    if (placaTotal >= 31 && placaTotal <= 45) {
      let valorPlaca = 725;
      let potenciaTotal = 0;

      proposta.custoEquipamento = inversor6kw * 3 + valorPlaca * placas
      proposta.inversor = "3x 6kw"
      potenciaTotal = potencia6kw * 3
       return potenciaTotal
      // return {
      //   valorTotal: inversor6kw * 3 + valorPlaca * placas,
      //   potenciaTotal: potencia6kw * 3,
      //   inversor: "3x 6kw",
      // };
    }
    if (placaTotal >= 46 && placaTotal <= 60) {
      let valorPlaca = 700;
      let potenciaTotal = 0;
      proposta.custoEquipamento = inversor6kw * 4 + valorPlaca * placas
      proposta.inversor = potencia6kw * 4
      potenciaTotal = potencia6kw * 4
       return potenciaTotal

      // return {
      //   valorTotal: inversor6kw * 4 + valorPlaca * placas,
      //   potenciaTotal: potencia6kw * 4,
      //   inversor: "4x 6kw",
      // };
    }
  }
  //OK
  function custoTelhado() {
    const telhado = proposta.telhado;

    if (telhado === "Cerâmico") {
      return proposta.custoTelhado = 0;
    }
    if (telhado === "Fibrocimento") {
      return proposta.custoTelhado = 0;
    }
    if (telhado === "Laje") {
      return proposta.custoTelhado = 3000;
    }
    if (telhado === "Metálico") {
      return proposta.custoTelhado = 0;
    }
  }
  //OK
  function custoHomologacao() {
    const potencia = custoEquipamento();

    if (potencia <= 10) {
      return proposta.custoHomologacao =  450;
    }
    if (potencia <= 20) {
      return proposta.custoHomologacao = 650;
    }
    if (potencia <= 50) {
      return proposta.custoHomologacao = 800;
    }
    if (potencia <= 75) {
      return proposta.custoHomologacao = 1000;
    }
  }
  //OK
  function custoInstalacao() {
    const placas = Number(proposta.placas);

    if (placas <= 13) {
      return proposta.custoInstalacao =  placas * 205;
    }
    if (placas <= 26) {
      return proposta.custoInstalacao =  placas * 180;
    }
    if (placas <= 32) {
      return proposta.custoInstalacao =  placas * 165;
    }
    if (placas <= 48) {
      return proposta.custoInstalacao =  placas * 155;
    }
    if (placas <= 62) {
      return proposta.custoInstalacao =  placas * 125;
    }
  }
  //OK
  function calcularEnergia() {
    const modulo = proposta.modulo;
    const placas = Number(proposta.placas);
    const hsp = Number(proposta.hsp);

    if (modulo === "575Wp Tier 1") {
      return proposta.energiaGerada = Number((hsp * 575 * 30 * 0.8) / 1000) * placas;
    }
    if (modulo === "585Wp Tier 1") {
      return proposta.energiaGerada = Number((hsp * 585 * 30 * 0.8) / 1000) * placas;
    }
    if (modulo === "610Wp Tier 1") {
      return  proposta.energiaGerada = Number((hsp * 610 * 30 * 0.8) / 1000) * placas;
    }
    if (modulo === "700Wp Tier 1") {
      return proposta.energiaGerada = Number((hsp * 700 * 30 * 0.8) / 1000) * placas;
    }
  }
  //OK
  function contaComSiltech() {
    const instalacao = proposta.instalacao;

    if (instalacao === "Bifásico") {
      return proposta.contaComSiltech = 70;
    }

    if (instalacao === "Trifásico") {
      return proposta.contaComSiltech = 110;
    }

  }
  //OK
  function contaSemSiltech() {
    const custoEnergia = Number(proposta.precoKwh);

    return proposta.contaSemSiltech = calcularEnergia() * custoEnergia;
  }
  //OK
  function custoMercadoriaVendida() {
    
       proposta.cmv = proposta.custoEquipamento + proposta.custoTelhado + proposta.custoHomologacao + proposta.custoInstalacao + retorno 
      // custoExpansao()
    return proposta.cmv
  }
  //OK
  function valorFinalProposta() {
    return proposta.valorFinalProposta = (
      proposta.cmv / (1 - (contribuicao + impostos + comissao))
    );
  }
  //OK
  function custoExpansao() {
    const expansao = Number(proposta.qtdExpansao);

    if (expansao > 0) {
      return proposta.custoExpansao = 1000;
    } else {
      return proposta.custoExpansao =  0;
    }
  }
  //OK
  function economiaEm15Anos() {
    return proposta.economiaEm15Anos = (proposta.economiaAnual * ((1 + inflacao) ** 15 - 1)) / inflacao;
  }
  //OK
  function economiaAnual() {
    const custoEnergia = proposta.precoKwh;
    return proposta.economiaAnual = calcularEnergia() * custoEnergia * 12 - contaComSiltech() * 12;
  }

function custoRetorno(){

  return proposta.custoRetorno = 550
}
function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

function limparCamposProposta() {

  const nomeProposta = document.getElementById('nome-proposta')
  const telefoneProposta = document.getElementById('telefone-proposta')
  const testeProposta = document.querySelector('.teste-proposta')
  const canalProposta = document.getElementById('canal-proposta')
  const localProposta = document.getElementById('local-proposta')
  const moduloProposta = document.getElementById('modulo-proposta')
  const inversorProposta = document.getElementById('inversor-proposta')
  const promocaoProposta = document.getElementById('promocao-proposta')
  const consumoEnergiaProposta = document.getElementById('consumo-energia-proposta')
  const consumoPlacaProposta = document.getElementById('consumo-placa-proposta')
  const expansaoProposta = document.querySelector('.expansao-proposta')
  const qtdExpansaoProposta = document.getElementById('qtd-expansao-proposta')
  const precoProposta = document.getElementById('preco-kwh-proposta')
  const instalacaoProposta = document.getElementById('instalacao-proposta')
  const telhadoProposta = document.getElementById('telhado-proposta')

  nomeProposta.value = ""
  telefoneProposta.value = ""
  testeProposta.checked = testeProposta.defaultValue;
  canalProposta.value = ""
  localProposta.value = ""
  moduloProposta.value = ""
  inversorProposta.value = ""
  promocaoProposta.value = ""
  consumoEnergiaProposta.value = ""
  consumoPlacaProposta.value = ""
  expansaoProposta.checked = expansaoProposta.defaultChecked;
  qtdExpansaoProposta.value = ""
  precoProposta.value = ""
  instalacaoProposta.value = ""
  telhadoProposta.value = ""

  localStorage.removeItem('propostaGerada')

}

function limparCamposResumo() {
  const textos = document.querySelectorAll('.p-resumo-resultado');

  textos.forEach(texto => {
    texto.textContent = "";
  });
}

function calcularPotencia() {

  const campoModulo = document.getElementById('modulo-proposta')

  if (campoModulo.value === "575Wp Tier 1" ) {

    return 575
  }
  if (campoModulo.value === "585Wp Tier 1" ) {

    return 585
  }
  if (campoModulo.value === "610Wp Tier 1" ) {

    return 610
  }
  if (campoModulo.value === "700Wp Tier 1" ) {

    return 700
  }

}
function validarDado(valor, formatador = null) {

    const numero = Number(valor);

    if (
        valor === null ||
        valor === undefined ||
        valor === "" ||
        !Number.isFinite(numero)
    ) {
        return "Aguardando dados";
    }

    return formatador ? formatador(numero) : numero;
}