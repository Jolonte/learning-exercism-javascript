## Sobre

- Boleanos representam um dos seguintes valores: ```true``` ou ```false```. 

- Operadores lógicos como: ```( !, &&, || )``` são usados comumente com valores boleanos e retornam um valor boleano.

## Precedência do operador (Operator precedence)

- Se os operadores (Ex: ```OP1```e ```OP2```) tiverem diferentes níveis de procedência,  o operador com a maior procedência é calculado primeiro. Veja como uma conta de multiplicação tem uma maior procedência que a adição e é executada primeiro, mesmo que a adição seja escrita primeira no código:

```js
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order
```

Veja mais em [Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)