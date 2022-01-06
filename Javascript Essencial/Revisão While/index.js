let spaceshipName = prompt("Como se chama a espaçonave?");

console.log(spaceshipName);

let chosenOption = "";

let warp = 0;

chosenOption = prompt ("Deseja entrar na Dobra epsacial?\n1.Sim\n2.Não");

while (chosenOption == "1") {
    warp += 1
    chosenOption = prompt("Deseja entrar na próxima Dobra epsacial?\n1.Sim\n2.Não")
} 


alert("Nome da nave: " + spaceshipName + "\nNúmero de dobras: " + warp);