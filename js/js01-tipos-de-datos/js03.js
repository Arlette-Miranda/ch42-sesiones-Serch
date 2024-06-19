console.log("Sesion Js03 con Remy")

const changeImage = ( imageID, imagePath) => 
    document.getElementById( imageID ).src = imagePath ;

changeImage( "img1", "./public/img/remy01.jpg" );
changeImage( "img2", "./public/img/remy02.jpg" );
changeImage( "img3", "./public/img/remy03.jpg" );
changeImage( "img4", "./public/img/remy04.jpg" );

// ==================== Array ================
/*
 El tipo array es un tipo de Objeto especial
 ya que cuenta con diferentes atributos y métodos
 para realizar diferentes operaciones.
 Un Array permite almacenar múltiples valores.
*/
// Definir un array
["Remy", 1, true ];

// Crear un array de nombres y asignarlo a una variable
const nombres = ["Dulce", "Karina", "Diana"];

const primerCaracter = "Ayer soñe que...".charAt(0);
console.log(primerCaracter); // A

const primerNombre = nombres[0];
console.log( primerNombre);

// Imprimir directamente a Diana
console.log (nombres[2]);

// Los arrays son mutables
console.log(nombres);
nombres[1] = "Kari";
console.log(nombres);

// Agregar un elemento, en un índice que no existe
nombres[10] = "Ale"; 
console.log( nombres ); // ['Dulce', 'Kari', 'Diana', 'Yoli', empty × 6, 'Ale']
console.log( nombres [9] ); // undefined
// Verifica el número de elementos de un arreglo
console.log( nombres.length  ); // 11
// ['Dulce', 'Kari', 'Diana', 'Yoli', undefined, 
// undefined, undefined, undefined, undefined, undefined, 'Ale']

// =============================
const panes = [];
// contar núm de elementos de un arreglo:
console.log( panes.length ); // 0
// Agregar un elemento indicando el índice
panes[0] = "Pan de ajo";

// Agregar uno o más elemento al final de mi arreglo
// push() : Agregar uno o más elementos
//  retorno: la longitud del arreglo
panes.push("Dona de Chocolate");
console.log( panes );
console.log( `Total de elementos en panes : ${ panes.push("Bolillo", "Roles")}` ); // 4
console.log( panes );

// Eliminar el último elemento del arreglo pop()
// nos devuelve el ultimo elemento eliminado
console.log(panes.pop()); // roles
console.log( panes );

// unshift: agrega uno o más elemntos al inicio
// retorna la longitud del arreglo
console.log(panes.unshift("Cacahuate", "Concha")); // 5
console.log(panes);


// shift: Eliminar el primer elemnto de mi arreglo
// nos devuelve el elemento eliminado
console.log(panes.shift());


// PEPS: Primero en etrar, primeor en salir FIFO
const frutas = ["Mango", "Piña"];
frutas.push("Melón");
frutas.shift(); //Mango
console.log(frutas);

// LIFO: Last Input First Output
const eliminados= ["Hamburguesa", "Chiles Rellenos"];
eliminados.push("Tacos");
console.log(eliminados);
eliminados.pop(); // Tacos
console.log(eliminados);

// Buscar elementos en el arreglo.
// indexOf: Buscar el índica de la primera aparición de un elemento
//  retorna: el índice del elemento, si no se encuentra retorna -1
const numIndiceDelElemento = panes.indexOf("Pan de ajo");
console.log(`Índice el elemento encontrado: ${numIndiceDelElemento}`)
if (numIndiceDelElemento !== -1 ){
    console.log("Yuju, tu pan si lo tenemos");
} else {
    console.log("Lo siento, tu pan no lo tengo registrado")
};

