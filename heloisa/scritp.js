
const btnEditar = document.getElementById("btnEditar");
const btnSair = document.getElementById("btnSair");

const nome = document.querySelector(".cabecalho h1");
const cidade = document.getElementById("cidade");

btnEditar.addEventListener("click", function() {
    const novoNome = prompt("Digite seu nome:");

    if (novoNome && novoNome.trim() !== "") {
        nome.textContent = novoNome.trim();
    }

    const novaCidade = prompt("Digite seu endereço:");

    if (novaCidade && novaCidade.trim() !== "") {
        cidade.innerHTML = "<strong>Endereço:</strong> " + novaCidade.trim();
    }

});

btnSair.addEventListener("click", function () {
    const resposta = confirm("Deseja sair do perfil?");

    if (resposta) {
        const confirmar = confirm("Tem certeza de que deseja sair?");

        if (confirmar) {
            alert("Você saiu do perfil")
        }
    }
});