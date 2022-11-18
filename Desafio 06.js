// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.


const jurosSimples = (ci, tj, ta) => {
    const juros = ci * tj * ta;
    const montante = juros + ci;
    return montante; 
}

const jurosComposto = (ci, tj, ta) => (ci*(1+tj)**ta).toFixed(2);


console.log(`O valor do montante é: ${jurosSimples(100, 0.2, 5)}`);
console.log(`O valor do montante composto é: ${jurosComposto(100, 0.2, 5)}`)
