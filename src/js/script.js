
const menuHTML = `

<nav>
    <ul>
    <ol class="nav-bar">
            <a href="#"><li class="nav">Home</li></a>
           <a href="contato/"> <li class="nav">Contato</li></a>
          <a href="https://www.vakinha.com.br/buscar-vaquinha?page=1&term=Vaquinhas%20para%20pessoas%20negras">  <li class="nav">Apoio</li></a>
            <a href="pages/about.html"><li class="nav">Sobre</li></a>
        </ol>
    </ul>
</nav>
`;

//Inserir o menu na página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-container").innerHTML = menuHTML;
});


// Função para adicionar animação quando o elemento estiver visível na tela
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona uma classe de animação para o elemento visível
            entry.target.classList.add(entry.target.dataset.animation);
            observer.unobserve(entry.target);
        }
    });
}

// Configuração do IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 // Elemento precisa estar 50% visível para a animação ser ativada
});

// Elementos que terão animações ao entrar na tela
const elements = document.querySelectorAll('.animate-on-scroll');
elements.forEach(element => {
    observer.observe(element);
});
