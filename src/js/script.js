
const menuHTML = `

<nav>
    <ul>
    <ol class="nav-bar">
            <a href="../index.html"><li class="nav">Home</li></a>
           <a href="contato/"> <li class="nav">Contato</li></a>
          <a href="https://www.vakinha.com.br/3779320">  <li class="nav">Apoio</li></a>
            <a href="sobre/sobre.html"><li class="nav">Sobre</li></a>
        </ol>
    </ul>
</nav>
`;

//Inserir o menu na página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-container").innerHTML = menuHTML;
});

