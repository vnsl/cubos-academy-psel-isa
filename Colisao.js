function solucao(velocidade, aceleracao, distanciaObjeto) {
  //seu código aqui
    const distancia = - (velocidade * velocidade) / (2 * aceleracao)
  if (distancia < distanciaObjeto) {
      console.log('CAMINHO SEGURO')
  }  else if (distancia === distanciaObjeto) {
      console.log('NAO ACELERE')
  }
     else {
        console.log('COLISAO A FRENTE')
}
  }