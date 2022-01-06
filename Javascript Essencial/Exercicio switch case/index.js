// Desenvolva um conversor:
// 1. Perguntar a distância em anos-luz
// 2. Oferecer uma lista de opções com:
//         Parsec (pc)
//         Unidade astronônima (AU)
//         Quilômetros (km)
// 3. Perguntar qual operação deseja realizar
//     A resposta receberá o número da opção escolhida
// 4. ultilize o switch para verificar a opção escolhida pelo usuário
//     Armazenar o nome da Unidade
//     Armazenar o valor convertido de anos-luz para a unidade desejada
// 5.Exiba com alerta contendo a distância em anos-luz e a distância convertida para a operação desejada
//     Distância em Anos-luz: <distancia digitada em anos-luz>
//     <conversão desejada>:<distancia convertida>
// 6.Ultiliza as seguintes conversões
//     1l.y. = 0,306601pc
//     1l.y. = 63241,1 AU
//     1l.y. = 9,5 *10^12 KM
// 7. Ultilize a biblioteca 'Math' para a conversão de anos-luz para Quilômetros
//     Ultilize "Math.pow(10,12)" para obter o valor de 10^12 na conversão de anos-luz para quilômetro
// 8. Caso o Usuário digite uma opção que não seja uma das três, em vez do nome da distância e da conversão, deve ser exibido:
//     Distância em Anos-luz:<distancia digitada em ano-luz> Unidade não identificada: Conversão fora do escopo


let lyDistance = prompt("Digite a distância em Anos-luz:");

console.log(lyDistance);

let chosenOption = prompt("Qual operação deseja realizar?\n1.Parsec (pc)\n2.Unidade Astronômica (AU)\n3.Quilômetros (Km)");

console.log(chosenOption);

let chosenUnity;
let convertedDistance;

switch(chosenOption){
    case "1":
        chosenUnity = "Parsec (pc)";
        convertedDistance = (lyDistance * 0.306601) + " pc";
        break;
    case "2":
        chosenUnity = "Unidade Astronômica (AU)";
        convertedDistance = (lyDistance * 63241.1)+ " AU";
        break;
    case "3":
        chosenUnity = "Quilômetros (Km)";
        convertedDistance = (lyDistance * 9.5 * Math.pow(10, 12)) + " Km";
        break;
    default:
        chosenUnity = "Unidade não identificada";
        convertedDistance = "Conversão fora do escopo";
}

console.log(chosenUnity, convertedDistance);

alert("Distância em Anos-luz: " + lyDistance +
     "\nConversão desejada: " + chosenUnity +
     "\nDistância convertida: " + convertedDistance);