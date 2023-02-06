# Basics

- JavaScript: Linguagem dinâmica, suporta orientação a objetos e possui estilo imperativo e declarativo (ou: programação funcional).

	**Linguagem dinâmica:** Nessas linguagens não é preciso declarar as variáveis antes de usá-las e as variáveis não tem tipo, tempo de compilação. As variáveis guardam os valores, e esses valores sim tem tipo, mas a variável si não tem.
	
	**Orientação a objetos:** Paradigma de programação baseado no conceito de "objetos", que podem conter dados na forma de campos, também conhecidos como atributos, e códigos, na forma de procedimentos, também conhecidos como métodos.
	
	**Programação imperativa:** Paradigma de programação de software que descreve a computação como ações, enunciados ou comandos que mudam o estado de um programa.
	
	**Programação declarativa:** descrevem o que fazem e não exatamente como suas instruções funcionam. Linguagens de marcação são o melhor exemplo: HTML, XML, XSLT, XAML etc.

## Variaveis

Podem ser definidas com: **const**, **let** e **var**.

- **let** e **var** podem redefinir o valor contido em uma variável. Por exemplo:

```javascript
let minhaPrimeiraVariavel = 1;
minhaPrimeiraVariavel = 'Some string';
minhaPrimeiraVariavel = new SomeComplexClass();
```

- Em contraste com isso, variaveis definidas com **const** não podem redefinir seu valor:

```javascript
const MINHA_PRIMEIRA_CONSTANTE = 10;

// O valor não pode ser redefinido.
MINHA_PRIMEIRA_CONSTANTE = 20;
// => TypeError: Assignment to constant variable.
```

## Funções

Função são códigos encapsulados. Funções podem conter parâmetros e retornar um único valor com a palavra-chave **keyword**. Elas podem ser invocados a qualquer momento usando a sintaxe **( )**:

```javascript
function somar(num1, num2) {
	return num1 + num2
}

somar(1, 1)
// => Retorna o valor: 2
```

## Exportando para outros arquivos

Para que uma função, constante ou variavel esteja disponivel em outros arquivos, elas precisam ser exportadas, para isso usamos a palavra-chave **export**. Outro arquivo deve importar os valores com a palavra-chave **import**. Este é conhecido como um sistema de módulos:

```javascript
// arquivo.js
export const MEU_VALOR = 10;

export function somar(num1, num2) {
  return num1 + num2;
}

// outroArquivo.js
import { MEU_VALOR, somar } from './arquivo';

somar(MEU_VALOR, 5);
// => 15
```
