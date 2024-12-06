document.addEventListener("DOMContentLoaded", function init() {
    // Simula um carregamento de 3 segundos
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none';
        window.location.href = "../pages/course.html"
    }, 3000);
});