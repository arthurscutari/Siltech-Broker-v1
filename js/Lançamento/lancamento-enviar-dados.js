const btnEnviarDadosLancamento = document.getElementById('btn-enviar-lancamento')

btnEnviarDadosLancamento.addEventListener('click', enviarDadosLancamento)

function enviarDadosLancamento() {

    proposta.tipo = "registrarLançamento"

    const url = "https://script.google.com/macros/s/AKfycbzooQvT8QGu8C08y1GLsYuYew22cFhAbVNuJVxB_hVVtVKNE4ReT5hNgAKyL2R3R2V2/exec"
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