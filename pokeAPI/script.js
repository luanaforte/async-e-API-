document.getElementById("search-button").addEventListener("click", async function() {
    
    const pokemonInput = document.getElementById("pokemon-input").value.toLowerCase()

    const pokemonInfoDiv = document.getElementById("pokemon-info")

    const pokemonImage = document.getElementById("pokemon-image")

    const pokemonName = document.getElementById("pokemon-name")

    const pokemonId = document.getElementById("pokemon-id")

    if (!pokemonInput) {
        alert("Por favor, insira um nome ou número de Pokémon.")
        return
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`)
        
        if (!response.ok) {
            throw new Error("Pokémon não encontrado.")
        }

        const data = await response.json()

        // exibindo as informações do pokemon

        // 1. pega a URL da imagem do pokemon (sprites = chave que contém objetos relacionados às imagens do pokemon)
        pokemonImage.src = data.sprites.front_default
        // 2. 
        pokemonName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1) // primeira letra maiúscula
        pokemonId.textContent = `ID: #${data.id}`

        // Tornar as informações visíveis
        pokemonInfoDiv.style.display = "block"
    } catch (error) {
        alert(error.message)
        pokemonInfoDiv.style.display = "none"
    }
})
