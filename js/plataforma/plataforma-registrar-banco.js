const btnRegistrarBanco = document.getElementById('btn-gerar-plataforma')

btnRegistrarBanco.addEventListener('click', registrarBanco)


function registrarBanco(e) {

    const propostGerada = JSON.parse(localStorage.getItem('propostaGerada'))
    const propostaFinalizada = {

        tipo: "registrarBanco",
        nome: propostGerada.nome,
          celular:propostGerada.celular,
          canal:propostGerada.canal,
          localizacao:propostGerada.localizacao,
          modulo:propostGerada.modulo,
          placas:propostGerada.placas,
          expansao:propostGerada.expansao,
          valorKwh:propostGerada.valorKwh,
          hsp:propostGerada.hsp,
          instalacao:propostGerada.instalacao,
          telhado:propostGerada.telhado,
          colaborador: "arthur", 
          //Códigos gerados pelo Appscript
          data: propostGerada.data,
          id:propostGerada.id,
          area:propostGerada.area,
          inversor:propostGerada.inversor,
          promocao: "0",
          equipamento: propostGerada.equipamento,
          estrutura: propostGerada.estrutura,
          homologacao: propostGerada.homologacao,
          retorno: propostGerada.retorno,
          cmv: propostGerada.cmv,
          valorSemSiltech: propostGerada.valorSemSiltech,
          valorComSiltech: propostGerada.valorComSiltech,
          economiaAnual:propostGerada.economiaAnual,
          economia:propostGerada.economia,
          valorFinal: propostGerada.valorFinal,
          energiaGerada:propostGerada.energiaGerada,
          kitPlaca: propostGerada.kitPlaca

    }
    console.log(propostaFinalizada)

    const bancoDeDados = "https://script.google.com/macros/s/AKfycbxYtnPHx3QY4oqnv3seGyNshLkbc0vvmNfErTl3I4rjkPHPEfVa5fX92mFeyHU_z72u/exec"
    fetch( bancoDeDados,{ 
        method: "POST",
        body: JSON.stringify(propostaFinalizada)
    }
    )
    .then( response => response.json())
    .then(response => {
        console.log("Proposta Registrada")
        window.location.href = ('proposta.html')
    })
   
    
       
    }
