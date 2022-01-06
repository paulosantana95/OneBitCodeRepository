let spaceshipName = prompt("Olá Piloto! Qual será o nome da nave?");

let spaceshipVelocity = 0;

let chosenOption = "";

function navMenu() {
    let option;
    while (option != "1" && option != "2" && option != "3" && option != "4"){
        option = prompt("O que dseja fazer?\n1.Acelerar\n2.desacelerar\n3.Dados de bordo\n4.Sair")
    }
    return option;
}

do {
    chosenOption = navMenu();
    switch(chosenOption){
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity);
            break;
        case "2":
            spaceshipVelocity = speedDown(spaceshipVelocity);
            break;
        case "3":
            printSpaceship(spaceshipName, spaceshipVelocity);
            break;
        default:
            alert("Encerrando programa de bordo.");
    }
} while(chosenOption != "4");


function speedUp(velocity) {
    let newVelocity = velocity + 5;
    return newVelocity;
};

function speedDown(velocity) {
    let newVelocity = velocity - 5;
    if (newVelocity < 0) {
        newVelocity = 0;
    };
    return newVelocity;
};

function printSpaceship (name, velocity) {
    alert("Espaçonave: " + name + "\nVelocidade: " + velocity + "km/s");
};