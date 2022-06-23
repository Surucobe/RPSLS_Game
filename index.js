const images = document.querySelectorAll('.icon-player');
const $player = document.querySelector('.player-score > span');
const $computer = document.querySelector('.computer-score > span');

let player = 0;
let computer = 0;


images.forEach(img => {
  img.addEventListener('click', (event) => {
    playRound(playerChoice(event.target.id), computerPlay())
    return console.log(event.target.id)
  })
})

const printResult = (cont, num) => {
  cont.innerHTML = num;
}

const declareWinner = () => {
  if (player == 3) {
    alert('You are a winner!')
    printResult($player, player = 0)
    printResult($computer, computer = 0)
  } else if (computer == 3) {
    alert('You loose...')
    printResult($player, player = 0)
    printResult($computer, computer = 0)
  }
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection == computerSelection) {
    return alert("it's a tie");
  }

  // player chooses rock
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    alert(`${playerSelection} beats ${computerSelection}\nPlayer Wins`);
    player++;
    printResult($player, player);
    declareWinner();
    return
  } else if (playerSelection == 'rock' && computerSelection == 'lizard') {
    alert(`${playerSelection} beats ${computerSelection}\nPlayer Wins`);
    player++;
    printResult($player, player);
    declareWinner();
    return
  } else if (playerSelection == 'rock' && computerSelection == 'spock') {
    alert(`${computerSelection} beats ${playerSelection}\nComputer Wins`);
    computer++;
    printResult($computer, computer);
    declareWinner();
    return
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    alert(`${computerSelection} beats ${playerSelection}\nComputer Wins`);
    computer++;
    printResult($computer, computer);
    declareWinner();
    return
  }

  // player chooses paper
  if (playerSelection == 'paper' && computerSelection == 'rock') {
    alert(`${playerSelection} beats ${computerSelection}\nPlayer Wins`);
    player++;
    printResult($player, player);
    declareWinner();
    return
  } else if (playerSelection == 'paper' && computerSelection == 'spock') {
    alert(`${playerSelection} beats ${computerSelection}\nPlayer Wins`);
    player++;
    printResult($player, player);
    declareWinner();
    return
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    alert(`${computerSelection} beats ${playerSelection}\nComputer Wins`);
    computer++;
    printResult($computer, computer);
    declareWinner();
    return
  } else if (playerSelection == 'paper' && computerSelection == 'lizard') {
    alert(`${computerSelection} beats ${playerSelection}\nComputer Wins`);
    computer++;
    printResult($computer, computer);
    declareWinner();
    return
  }

  // player chooses scissors
  if (playerSelection == 'scissors' && computerSelection == 'paper') {
    alert(`${playerSelection} beats ${computerSelection}\nPlayer Wins`);
    player++;
    printResult($player, player);
    declareWinner();
    return
  } else if (playerSelection == 'scissors' && computerSelection == 'lizard') {
    alert(`${playerSelection} beats ${computerSelection}\nPlayer Wins`);
    player++;
    printResult($player, player);
    declareWinner();
    return
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    alert(`${computerSelection} beats ${playerSelection}\nComputer Wins`);
    computer++;
    printResult($computer, computer);
    declareWinner();
    return
  } else if (playerSelection == 'scissors' && computerSelection == 'spock') {
    alert(`${computerSelection} beats ${playerSelection}\nPlayer Wins`);
    computer++;
    printResult($computer, computer);
    declareWinner();
    return
  }

  // player chooses spock
  if (playerSelection == 'spock' && computerSelection == 'rock') {
    alert(`${playerSelection} beats ${computerSelection}\nPlayer Wins`);
    player++;
    printResult($player, player);
    declareWinner();
    return
  } else if (playerSelection == 'spock' && computerSelection == 'scissors') {
    alert(`${playerSelection} beats ${computerSelection}\nPlayer Wins`);
    player++;
    printResult($player, player);
    declareWinner();
    return
  } else if (playerSelection == 'spock' && computerSelection == 'lizard') {
    alert(`${computerSelection} beats ${playerSelection}\nPlayer Wins`);
    computer++;
    printResult($computer, computer);
    declareWinner();
    return
  } else if (playerSelection == 'spock' && computerSelection == 'paper') {
    alert(`${computerSelection} beats ${playerSelection}\nPlayer Wins`);
    computer++;
    printResult($computer, computer);
    declareWinner();
    return
  }

  //player chooses lizard
  if (playerSelection == 'lizard' && computerSelection == 'spock') {
    alert(`${playerSelection} beats ${computerSelection}\nPlayer Wins`);
    player++;
    printResult($player, player);
    declareWinner();
    return
  } else if (playerSelection == 'lizard' && computerSelection == 'paper') {
    alert(`${playerSelection} beats ${computerSelection}\nPlayer Wins`);
    player++;
    printResult($player, player);
    declareWinner();
    return
  } else if (playerSelection == 'lizard' && computerSelection == 'scissors') {
    alert(`${computerSelection} beats ${playerSelection}\nPlayer Wins`);
    computer++;
    printResult($computer, computer);
    declareWinner();
    return
  } else if (playerSelection == 'lizard' && computerSelection == 'rock') {
    alert(`${computerSelection} beats ${playerSelection}\nPlayer Wins`);
    computer++;
    printResult($computer, computer);
    declareWinner();
    return
  }
}
// debugger

const playerChoice = (input) => {
  // let choice = prompt('Pick your choice');
  let choice = input;

  switch (choice) {
    case 'rock':
      choice = 'rock';
      break

    case 'paper':
      choice = 'paper';
      break;

    case 'scissors':
      choice = 'scissors';
      break;
    case 'lizard':
      choice = 'lizard';
      break
    case 'spock':
      choice = 'spock'
      break

    default:
      alert('not a valid option');
      playerChoice();
      break;
  }

  return choice;

}

function computerPlay() {
  const choice = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

  return choice[Math.floor(Math.random() * 5)];
}


function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerChoice();
    const computerSelection = computerPlay();

    playRound(playerSelection, computerSelection)
  }

  if (player > computer) {
    return 'Player wins'
  } else {
    return 'Computer wins'
  }
}

const startGame = () => console.log(game());