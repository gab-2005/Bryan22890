// Alterna entre mostrar e ocultar a senha
function toggleSenha() {
    let senhaInput = document.getElementById("senha");
    senhaInput.type = senhaInput.type === "password" ? "text" : "password";
}

// Captura o formulário
const formulario = document.getElementById("formulario");

// Função para validar o formulário
function validarFormulario(event) {
    event.preventDefault();  // Impede o envio imediato do formulário
    let valido = true;

    // Captura os valores dos campos
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Validações
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        valido = false;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        valido = false;
    }

    // Se tudo estiver correto, redireciona
    if (valido) {
        alert("Formulário enviado com sucesso!");
        formulario.submit();
    }
}

// Adiciona o evento de envio ao formulário
formulario.addEventListener("submit", validarFormulario);




    