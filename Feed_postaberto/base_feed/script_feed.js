const url_comments = "http://localhost:3000/comentario";
const url_comentar = 'http://localhost:3000/comentar';


const postsContainer = document.querySelector("#posts-container");



function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `Enviado em ${day}/${month}/${year} as ${hours}:${minutes}`;
}

async function getAllComments() {
    try {
        const response = await fetch(url_comments);
        const data = await response.json();

        data.forEach((comment) => {
            const div = document.createElement('div');
            const user_id = document.createElement('h2');
            const content_comments = document.createElement('p');
            const created_at = document.createElement('p');

            user_id.innerText = comment.user_id;
            content_comments.innerText = comment.content_comments;
            created_at.innerText = formatDate(comment.created_at);

            div.appendChild(user_id);
            div.appendChild(content_comments);
            div.appendChild(created_at);

            div.classList.add('comment-container');

            postsContainer.appendChild(div);
        });
    } catch (error) {
        console.error('Erro ao buscar e exibir comentários:', error);
    }
}

// Chama a função para buscar e exibir os comentários
getAllComments();

const commentForm = document.getElementById("comment-form");
    const errorMessage = document.getElementById("error-message");
    const overlay = document.getElementById("overlay");
    const closeButton = document.getElementById("close-button");

    commentForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const formData = new FormData(commentForm);
        const url_comentar = "URL_DA_SUA_ROTA_COMENTAR";

        try {
            const response = await fetch(url_comentar, {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                const novoComentario = await response.json();
                console.log("Novo comentário adicionado:", novoComentario);
                // Faça o que for necessário após adicionar o comentário
            } else {
                const erro = await response.json();
                showErrorMessage(erro.erro); // Exibe a mensagem de erro na tela
            }
        } catch (error) {
            showErrorMessage("Parece que você não está logado! Cadastre-se ou entre com sua conta para comentar");
        }
    });

    function showErrorMessage(message) {
        errorMessage.textContent = message;
        overlay.style.display = "flex"; // Exibe o elemento de sobreposição
    }

    closeButton.addEventListener("click", () => {
        overlay.style.display = "none"; // Oculta o elemento de sobreposição
        location.reload(); // Recarrega a página ao clicar no botão de fechar
    });