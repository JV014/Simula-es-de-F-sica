const simulacoes = [
  {
    titulo: "Sistema Massa-Mola",
    categoria: "mhs",
    descricao: "O sistema massa-mola ilustra o movimento harmônico simples, onde uma massa conectada a uma mola ideal oscila devido à força restauradora da mola (Lei de Hooke) e à inércia da massa. Esse movimento repetitivo possui amplitude e período constantes, dependendo apenas da massa e da constante elástica da mola. Apesar de sua simplicidade, o sistema serve como modelo para diversos fenômenos oscilatórios na física. É incluso neste simulador controles deslizantes que permite considerar forças dissipativas, definindo-se o amortecimento. As scilações amortecidas são oscilações mecânicas onde a amplitude diminui com o tempo devido a forças dissipativas como atrito ou resistência do ar.",
    link: "https://www.glowscript.org/#/user/joaov1385/folder/MyPrograms/program/Sistemamassa-molaLVA"
  },
  {
    titulo: "Pêndulo",
    categoria: "mhs",
    descricao: "O pêndulo simples consiste em uma massa (pontual) suspensa por um fio ideal (inextensível e sem massa) que oscila sob a ação da gravidade. Deslocado de sua posição de equilíbrio, a força gravitacional age como força restauradora, tendendo a trazê-lo de volta. Para pequenas oscilações (pequenos ângulos), o movimento do pêndulo simples é aproximadamente harmônico simples, com um período que depende apenas do comprimento do fio e da aceleração da gravidade, sendo independente da massa e da amplitude (para pequenas amplitudes). É incluso neste simulador controles deslizantes que permite considerar forças dissipativas, definindo-se o amortecimento. As scilações amortecidas são oscilações mecânicas onde a amplitude diminui com o tempo devido a forças dissipativas como atrito ou resistência do ar.",
    link: "https://www.glowscript.org/#/user/joaov1385/folder/MyPrograms/program/P%C3%AAnduloSimples"
  };

function filtrarSimulacoes() {
  const categoria = document.getElementById("categoria").value;
  const container = document.getElementById("lista-simulacoes");
  container.innerHTML = "";

  simulacoes.forEach(sim => {
    if (categoria === "todas" || sim.categoria === categoria) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>${sim.titulo}</h2>
        <p>${sim.descricao}</p>
        <a href="${sim.link}" target="_blank">Ir para a simulação</a>
      `;
      container.appendChild(card);
    }
  });
}

filtrarSimulacoes(); // Inicializa com todas as simulações


