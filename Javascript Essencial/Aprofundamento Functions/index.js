// 1. Considere que uma nave está a 150km/s 
// 2. Crie uma função para desacelerar 20km/s a cada segundo. 
//         considere, no código que cada interação de uma laço de repetição é 1 segundo.
// 3. Esta função será uma HOF e tabém deve impromir cada atualização que houver na velocidade da nave. 
//         Esta impressão deve ser feita por meio de callback que essa função receberá.
// 4. Ao final, exiba uma mensagem informando que a nave está parada e as comportas podem ser abertas.



function slowDown (velocity, printer) {
    let deceleration = 20

    while(velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }

    alert ("Nave parada. As comportas podem ser abertas")
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function(velocity) {
    console.log("Velocidade atual: " + velocity)
})

// let spaceshipCharge = 0;

// function powerUp (power, printer) {
//     let chargeUp = 10;

//     while (power < 100) {
//         printer(power);
//         power += chargeUp;
//     }
//     alert ("Bateria da Nave está completa. Nave pronta para decolagem.");
// }

// let printCharge = power => {
//     console.log("Carga em: " + power + "%");
// }


// powerUp(spaceshipCharge, printCharge);

