//? Ejercicio [2]

//* 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const divElement = document.createElement('div');
document.body.appendChild(divElement);

//* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const fullDiv = document.createElement('div');
const pElement = document.createElement('p');
document.body.appendChild(fullDiv).appendChild(pElement)

//* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const sixDivElement = document.createElement('div');


for(let i = 0; i < 6; i++){
    const sixPElemnt = document.createElement('p');
    sixDivElement.appendChild(sixPElemnt);
}

document.body.appendChild(sixDivElement);


//* 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'

const fullP = document.createElement('p');
fullP.innerText = 'Soy dinámico!';

document.body.appendChild(fullP);

//* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2Element = document.querySelector('.fn-insert-here');

h2Element.textContent = 'Wubba Lubba dub dub';

//* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulElement = document.createElement('ul');

apps.forEach(app => {
    const liElement = document.createElement('li');
    liElement.textContent = app;
    ulElement.appendChild(liElement)
});
document.body.appendChild(ulElement);


//* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removedP = document.querySelectorAll('.fn-remove-me');
removedP.forEach(element => element.remove());

//* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.Recuerda que no solo puedes insertar elementos con .appendChild.
const divs = document.querySelectorAll('div');
const primerDiv = divs[0];
const segundoDiv = divs[1];
const p = document.createElement('p');
p.textContent = 'Voy en medio!';
primerDiv.insertAdjacentElement('afterend', p);

//* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divsInsertar = document.querySelectorAll('.fn-insert-here');
divsInsertar.forEach(div => {
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  div.appendChild(p);
});
