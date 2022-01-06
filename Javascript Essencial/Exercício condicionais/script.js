// Exercício: Ultilizando Condicionais

// 1.Perguntar o nome do Piloto
// 2. Colocar a velocidade inicial como 0
// 3. perguntar a que velocidade ele gostaria de acelerar a nave
// 4. Pedir uma confirmação informando que está indo para a velocidade "X" km/s 
// 5. Informar Velocidade atualizada
// 6. Exibir uma das seguintes mensagens:
//     Se for menor que 0km/s: Nave está parada. Considere partir e aumentar a velocidade.
//     Se for menor que 40km/s: Você está devagar, podemos aumentar mais.
//     Se for maior ou igual a 40km/s: Parece uma boa velocidade para manter.
//     Se for maior ou igual a 80km/s e menor que 100km/s: Velocidade alta. Considere diminuir.
//     Se for maior ou igual a 100km/s: Velocidade perigosa. Controle automático forçado.

let pilotName = prompt("Qual seu nome, Piloto?");

let velocity = 0;

let newVelocity = prompt("Olá " + pilotName + ". Qual velocidade você gostaria de acelerar?");

let confirmVelocity = confirm("Tem certeza que gostaria de acelerar para " + newVelocity + "km/s?");

if (confirmVelocity) {
    velocity = newVelocity
}

console.log(velocity)

alert("A nave está acelerando para " + velocity +"km/s.");

if (velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.");
}
else if (velocity < 40) {
    alert("Você está devagar, podemos aumentar mais.");
}
else if(velocity >= 40) {
    alert("Parece uma boa velocidade para manter.");
}
else if (velocity >= 80) {
    alert("Velocidade alta. Considere diminuir");
}
else if (velocity >= 100) {
    alert("Velocidade perigosa. Controle automático forçado.");
}
