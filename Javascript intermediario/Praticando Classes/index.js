class Spaceship {
    constructor(name, crewQuantity){
        this.name = name;
        this.crewQuantity = crewQuantity;
        this.isHitched = false;
        this.entraceDoorsOpen = false;
    };
    hich (){
        this.isHitched = true;
        this.entraceDoorsOpen = true;
    };
};

function showMenu () {
    let chosenOption;
    while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt(  "O que você deseja fazer?\n" +
                                "1.Engatar a nave\n" +
                                "2.Imprimir naves\n" +
                                "3.Sair" );
    };
    return chosenOption;
};

function createSpaceship (){
    let spaceshipName = prompt("Informe o nome da nave:");
    let crewQuantity = prompt ("Informe o número de tripulantes:");
    let spaceship = new Spaceship (spaceshipName, crewQuantity);
    return spaceship;
};

function printSpaceships(spaceships){
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + " - " + spaceship.name + " (" + spaceship.crewQuantity + " Tripulantes na nave)\n";
    });
    alert(spaceshipList);
};


let hichedSpaceships = [];

let chosenOption;

while (chosenOption != "3") {
    chosenOption = showMenu()
    switch (chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceship();
            spaceshipToAdd.hich();
            hichedSpaceships.push(spaceshipToAdd);
            break;
        case "2":
            printSpaceships(hichedSpaceships);
            break;
    };
};

