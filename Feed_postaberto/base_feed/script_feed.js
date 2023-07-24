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
const closeButton = document.querySelector(".cancelar");
const commentButton = document.querySelector(".btn-comment");

commentForm.addEventListener("submit", async (event) => {
    event.preventDefault();

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
            // Do whatever is necessary after adding the comment successfully
        } else {
            const erro = await response.json();
            showErrorMessage(erro.erro);
            closeModalPost(); // Close the modal post in case of an error
        }
    } catch (error) {
        showErrorMessage("Parece que você não está logado! Cadastre-se ou entre com sua conta para comentar");
        closeModalPost(); // Close the modal post in case of an error
    }
});

function showErrorMessage(message) {
    const errorMessage = document.getElementById("error-message");
    const overlay = document.getElementById("overlay");
    errorMessage.textContent = message;

    // Create the links and append them to the errorMessage div
    const link1 = document.createElement("a");
    link1.href = "file:///C:/Users/danie_azyehd6/OneDrive/Documentos/Projeto%20Grupo%2011/cadastro/index.html"; // Replace with the URL for registration
    link1.textContent = "Cadastre-se";

    const link2 = document.createElement("a");
    link2.href = "file:///C:/Users/danie_azyehd6/OneDrive/Documentos/Projeto%20Grupo%2011/login/pagdelogin2.html"; // Replace with the URL for login
    link2.textContent = "Entre com sua conta";

    // Add the links to the errorMessage div
    errorMessage.appendChild(document.createElement("br")); // Add a line break
    errorMessage.appendChild(link1);
    errorMessage.appendChild(document.createTextNode(" ou "));
    errorMessage.appendChild(link2);

    overlay.style.display = "flex"; // Displays the overlay element
}

function closeModalPost() {
    const modal = document.querySelector(".modal");
    const overlay = document.getElementById("overlay");
    modal.close();
}

closeButton.addEventListener("click", () => {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none"; // Hides the overlay element
});

commentButton.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.showModal();
});