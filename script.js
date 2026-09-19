const form = document.getElementById('vagaForm');
const modalOverlay = document.getElementById('popupModal');
const modalContent = modalOverlay.querySelector('.modal-content');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const modalCloseBtn = document.getElementById('modalCloseBtn');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura e conversão dos dados
    const nome = document.getElementById('nome').value.trim();
    const idade = parseInt(document.getElementById('idade').value, 10);
    const altura = parseFloat(document.getElementById('altura').value);

    // Reseta as classes de estilo do modal
    modalContent.classList.remove('apto', 'nao-apto');

    // Validação da regra de negócio solicitada
    if (altura >= 1.70 && idade >= 18) {
        modalTitle.textContent = "Sucesso!";
        modalMessage.textContent = `Parabéns! Você pode prosseguir no processo para a vaga, ${nome}!`;
        modalContent.classList.add('apto');
    } else {
        modalTitle.textContent = "Aviso";
        modalMessage.textContent = `Infelizmente você não é apto à vaga, ${nome}.`;
        modalContent.classList.add('nao-apto');
    }

    // Exibe o popup com animação
    modalOverlay.classList.remove('hidden');
});

// Ação para fechar o popup após clicar em OK
modalCloseBtn.addEventListener('click', function() {
    modalOverlay.classList.add('hidden');
    form.reset(); // Opcional: limpa o formulário após fechar
});

// Fecha o popup se o usuário clicar fora da caixa central
modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
        modalOverlay.classList.add('hidden');
        form.reset();
    }
});