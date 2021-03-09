function solucao(jogadas) {
  //seu código aqui
    // se o numero de 1 for igual ao de 0
    let soma = (0)
    for (i = 0; i < jogadas.length; i++) {
        if (1 === jogadas[i]) {
            soma = (soma + 1)
        }   
    }
    
   if (soma === (jogadas.length / 2)) {
       console.log(true)
   }    else {
       console.log(false)
   }
    //console.log(soma)
    
}
