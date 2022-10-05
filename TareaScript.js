//--Trabajo práctico individual--
//--Generar un proyecto con js--
//--Imprimir por consola los siguientes datos: variables, let, constantes.--
//--Generar funciones de cálculos matemáticos--
//--Generar un tipo de array y recorrerlo.--
//--El proyecto se entrega por un repositorio en github/gitlab--

var nombre= "antito";
console.log (nombre);

let deporte= 'patin';
console.log (deporte);

const color= `azul`;
console.log (color);

function suma (num1, num2){
    var sumar= num1 + num2;
    return sumar;
}
var num1= 3;
var num2= 8;
var sumar= suma(num1, num2);
console.log (suma(num1,num2));

function multiplicacion (num1,num2){
    let multi= num1*num2;
 return multi;
 }
 var num1= 6;
 var num2= 9;
 let multi= multiplicacion (num1,num2);
 console.log(multiplicacion(num1,num2));

 function resta (num1, num2){
    let res = num1-num2;
    return res;
}
var num1= 6;
var num2= 10;
let res= resta(num1, num2);
console.log (resta(num1,num2));

function division (num1, num2){
    var div= num1/num2;
    return div;
}
var num1= 8;
var num2= 2;
let div= division(num1, num2);
console.log (division(num1,num2));

let array =["46","22","67"];
for (x=0; x<3;x++){
 console.log(array[x]);
}

//#region 
var nombre= "antito";
let deporte1= 'patin';
const color1= `azul`;
var num1= 3;
var num2= 8;
var sumar= suma(num1, num2);
var num1= 6;
var num2= 9;
let multi1= multiplicacion (num1,num2);
var num1= 6;
var num2= 10;
let res1= resta(num1, num2);
var num1= 8;
var num2= 2;
let div1= division(num1, num2);
//#endregion

//#region 
console.log (nombre);
console.log (deporte);
console.log (color);
console.log (suma(num1,num2));
console.log(multiplicacion(num1,num2));
console.log (resta(num1,num2));
console.log (division(num1,num2));
console.log(array[x]);
//#endregion


 
