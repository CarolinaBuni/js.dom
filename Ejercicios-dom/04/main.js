//? Ejercicio [4]

//* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const button = document.createElement('button');
button.textContent = 'Button'
button.id = 'btnToClick';



button.addEventListener('click', function(){
    console.log(button);
});

document.body.appendChild(button)


//* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const inputFocus = document.querySelector('.focus');

inputFocus.addEventListener('focus', function(event){
    console.log(event.target.value);
});


//* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputEvent = document.querySelector('.value');

inputEvent.addEventListener('input', function(event){
    console.log(event.target.value);
});