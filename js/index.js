function startHearts() {
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💗';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + 's';

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
  }

  setInterval(createHeart, 200);
}

if (window.cordova) {
  document.addEventListener('deviceready', startHearts, false);
} else {
  window.addEventListener('load', startHearts);
}


 // Data de início do amor 💖 (formato: ano, mês (0-11), dia, hora, minuto, segundo)
    const dataInicial = new Date(2024, 7, 29, 15, 30, 20); // Exemplo: 1 de maio de 2023 às 10:00

    function atualizarMensagem() {
      const agora = new Date();
      const diferenca = agora - dataInicial;

      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
      const segundos = Math.floor((diferenca / 1000) % 60);

      document.getElementById("mensagem").innerHTML = 
        `Eu te amo há ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos. 💖`;
    }

    atualizarMensagem(); // Chama uma vez imediatamente
    setInterval(atualizarMensagem, 1000); // Atualiza a cada segundo