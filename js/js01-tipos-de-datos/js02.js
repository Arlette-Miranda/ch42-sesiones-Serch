// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

Función: Conjunto de instrucciones que realiza una tarea o calcula un valor.
  Código que se puede reutilizar.


  ----------- Funciones declaradas --------------
    (function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
    function nombreFuncionCamelCase ( parámetros ){
        //cuerpo de la función
        instrucciones;
    }

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/
function getting1(){
    return "hola, cómo estas?";
}

console.log(getting1);
/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/
const saludo = function greeting2(name){
    return `Hola, me llamo ${name} y tengo hambre`;
};

console.log(saludo("Amay"));

// Realizar una función que reciba un palabra y retorne la palabra en minúscula
// Realizar dos versiones de función:  función declarada y función expresa.

/** Realizar la función acá */

// declarada
function wordToLowerCase(word){
    return word.toLowerCase();
};

// expresada
const lowerCase = function (word){
    return word.toLowerCase();
};


// uso de la función
console.log( wordToLowerCase("YUPI YUPI El MUÑECO CHUKY") ); // yupi yupi el muñeco chuky
console.log( lowerCase("YUPI YUPI El MUÑECO CHUKY") ); // yupi yupi el muñeco chuky

/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    Si en una arrow function se utilizan la {} se debe de agregar explicitamente
    la palabra retorno para devolver un valor.

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/


// Realizar una función expresada para calcular el área de un rectangulo
// expresada
const areaRectangle  = function (a,b){
    return a*b;
};


////// Solo tiene una instrucción por lo que no lleva {} ni return
const areaRectangle1 = (a,b) => a*b;
/* 
console.log(areaRectangle(6,4)); */

console.log(`El area de rectangulo es ${ areaRectangle (6,4) }`);
console.log(`El area de rectangulo es ${ areaRectangle1 (6,4) }`);

/* Realizar un Arrow function que calcule el impuesto de un valor */
/* TODO calcular el impuesto de un valor */

const calcularImpuesto = (a,b) => a * b ;


// Caso de uso
console.log( `El impuesto de los calcetines es: ${calcularImpuesto(70.50, .16 ) }`)

////////////////////////
// ==================================================================
// Ejercicios: Convertir las siguientes funciones a Arrow functions.

/** Función 1: Sumar dos números */
/*function sumar(a, b) {
    return a + b;
}*/
const sumar = (a,b) => a + b;

console.log( `La suma de 100 + 5 = ${sumar(100,5)}`); // 105

/** Función 2: Verificar si un número es par */
/*function esPar(num) {
    return num % 2 === 0;
}*/
const esPar = num => num % 2 === 0;

console.log( `El número 18 es par? ${esPar(18)}`); // true
console.log( `El número 23 es par? ${esPar(23)}`); // false

/** Función 3: Verificar si tres números terminan con el mismo dígito */
/* function mismosUltimosDigitos(num1, num2, num3) {
    const ultimoDigito1 = num1 % 10;
    const ultimoDigito2 = num2 % 10;
    const ultimoDigito3 = num3 % 10;
    return ultimoDigito1 === ultimoDigito2 && ultimoDigito1 === ultimoDigito3;
} */
const mismosUltimosDigitos = (num1, num2, num3) =>{
    const ultimoDigito1 = num1 % 10; // 3
    const ultimoDigito2 = num2 % 10; // 3
    const ultimoDigito3 = num3 % 10; // 3
    return ultimoDigito1 === ultimoDigito2 && ultimoDigito1 === ultimoDigito3;
};

/// Otra opción
const mismosUltimosDigitos1 = (num1, num2, num3) =>
     (num1 % 10) === (num2 % 10) && (num1 % 10) === (num3 % 10); // 3

console.log(`El num. 23, 203 y 1013 terminan en 3? ${mismosUltimosDigitos(23,203,1013)}`);
console.log(`El num. 23, 203 y 1013 terminan en 3? ${mismosUltimosDigitos1(23,203,1013)}`);

// =============================================================
/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */
 // Hacer con arrow function una función que reciba un texto e imprima en consola

 const printToConsole = (texto) =>
    console.log(texto);
 
 // Hacer con arrow function una función que reciba un texto e imprima en alert

 const printToAlert = (texto) =>
    alert(texto);

 printToConsole("HOLA")
 printToAlert("Adiós")

 const printToH1 = (texto) =>
    document.getElementById("app-title").innerHTML = texto;

 // Realizar una función(arrow function) que reciba un texto
// y que pueda imprimir en consola, alert y quiza en el futuro
// se agregue otra salida para imprimir.


//// Opción 1
const printMessage = (text, optionToPrint) => {
    if (optionToPrint === "console"){
        printToConsole(text);
    } else if (optionToPrint === "alert") {
        printToAlert(text);
    } else if (optionToPrint === "h1") {
        printToH1(text);
    } else{
        console.error("Opción no registrada")
    }
};
printMessage("Ya es martes","console")
printMessage("Vámonos","alert")
printMessage("Hola amigas","h1")

/// Opción 2
/*
    switch: Es una alternativa a if-else. Permite ejecutar
    diferentes bloques de código basándose en el valor de una expresión
   */
    const printMessage1 = (text, optionToPrint ) =>{
        switch( optionToPrint ) {
            case "console":
                printToConsole( text);
                break;
            case "alert":
                printToAlert(text);
                break;
            case "h1":
                printToH1(text);
                break;
            default:
                console.error("Opción incorrecta");
        }
    };

printMessage1("mmmm","console")
printMessage1("Ya merito?","alert")
printMessage1("Hola bros","h1")