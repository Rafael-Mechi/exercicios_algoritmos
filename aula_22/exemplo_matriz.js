let matrizPreenchida = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];


console.log("Teste 1");
console.log(matrizPreenchida);
console.log(matrizPreenchida[2][1]); // exibe 80

function exibeMatriz(matriz) {
    let frase = '';
    for (let i = 0; i < matriz.length; i++) {     //linha
        for (let j = 0; j < matriz[i].length; j++) { //coluna
            console.log(`Matriz na posição [${i}] [${j}]\n${matriz[i][j]}\n`);
            frase += ` ${matriz[i][j]}`;
        }
        frase += `\n`
    }
    console.log(frase);
}

console.log("Teste 2");
// este for exibe as posições do vetor e seus valores

let frase = '';
for (let i = 0; i < matrizPreenchida.length; i++) {     //linha
    for (let j = 0; j < matrizPreenchida[i].length; j++) { //coluna
        console.log(`Matriz na posição [${i}] [${j}]\n${matrizPreenchida[i][j]}\n`);
        frase += ` ${matrizPreenchida[i][j]}`;
    }
    frase += `\n`
}
console.log(frase);

let matriz2 = [];

let qtdLinhas = 4;
let qtdColunas = 4;
let valorInicial = 50;

for (let linha = 0; linha < qtdLinhas; linha++) {
    matriz2[linha] = [];
    for (let coluna = 0; coluna < qtdColunas; coluna++) {
        matriz2[linha][coluna] += valorInicial;
        valorInicial += 10;
    }
}

matriz2[1][1] = 3;
exibeMatriz(matriz2);