//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

const calculo = (y, x) => {
    console.log( 'Os resultados são: '
    ,'Soma: ', y+x , 
    'Subtração:', y-x,
    'Mutiplicação:', y*x,
    'Divisão:', y/x);
}
calculo(5,5);