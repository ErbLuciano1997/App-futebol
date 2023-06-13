var jogadores = [];

      document
        .getElementById("btn-adicionar")
        .addEventListener("click", function () {
          var jogadorInput = document.getElementById("input-jogador");
          var jogador = jogadorInput.value.trim();

          if (jogador !== "") {
            jogadores.push(jogador);
            jogadorInput.value = ""; // Limpa o campo de entrada
            jogadorInput.focus();
            atualizarJogadores();
          }
        });

      document
        .getElementById("btn-sortear")
        .addEventListener("click", function () {
          if (jogadores.length === 10) {
            sortearGrupos();
          } else {
            alert(
              "É necessário adicionar 10 jogadores antes de sortear os grupos."
            );
          }
        });

      function atualizarJogadores() {
        var jogadoresList = document.getElementById("jogadores-list");
        jogadoresList.innerHTML = "";

        jogadores.forEach(function (jogador) {
          var listItem = document.createElement("li");
          listItem.textContent = jogador;
          jogadoresList.appendChild(listItem);
        });

        if (jogadores.length === 10) {
          document.getElementById("btn-sortear").style.display = "";
        }
      }

      function sortearGrupos() {
        var grupo1 = [];
        var grupo2 = [];

        while (jogadores.length > 0) {
          var randomIndex = Math.floor(Math.random() * jogadores.length);
          var jogador = jogadores.splice(randomIndex, 1)[0];

          if (grupo1.length < 5) {
            grupo1.push(jogador);
          } else {
            grupo2.push(jogador);
          }
        }

        exibirGrupos(grupo1, grupo2);
      }

      function exibirGrupos(grupo1, grupo2) {
        var grupo1List = document.getElementById("grupo1");
        var grupo2List = document.getElementById("grupo2");

        grupo1List.innerHTML = "";
        grupo2List.innerHTML = "";

        grupo1.forEach(function (jogador) {
          var listItem = document.createElement("li");
          listItem.textContent = jogador;
          grupo1List.appendChild(listItem);
        });

        grupo2.forEach(function (jogador) {
          var listItem = document.createElement("li");
          listItem.textContent = jogador;
          grupo2List.appendChild(listItem);
        });
      }