
function validarFormulario() {

    let formularioValido = true

    const campos = document.querySelectorAll('[data-required="true"]')

    campos.forEach((campo) => {

        campo.classList.remove('erro')

        if (campo.disabled) return

        if (campo.offsetParent === null) return

        if (campo.value.trim() === "") {

            campo.classList.add('erro')

            formularioValido = false
        }
    })

    return formularioValido
}