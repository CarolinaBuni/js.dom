//* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const boton = document.querySelector('.showme');
console.log('Este es botón:', boton.textContent);

//* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1Element = document.querySelector('#pillado');
console.log('Este es el H1:', h1Element.textContent);

//* 1.3 Usa querySelector para mostrar por consola todos los p

const pElement = document.querySelectorAll('p');
console.log('Estos son todos los p:', pElement.textContent);

//* 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pokemonElements = document.querySelectorAll('.pokemon');
console.log('Estos son:', pokemonElements);

//* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const TestMeElement = document.querySelectorAll('[data-function="testMe"]');
console.log('Atributos TestMe:', TestMeElement);

//* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

const thirdAtribute = document.querySelector('[data-function="testMe"]:nth-of-type(3)');
console.log('Tercer personaje:',thirdAtribute);

