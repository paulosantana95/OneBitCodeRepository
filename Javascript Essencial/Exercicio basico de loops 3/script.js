// 1. solicitar o nome de uma nave
// 2. ultilizar uma estrutura de repetição para inverter o nome da nave
//         Esta estrutura deverá percorrer a nave do último caractere até o primeiro.Esta
// 3. Durante a inversão, procurar pelo caractere proibido
// 4. Caso encontre, a inversão deve ser parada onde estiver
// 5. O nome investido deve ser impresso
//         Mesmo que não esteja completo por ter encontrado um caractere proibido
// 6. Exebir um alerta com o novo nome da nave
// 7. A impressão deve ser feita com um alerta e a seguinte mensagem
//         Nome original da nave: <nome original>
//         Nome após ocultação: <nome invertido>


let spaceshipName = prompt("Qual será o nome da nave?")

let invertedName = ""

for (let i = spaceshipName.length -1; i >= 0; i--) {
    if (spaceshipName[i] == "e") {
        break
    }
    invertedName += spaceshipName[i]
}

alert("Nome original da nave: " + spaceshipName +"\nNome após ocultação: " + invertedName);

