// Creo array con los botones.
const arrayBotones = ['Mar', 'Edificio', 'Arena', 'Señales', 'Cosa']

// Creo variable para referirnos a la section en html donde introduciremos los botones.
const botonera = document.querySelector('#botonera')

// Creo array que contenga las imnagenes.
const arrayImagenes = [
    {
        imagen: 'assets/viajes/viajes-1.jpg',
        alt: 'Mujer en hamaca frente al mar',
        title: 'Viaje 1',
        tags: ['Mar', 'Arena', 'Cosa']
    },
    {
        imagen: 'assets/viajes/viajes-2.jpg',
        alt: 'Cabañas sobre el agua',
        title: 'Viaje 2',
        tags: ['Mar', 'Arena', 'Cosa', 'Edificio'],
    },
    {
        imagen: 'assets/viajes/viajes-3.jpg',
        alt: 'Señales con direcciones a diferentes paises',
        title: 'Viaje 3',
        tags: ['Señales', 'Cosa'],
    },
     {
        imagen: 'assets/viajes/viajes-4.jpg',
        alt: 'Plaza España de Sevilla',
        title: 'Viaje 4',
        tags: ['Edificio', 'Cosa']
    },
     {
        imagen: 'assets/viajes/viajes-5.jpg',
        alt: 'Puene en Plaza España de Sevilla',
        title: 'Viaje 5',
        tags: ['Edificio', 'Cosa'],
    },
     {
        imagen: 'assets/viajes/viajes-6.jpg',
        alt: 'Tunel en paseo maritimo',
        title: 'Viaje 6',
        tags: ['Mar', 'Arena', 'Cosa'],
    },
     {
        imagen: 'assets/viajes/viajes-7.jpg',
        alt: 'Castillo en lo alto de un pueblo',
        title: 'Viaje 7',
        tags: ['Edificio', 'cosa'],
    }
]










//Eventos
/* 1- Crear un evento para que cuando haga click sobre un boton, me devuelva sus tags.*/














//Funciones
/* 1- Crear una funcion que coja los elementos del arrayBotones y los pinte como botones 
en el section del HTML.
Para ello metemos un for of que recorra el array  */

function crearButton() {

    for (let element of arrayBotones) {
        //creo una variable button que me va a crear una etiqueta button
        const button = document.createElement('button');
        //a la etiqueta button le doy un id y un texto con el valor de tag(elementos de array)
        button.id = element;
        button.innerText = element;
        /*añado el button a botonera (que es la variable para referirnos al section 
        con id #botonera) */
        botonera.append(button)
    }
}

crearButton()

/* 2- Crear una funcion para que cada button tenga los tags de su imagen.
 Tenemos que comprobar que el id o innertext del boton sea igual que  */
function asignarTags() {}

 /*//Creamos variable para almacenar los tags.
    const tagsDeImagenes = []

    //Usamos .forEach para recorrer el arrayImagenes.
    arrayImagenes.forEach((imagen) => { 
        //Usamos metodo .push para almacenar en tagsDeImagenes la propiedad .tags
        tagsDeImagenes.push(imagen.tags);
        
    } );
    //Hacemos return de tagsDeImagenes para que nos devuelva los tags de cada objeto.
    return tagsDeImagenes
  
}
//compruebo que la funcion me esta devolviendo los tags de cada elemento
console.log(asignarTags()) */
