numeros = [10, 2, 10, 7, 3, 9, 10, 67, 9];

function qtdsVezesAparece(vetor, numero){
    totalAparicoes = 0;

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] == numero){
            totalAparicoes++;
        }
    }

    return totalAparicoes;
}

console.log("O número 10 aparece " + qtdsVezesAparece(numeros, 10) + " vezes");