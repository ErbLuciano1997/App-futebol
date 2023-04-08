const listaJogadores = [
  {
    nome: "Erb Luciano",
    idade: 50,
    pais: "Brasil",
    estado: "Pernambuco",
    posicao: "Atacante",
    sigla: "CA",
    gols: 5,
    passes: 4,
    fotoJogador: "img/atualizada-removebg-preview.png",
    fotoPais: "img/brazil-flag-with-grunge-texture-png.png",
    fotoEstado: "img/bandeira-do-estado-de-pernambuco.png",
    nivel: 95,
    fisico: 90,
    chute: 85,
    velocidade: 89,
    forca: 77,
    drible: 92,
    defesa: 56,
    resistencia: 90
  },
  {
    nome: "Erb Filho",
    idade: 25,
    pais: "Brasil",
    estado: "Pernambuco",
    posicao: "Meio Campo",
    sigla: "MEI",
    gols: 8,
    passes: 15,
    fotoJogador: "img/erbinho_img.png",
    fotoPais: "img/brazil-flag-with-grunge-texture-png.png",
    fotoEstado: "img/bandeira-do-estado-de-pernambuco.png",
    nivel: 85,
    fisico: 95,
    chute: 97,
    velocidade: 90,
    forca: 91,
    drible: 80,
    defesa: 70,
    resistencia: 92
  },
  {
    nome: "Allan Rodrigo",
    idade: 38,
    pais: "Brasil",
    estado: "Pernambuco",
    posicao: "Atacante",
    sigla: "CA",
    gols: 18,
    passes: 2,
    fotoJogador: "img/allan_img.png",
    fotoPais: "img/brazil-flag-with-grunge-texture-png.png",
    fotoEstado: "img/bandeira-do-estado-de-pernambuco.png",
    nivel: 81,
    fisico: 72,
    chute: 80,
    velocidade: 70,
    forca: 90,
    drible: 75,
    defesa: 60,
    resistencia: 60
  },
  {
    nome: "Allyson César",
    idade: 36,
    pais: "Brasil",
    estado: "Pernambuco",
    posicao: "Meio Campo",
    sigla: "MEI",
    gols: 4,
    passes: 21,
    fotoJogador: "img/allyson_img.png",
    fotoPais: "img/brazil-flag-with-grunge-texture-png.png",
    fotoEstado: "img/bandeira-do-estado-de-pernambuco.png",
    nivel: 82,
    fisico: 85,
    chute: 82,
    velocidade: 79,
    forca: 99,
    drible: 89,
    defesa: 42,
    resistencia: 93
  },
  {
    nome: "Pedro Henrique",
    idade: 22,
    pais: "Brasil",
    estado: "Pernambuco",
    posicao: "Zagueiro",
    sigla: "ZAG",
    gols: 2,
    passes: 3,
    fotoJogador: "img/pedrinho_img.png",
    fotoPais: "img/brazil-flag-with-grunge-texture-png.png",
    fotoEstado: "img/bandeira-do-estado-de-pernambuco.png",
    nivel: 90,
    fisico: 90,
    chute: 80,
    velocidade: 90,
    forca: 83,
    drible: 92,
    defesa: 96,
    resistencia: 84
  },
  {
    nome: "Douglas Weslley",
    idade: 15,
    pais: "Brasil",
    estado: "Pernambuco",
    posicao: "Ponta Esquerda",
    sigla: "PTE",
    gols: 12,
    passes: 15,
    fotoJogador: "img/douglinhas_img.png",
    fotoPais: "img/brazil-flag-with-grunge-texture-png.png",
    fotoEstado: "img/bandeira-do-estado-de-pernambuco.png",
    nivel: 85,
    fisico: 80,
    chute: 81,
    velocidade: 92,
    forca: 75,
    drible: 93,
    defesa: 58,
    resistencia: 78
  },
];

function atualizarListaJogadores() {

  const listaHtmlJogadores = listaJogadores.map((jogador) => {
    return ` <div class="fut-player-card m-2 col-lg-3 col-md-4 col-xs-12">
      <div class="player-card-top">
        <div class="player-master-info">
          <div class="player-rating">
            <span>${jogador.nivel}</span>
          </div>
          <div class="player-position">
            <span>${jogador.posicao}</span>
          </div>
          <div class="player-nation">
            <img
              src="${jogador.fotoPais}"
              alt="${jogador.pais}"
              draggable="false"
            />
          </div>
          <div class="player-club">
            <img
              src="${jogador.fotoEstado}"
              alt="${jogador.estado}"
              draggable="false"
            />
          </div>
        </div>
        <div class="player-picture">
          <img
            src="${jogador.fotoJogador}"
            alt="${jogador.nome}"
            draggable="false"
          />
          <div class="player-extra">
            <span>${jogador.gols}*GOLS</span>
            <span>${jogador.passes}*ASS</span>
          </div>
        </div>
      </div>
      <div class="player-card-bottom">
        <div class="player-info">
          <!-- Player Name-->
          <div class="player-name">
            <span>${jogador.nome}</span>
          </div>
          <!-- Player Features-->
          <div class="player-features">
            <div class="player-features-col">
              <span>
                <div class="player-feature-value">${jogador.fisico}</div>
                <div class="player-feature-title">FIS</div>
              </span>
              <span>
                <div class="player-feature-value">${jogador.chute}</div>
                <div class="player-feature-title">CHU</div>
              </span>
              <span>
                <div class="player-feature-value">${jogador.drible}</div>
                <div class="player-feature-title">PAS</div>
              </span>
            </div>
            <div class="player-features-col">
              <span>
                <div class="player-feature-value">${jogador.forca}</div>
                <div class="player-feature-title">FOR</div>
              </span>
              <span>
                <div class="player-feature-value">${jogador.defesa}</div>
                <div class="player-feature-title">DEF</div>
              </span>
              <span>
                <div class="player-feature-value">${jogador.velocidade}</div>
                <div class="player-feature-title">VEL</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  });

  const jogadoresDiv = document.getElementById("jogadores");
  jogadoresDiv.innerHTML = listaHtmlJogadores.join("");
}
atualizarListaJogadores();


