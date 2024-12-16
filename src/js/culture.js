const menuHTML = `

<nav>
    <ul>
    <ol class="nav-bar">
            <a href="../index.html"><li class="nav">Home</li></a>
           <a href="contato/"> <li class="nav">Contato</li></a>
          <a href="https://www.vakinha.com.br/buscar-vaquinha?page=1&term=Vaquinhas%20para%20pessoas%20negras">  <li class="nav">Apoio</li></a>
            <a href="about.html"><li class="nav">Sobre</li></a>
        </ol>
    </ul>
</nav>
`;

//Inserir o menu na página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-container").innerHTML = menuHTML;
});
