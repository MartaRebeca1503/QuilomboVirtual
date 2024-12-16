// Função para abrir o modal específico
function openModal(developerId) {
    const modal = document.getElementById(`modal${developerId}`);
    modal.style.display = "block";
}

// Função para fechar o modal específico
function closeModal(developerId) {
    const modal = document.getElementById(`modal${developerId}`);
    modal.style.display = "none";
}

// Fechar modal se clicar fora da caixa modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(1);
        closeModal(2);
        closeModal(3);
        closeModal(4);
    }
};


