let lyDistance = prompt("Qual distância em anos-luz?");

let chosenOption = prompt ("Para qual unidade você deseja converte?\n1.Parsec(pc)\n2.Unidade Astronômica(AU)\n3.Quilômetros(km)");

let chosenUnity;
let convertedDistance;


switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec(PC)"
        convertedDistance = (lyDistance * 0.306601) + "PC"
        break;
    case "2":
        chosenUnity = "Unidade Astronômica(AU)"
        convertedDistance = (lyDistance * 63241.1) + "AU"
        break;
    case "3":
        chosenUnity = "Quilômetros(km)"
        convertedDistance = (lyDistance * 9,5 * (Math.pow(10, 12)))
    default:
        alert("Distância em anos-luz: " + lyDistance + "\nConversão fora do escopo");
        break;
}

alert("Distância em anos-luz: " + lyDistance + "\nConversão desejada: " + chosenUnity + "\nDistância convertida: " +convertedDistance);

