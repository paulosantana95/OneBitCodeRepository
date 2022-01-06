// 1.Pedir nome da nave
// 2.Perguntar se deseja entrar na dobra com a seguinte mensagem:
        // Deseja entrar na dobra espacial?
        //     1- Sim 
        //     2- Não 
        // Se a resposta for sim, contabilizaremos uma dobra
// 3. O usário deve ser perguntado se deseja realizar a próxima dobra
//         Deseja realizar a próxima dobra?
//             1- Sim 
//             2- Não 
// 4. A pergunta deve ser feita novamente, até que a escolha seja "Não"
// 5. Ao escolher "Não" em qualquer pergunta, a contagem deve ser encerrada
// 6. O programa deve informar o "nome da nave" e o número de vezes seguidos que a dobra espacial foi realizada.


let spaceshipName = prompt("Olá piloto, qual será o Nome da nave?")

let chosenOption = ""
let warp = 0

chosenOption = prompt("Deseja entrar na dobra espacial?\n1-Sim\n2-Não")


console.log(spaceshipName);
console.log(chosenOption);

while(chosenOption == "1"){
    warp += 1
    chosenOption = prompt("Deseja realizar a próxima dobra?\n1-Sim\n2-Não")
}

alert("Nome da nave: " + spaceshipName + "\nNúmero de dobras: " + warp)

console.log(warp);
console.log(chosenOption);




