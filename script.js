// Função para criar spam na tela
function createSpam() {
  const spamCount = 50; // Quantas mensagens
  for(let i = 0; i < spamCount; i++) {
    const span = document.createElement('span');
    span.textContent = 'you are an idiot';
    span.style.position = 'fixed';
    span.style.left = Math.random() * window.innerWidth + 'px';
    span.style.top = Math.random() * window.innerHeight + 'px';
    span.style.color = '#ff0000';
    span.style.fontWeight = 'bold';
    span.style.fontSize = (12 + Math.random() * 20) + 'px';
    span.style.userSelect = 'none';
    span.style.pointerEvents = 'none';
    span.style.zIndex = '9999';
    span.style.opacity = 0.7 + Math.random() * 0.3;
    span.style.textShadow = '0 0 5px red';
    document.body.appendChild(span);
  }
}

function startJumpscare() {
  const audio = document.getElementById("screamer");
  setTimeout(() => {
    audio.play();
    document.body.style.backgroundColor = "#300";
    document.body.style.transition = "background-color 0.2s";
    createSpam(); // chama o spam após o grito
  }, 1000);
}