//? Ejercicio [3]

//* 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
//const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

// const ulElement = document.createElement('ul');

// countries.forEach(country => {
//     const liElement = document.createElement('li');
//     liElement.textContent = country;
//     ulElement.appendChild(liElement);
// });

// document.body.appendChild(ulElement);

//* 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

// pElement = document.querySelector('.fn-remove-me');

// pElement.remove();

//* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

// const ulList = document.createElement('ul');

// cars.forEach(car => {
//     const liList = document.createElement('li');
//     liList.textContent = cars;
//     ulList.appendChild(liList);
    
// });

// const divIngestion = document.querySelector('[data-function="printHere"]');

// divIngestion.appendChild(ulElement);

//* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries = [
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries.forEach(country => {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');

    h4.textContent = country.title;
    img.src = country.imgUrl;

    div.appendChild(h4);
    div.appendChild(img);

    document.body.appendChild(div)
});

//* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const button = document.createElement('button');

button.textContent = 'Eliminar';
button.id = 'btnRemoveLast';

document.body.appendChild(button);

const btnRemoveLast = document.getElementById('btnRemoveLast');

btnRemoveLast.addEventListener('click', function () {
    const divs = document.querySelectorAll('div');

    if(divs.length > 0){
        const lastDiv = divs[divs.length - 1];
        lastDiv.remove();
    }
});

//* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

const allDivs = document.querySelectorAll('div');

allDivs.forEach((div) => {
    const buttonDivs = document.createElement('button');
    buttonDivs.textContent = 'Eliminar'

    buttonDivs.addEventListener('click', function () {
        const divToRemove = this.parentNode;

        divToRemove.remove();
    });

    div.appendChild(buttonDivs);
});





