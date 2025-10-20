const btnAlterar = document.getElementById("btn-alterar")
const mensagem = document.getElementById("mensagem")
const btnResetar = document.getElementById("btn-resetar")
const btnSomar = document.getElementById("btn-somar")
const btnSubtrair = document.getElementById("btn-subtrair")
const contadorValor = document.getElementById("contador-valor")
const btnTexto = document.getElementById("btn-texto")
const texto = document.getElementById("texto")
const tituloPrincipal = document.getElementById("titulo-principal")
const btnEnviar = document.getElementById("btn-enviar")
const resultado = document.getElementById("resultado")
const campoNome = document.getElementById("campo-nome")
const btnMudarCor = document.getElementById("btn-mudar-cor")
const cores = document.getElementById("cores")
const btnToggleCor = document.getElementById("btn-toggle-cor")
const corAtual = document.getElementById("cor-atual")


let number = 0

btnAlterar.addEventListener("click", function () {
    mensagem.innerText = ("Mensagem alterada com sucesso!")
tituloPrincipal.style.color = `blue`
})

btnResetar.addEventListener("click", function () {
    mensagem.innerText = ("Clique no botão para alterar esta mensagem.")
})

btnSomar.addEventListener("click", function () {
    contadorValor.textContent = number++
})

btnSubtrair.addEventListener("click", function () {
    contadorValor.textContent = number--

})

btnTexto.addEventListener("click", function () {
    texto.innerText = ("Novo conteúdo exibido!")
})

btnEnviar.addEventListener("click", function() {
    if (campoNome.value == '') {
        resultado.style.color = `red`
        resultado.innerText = "Campo obrigatótio!"
    } else {
        resultado.style.color = `white`
        resultado.innerText = `Olá, ${campoNome.value}!`
    }
})

btnMudarCor.addEventListener("click", function () {
    if (cores.style.backgroundColor === "yellow") {
        cores.style.backgroundColor ="white"
        corAtual.style.color = 'white'
     
    } else if (cores.style.backgroundColor === "white") {
        cores.style.backgroundColor ="yellow"
        corAtual.style.color = 'yellow'

    } else {
        cores.style.backgroundColor ="yellow"
        corAtual.style.color = 'yellow'
    b
    } 

})

btnToggleCor.addEventListener("click", function (){
    mensagem.style.display = 'none'
})