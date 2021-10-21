use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  if(n === 0) return 1;
  return n * nFactorial(n-1);
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8

  if(n === 0) return 0;
  if(n === 1) return 1;

  return nFibonacci(n-1) +nFibonacci(n-2)
}

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() {
  this.cola =[];

}
Queue.prototype.enqueue = function (num) {
  this.cola.push(num);
};
Queue.prototype.dequeue = function () {
  if(this.cola.length === 0) return undefined;
  return this.cola.shift();
}
Queue.prototype.size = function() {
  return this.cola.length;
  
}

PILA

array = []; 					
class pila{
    constructor(){
    this.array = array;
    }
    agregar(data) {
       array.push(data);}
      sacar(data) {
        array.pop(data);}
    tamaño(){
    console.log(array.length);}
}
const objPila = new pila();
objPila.agregar("hola");
objPila.agregar(5);
objPila.agregar(true);
objPila.sacar();
objPila.agregar(true)
objPila.agregar(true)

objPila.tamaño();  

function cuentaVocales (palabra,cantidadVocales){
    if(palabra.length === 0 ) return cantidadVocales;
    palabra = palabra.split("");
    let i = 0;
    if(palabra[i] === "a" || palabra[i] === "e" || palabra[i] === "i" || palabra[i] === "o" || palabra[i] === "u"){
    cantidadVocales++ }
    palabra.shift();
    palabra = palabra.join("")
    return cuentaVocales(palabra,cantidadVocales);
    }

    
var array = ["H" , "o" , "l" , "a"];
var arrayReverse =[]
function reversa (array){
if(array.length === 0) return arrayReverse
i = 0;
arrayReverse.unshift(array[i])
array.shift();
return reversa(array);
}
reversa(array);
    