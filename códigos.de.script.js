// === Contagem regressiva ===
const dataInput = document.getElementById("dataAniversario");
const diasSpan = document.getElementById("dias");

dataInput.addEventListener("change", () => {
    function atualizarContagem() {
        const hoje = new Date();
        const aniversario = new Date(dataInput.value);
        const diff = aniversario - hoje;
        const dias = Math.ceil(diff / (1000 * 60 * 60 * 24));
        diasSpan.textContent = dias >= 0 ? dias : 0;
    }

    atualizarContagem();
    setInterval(atualizarContagem, 1000 * 60 * 60);
});

// === Música ===
const musicaInput = document.getElementById("musicaArquivo");
const musica = document.getElementById("musica");
const youtubeContainer = document.getElementById("youtubeContainer");

musicaInput.addEventListener("change", () => {
    const arquivo = musicaInput.files[0];
    if (arquivo) {
        musica.src = URL.createObjectURL(arquivo);
        musica.load();
        musica.style.display = "block";
        youtubeContainer.innerHTML = "";
    }
});

const musicaLinkInput = document.getElementById("musicaLink");
const carregarMusicaBtn = document.getElementById("carregarMusica");

carregarMusicaBtn.addEventListener("click", () => {
    const url = musicaLinkInput.value.trim();
    if (url) {
        musica.src = url;
        musica.load();
        musica.style.display = "block";
        youtubeContainer.innerHTML = "";
    }
});

const youtubeInput = document.getElementById("youtubeLink");
const carregarYoutubeBtn = document.getElementById("carregarYoutube");

carregarYoutubeBtn.addEventListener("click", () => {
    const link = youtubeInput.value.trim();
    if (link) {
        let videoId = null;
        if (link.includes("youtube.com/watch?v=")) {
            videoId = link.split("v=")[1].split("&")[0];
        } else if (link.includes("youtu.be/")) {
            videoId = link.split("youtu.be/")[1].split("?")[0];
        }

        if (videoId) {
            youtubeContainer.innerHTML = `<iframe width="300" height="80" 
            src="https://www.youtube.com/embed/${videoId}?autoplay=0" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            musica.src = "";
        } else {
            alert("Link do YouTube inválido!");
        }
    }
});

// === Senha no final ===
const senhaCorreta = "Roblox"; // Defina a senha desejada
const senhaInput = document.getElementById("senhaInput");
const verificarBtn = document.getElementById("verificarSenha");
const enviarBtn = document.getElementById("enviarCarta");

enviarBtn.disabled = true; // botão só habilita após senha correta

verificarBtn.addEventListener("click", () => {
    if (senhaInput.value.trim() === senhaCorreta) {
        alert("Parabéns! Você desbloqueou a cartinha! 😄");
        enviarBtn.disabled = false; // habilita enviar
    } else {
        alert("Eita, senhorita! Você errou a senha! 😄");
    }
});

// === Botão enviar (simulação) ===
enviarBtn.addEventListener("click", () => {
    const titulo = document.getElementById("titulo").value;
    const remetente = document.getElementById("remetente").value;
    const momentos = [
        document.getElementById("momento1").value,
        document.getElementById("momento2").value,
        document.getElementById("momento3").value,
        document.getElementById("momento4").value,
        document.getElementById("momento5").value
    ];

    alert(
        `Cartinha enviada!\n\nTítulo: ${titulo}\nDe: ${remetente}\nMomentos:\n${momentos.join("\n")}`
    );
});