// EX 01
const paragrafoGeral = document.getElementsByClassName("paragrafo-geral")
   for (let p of paragrafoGeral) {
      p.style.color = 'blue'
}

// EX 02
const itemLista = document.getElementsByClassName("item-lista")
const totalItens = document.getElementById("total-itens")

totalItens.innerText = itemLista.length

//Ex 03

