const formatador = (valor) => {
    valorformatado = `R$ ${valorformatado.toFixed(2).toString().replace('.',',')}`
    console.log(valorformatado)
}

formatador(0.3 + 0.90);