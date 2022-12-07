/*Immediately invoked function expression ou IIFE
  Este código abaixo vai fazer aparecer um alerta na hora
  do carregamento da página dizendo Hello World
  ambos comandos fazem a mesma coisa*/

(function helloworld() {
  alert('Hello, world');
})();

(function (message) {
  alert(message);
})('Hello, world');

/*Arrow Function */

function sum(a) {
  return a + 10;
}

console.log(sum(5));

const soma = b => b + 100;

console.log(soma(5));

//Exemplo com map() é um método de array que ao ser utillizado
//se consegue passar por cada item do array e obter alguma infromação

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
const newArray = materials.map(function showLenght(materials) {
  return materials.length;
});
// Imprime o tamanho do array e o tamanho de cada item do array
console.log(newArray);

//Imprimi apenas o tamanho do array
console.log(materials.length);

//usando a função arrow
const newArray2 = materials.map(material => material.length);
//Imprime o tamanho do array e o tamanho de cada item do array
console.log(newArray2);
//Imprime apenas o tamanho do array
console.log(newArray2.length);

/* Utilizado para fazer algo repetidamente até que a condição seja atingida

   Exemplo

    for(var numero = 0; numero<10; numero++){
      console.log(numero);
    }

    retorna de 0 a 9 no console
*/

const videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (let i = 0; i < videoGames.length; i++) {
  console.log(`O game ${i + 1} é ${videoGames[i]}`);
  console.log(videoGames);
}

/* Prototypes */

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const akbar = new Pessoa('Akbar', 48);
const joao = new Pessoa('João', 40);
console.log(joao);
console.log(Pessoa.prototype);

const notebook = {
  cor: 'preta',
  ano: 2022,
  especifications: function (value) {
    return `Este notebook custa R$ ${value},00; cor ${this.cor}; ano ${this.ano}`;
  },
};
console.log(notebook);

const dell = {
  marca: 'Dell',
};

const macBook = {
  marca: 'MacBook',
};

Object.setPrototypeOf(dell, notebook);
Object.setPrototypeOf(macBook, notebook);
console.log(dell.especifications(5000));
console.log(macBook.especifications(5000));

/* Classes */

const Foo = function (x) {
  this.x = x;
};

const foo = new Foo('x');
console.log(foo);

class Book {
  constructor(title, year, author) {
    this.title = title;
    this.year = year;
    this.author = author;
  }
}

const domCasmurro = new Book('Dom Casmurro', 1899, 'Machado de Assis');
const harryPotter = new Book('Harry Potter', 1992, 'J. K. Rowling');

console.log(domCasmurro);

let bookList = [];

bookList.push(domCasmurro, harryPotter);

console.log(bookList);

class CopaDoMundo {
  constructor(country, year) {
    this.country = country;
    this.year = year;
  }

  showChampion(team) {
    return `A copa do ${this.country} foi disputada no ano de ${this.year} e o campeão foi ${team}`;
  }
}

const copa86 = new CopaDoMundo('México', 1986);
const copa70 = new CopaDoMundo('México', 1970);
const champion86 = copa86.showChampion('Argentina');
const champion70 = copa70.showChampion('Brasil');

console.log(champion86);
console.log(champion70);

/* Herança */

class Candidates {
  constructor(firstName, surName, cpf) {
    this.firstName = firstName;
    this.surName = surName;
    this.cpf = cpf;
  }
}

class Masc extends Candidates {
  constructor(firstName, surName, cpf, reservista) {
    super(firstName, surName, cpf);
    this.reservista = reservista;
  }
}

const candidate1 = new Masc('Akbar', 'Miranda', 123456789, true);
const candidate2 = new Candidates('Maria', 'Fulana', 234234234243);
console.log(Candidates);
console.log(candidate1);
console.log(candidate2);

/*Função callback */

function hello(name) {
  console.log(name);
}
hello('Akbar');

function helloUser(callback) {
  callback('Akbar');
}
helloUser(hello);
console.log(hello);

const callback = e => alert('Foi clicado');

window.addEventListener('click', callback);

/*  Promises
    As funções no javascript, são executadas na sequência em que são
    chamadas, não na sequência em que são definidas
    O objeto promise representa a eventual conclusão (ou falha) de uma
    oparação assíncrona e seu valor resultante.
    Estados de uma promisse:
    Pending: Estado inicial ou pendente
    fullfilled ou resolved: operação concluida com sucesso
    Rejected: Operação falhou
    Promise é uma função construtora, e por isso, é um objeto que permite
    modelar o comportamento assíncrono do JavaScript. Ela instancia promessas,
    ou seja, tarefas que podem levar um tempo maior para terminar em relação as
    outras.
    Exemplo:
    - Temos que receber dados de alguma API
    - Uma API precisa receber dados de outra API
    - Uma API faz uma requisição a um banco de dados
    Palavras chave da Promise

    Then()
    As promises têm um método chamado .then(). Ele permite que se realize alguma
    tarefa após a promise ser resolvida e será invocado quando a função for
    resolvida
    Reject()
    caso a promise não seja resolvida por algum motivo, será invocado o método
    reject.
    Finally()
    Será invocado independente do estado da promise.
*/

// function myFirst() {
//   myDisplayer('Hello');
// }
// function mySecond() {
//   myDisplayer('Goodbye');
// }
// mySecond();
// myFirst();

setTimeout(() => {
  console.log('resposta');
}, 3000);

