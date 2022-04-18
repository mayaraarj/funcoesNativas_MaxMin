// Escreva uma função maxmin(a, b, c, d, e) que receba cinco números como parâmetros.
// Sua função deve retornar um array onde o primeiro elemento é o menor dos parâmetros da função maxmin 
//e o segundo elemento é o maior dos parâmetros da função maxmin.

function maxmin(a, b, c, d, e) {
    var menor = Math.min(a, b, c, d, e)
    var maior = Math.max(a, b, c, d, e)
    return [menor, maior];
  }
  console.log(maxmin(2, 9, 6, 7, 3))