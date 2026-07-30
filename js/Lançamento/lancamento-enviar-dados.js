const btnEnviarDadosLancamento = document.getElementById('btn-enviar-lancamento')

btnEnviarDadosLancamento.addEventListener('click', enviarDadosLancamento)

function enviarDadosLancamento() {

    proposta.tipo = "registrarLançamento"

    const url = "https://script.google.com/macros/s/AKfycbyXRfH1QwCzoPUaS3jFkDUBP42nreLTUoizqjFUxsPxwTRFycQ8bF6rzRbbNucih6GV/exec"
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

}