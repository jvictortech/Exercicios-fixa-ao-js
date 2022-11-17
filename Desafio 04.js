//04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

const calculo3 = (dividendo, divisor) => {
    let resultado = Math.floor(dividendo/divisor);
    console.log("Resultado: ", resultado);
    console.log("Resto:", dividendo % divisor);
}

calculo3(10, 5);