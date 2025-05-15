console.log("--------------------");
console.log("EXERCÍCIO 1.1");
function somar(numero1, numero2){
    if(numero1 == null || numero1 == undefined){
        return `Parâmetro ${numero1} não pode ser nulo ou indefinido`;
    }
    else if(numero2 == null || numero2 == undefined){
        return `Parâmetro ${numero2} não pode ser nulo ou indefinido`;
    }

    else if(typeof numero1 != "number"){
        return `Tipo inválido para o argumento ${numero1}`;
    }

    else if(typeof numero2 != "number"){
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

function calcularDistancia(x1, y1, x2, y2){
    if(x1 == null || x1 == undefined){
        return `Parâmetro ${x1} não pode ser nulo ou indefinido`;
    }

    else if(x2 == null || x2 == undefined){
        return `Parâmetro ${x2} não pode ser nulo ou indefinido`;
    }

    else if(y1 == null || y1 == undefined){
        return `Parâmetro ${y1} não pode ser nulo ou indefinido`;
    }

    else if(y1 == null || y1 == undefined){
        return `Parâmetro ${y2} não pode ser nulo ou indefinido`;
    }
    else if(typeof x1 != "number"){
        return `Tipo inválido para o argumento ${x1}`;
    }

    else if(typeof x2 != "number"){
        return `Tipo inválido para o argumento ${x2}`;
    }

    else if(typeof y1 != "number"){
        return `Tipo inválido para o argumento ${y1}`;
    }

    else if(typeof y2 != "number"){
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
console.log(converterParaHoraMinutoSegundo(140153));
