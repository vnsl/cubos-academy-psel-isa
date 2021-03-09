function solucao(stringCorrompida) {
	// seu código aqui
    let resposta = "";
    for (i=0; i < stringCorrompida.length; i++) {
        const pedaco = stringCorrompida[i];
        if (pedaco === "%") {
            resposta += ""
        }   else if (pedaco === "*") {
            resposta += ""
        }   else if (pedaco === "!") {
            resposta += ""
        }   else if (pedaco === "@") {
            resposta += ""
        }   else if (pedaco === "#") {
            resposta += ""
        }   else if (pedaco === "$") {
            resposta += ""
        }   else if (pedaco === "&") {
            resposta += ""
        }   else if (pedaco === ")") {
            resposta += ""
        }   else if (pedaco === "(") {
            resposta += ""
        }
        else {
                resposta += pedaco
        }
        
        
    }
     
    console.log(resposta)
}