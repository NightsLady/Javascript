# Exercícios Práticos: Manipulação do DOM com `getElementById`

## Objetivo
Praticar a seleção e manipulação de elementos únicos do DOM utilizando o método `document.getElementById`.

---

## Material de Partida (Código Base)

Crie um novo projeto com os arquivos `index.html` e `script.js`.

**Arquivo: `index.html`**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercícios DOM - getElementById</title>
  <style>
    .oculto { display: none; }
    .ativo { color: green; }
    .erro { color: red; }
  </style>
</head>
<body>
  <h1 id="titulo-principal">Bem-vindo ao Curso de JavaScript</h1>

  <p id="mensagem">Clique no botão para alterar esta mensagem.</p>

  <button id="btn-alterar">Alterar Mensagem</button>
  <button id="btn-resetar">Resetar</button>

  <div id="contador-area">
    <h2>Contador</h2>
    <p id="contador-valor">0</p>
    <button id="btn-somar">Somar</button>
    <button id="btn-subtrair">Subtrair</button>
  </div>

  <hr>

  <div id="caixa-texto">
    <p id="texto">Texto original.</p>
    <button id="btn-texto">Alterar Texto</button>
  </div>

  <hr>

  <div id="formulario">
    <input id="campo-nome" type="text" placeholder="Digite seu nome">
    <button id="btn-enviar">Enviar</button>
    <p id="resultado"></p>
  </div>

  <hr>

  <div id="cores">
    <p id="cor-atual">Cor atual: preta</p>
    <button id="btn-mudar-cor">Mudar Cor</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

## Enunciados dos Exercícios

### Exercício 1: Alterar Texto de um Elemento
Ao clicar no botão `btn-alterar`, altere o conteúdo do elemento `mensagem` para "Mensagem alterada com sucesso!".

### Exercício 2: Resetar Texto
Ao clicar no botão `btn-resetar`, restaure o texto original do elemento `mensagem`.

### Exercício 3: Incrementar e Decrementar
Use os botões `btn-somar` e `btn-subtrair` para aumentar ou diminuir o número exibido em `contador-valor`.

### Exercício 4: Alterar Texto com Outro Botão
Ao clicar no botão `btn-texto`, altere o conteúdo de `texto` para "Novo conteúdo exibido!".

### Exercício 5: Alterar Estilo de Título
Ao clicar no botão `btn-alterar`, altere a cor do texto do elemento `titulo-principal` para azul.

### Exercício 6: Mostrar Nome Digitado
Ao clicar no botão `btn-enviar`, exiba o texto "Olá, [nome digitado]!" dentro do elemento `resultado`.

### Exercício 7: Validação de Campo Vazio
Se o campo `campo-nome` estiver vazio e o usuário clicar em `btn-enviar`, exiba "Campo obrigatório!" em vermelho (`erro`).

### Exercício 8: Mudar Cor de Fundo
Ao clicar no botão `btn-mudar-cor`, alterne a cor de fundo do elemento `cores` entre amarelo e branco.

### Exercício 9: Ocultar e Mostrar Elemento
Adicione um botão com ID `btn-toggle-msg` que oculte ou mostre o elemento `mensagem` ao ser clicado.

### Exercício 10: Atualizar Cor Atual
Quando a cor de fundo for alterada (no exercício 8), atualize o texto do elemento `cor-atual` para refletir a nova cor.
