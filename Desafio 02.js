//02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
//Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
//Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
//ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
//triângulo).

triangulo = (a, b, c) => {
  if (a < (b+ c) && b < (a + c) && c < (a +b)){
    if (a == b && b == c){
      console.log('O triângulo é equilátero'); 
    }
    else if(a == b || a == c || c == b){
      console.log('O Triângulo é isóceles');
    }
    else {
      console.log('O Triângulo é escaleno');
    }
  }
  else {
    console.log('Os valores não formam um triângulo');
  }
}

triangulo(10, 5, 10);
triangulo(10,10,10);
triangulo(3,4,5);
triangulo();