let spaceship = {
    velocity: 0,
    speedUp: function(acceleration){
        this.velocity += acceleration;
    } 
};

function registerSpaceship(){
    spaceship.name = prompt("Qual será o nome da espaçonave?");
    spaceship.type = prompt("Qual tipo da espaçonave?");
    spaceship.maxVelocity = Number(prompt("Qual a velocidade max da nave (km/s)"));
};


function acceleration(){
    let acceleration = Number(prompt("Quanto você quer acelerar?(km/s)"));
    spaceship.speedUp(acceleration);
    if (spaceship.velocity > spaceship.maxVelocity){
        alert("VELOCIDADE MÁXIMA ULTRAPASSADA!\n Velocidade da nave: " + spaceship.velocity +"km/s\nVelocidade Máxima da nave: " + spaceship.maxVelocity);
    };
};


function stop(){
    alert("Nome da nave: " + spaceship.name + "\nTipo da nave: " + spaceship.type + "\nVelocidade da nave: " + spaceship.velocity + "\nVelocidade máxima da nave: " + spaceship.maxVelocity);
    spaceship.velocity = 0;
};

function navMenu (){
    let choosenOption
    do {
        choosenOption = prompt("Você deseja acelerar: 1\nVocê deseja parar: 2");
        switch(choosenOption) {
            case "1":
                acceleration()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção inválida.")
        }
    } while (choosenOption != "2")
};

registerSpaceship();

navMenu();