let nomeHeroi = "Thor";
let xpHeroi = 2000
; // Exemplo de XP, você pode alterar para testar diferentes faixas
let nivelHeroi = "";

// Estrutura de decisão para determinar o nível do herói
if (xpHeroi < 1000) {
  nivelHeroi = "Ferro";
} else if (xpHeroi <= 2000) {
  nivelHeroi = "Bronze";
} else if (xpHeroi <= 5000) {
  nivelHeroi = "Prata";
} else if (xpHeroi <= 7000) {
  nivelHeroi = "Ouro";
} else if (xpHeroi <= 8000) {
  nivelHeroi = "Platina";
} else if (xpHeroi <= 9000) {
  nivelHeroi = "Ascendente";
} else if (xpHeroi <= 10000) {
  nivelHeroi = "Imortal";
} else {
  nivelHeroi = "Radiante";
}

// Saída concatenada
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