function show() {
  setTimeout(() => {
    console.log('OI');
  }, 2000);
  console.log('Até logo');
}

show();

const minhaPromise = new Promise((resolve, reject) => {
  let n = 11;
  if (n > 10) {
    resolve();
  } else {
    reject();
  }
});
minhaPromise
  .then(result => console.log('Resolve'))
  .catch(err => console.log('Erro'))
  .finally(() => console.log('Finally'));

//import fetch from 'node-fetch';

//fetch

// const firstUser = userId => {
//   let response = fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
//     .then(res => res.json())
//     .then(data => console.log(data));
// };

// firstUser(1);

// fetch(`https://viacep.com.br/ws/01001000/json`)
//   .then(response => response.json())
//   .then(cep => {
//     console.log(cep.bairro, cep.logradouro);
//   });

// async await

const firstUser = async userId => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${userId}`
  );
  let resultJSON = await response.json();
  let title = await resultJSON.title;
  console.log(resultJSON);
  console.log(title);
};
firstUser(1);

class customError {
  constructor(message) {
    this.message = message;
  }
}

function function1() {
  console.log('function1 executou');
  try {
    console.log('function1 no try');
    //codigoA;
  } catch (error) {
    console.log('Erro no function1');
    console.error('Erro na funcion1', error);
    throw new customError('Erro na function1');
  }
}
function1();

/* Rest/Spread 
  Rest parameters - permite trabalhar com uma quantidade indefinida de
  parâmetros em uma função ou de elementos de um array.
  Em uma função, o rest permite capturar os argumentos:

  Exemplo

  function getSum(...args){
    let total = 0
    for (const arg of args){
      total += arg
    }
    return total
  }
  Spread operator - Permite expandir uma expressão recebendo
  múltiplos argumentos ou elementos. Podemos utilizar para
  concatenar;mergear arrays

  const arr = [1,2,3];
  const arr2 = [...arr, 4];
  const array1 = [1,2,3];
  const array2 = [4,5,6];
  const mergeArrays = [...array1,...array2];

  Destructuring

  a desestruturação nos permite extrair dados de arrays e objetos
  e defini-los em novas variáveis;

  Destructuring Objetos
  const carro = {
    marca: 'Fiat',
    ano: 2018,
    portas: 4,
  }

  const{marca,ano} = carro

  Destructuring arrays
  const frutas = ['Banana', 'Uva', 'Morango'];
  const[primeira, segunda, terceira] = frutas;
  */

function getSum(...args) {
  let total = 0;
  for (const arg of args) {
    total = total + arg;
  }
  return total;
}
console.log(getSum(2, 5));

const arr = [1, 2, 3];
const arr2 = [...arr, 4];
console.log(arr2);
//merge array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergeArrays = [...array1, ...array2];

console.log(mergeArrays);

//Destructuring Objetos
const carro = {
  marca: 'Fiat',
  ano: 2018,
  portas: 4,
};
// const marca = carro.marca;
// const ano = carro.ano;
const { marca, ano, portas } = carro;

console.log(marca);
console.log(ano);
console.log(
  `O carro é da marca ${marca} o ano é ${ano} e tem ${portas} portas`
);

const cliente = {
  nome: 'Akbar',
  compras: {
    digitais: {
      livros: ['Dom Casmurro', 'O Cortiço'],
      filmes: ['Senhor dos Anéis', 'Matrix'],
    },
    fisicas: {
      cadernos: ['Caderno'],
    },
  },
};

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.filmes);
const { livros, filmes } = cliente.compras.digitais;
console.log(livros);
console.log(filmes);

const frutas = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];
console.log(primeiraFruta);
console.log(segundaFruta);
console.log(terceiraFruta);

const [primeira, segunda, terceira] = frutas;
console.log(primeira);

/*Recursion
  É o ato de uma função chamar a si mesa. A recursão
  é bastante usada para resolver problemas que contém
  suproblemas menores, dividir um problema complexo em
  problemas menores, fazer uma contagem regressiva ou uma contagem
  até que certo valor seja atingido.

  Este tipo de função precisa de uma condição para ela pare
  de chamar a si mesmo. Caso contrário entrará em um looping
  infinito.
  Porém, a técnica de recursão não é uma boa prática, pois deixa
  o código complexo de se entender ou muito verboso e de difícil
  manutenção. É sempre preferível alternativas mais modernas
  como por exemplo, o uso de laços de repetição.

  function recurse(){
    if(condition){
      recurse();
    }
    else{
      //stop calling recurse()
    }
  }

  Default parameters

  Ao definir parâmetros padrões para uma função, podemos definir
  valores caso nenhum valor for passado ou este for indefinido.

  function say(message= 'Hi'){
    console.log(message);
  }
  say()
  say('Hello')

  Closures

  Uma função possui acesso à todas as variáveis criada em seu escopo
  e também ao escopo pai. A mesmo coisa acontece para funções dentro
  de funções.
  
  let item = 1;
  function funcao3(){
    let item2 = 2;
    function funcao4(){
      let item3 = 3;
    }
  }
  func3, possui acesso à item1 e item2
  func4, possui acesso à item1, item2 e item3
*/

//Recursion

function countDown(number) {
  console.log(number);
  const newNumber = number - 1;

  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(10);

//Default parameters

function say(message = 'Hi') {
  console.log(message);
}
//say();
say('Hello');

//escopo

// let x = 5;

// export function somar

// import { somarNumeros } from './escopo';

// const result = somarNumeros();

// console.log(result);
