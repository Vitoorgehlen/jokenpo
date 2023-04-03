/* teste som
testando som
12
*/
const rockPlayer = document.getElementById("rock-player");
const paperPlayer = document.getElementById("paper-player");
const scissorsPlayer = document.getElementById("scissors-player");
const lizardPlayer = document.getElementById("lizard-player");
const spockPlayer = document.getElementById("spock-player");

const rockCpu = document.getElementById("rock-cpu");
const paperCpu = document.getElementById("paper-cpu");
const scissorsCpu = document.getElementById("scissors-cpu");
const lizardCpu = document.getElementById("lizard-cpu");
const spockCpu = document.getElementById("spock-cpu");

const scorePlayer = document.getElementById("score-player");
const scoreCPU = document.getElementById("score-cpu");

let playerWins = 0;
let cpuWins = 0;
let isGameOver = false;

function jogadaCPU() {
  let moveCPU = Math.round(Math.random() * (5 - 1) + 1);
  if (moveCPU === 1) {
    rockCpu.classList.add("ativado");
  }
  if (moveCPU === 2) {
    paperCpu.classList.add("ativado");
  }
  if (moveCPU === 3) {
    scissorsCpu.classList.add("ativado");
  }
  if (moveCPU === 4) {
    lizardCpu.classList.add("ativado");
  }
  if (moveCPU === 5) {
    spockCpu.classList.add("ativado");
  }
  return moveCPU;
}

function jogadaPlayer(valorDoBotao) {
  isGameOver = true;
  winningMoves(valorDoBotao, jogadaCPU());
  setTimeout(() => {
    encerrarJogo();
  }, 1000);
}

function winningMoves(movePlayer, moveCPU) {
  switch (movePlayer) {
    case 1:
      if (moveCPU === 3 || moveCPU === 4) {
        playerWins = playerWins + 1;
        scorePlayer.innerText = playerWins;
      }
      if (moveCPU === 2 || moveCPU === 5) {
        cpuWins = cpuWins + 1;
        scoreCPU.innerText = cpuWins;
      }
      break;

    case 2:
      if (moveCPU === 1 || moveCPU === 5) {
        playerWins = playerWins + 1;
        scorePlayer.innerText = playerWins;
      }
      if (moveCPU === 3 || moveCPU === 4) {
        cpuWins = cpuWins + 1;
        scoreCPU.innerText = cpuWins;
      }
      break;

    case 3:
      if (moveCPU === 2 || moveCPU === 4) {
        playerWins = playerWins + 1;
        scorePlayer.innerText = playerWins;
      }
      if (moveCPU === 1 || moveCPU === 5) {
        cpuWins = cpuWins + 1;
        scoreCPU.innerText = cpuWins;
      }
      break;

    case 4:
      if (moveCPU === 2 || moveCPU === 5) {
        playerWins = playerWins + 1;
        scorePlayer.innerText = playerWins;
      }
      if (moveCPU === 1 || moveCPU === 3) {
        cpuWins = cpuWins + 1;
        scoreCPU.innerText = cpuWins;
      }
      break;

    case 5:
      if (moveCPU === 1 || moveCPU === 3) {
        playerWins = playerWins + 1;
        scorePlayer.innerText = playerWins;
      }
      if (moveCPU === 2 || moveCPU === 4) {
        cpuWins = cpuWins + 1;
        scoreCPU.innerText = cpuWins;
      }
      break;
    default:
      break;
  }
}

function encerrarJogo() {
  rockPlayer.classList.remove("ativado");
  paperPlayer.classList.remove("ativado");
  scissorsPlayer.classList.remove("ativado");
  lizardPlayer.classList.remove("ativado");
  spockPlayer.classList.remove("ativado");

  rockCpu.classList.remove("ativado");
  paperCpu.classList.remove("ativado");
  scissorsCpu.classList.remove("ativado");
  lizardCpu.classList.remove("ativado");
  spockCpu.classList.remove("ativado");

  isGameOver = false;
}

rockPlayer.addEventListener("click", () => {
  if (!isGameOver) {
    rockPlayer.classList.add("ativado");
    jogadaPlayer(1);
  }
});
paperPlayer.addEventListener("click", () => {
  if (!isGameOver) {
    paperPlayer.classList.add("ativado");
    jogadaPlayer(2);
  }
});
scissorsPlayer.addEventListener("click", () => {
  if (!isGameOver) {
    scissorsPlayer.classList.add("ativado");
    jogadaPlayer(3);
  }
});
lizardPlayer.addEventListener("click", () => {
  if (!isGameOver) {
    lizardPlayer.classList.add("ativado");
    jogadaPlayer(4);
  }
});
spockPlayer.addEventListener("click", () => {
  if (!isGameOver) {
    spockPlayer.classList.add("ativado");
    jogadaPlayer(5);
  }
});
