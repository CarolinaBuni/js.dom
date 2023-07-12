//? Ejercicio [3]

//* Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente
//* una lista ul > li de elementos en el div de html con el atributo
//* data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const divElement = document.querySelector('[data-function="printHere"]');
const ulElement = document.createElement('ul');

for(let i = 0; i < places.length; i++){
    const liElement = document.createElement('li');
    liElement.textContent = places[i];

    ulElement.appendChild(liElement)
};

divElement.appendChild(ulElement);

