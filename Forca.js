function solucao(palpite, palavra) {
	// seu código aqui
    let soma = (0)
    for (i = 0; i < palavra.length; i++) {
        const pedaco = palavra[i];
        if (palpite === pedaco) {
            soma = (soma + 1)
            //console.log(soma)
            
    
        }
        } 
        console.log(soma)

    
}