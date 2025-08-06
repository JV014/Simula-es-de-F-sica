const simulacoes = [
  {
    titulo: "Sistema Massa-Mola (MHS)",
    categoria: "mhs",
    descricao: "O sistema massa-mola simples ilustra o movimento harmônico simples, onde uma massa conectada a uma mola ideal oscila devido à força restauradora da mola (Lei de Hooke) e à inércia da massa. Esse movimento repetitivo possui amplitude e período constantes, dependendo apenas da massa e da constante elástica da mola. Apesar de sua simplicidade, o sistema serve como modelo para diversos fenômenos oscilatórios na física.",
    link: "https://www.glowscript.org/#/user/joaov1385/folder/MyPrograms/program/Oscila%C3%A7%C3%B5es"
  },
  {
    titulo: "Pêndulo Simples (MHS)",
    categoria: "mhs",
    descricao: "O pêndulo simples consiste em uma massa (pontual) suspensa por um fio ideal (inextensível e sem massa) que oscila sob a ação da gravidade. Deslocado de sua posição de equilíbrio, a força gravitacional age como força restauradora, tendendo a trazê-lo de volta. Para pequenas oscilações (pequenos ângulos), o movimento do pêndulo simples é aproximadamente harmônico simples, com um período que depende apenas do comprimento do fio e da aceleração da gravidade, sendo independente da massa e da amplitude (para pequenas amplitudes).",
    link: "https://www.glowscript.org/#/user/joaov1385/folder/MyPrograms/program/P%C3%AAnduloSimples"
  },
  {
    titulo: "Oscilação Amortecida",
    categoria: "mhs",
    descricao: "Oscilações amortecidas são oscilações mecânicas onde a amplitude diminui com o tempo devido a forças dissipativas como atrito ou resistência do ar. O movimento oscilatório é gradualmente atenuado até que o sistema atinge o repouso.",
    link: "https://www.glowscript.org/#/user/joaov1385/folder/MyPrograms/program/SimuladorMHS-ADAPTADO"
  },
  {
    titulo: "Lançamento Oblíquo",
    categoria: "cinemática",
    descricao: "O lançamento oblíquo combina movimento horizontal constante e vertical uniformemente variado sob a gravidade, resultando numa trajetória parabólica. A velocidade inicial tem componentes horizontal (alcance) e vertical (altura máxima e tempo de voo). O ângulo de lançamento influencia significativamente a trajetória, com 45 graus geralmente otimizando o alcance. Essencial em esportes e tecnologia, sua análise matemática permite previsões precisas.",
    link: "https://www.glowscript.org/#/user/joaov1385/folder/MyPrograms/program/movimentoobliquo"
  },
  {
    titulo: "Movimento Circular",
    categoria: "cinemática",
    descricao: "No movimento circular uniforme, embora a velocidade escalar seja constante, a velocidade vetorial muda continuamente devido à alteração na direção do movimento. Essa mudança de direção implica a existência de uma aceleração centrípeta, sempre direcionada para o centro da circunferência, responsável por manter o objeto na trajetória circular. A força que causa essa aceleração é chamada de força centrípeta.",
    link: "https://www.glowscript.org/#/user/joaov1385/folder/MyPrograms/program/MovimentoCircular"
  },
  {
    titulo: "Corrida",
    categoria: "cinemática",
    descricao: "Aplicação simples do Movimento Uniforme e Uniformemente Variado com corrida de bolinhas. Quem irá vencer? Dica: Observe o gráfico!",
    link: "https://www.glowscript.org/#/user/joaov1385/folder/MyPrograms/program/MUeMUV"
  },
  {
    titulo: "Oscilações Acopladas",
    categoria: "mhs",
    descricao: "Oscilações acopladas ocorrem quando dois ou mais sistemas oscilatórios interagem, trocando energia entre si. Essa interação leva a um comportamento mais complexo do que oscilações isoladas, resultando em novos modos de oscilação e frequências características do sistema acoplado como um todo.",
    link: "https://www.glowscript.org/#/user/joaov1385/folder/MyPrograms/program/Oscila%C3%A7%C3%B5es-acopladas"
  },
  {
    titulo: "Detector de Eclipses e Estações do ano",
    categoria: "astronomia",
    descricao: "Demonstração de como ocorrem os eclipses e as estações do ano.",
    link: "https://www.glowscript.org/#/user/joaov1385/folder/MyPrograms/program/Eclipses+Esta%C3%A7%C3%A3o"
  },
  {
    titulo: "Detector de Eclipses",
    categoria: "astronomia",
    descricao: "Simulação da órbita elíptica da Lua com inclinação em relação a eclíptica.",
    link: "https://www.glowscript.org/#/user/joaov1385/folder/MyPrograms/program/Eclipsesavan%C3%A7ado"
  },
  {
    titulo: "Fases da Lua",
    categoria: "astronomia",
    descricao: "Simulação das fases da Lua levando em consideração sua órbita elíptica da com inclinação em relação a eclíptica.",
    link: "https://www.glowscript.org/#/user/joaov1385/folder/MyPrograms/program/Eclipsesavan%C3%A7ado"
  },
  {
    titulo: "Sistema Solar",
    categoria: "astronomia",
    descricao: "O movimento planetário descreve o deslocamento dos planetas e outros corpos celestes (como asteroides e cometas) ao redor de uma estrela central, como o Sol em nosso Sistema Solar. As leis que governam esse movimento foram fundamentalmente estabelecidas por Johannes Kepler e Isaac Newton.",
    link: "https://www.glowscript.org/#/user/joaov1385/folder/MyPrograms/program/Movimentoplanet%C3%A1rio5"
  },
  {
    titulo: "Sistema Massa-Mola (MHS Amortecido)",
    categoria: "mhs",
    descricao: "O Movimento Harmônico Simples Amortecido (MHSA) descreve um sistema oscilatório onde uma força de amortecimento, geralmente proporcional à velocidade, dissipa energia mecânica ao longo do tempo, fazendo com que a amplitude das oscilações diminua gradualmente até cessar.",
    link: "https://www.glowscript.org/#/user/joaov1385/folder/MyPrograms/program/MHSAMORTECIDO"
  },
];

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

