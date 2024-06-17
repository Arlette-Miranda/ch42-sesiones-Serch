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