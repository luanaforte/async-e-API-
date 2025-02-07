// fetch("https://api.adviceslip.com/advice")
//     .then(responde => response.json())
//     .then(data => alert(data))
//     .catch(error => console.log(error.message))

const novoUsuario = {"nome": "Ana", "idade": "28"} // criando objeto

fetch("https://api.adviceslip.com/advice",
        {method: "POST", // escolhendo o metodo HTTP (criação)
        headers:{"Content-Type": "aplication/json"}, //objeto que indica o tipo de dado
        body: JSON.stringify(novoUsuario), // transforma a variável em uma string JSON
    })
.then(res => res.json())
.then(data => alert(data))
.catch(error => {console.log(error.message)})