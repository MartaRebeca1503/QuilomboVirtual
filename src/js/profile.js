// Função para abrir o modal

const text1 = document.getElementById("text1");
const name = document.getElementById("name");
const photo = document.getElementById("img");
const link = document.getElementById("link");

const number = 2;
function openModal(number) {
    const modal = document.getElementById('kxModal');
    modal.classList.add('kx-modal-active');
    modal.style.display = 'flex';

    if (number === 1){
        text1.innerText ="OI";
    }
    else if (number === 2){
        text1.innerText = "Saiba mais sobre WD";
        name.innerText = "WD - Cantor"
        photo.innerHTML = ' <img src="/src/img/profiles/modalprofile/wd-modal.png" alt="Imagem do Modal" class="kx-modal-image">'
        link.href = "https://www.instagram.com/wdooficial/";


    }

    
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('kxModal');
    modal.classList.remove('kx-modal-active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 400);
}
