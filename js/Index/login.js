const usuario = document.getElementById('input-usuario-login')
const senha = document.getElementById('input-senha-login')
const botaoAcessar = document.getElementById('btn-acessar');
const pError = document.getElementById('p-error');

usuario.addEventListener('input',() =>{

    pError.classList.add('hidden')

})
senha.addEventListener('input',() =>{

    pError.classList.add('hidden')

})


const mostrarSenha = document.getElementById('mostrar-senha')
let usuarioAtivo = 0

botaoAcessar.addEventListener('click', (e) => 

{
    e.preventDefault()
  if(usuario.value === "arthurscutari" && senha.value === "admin123") {

    localStorage.setItem('usuarioAtivo', '1')

    window.location.href = "plataforma.html"
}
   else if(usuario.value === "alex@siltechsolar.com.br" && senha.value === "admin123") {

    localStorage.setItem('usuarioAtivo', '2')

    window.location.href = "plataforma.html"
}
else if(usuario.value === "pedro@siltechsolar.com.br" && senha.value === "admin123") {

    localStorage.setItem('usuarioAtivo', '3')

    window.location.href = "plataforma.html"
}
else if(usuario.value === "gabriel.sato@siltechsolar.com.br" && senha.value === "admin123") {

    localStorage.setItem('usuarioAtivo', '4')

    window.location.href = "plataforma.html"
}
   else if(usuario.value === "gustavo.munhoz@siltechsolar.com.br" && senha.value === "sdr01siltech2026") {

    localStorage.setItem('usuarioAtivo', '5')

    window.location.href = "plataforma.html"
}
   else if(usuario.value === "pedro.toqueton@siltechsolar.com.br" && senha.value === "sdr02siltech2026") {

    localStorage.setItem('usuarioAtivo', '6')

    window.location.href = "plataforma.html"
}
  else if(usuario.value === "breno.celino@siltechsolar.com.br" && senha.value === "sdr03siltech2026") {

    localStorage.setItem('usuarioAtivo', '7')

    window.location.href = "plataforma.html"
}
  else if(usuario.value === "diego.mattos@siltechsolar.com.br" && senha.value === "sdr04siltech2026") {

    localStorage.setItem('usuarioAtivo', '8')

    window.location.href = "plataforma.html"
}
else if(usuario.value === "luiz.gustavo@siltechsolar.com.br" && senha.value === "sdr05siltech2026") {

    localStorage.setItem('usuarioAtivo', '9')

    window.location.href = "plataforma.html"
}


else if (usuario.value === "" && senha.value === ""){

        pError.classList.remove('hidden')
}
else {
        pError.classList.remove('hidden')


    }

})

usuario.addEventListener('input',()=>{

    pError.classList.remove('mostrar')

})
senha.addEventListener('input',()=>{

    pError.classList.remove('mostrar')

})
mostrarSenha.addEventListener('click', ()=>{

    if (senha.type === "password"){

        senha.type = "text"
        mostrarSenha.className = "bi bi-eye icon"
    }
    else {

        mostrarSenha.className = "bi bi-eye-slash icon"
            senha.type = 'password' 
    }
   
})

