const btnEnviarDadosLancamento = document.getElementById('btn-enviar-lancamento')

btnEnviarDadosLancamento.addEventListener('click', enviarDadosLancamento)

function enviarDadosLancamento() {

    proposta.tipo = "registrarLançamento"

    const url = "https://script.google.com/macros/s/AKfycbzhNzbVVpwHhejc7j4xBEF020xWtomWGcFFI8QTQrvh6XP1gNULqajt2nN6bT8Igwl1-A/exec"
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