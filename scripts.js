const papel = document.querySelector("#papel");
const pedra = document.querySelector("#pedra");
const tesoura = document.querySelector("#tesoura");
const jogar = document.querySelector(".jogar");
const reset = document.querySelector(".reset");

let value;
const valorComputer = Math.floor(Math.random() * 3);
const resetGame = () => {
  jogar.style.display = "block";
  reset.style.display = "none";
  pedra.disabled = false;
  papel.disabled = false;
  tesoura.disabled = false;
  location.reload();
};

const game = () => {
  jogar.style.display = "none";
  reset.style.display = "block";

  papel.addEventListener("click", () => {
    papel.style.border = "3px solid black";
    value = 0;
    if (valorComputer === 0) {
      resultado(" Voce Empatou o jogo 👆");
      arrowResult(".elementPapel");
      pedra.disabled = true;
      papel.disabled = true;
      tesoura.disabled = true;
    } else if (valorComputer === 1) {
      resultado("Voce Ganhou o jogo 😄😄😄😄😄😄");
      arrowResult(".elementPedra");
      pedra.disabled = true;
      papel.disabled = true;
      tesoura.disabled = true;
    } else {
      resultado("Voce Perdeu o jogo, tente novamente !!!");
      arrowResult(".elementTesoura");
      pedra.disabled = true;
      papel.disabled = true;
      tesoura.disabled = true;
    }
  });
  pedra.addEventListener("click", () => {
    pedra.style.border = "3px solid black";
    value = 1;
    if (valorComputer === 1) {
      resultado(" Voce Empatou o jogo 👆");
      arrowResult(".elementPedra");
    } else if (valorComputer === 0) {
      resultado("Voce Perdeu o jogo, tente novamente !!!");
      arrowResult(".elementPapel");
    } else {
      resultado("Voce Ganhou o jogo 😄😄😄😄😄😄");
      arrowResult(".elementTesoura");
    }
  });
  tesoura.addEventListener("click", () => {
    tesoura.style.border = "3px solid black";
    value = 2;
    if (valorComputer === 2) {
      resultado(" Voce Empatou o jogo 👆");
      arrowResult(".elementTesoura");
    } else if (valorComputer === 1) {
      resultado("Voce Perdeu o jogo, tente novamente !!!");
      arrowResult(".elementPedra");
    } else {
      resultado("Voce Ganhou o jogo 😄😄😄😄😄😄");
      arrowResult(".elementPapel");
    }
  });
};
console.log(valorComputer);

jogar.addEventListener("click", game);
reset.addEventListener("click", resetGame);

const resultado = (text) => {
  const div = document.querySelector(".result");
  const p = document.createElement("p");
  p.innerHTML = text;
  div.appendChild(p);
};

const arrowResult = (element) => {
  const hand = document.querySelector(element);
  const arrow = document.createElement("i");
  arrow.classList.add("fas");
  arrow.classList.add("fa-arrow-left");
  arrow.style.fontSize = "50px";
  hand.appendChild(arrow);
};
