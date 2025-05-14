function ehParOuImpar(numero){
    if(numero % 2 == 0){
        return "par";
    }
    return "ímpar";
}

console.log(ehParOuImpar(8));
console.log(ehParOuImpar(23));