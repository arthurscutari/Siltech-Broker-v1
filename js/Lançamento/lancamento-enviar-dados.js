const btnEnviarDadosLancamento = document.getElementById('btn-enviar-lancamento')

btnEnviarDadosLancamento.addEventListener('click', enviarDadosLancamento)

function enviarDadosLancamento() {

    proposta.tipo = "registrarLançamento"

    const url = "https://script.google.com/macros/s/AKfycbyPJCPV2O5yQc_T2YBKGbRBu0euNQqv2xFZwMHCdrU-SZBhFr4N3YWKiasoFK-BnRVu/exec"
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