const swipeLocal = document.querySelector('.swipeLocal')
const swipeUnificacao = document.querySelector('.swipeUnificacao')
const swipeAdequacao = document.querySelector('.swipeAdequacao')
const swipeReforma = document.querySelector('.swipeReforma')
const swipeEmbutido = document.querySelector('.swipeEmbutido')


swipeLocal.addEventListener('change', mostrarLocal)
swipeUnificacao.addEventListener('change', mostrarUnificacao)
swipeAdequacao.addEventListener('change', mostrarAdequacao)
swipeReforma.addEventListener('change', mostrarReforma)
swipeEmbutido.addEventListener('change', mostrarEmbutido)



function mostrarLocal() {


    if(swipeLocal.checked) {


        const textArea = document.getElementById('textarea-local')
        textArea.classList.remove('hidden')
    }
   else {

            const textArea = document.getElementById('textarea-local')
        textArea.classList.add('hidden')

   }
        


}
function mostrarUnificacao() {


    if(swipeUnificacao.checked) {

        const textArea = document.getElementById('textarea-unificacao')
        textArea.classList.remove('hidden')
    }
   else {

            const textArea = document.getElementById('textarea-unificacao')
        textArea.classList.add('hidden')

   }
        


}
function mostrarAdequacao() {


    if(swipeAdequacao.checked) {

        const textArea = document.getElementById('textarea-adequacao')
        textArea.classList.remove('hidden')
    }
   else {

            const textArea = document.getElementById('textarea-adequacao')
        textArea.classList.add('hidden')

   }
        


}
function mostrarReforma() {


    if(swipeReforma.checked) {

        const textArea = document.getElementById('textarea-reforma')
        textArea.classList.remove('hidden')
    }
   else {

            const textArea = document.getElementById('textarea-reforma')
        textArea.classList.add('hidden')

   }
        


}
function mostrarEmbutido() {


    if(swipeEmbutido.checked) {

        const textArea = document.getElementById('textarea-embutido')
        textArea.classList.remove('hidden')
    }
   else {

            const textArea = document.getElementById('textarea-embutido')
        textArea.classList.add('hidden')

   }
        


}