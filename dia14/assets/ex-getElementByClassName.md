# Exercícios Práticos: Manipulação do DOM com `getElementsByClassName`

## Objetivo

Praticar a seleção e manipulação de múltiplos elementos HTML utilizando o método `document.getElementsByClassName`.

---

## Material de Partida (Código Base)

Crie uma pasta para o projeto. Dentro dela, crie dois arquivos: `index.html` e `script.js`.

Copie o código abaixo para o seu arquivo `index.html`. Ele servirá como base para todos os exercícios.

**Arquivo: `index.html`**

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercícios DOM - getElementsByClassName</title>
    <style>
      .destaque {
        background-color: yellow;
      }
      .borda-azul {
        border: 2px solid blue;
      }
      .invisivel {
        display: none;
      }
    </style>
  </head>
  <body>
    <h1>Exercícios Práticos com getElementsByClassName</h1>

    <section id="secao-1">
      <h2>Seção 1</h2>
      <p class="paragrafo-geral">Este é o primeiro parágrafo.</p>
      <p class="paragrafo-geral item-importante">
        Este é o segundo parágrafo, e ele é importante.
      </p>
      <div>
        <span class="paragrafo-geral">Um span com a mesma classe.</span>
      </div>
    </section>

    <hr />

    <section id="secao-2">
      <h2>Itens para Contagem</h2>
      <ul>
        <li class="item-lista">Maçã</li>
        <li class="item-lista">Banana</li>
        <li>Laranja</li>
        <li class="item-lista">Morango</li>
      </ul>
      <p>
        Total de itens com a classe 'item-lista':
        <strong id="total-itens">0</strong>
      </p>
    </section>

    <hr />

    <div id="container-cartoes">
      <h2>Cartões de Produto</h2>
      <div class="cartao" data-produto-id="001">Produto A</div>
      <div class="cartao" data-produto-id="002">Produto B</div>
      <div class="cartao" data-produto-id="003">Produto C</div>
    </div>

    <button id="btn-adicionar">Adicionar Novo Cartão</button>

    <script src="script.js"></script>
  </body>
</html>
```

---

## Enunciados dos Exercícios

### Exercício 1: Estilização em Massa

Selecione todos os elementos que possuem a classe `paragrafo-geral` e altere a cor do texto de todos eles para azul (blue).

### Exercício 2: Contagem de Elementos

Conte quantos elementos na página possuem a classe `item-lista`. Em seguida, atualize o texto do elemento com ID `total-itens` para exibir essa contagem.

### Exercício 3: Modificação de Conteúdo

Acesse todos os elementos com a classe `paragrafo-geral` e adicione a string " (lido)" ao final do texto de cada um deles.

### Exercício 4: Seleção com Múltiplas Classes

Selecione apenas os elementos que possuem simultaneamente as classes `paragrafo-geral` e `item-importante`. Adicione a estes elementos a classe `destaque`.

### Exercício 5: Busca dentro de um Elemento (Escopo)

Selecione a `section` com o ID `secao-1`. Dentro dela, encontre todos os elementos com a classe `paragrafo-geral` e adicione uma borda vermelha (`1px solid red`).

### Exercício 6: Adicionando Eventos a Múltiplos Elementos

Encontre todos os elementos com a classe `cartao`. Adicione um evento de `click` a cada um deles que exiba um `alert("Cartão clicado!")`.

### Exercício 7: Lendo Atributos de Dados

Para cada elemento com a classe `cartao`, leia o valor do atributo `data-produto-id` e exiba no console.

### Exercício 8: A Natureza "Viva" da HTMLCollection

Crie uma variável armazenando a coleção dos elementos com a classe `cartao`. Imprima o tamanho no console. Depois, ao clicar no botão `btn-adicionar`, adicione um novo cartão e imprima novamente o tamanho da coleção.

### Exercício 9: Alterando a Estrutura Interna (`innerHTML`)

Selecione todos os elementos com a classe `item-lista` e transforme o texto interno em `<em>texto</em>`.

### Exercício 10: Adicionando e Removendo Classes

Adicione eventos `mouseover` e `mouseout` aos elementos com a classe `cartao` para adicionar/remover a classe `borda-azul`.
