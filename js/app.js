
// Seleccionar objetos del HTML

// querySelector

/**Retorna ya sea ninguno o hasta un elemento (si se tienen varios elementos p solo trae el primer elemento) que concuerde con el selector que se está escibiendo y para traer un elemento se hace como en css, si es una clase se usa .nombre-de-clase, si es un id se usa #id.
 * 
 * si se selecciona un elemento que no existe, en consola se muestra un null
 */

// const heading = document.querySelector('#heading');
// heading.textContent = 'sobreescribe el H2'; //textcontent sobreescribe contenido si es que existía, en caso que no exista texto lo agrega
// heading.classList.add('nueva-clase'); // classList.add agrega una clase al elemento seleccionado, no requiere que se agregue el punto
// heading.classList.remove('nueva-clase') // classList.remove quita una clase, no requiere que se agregue el punto
// console.log(heading);

// querySelectorAll

/**Retorna ninguno o todos los elementos que contienen el documento html */

// const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces); //Muestra todos los enlaces dentro de la clase navegacion
// console.log(enlaces[0]); //Muestra solo el primer enlace

// enlaces[0].textContent = "Nuevo texto enlace"
// enlaces[0].href = "google.com" // se pueden modificar los atributos de las etiquetas

/* Otra forma para seleccionar el enlace y agregarle o modificarle texto */

// document.querySelectorAll('.navegacion a')[0].textContent = "Nuevo texto enlace"


// getElements
/**existen varios getElement para seleccionar elementos html por clase, por id, por nombre de la etiqueta. Solo que ya no se utiliza*/

// const heading2 = document.getElementById('heading');

// console.log(heading2);



// // Crear codigo html con JS

// const nuevoEnlace = document.createElement('A'); //Para crear un elemento se sua createElement y dentro de este se coloca la etiqueta de preferenias en Mayusculas
// /**Ahora se tienen que agregar los atributos de la etiqueta */

// //Agregando un enlace 
// nuevoEnlace.href = 'nuevo-enlace.html';

// //Agregando texto
// nuevoEnlace.textContent = 'nuevo enlace';

// //Agregando clase
// nuevoEnlace.classList.add('navegacion__enlace');

// //Agregarlo al documento
// /**Primero se selecciona el elemento en donde se va a incrustar el elemento generado en js */
// const navegacion = document.querySelector('.navegacion');
// /**Despues se coloca con appendchild el nuevo elemento creado hay que considerar que lo colaca al final de los demas*/
// navegacion.appendChild(nuevoEnlace);

/**Agregando el nuevo elemento en una posición diferente */
//navegacion.insertBefore(nuevoEnlace, enlaces[2]);



// Agregando a los dos elementos de navegacion
// const navegacion1 = document.querySelectorAll('.navegacion');
// let enlaceNuevo;
// for (let i = 0; i < navegacion1.length; i++) {
//     let enlaceNuevo = document.createElement('A');

//     //Agregando un enlace 
//     enlaceNuevo.href = 'nuevo-enlace.html';
//     //Agregando texto
//     enlaceNuevo.textContent = 'nuevo enlace';
//     //Agregando clase
//     enlaceNuevo.classList.add('navegacion__enlace');
//     navegacion1[i].appendChild(enlaceNuevo);
    
// }
// console.log(nuevoEnlace);
// console.log(enlaceNuevo);


///Eventos

/**Los eventos son la interacción del usuario en el sitio web, aunque tambie hay eventos que se hacen en automatico 
 * 
 * Para registrar los evenetos se usa addEventLister
*/

// console.log(1);
// window.addEventListener('load', function() {
//     console.log(2);
// }); //load espera a que JS y todo el contenido HTML carguen y es un evento
// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() {
//     console.log(4);
// }); // Solo esppera a que se descargue el HTML

// window.addEventListener('load', imprimir());
// function imprimir(){
//     console.log(6);
// }
// console.log(5);

// window.onscroll = function() {
//     console.log('Scrolling...');
// }

// Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) { // Hace referencia al evento y al hacer un console.log muestra informacion del evento
//     console.log(evento);
//     //console.log(evento.target); // Muestra el elemento al que se le está haciendo click
//     evento.preventDefault(); //Se requiere para no hacer que la página se recargue y más cuando son formularios en este caso tambien está previniendo las acciones de las funciones que se agreguen después
//     //console.log('enviando formulario');
// });


///Eventos de los inputs y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
//change nos indica lo que pusismos en el console.log pero al dar enter
//input nos indica cuantas veces se está escribiendo un caracter
// nombre.addEventListener(/*'change'*/'input', function(e) {
//     console.log(e.target.value); // e.target.value Nos indica en consola todos los caracteres que el usuario digita en teclado
// });
// email.addEventListener(/*'change'*/'input', function(e) {
//     console.log(e.target.value);
// });
// mensaje.addEventListener(/*'change'*/'input', function(e) {
//     console.log(e.target.value);
// });

// Haciendo mas corto el código anterior

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// haciendo una funcion que contenga la lectura de los inputs

function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value; // Haciendo que dentro del valor nombre en el objeto se llene el campo vacio o lo que el usuario vaya llenando
    //console.log(datos);
}

//Evento de submit 

/**Cuando usar click y cuando usar submit 
 * en un formulrio se usa submit
 * el click está ligado al boton
*/

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    //Validar el formulario
    
    /**Se van a extraer los valores del objeto global datos */
    const { nombre, email, mensaje } = datos;
    // console.log(nombre); 
    // console.log(email); 
    // console.log(mensaje); 
    if (nombre === '' || email === '' || mensaje === '') {
        // mostrarError('Todos los campos son obligatorios');
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    } else {
        // mostrarEnvio('El formulario se envío correctamente')
        mostrarAlerta('El formulario se envío correctamente')
    }
    
    //Enviar el formulario
    
    console.log('Enviando formulario');
});

// // Mostrar error en documento html
// function mostrarError(mensaje) {
//     //console.log(mensaje);

//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');
//     //console.log(error);
//     formulario.appendChild(error);

//     //Desaparecer mensaje de error

//     setTimeout(() => {
//         error.remove();
//     }, 5000);
// }

// //Mostrar mensaje de envio en documento html
// function mostrarEnvio(mensaje) {
//     const envio = document.createElement('P');
//     envio.textContent = mensaje;
//     envio.classList.add('correcto');
//     formulario.appendChild(envio);

//     setTimeout(() => {
//         envio.remove();
//     }, 5000);
// }



/// Refactoring al código
/**Se usa para compactar código ya creado 
 * En este caso se usa para hacer en una función la parte de mostrarError y mostrarEnvio
*/

//Mostrar Alerta

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    // console.log(error);
    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}