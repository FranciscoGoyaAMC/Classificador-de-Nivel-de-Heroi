let nome = prompt("Digite o nome do herói: ");
let xp = parseInt(prompt("Digite a quantidade de XP do herói: "));
let nivel = "";

if (xp <= 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if (xp <= 5000) {
    nivel = "Prata";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "Platina Diamante";
} else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

let mensagem = `O herói de nome ${nome} está no nível ${nivel} com ${xp} XP.`;

console.log(mensagem);
