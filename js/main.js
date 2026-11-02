// Creo array con los botones.
const arrayBotones = ['Mar', 'Edificio', 'Arena', 'Señales', 'Cosa']

// Creo variable para referirnos a la section en html donde introduciremos los botones.
const botonera = document.querySelector('#botonera')

// Creo array que contenga las imnagenes.
const arrayImagenes = [
    {
        imagen: 'assets/viajes/viajes-1.jpg',
        alt: '',
        title: 'Viaje 1',
        tags: '',
    },
    {
        imagen: '',
        alt: '',
        title: 'Viaje 2',
        tags: '',
    },
    {
        imagen: '',
        alt: '',
        title: 'Viaje 3',
        tags: '',
    },
     {
        imagen: '',
        alt: '',
        title: 'Viaje 4',
        tags: '',
    },
     {
        imagen: '',
        alt: '',
        title: 'Viaje 5',
        tags: '',
    },
     {
        imagen: '',
        alt: '',
        title: 'Viaje 6',
        tags: '',
    },
     {
        imagen: '',
        alt: '',
        title: 'Viaje 7',
        tags: '',
    }
]






]


//Funciones
/* 1- Crear una funcion que coja los elementos del arrayBotones y los pinte como botones 
en el section del HTML.
Para ello metemos un for of que recorra el array  */

function crearButton() {

    for (let tag of arrayBotones) {
        //creo una variable button que me va a crear una etiqueta button
        const button = document.createElement('button');
        //a la etiqueta button le doy un id y un texto con el valor de tag(elementos de array)
        button.id = tag;
        button.innerText = tag;
        /*añado el button a botonera (que es la variable para referirnos al section 
        con id #botonera) */
        botonera.append(button)
    }
}

crearButton()

/* 2- */


