document.getElementById("load-users").addEventListener("click", async function() {
    const userListDiv = document.getElementById("user-list")
    userListDiv.innerHTML = ''  // Limpa a lista de usuários antes de adicionar novos

    try {
        // Requisição para a API Reqres
        const response = await fetch('https://reqres.in/api/users?page=1')
        const data = await response.json()

        // Verifica se a resposta foi bem sucedida
        if (data && data.data) {
            // Cria elementos de usuário na página
            data.data.forEach(user => {
                const userItem = document.createElement('div')
                userItem.classList.add('user-item')

                userItem.innerHTML = `
                    <img src="${user.avatar}" alt="${user.first_name}">
                    <strong>${user.first_name} ${user.last_name}</strong>
                    <p>${user.email}</p>
                `
                
                // Adiciona o item à lista
                userListDiv.appendChild(userItem)
            })
        }
    } catch (error) {
        console.error("Erro ao carregar usuários", error)
    }
})
