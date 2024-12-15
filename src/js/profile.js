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
        
        name.innerText = "Célia Xakriaba - Deputada & Ativista"
        text1.innerText = "Representante do povo Xakriabá e deputada federal por Minas Gerais, Célia é uma das vozes mais fortes na defesa dos direitos indígenas no Brasil. Além de lutar pela demarcação de terras, ela atua pela preservação da biodiversidade e pelo reconhecimento das culturas originárias, conectando suas raízes à política nacional.";
        photo.innerHTML = ' <img src="/src/img/profiles/modalprofile/celia.jpg" alt="Imagem do Modal" class="kx-modal-image">'
        link.href = "https://www.instagram.com/celia.xakriaba/";
    }
    else if (number === 2){
        text1.innerText = "Saiba mais sobre WD";
        name.innerText = "WD - Cantor"
        photo.innerHTML = ' <img src="/src/img/profiles/modalprofile/wd-modal.png" alt="Imagem do Modal" class="kx-modal-image">'
        link.href = "https://www.instagram.com/wdooficial/";

    }

    else if (number === 3){
        name.innerText = "Sonia Guajajara - Ministra dos povos indigenas"
        text1.innerText = "Sonia Guajajara, do povo Guajajara, é uma ativista indígena e ambiental de destaque no Brasil. Atualmente, ela ocupa o cargo de Ministra dos Povos Indígenas, sendo a primeira pessoa a liderar essa pasta. Sonia é conhecida por sua atuação em movimentos sociais, por seu trabalho internacional em defesa da Amazônia e por sua luta pela valorização das culturas indígenas.";
        photo.innerHTML = ' <img src="/src/img/profiles/modalprofile/sonia.png" alt="Imagem do Modal" class="kx-modal-image">'
        link.href = "https://www.instagram.com/guajajarasonia/";
    }
    else if (number === 4){
        name.innerText = "Djamilla Ribeiro"
        text1.innerText = "Djamila Ribeiro é uma das principais vozes do feminismo negro no Brasil. Autora de livros como Pequeno Manual Antirracista, ela usa sua produção intelectual para promover debates sobre desigualdade racial e de gênero. Sua atuação vai além das redes sociais, impactando diretamente a educação e a cultura no país.";
        photo.innerHTML = ' <img src="/src/img/profiles/modalprofile/djamila.jpg" alt="Imagem do Modal" class="kx-modal-image">'
        link.href = "https://www.instagram.com/djamilaribeiro1/";
    }
    else if (number === 5){
        name.innerText = "Gilberto Gil"
        text1.innerText = "Gilberto Gil é um dos maiores nomes da música brasileira e um símbolo da resistência cultural. Além de sua carreira artística, foi Ministro da Cultura, defendendo políticas públicas para a inclusão e valorização das artes. Seu legado une inovação musical, ativismo e defesa dos direitos humanos.";
        photo.innerHTML = ' <img src="/src/img/profiles/modalprofile/gilberto.jpg" alt="Imagem do Modal" class="kx-modal-image">'
        link.href = "https://www.instagram.com/gilbertogil/";
    }
    else if (number === 6){
        name.innerText = "Tukumã Pataxó"
        text1.innerText = "Tukumã Pataxó é um jovem ativista e estudante de Direito, que se destaca por sua atuação nas redes sociais, trazendo visibilidade às lutas dos povos indígenas. Ele aborda temas como demarcação de terras, preservação da cultura ancestral e proteção ambiental, sempre de maneira educativa e acessível. Sua comunicação criativa e engajada inspira o público a valorizar e apoiar as causas indígenas.";
        photo.innerHTML = ' <img src="/src/img/profiles/modalprofile/tukuma.png" alt="Imagem do Modal" class="kx-modal-image">'
        link.href = "https://www.instagram.com/tukuma_pataxo/";
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


function openModal1(artist) {
    document.getElementById(`${artist}-modal`).style.display = 'flex';
}

// Função para fechar o modal
function closeModal1(artist) {
    document.getElementById(`${artist}-modal`).style.display = 'none';
}




const menuHTML = `

<nav>
    <ul>
    <ol class="nav-bar">
            <a href="../index.html"><li class="nav">Home</li></a>
           <a href="contato/"> <li class="nav">Contato</li></a>
          <a href="https://www.vakinha.com.br/buscar-vaquinha?page=1&term=Vaquinhas%20para%20pessoas%20negras">  <li class="nav">Apoio</li></a>
            <a href="sobre/sobre.html"><li class="nav">Sobre</li></a>
        </ol>
    </ul>
</nav>
`;

//Inserir o menu na página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-container").innerHTML = menuHTML;
});

 