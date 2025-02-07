const laranja = {
    nome: "laranja",
    cor: "laranja",
    sabor: "azedo",
    comer: function() {
        return "Você está comendo uma laranja."
    }
}

const laranjaJSON = JSON.stringify(laranja)

console.log(laranjaJSON)