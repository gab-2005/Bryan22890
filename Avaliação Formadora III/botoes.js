// Referências aos campos do formulário
const senhaInput = document.getElementById('senha');
const confirmaSenhaInput = document.getElementById('confirmaSenha');
const formulario = document.getElementById('formulario');

// Alterna entre mostrar e ocultar a senha
let senhaVisivel = false;
function toggleSenha() {
    senhaVisivel = !senhaVisivel;
    const tipo = senhaVisivel ? 'text' : 'password';
    senhaInput.setAttribute('type', tipo);
    confirmaSenhaInput.setAttribute('type', tipo);
}

// Função para validar o formulário
function validarFormulario(event) {
    event.preventDefault();  // Impede o envio imediato do formulário
    let valido = true;

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const senha = senhaInput.value.trim();
    const confirmaSenha = confirmaSenhaInput.value.trim();

    // Validações
    if (nome === '') {
        alert('Por favor, preencha o campo Nome.');
        valido = false;
    }

    if (endereco === '') {
        alert('Por favor, preencha o campo Endereço.');
        valido = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido.');
        valido = false;
    }

    if (senha === '') {
        alert('Por favor, preencha o campo Senha.');
        valido = false;
    } else if (senha !== confirmaSenha) {
        alert('As senhas não coincidem.');
        valido = false;
    }

    // Se tudo estiver correto, redireciona
    if (valido) {
        window.location.href = 'https://www.unisuam.edu.br/';
    }
}

// Adiciona o evento de envio ao formulário
formulario.addEventListener('submit', validarFormulario);



    