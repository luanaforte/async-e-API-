# Aula: Consumo de API com JavaScript - Exemplo com ReqRes

Este projeto foi desenvolvido como parte de uma aula prática sobre como consumir APIs utilizando JavaScript puro (sem frameworks). O foco foi ensinar como fazer requisições `GET` e `POST`, lidar com JSON e manipular o DOM para exibir dados na interface.

## 📚 Objetivo da Aula

- Apresentar o uso básico de `fetch` com requisições `GET` e `POST`
- Trabalhar com objetos JavaScript e converter para JSON
- Exibir dinamicamente os dados de uma API REST (ReqRes)
- Aplicar conhecimentos de HTML, CSS e JS para criar uma interface simples

---

## 📁 Estrutura de Arquivos

### ReqRes/
│
├── index.html # Estrutura HTML da página
├── style.css # Estilização com CSS
├── script.js # Requisição GET para listar usuários
├── async.js # Exemplo de conversão de objeto JS para JSON
├── async01.js # Exemplo de requisição POST (com erro proposital para ensino)

---

## 🔧 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- API pública [ReqRes](https://reqres.in/)

---

## 🚀 Funcionalidades

### ✅ Lista de Usuários

Ao clicar no botão **"Carregar Usuários"**, o sistema faz uma requisição GET à API ReqRes e exibe os dados dos usuários (nome, email e foto).

### ✅ Conversão de Objeto para JSON

No arquivo `async.js`, mostramos como criar um objeto JavaScript e transformá-lo em JSON com `JSON.stringify()`.

### ✅ Requisição POST

No arquivo `async01.js`, mostramos a estrutura de uma requisição POST. A intenção foi mostrar o formato correto, mesmo que o endpoint da API de conselhos (`https://api.adviceslip.com/advice`) não aceite POST. Isso serviu como exemplo para ensinar o tratamento de erros com `.catch()`.

---

## 🧑‍🏫 Público-Alvo

Alunos iniciantes no desenvolvimento web, com conhecimentos básicos de HTML, CSS e JavaScript.

---

## 📝 Licença

Projeto de uso educacional. Livre para utilização e adaptação em aulas ou estudos pessoais.

---

## ✍️ Autor(a)

Criado por **Luana** como parte de suas aulas práticas de programação web.

## ---

## 💡 Possíveis Melhorias

- Validar melhor os dados antes de enviar com `POST`
- Separar funções de requisição em módulos
- Utilizar o `async/await` também no arquivo `async01.js`
- Adicionar paginação para navegar entre as páginas de usuários da API
