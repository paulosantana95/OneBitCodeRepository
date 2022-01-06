// 1.Criar um programa de bordo para que a nossa nave receba o nome escolhido
// 2.A velocidade inicial deve ser 0
// 3.Um menu para que o usuario escolha entre as seguintes opções:
//         1. Acelerar a nave em 5kms
//         2. Desacelerar a nave em 5kms
//             Nave não pode ter uma velocidade menor que 0 kms
//         3.Imprimir dados de bordo:
//              Imprimir nome e velocidade atual
// 5. Sair do programa
// Caso se escolha um numero que não está na lista é necessário exibir o menu novamente, até que seja escolhida
// uma opção válida
//      1.Criar uma função que exiba o menu a validade a opção escolhida.
//      2.Uma função para cada ação do menu de acelerar
//      3.Encerrar o app somente quando digitar para sair.


let spaceshipName = prompt("Escolha o nome da Nave")

let spaceshipVelocity = 0

let chosenOption


function showMenu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("1. Desja acelerar a nave(5km/s)?\n" +
                        "2. Deseja desacelerar a nave(5km/s)?\n" +
                        "3.Exibir dados de bordo.\n" +
                        "4.Sair da navegação.")
    }
    return option
}

do {
    chosenOption = showMenu()
    switch(chosenOption){
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break
        case "3":
            showNavData(spaceshipName,spaceshipVelocity)
            break
        default:
            alert("Encerrando computador de bordo.")
    }
} while (chosenOption != "4")

console. log(showMenu())

function speedUp(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity) {
    let newVelocity = velocity - 5
    if (newVelocity < 0) {
        alert ("A velocidade não pode ser inferior a 0 km")
        newVelocity=0
    }
    return newVelocity
}

function showNavData(name, velocity) {
    alert("Nave: " + name + "\nVelocidade: " + velocity + "Km/s.")
}
