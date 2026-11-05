// VARIABLES

/* Creo variable para referirnos al div de la section en html donde introduciremos los botones.*/
const botonera = document.querySelector('#botonera')

/* Creo variable para referirnos al div en la section donde introduciremos las fotos.*/
const galeria = document.querySelector('#galeria')

/* Creo variable para referirnos al div donde aparecerá la frase. */
const frase = document.querySelector('#frase')

/* Creo variable para referirnos a la section donde aparecerá la imagen en grande */
const imagenPrincipal = document.querySelector('#imagenPrincipal')

/* Creamos fragmento de documento donde almacenaremos el contenido*/
const fragment = document.createDocumentFragment()


/* Creo array con los botones.*/
const arrayBotones = ['Mar', 'Edificio', 'Arena', 'Señales', 'Cosa']

/* Creo array que contenga las imnagenes.*/
const arrayImagenes = [

    {
        imagen: 'assets/viajes/viajes-1.jpg',
        alt: 'Mujer en hamaca frente al mar',
        title: 'Viaje 1',
        tags: ['Mar', 'Arena', 'Cosa'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non congue tellus.'
    },
    {
        imagen: 'assets/viajes/viajes-2.jpg',
        alt: 'Cabañas sobre el agua',
        title: 'Viaje 2',
        tags: ['Mar', 'Arena', 'Cosa', 'Edificio'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non congue tellus.'
    },
    {
        imagen: 'assets/viajes/viajes-3.jpg',
        alt: 'Señales con direcciones a diferentes paises',
        title: 'Viaje 3',
        tags: ['Señales', 'Cosa'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non congue tellus.'
    },
    {
        imagen: 'assets/viajes/viajes-4.jpg',
        alt: 'Plaza España de Sevilla',
        title: 'Viaje 4',
        tags: ['Edificio', 'Cosa'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non congue tellus.'
    },
    {
        imagen: 'assets/viajes/viajes-5.jpg',
        alt: 'Puene en Plaza España de Sevilla',
        title: 'Viaje 5',
        tags: ['Edificio', 'Cosa'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non congue tellus.'
    },
    {
        imagen: 'assets/viajes/viajes-6.jpg',
        alt: 'Tunel en paseo maritimo',
        title: 'Viaje 6',
        tags: ['Mar', 'Arena', 'Cosa'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non congue tellus.'
    },
    {
        imagen: 'assets/viajes/viajes-7.jpg',
        alt: 'Castillo en lo alto de un pueblo',
        title: 'Viaje 7',
        tags: ['Edificio', 'cosa'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non congue tellus.'
    }
]






//EVENTOS
/* 1- Crear un evento para que cuando haga click sobre un boton, me devuelva sus tags.*/

//Le decimos al documento que cada vez que haya click en
document.addEventListener('click', (ev) => {

    if (ev.target.matches('#botonera button')) {
        //console.log('click sobre el boton') funciona.
        //queremos que pinte el tag.
        const tag = ev.target.id

        crearImagenesPequeñas(tag)
        crearImagenGrande(tag)
        
    }

})









// FUNCIONES
/* 1- Crear una funcion que coja los elementos del arrayBotones y los pinte como botones 
en el section del HTML. */

//function crearButton() {}
const crearButton = () => {



    for (let element of arrayBotones) {
        //creo una variable button que me va a crear una etiqueta button
        const button = document.createElement('button');
        //a la etiqueta button le doy un id y un texto con el valor de tag(elementos de array)
        button.id = element;
        button.innerText = element;
        //añado el button a botonera (que es la variable para referirnos al section con id #botonera) 
        botonera.append(button)
    }
}









/* 2- funcion que me devuelva un array de los objetos del array padre que tengan x tag*/

//function crearArrayFiltradoPorTag(tagParaFiltrar) {
const crearArrayFiltradoPorTag = (tagParaFiltrar) => {

    let arrayFiltrado = []

    // arrayImagenes.forEach((objetoImagen) => {

    //     for (let tag of objetoImagen.tags) {
    //         if (tag == tagParaFiltrar) {
    //             arrayFiltrado.push(objetoImagen);
    //             break;

    //         }
    //     }
    // })

    arrayFiltrado = arrayImagenes.filter((objetoImagen) => {

        return objetoImagen.tags.includes(tagParaFiltrar)


    })


    return arrayFiltrado
}







/* 3- funcion que cree tantas imagenes como objetos en el array padre haya.*/

//function crearImagenes(tag) {

const crearImagenesPequeñas = (tag) => {

    limpiar(galeria)

    const arrayFiltrado = crearArrayFiltradoPorTag(tag)

    // for (let objeto of arrayFiltrado) {

    //     const imagen = document.createElement('IMG');
    //     imagen.id = objeto.tags;
    //     imagen.title = objeto.title;
    //     imagen.src = objeto.imagen;
    //     imagen.alt = objeto.alt;

    //     fragment.append(imagen)
    // }

    arrayFiltrado.forEach((objeto) => {

        const contenedorImagen = document.createElement('ARTICLE');
        const tituloImagen = document.createElement('H3');
        const cajaImagen = document.createElement('DIV');
        const imagen = document.createElement('IMG');
        const descripcion = document.createElement('P');

        imagen.id = objeto.tags;
        imagen.title = objeto.title;
        imagen.src = objeto.imagen;
        imagen.alt = objeto.alt;

        tituloImagen.textContent = objeto.title;

        descripcion.textContent = objeto.description;

        cajaImagen.append(imagen);
        contenedorImagen.append(tituloImagen, cajaImagen, descripcion);

        fragment.append(contenedorImagen);

    })

    galeria.append(fragment);
}


/* 4. Funcion para limpiar contenido de un elemento DOM en html.*/
const limpiar = (donde) => {
    donde.innerHTML = ''
}


/* 5. Funcion para que me cree una imagen grande aleatoria */
//function fotoGrande () {}
const crearImagenGrande = (tag) => {

limpiar(imagenPrincipal)

    const cajaImagenGrande = document.createElement('DIV');
    const imagenGrande = document.createElement('IMG');
   
    const arrayFiltrado = crearArrayFiltradoPorTag(tag)
    console.log(arrayFiltrado)
    imagenGrande.src= arrayFiltrado[0].imagen; 
    imagenGrande.alt= arrayFiltrado[0].alt;
    

    cajaImagenGrande.append(imagenGrande);
    fragment.append(cajaImagenGrande);
    imagenPrincipal.append(fragment);
}

/*6. Funcion para generar imagen aleatoria */
 

crearButton()

