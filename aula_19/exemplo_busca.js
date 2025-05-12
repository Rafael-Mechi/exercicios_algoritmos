 // semelhante ao indexOf()
function buscaPosicao(nome, nomes){
    for(let i = 0; i < nomes.length; i++){
        if(nomes[i] = nome){
            return i;
        }
    }
    return false;
}

// semelhante ao includes()
function existeNaLista(nomeProcurado, nomes){
    for(let i = 0; i < nomes.length; i++){
        if(nomeProcurado = nomes[i]){
            return true;
        }
    }
    return false;
}