// 1. Configuración de la API de YouTube 🔑
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: '5QNXO5MGBEA', // <--- ¡Aquí va el ID que encontramos!
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // El reproductor está listo para sonar
}

// 2. Función para el efecto de escritura ⌨️
function escribirTexto(elemento, mensaje, velocidad) {
    let i = 0;
    elemento.innerHTML = ""; 
    
    function escribir() {
        if (i < mensaje.length) {
            elemento.innerHTML += mensaje.charAt(i);
            i++;
            setTimeout(escribir, velocidad);
        }
    }
    escribir();
}

// 3. Función principal que activa la sorpresa 🎁
function mostrarMensaje() {
    // Iniciar música
    if (player && player.playVideo) {
        player.playVideo();
    }

    const parrafo = document.getElementById("texto");
    const boton = document.getElementById("boton");
    const mensajeLargo = "Hola Mari, en este dia tan especial queria felicitarte y decirte ya estas viejita, ya te empezaran a tronar las rodillas, te vas a marear cada que te levantes y te dara el mal de puerco cada que termines de comer. Asi que disfruta tanto pero tanto tantisimo por que este dia se trata solo de ti y no dejes que nada ni nadie te haga sentir mal, ojala te compren un pastel como el año pasado y te inflames el estomago denuevo jsjsjs, o mejor no para que te cuides, no comas algo que te haga daño y cuidate mucho feliz cumpleaños.";

    // Ocultar botón e iniciar escritura
    boton.style.display = "none";
    escribirTexto(parrafo, mensajeLargo, 50);

    // Lógica de Fuegos Artificiales 🎆
    var duracionShow = 30000; 
    var intervaloFuegos = setInterval(function() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: Math.random(), y: Math.random() - 0.2 },
            colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
        });
    }, 400);

    setTimeout(function() {
        clearInterval(intervaloFuegos);
    }, duracionShow);
}