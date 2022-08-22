function start() {
  let hand = prompt("Escolha, pedra, papel ou tesoura?").trim().toLowerCase();
  let oponentHand;

  // if checkHand !== pedra/papel/tesoura return false
  let checkHand =
    hand.includes("pedra") ||
    hand.includes("papel") ||
    hand.includes("tesoura");

  // hand !== string
  while (checkHand != true) {
    alert("Por favor insira pedra, papel ou tesoura.");
    hand = prompt("pedra, papel ou tesoura?").trim().toLowerCase();
    checkHand =
      hand.includes("pedra") ||
      hand.includes("papel") ||
      hand.includes("tesoura");
  }

  // random number between 0 and 2
  let randomNum = Math.floor(Math.random() * 3);

  // take the random number and asign to a string
  switch (randomNum) {
    case 0:
      oponentHand = "pedra";
      break;
    case 1:
      oponentHand = "tesoura";
      break;
    case 2:
      oponentHand = "papel";
      break;
  }

  // check the winner hand
  if (oponentHand === hand) {
    alert("Empate");
  } else if (
    (oponentHand === "tesoura" && hand === "papel") ||
    (oponentHand === "pedra" && hand === "tesoura")
  ) {
    alert("Oponente ganhou");
  } else {
    alert("Jogador ganhou");
  }
}

start();

let response = prompt("Quer jogar novamente \nsim \nnão")
  .trim()
  .toLowerCase()
  .slice(0, 1);

let checkResponse = response.includes("s") || response.includes("n");

while (checkResponse === true && response === "s") {
  start();
  response = prompt("Quer jogar novamente \nsim \nnão")
    .trim()
    .toLowerCase()
    .slice(0, 1);
  checkResponse = response.includes("s") || response.includes("n");
}

alert("thanks for playing");
