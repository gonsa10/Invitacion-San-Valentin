document.addEventListener("DOMContentLoaded", () => {
    const btnSi = document.querySelector('.botones__btn-si');
    const btnNo = document.querySelector('.botones__btn-no');
    const randomPic = document.querySelector('.random-pics__cats');
    const question = document.querySelector('.question');

    const musica = new Audio('assets/musica/Manu Chao - Me gustas tu.mp3');

    // Función para mover el botón "No" cuando el mouse se acerca
    btnNo.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
        const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
        
        btnNo.style.position = 'absolute'; // Mejor que 'fixed'
        btnNo.style.left = `${x}px`;
        btnNo.style.top = `${y}px`;
    });

    // Si acepta: 
    btnSi.addEventListener('click', () => {
        randomPic.src = 'assets/fotos/0.jpg'; 
        question.innerText = 'Siii!! Sabia que dirias que si, creeme que la pasaremos de maravilla mi amor, porque juntos la pasamos de lo mejor como siempre, Te amo muchísimo ❤️';
        question.classList.add('question-style');

        btnSi.style.display = 'none';
        btnNo.style.display = 'none';

        musica.play();
    });

    // Lógica del botón "No"
    let contador = 0;
    btnNo.addEventListener('click', () => {
        const imagenes = [
            "assets/fotos/2.jpg",
            "assets/fotos/3.jpg",
            "assets/fotos/4.jpg",
            "assets/fotos/5.jpg",
            "assets/fotos/6.jpg"
        ];

        const textos = [
            "Segura?",
            "Segurísima?",
            "Apoco sí? 😢",
            "Ni modo...",
            "Duren... 😭"
        ];

        if (contador < imagenes.length) {
            btnNo.innerText = textos[contador];
            randomPic.src = imagenes[contador];
            btnSi.classList.add(`estilo-${contador + 1}`);
            contador++;
        }
    });
});





