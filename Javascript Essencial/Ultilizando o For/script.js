// 1. Solicitar o nome da nave
// 2. Perguntar o caractere que ele deseja substituir
// 3. Perguntar por qual caractere ele deseja substituir
// 4. Ultilizar o FOR para resolver o problema
// 5. Para cada caractere igual ao informado, substituir pelo novo caractere
// 6. Exibir um alerta com o novo nome da nave
//         "O novo nome da nava é: <nome da nave>"


let spaceship = prompt("Qual o nome da Nave?")
let charToReplace = prompt("Qual caractere você deseja substituir?")
let replacementChar = prompt("Por qual caractere deve ser substituido?")

let newSpaceship = ""

for (let pos = 0; pos < spaceship.length; pos++) {
    if (spaceship[pos] == charToReplace) {
    newSpaceship += replacementChar
    } else {
        newSpaceship += spaceship[pos]
    }
}

alert("O novo nome da nave é " + newSpaceship)
