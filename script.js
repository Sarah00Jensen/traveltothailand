document.getElementById("imagem").addEventListener("mouseover", function() {
    let imagemAtual = this.getAttribute("src");

    if (imagemAtual === "foto01.jpg") {
        this.setAttribute("src", "foto02.jpg");
    } else {
        this.setAttribute("src", "foto01.jpg");
    }
});

document.querySelector("form").addEventListener("submit", function (event) {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("pergunta").value.trim();

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos!");
        event.preventDefault();
    } else {
        alert("Mensagem enviada com sucesso!");
    }
});

document.getElementById("titulo").addEventListener("click", function () {
    if (this.style.color === "blue") {
        this.style.color = "black"; // Volta para preto
    } else {
        this.style.color = "blue"; // Muda para azul
    }
});
