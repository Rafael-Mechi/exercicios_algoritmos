console.log("--------------------");
console.log("EXERCÍCIO 1.1");
function somar(numero1, numero2) {
    if (numero1 == null || numero1 == undefined) {
        return `Parâmetro ${numero1} não pode ser nulo ou indefinido`;
    }
    else if (numero2 == null || numero2 == undefined) {
        return `Parâmetro ${numero2} não pode ser nulo ou indefinido`;
    }

    else if (typeof numero1 != "number") {
        return `Tipo inválido para o argumento ${numero1}`;
    }

    else if (typeof numero2 != "number") {
        return `Tipo inválido para o argumento ${numero2}`;
    }

    let soma = numero1 + numero2;
    return `${numero1} + ${numero2} = ${soma}`;
}

//testes da função "somar"
console.log(somar(2, 3));
console.log(somar("a", 3));
console.log(somar(4, "B"));
console.log(somar(null, "B"));
console.log("--------------------");


console.log("--------------------");
console.log("EXERCICIO 1.2");

function calcularDistancia(x1, y1, x2, y2) {
    if (x1 == null || x1 == undefined) {
        return `Parâmetro ${x1} não pode ser nulo ou indefinido`;
    }

    else if (x2 == null || x2 == undefined) {
        return `Parâmetro ${x2} não pode ser nulo ou indefinido`;
    }

    else if (y1 == null || y1 == undefined) {
        return `Parâmetro ${y1} não pode ser nulo ou indefinido`;
    }

    else if (y2 == null || y2 == undefined) {
        return `Parâmetro ${y2} não pode ser nulo ou indefinido`;
    }
    else if (typeof x1 != "number") {
        return `Tipo inválido para o argumento ${x1}`;
    }

    else if (typeof x2 != "number") {
        return `Tipo inválido para o argumento ${x2}`;
    }

    else if (typeof y1 != "number") {
        return `Tipo inválido para o argumento ${y1}`;
    }

    else if (typeof y2 != "number") {
        return `Tipo inválido para o argumento ${y2}`;
    }

    calculo = (((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1))) ** 0.5;

    return calculo;
}
console.log(calcularDistancia(4, 2, 7, 6));
console.log(calcularDistancia("a", 2, 7, 6));
console.log(calcularDistancia(4, "b", 7, 6));
console.log(calcularDistancia(4, 2, "c", 6));
console.log(calcularDistancia(4, 2, 7, "d"));

console.log(calcularDistancia(4, null, 7, 6));

console.log("--------------------");
console.log("--------------------");

console.log("EXERCICIO 1.3");
function converterParaHoraMinutoSegundo(segundos) {
    let segundo = 0;
    let minuto = 0;
    let hora = 0;

    for (let i = segundos; i > 0; i--) {
        segundo++;

        if (segundo == 60) {
            segundo = 0;
            minuto++;
        }

        if (minuto == 60) {
            minuto = 0;
            hora++;
        }
    }

    return `${hora}:${minuto}:${segundo}`;
}
console.log(converterParaHoraMinutoSegundo(556));
console.log(converterParaHoraMinutoSegundo(1));
console.log(converterParaHoraMinutoSegundo(140153));

console.log("--------------------");

console.log("EXERCÍCIO 1.4");
function ePrimo(numero) {
    let cont = 0;

    if (numero == null || numero == undefined) {
        return `Parâmetro ${numero} não pode ser nulo ou indefinido`;
    }

    else if (typeof numero != "number") {
        return `Tipo inválido para o argumento ${numero}`;
    }

    else if (typeof numero != "number") {
        return `Tipo inválido para o argumento ${numero}`;
    }

    for (let i = 0; i <= numero; i++) {
        if (numero % i == 0) {
            cont++;
        }
    }
    if (cont == 2) {
        return true;
    }
    return false;
}
console.log(ePrimo(4));
console.log(ePrimo(8));
console.log(ePrimo(13));
console.log(ePrimo(7));

console.log("--------------------");

console.log("EXERCICIO 1.5");
function calcularFatorial(numero) {
    if (numero == null || numero == undefined) {
        return `Parâmetro ${numero} não pode ser nulo ou indefinido`;
    }

    else if (typeof numero != "number") {
        return `Tipo inválido para o argumento ${numero}`;
    }

    let soma = 1;

    for(let i = numero; i >= 1; i--){
        soma *= i;
    }

    return soma;
}
console.log(calcularFatorial(5));
console.log(calcularFatorial(3));
console.log(calcularFatorial("s"));

console.log("--------------------");

console.log("EXERCÍCIO 1.6");
function calcularMedia(numeros){
    if (numeros == null || numeros == undefined) {
        return `Parâmetro ${numeros} não pode ser nulo ou indefinido`;
    }

    let soma = 0;

    for(let i = 0; i < numeros.length; i++){
        soma += numeros[i];

        if(typeof numeros[i] != "number"){
        return `Tipo inválido para o argumento ${numeros[i]}`;
        }
    }

    let media = soma / numeros.length;

    return media;
}

let vetor = [10, 10, 10, 10, 10];
let vetor2 = [10, 8, 7, 10, 8.5];
let vetor3 = ["a", 8, 7, 10, 8.5];

console.log(calcularMedia(vetor));
console.log(calcularMedia(vetor2));
console.log(calcularMedia(vetor3));

console.log("--------------------");
console.log("EXERCÍCIO 1.7");

function calcularMediaPonderada(vetor, pesos) {
    if (vetor == null || vetor == undefined) {
        return "Parâmetro vetor não pode ser nulo ou indefinido";
    }

    if (pesos == null || pesos == undefined) {
        return "Parâmetro pesos não pode ser nulo ou indefinido";
    }

    if (vetor.length == undefined || pesos.length == undefined) {
        return "Tipo inválido para os argumentos";
    }

    if (vetor.length !== pesos.length) {
        return "Os vetores devem ter o mesmo tamanho";
    }

    let soma = 0;
    let mediaPonderada = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (typeof vetor[i] != "number") {
            return `Tipo inválido para o argumento ${vetor[i]}`;
        }

        if (typeof pesos[i] != "number") {
            return `Tipo inválido para o argumento ${pesos[i]}`;
        }

        soma += pesos[i];
        mediaPonderada += vetor[i] * pesos[i];
    }

    return mediaPonderada;
}

console.log(calcularMediaPonderada([10.0, 9.5], [0.8, 0.6]));
console.log(calcularMediaPonderada([7, 8, 9], [0.5, 0.9, 0.5]));
console.log(calcularMediaPonderada([7, 8, "a"], [0.4, 0.3, 0.5]));



