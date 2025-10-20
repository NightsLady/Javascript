# Exercícios Práticos: Manipulação do DOM com `querySelector` e `querySelectorAll`

## Objetivo
Praticar a seleção e manipulação de elementos HTML utilizando `document.querySelector` e `document.querySelectorAll`, explorando propriedades como `innerText`, `innerHTML`, `textContent` e `.value`.

---

## Material de Partida (Código Base)

Crie uma pasta para o projeto. Dentro dela, crie dois arquivos: `index.html` e `script.js`.

**Arquivo: `index.html`**
```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercícios DOM - querySelector & querySelectorAll</title>
    <style>
      .ativo { background-color: lightgreen; }
      .negrito { font-weight: bold; }
      .oculto { display: none; }
      .realce { color: blue; }
    </style>
  </head>
  <body>
    <h1>Exercícios com querySelector e querySelectorAll</h1>

    <section id="info">
      <h2>Informações</h2>
      <p class="texto">Bem-vindo ao exercício!</p>
      <p class="texto">Aprendendo DOM é divertido.</p>
      <input type="text" id="campo-nome" placeholder="Digite seu nome" />
      <button id="btn-enviar">Enviar</button>
      <div id="mensagem"></div>
    </section>

    <hr />

    <section id="produtos">
      <h2>Lista de Produtos</h2>
      <ul id="lista-produtos">
        <li class="produto">Notebook</li>
        <li class="produto">Celular</li>
        <li class="produto">Fone de Ouvido</li>
      </ul>
      <button id="btn-adicionar">Adicionar Produto</button>
    </section>

    <hr />

    <section id="artigo">
      <h2>Artigo</h2>
      <p class="conteudo">O JavaScript permite manipular o DOM de forma dinâmica.</p>
      <p class="conteudo">Você pode alterar, adicionar e remover elementos.</p>
    </section>

    <script src="script.js"></script>
  </body>
</html>
```

---

## Enunciados dos Exercícios

### Exercício 1: Selecionar e Modificar Texto
Use `querySelector` para selecionar o primeiro parágrafo com a classe `.texto` e altere seu `innerText` para "Texto modificado com querySelector".

### Exercício 2: Modificar Vários Elementos
Use `querySelectorAll` para selecionar todos os parágrafos com a classe `.texto` e adicione a classe `realce` a cada um deles.

### Exercício 3: Alterar HTML Interno
Use `querySelector` para selecionar o elemento com o ID `mensagem` e defina seu `innerHTML` como `<strong>Mensagem exibida com innerHTML</strong>`.

### Exercício 4: Trabalhar com textContent
Selecione o segundo parágrafo dentro da seção `#artigo` e exiba seu `textContent` no console.

### Exercício 5: Ler e Escrever Valores de Input
Selecione o campo de texto `#campo-nome`, leia o valor digitado ao clicar em `#btn-enviar` e exiba no `#mensagem` a frase: “Olá, [nome digitado]!”

### Exercício 6: Adicionar Elementos com querySelector
Quando o botão `#btn-adicionar` for clicado, adicione um novo item `<li>` com o texto “Novo Produto” à lista `#lista-produtos`.

### Exercício 7: Aplicar Classe Condicional
Selecione o primeiro item da lista de produtos e alterne a classe `ativo` quando ele for clicado (`.classList.toggle()`).

### Exercício 8: Contagem de Itens
Conte quantos elementos `.produto` existem e exiba o número dentro do elemento `#mensagem`.

### Exercício 9: Substituir Conteúdo do Artigo
Use `querySelectorAll` para selecionar todos os parágrafos dentro de `#artigo` e substitua o conteúdo por "Conteúdo atualizado com innerText".

### Exercício 10: Mostrar/Ocultar Elementos
Adicione um botão “Ocultar Mensagem” dinamicamente com `innerHTML` e, ao ser clicado, ele deve esconder o `#mensagem` adicionando a classe `oculto`.
