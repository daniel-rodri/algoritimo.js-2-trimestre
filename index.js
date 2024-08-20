const{edGalho, edFolha} = require('./arrays');

function juntaListas (lista1, lista2){
    let listaFinal = [];
    let posicaoAtuallista1 = 0;
    let posicaoAtuallista2 = 0;
    let atual = 0;

    while(posicaoAtuallista1 < lista1.length && posicaoAtuallista2 <lista2.length){
        let produtoAtualLista1 = lista1[posicaoAtuallista1];
        let produtoAtualLista2 = lista2[posicaoAtuallista2];

        if (produtoAtualLista1.preco < produtoAtualLista2.preco){
            listaFinal[atual] = produtoAtualLista1;
            posicaoAtuallista1++;
        }else{
            listaFinal[atual] = produtoAtualLista2;
            posicaoAtuallista2++;
        }
        atual++;
    }

    return listaFinal;
}
console.log(juntaListas(edGalho, edFolha));