function nFactorial(n) {
    // devolvé el factorial de n (n!)
    // ej:
    // el factorial de 3 es 6 (3 * 2 * 1)
    if(n>-1 && n < 2)return 1;
    if(n<0) return "No se puede hacer con negativos";
    return n*nFactorial(n-1)
  }
  
  function nFibonacci(n) {
    // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
    // Retorna el enésimo numero de la serie
    // nFibonacci(0) // 0  // el elemento 0 es cero
    // nFibonacci(1) // 1 // el elemento 1 es 1
    // nFibonacci(6) // 1 // el elemento 6 es 8
    if(n===0)return 0;
    if(n===1)return 1;
    return nFibonacci(n-2) + nFibonacci(n-1); 
  }
  
  // Para esta parte no es necesario utilizar recursión.
  // Implementa la clase Queue que debe contener los siguientes métodos:
  // enqueue: Agrega un valor a la queue. Respeta el orden existente.
  // dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
  // size: Devuelve el número de elementos que contiene la queue.
  
  function Queue() {
    this.elements=[]
  
    Queue.prototype.enqueue=(e)=>{
      return this.elements.push(e)
    }
  
    Queue.prototype.dequeue=(e)=>{
      if(this.elements.length===0) return undefined;
      return this.elements.shift(e)
    }
  
    Queue.prototype.size=()=>{
      return this.elements.length;
    }
  }


  //----------------------------------------------



  // resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
  
  BinarySearchTree.prototype.insert = function (x) {
    if (this.value !== x) {
      if (x < this.value) {
        if (!this.left) {
          this.left = new BinarySearchTree(x)
        } else {
          this.left.insert(x)
        }
      } else if (x > this.value) {
        if (!this.right) {
          this.right = new BinarySearchTree(x)
        } else {
          this.right.insert(x)
        }
      }
    } else {
      return null;
    }
  }
  BinarySearchTree.prototype.contains = function (x) {
    if (x === this.value) return true;
    if (x < this.value){
      if(!this.left)return false;
      this.left.contains(x);
    }else{
      if(!this.right)return false;
      this.right.contains(x);
    }
    // if (x < this.value) {
    //   if (this.left) {
    //     if (this.left !== x) return this.left.contains(x);
    //     return true
    //   } else {
    //     return false
    //   }
    // } else if (x > this.value) {
    //   if (this.right) {
    //     if (this.right !== x) return this.right.contains(x);
    //     return true
    //   } else {
    //     return false
    //   }
  
    // }
    // return false
  }
  BinarySearchTree.prototype.size = function () {
    if (!this.right && !this.left) return 1;
    if (this.left && !this.right) return 1 + this.left.size();
    if (this.right && !this.left) return 1 + this.right.size();
    if (this.right && this.left) return 1 + this.left.size() + this.right.size();
  }
  
  BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
    switch (order) {
      case "pre-order":
        cb(this.value);
        if (this.left) return this.left.depthFirstForEach(cb, order);
        if (this.right) return this.right.depthFirstForEach(cb, order)
        break;
      case "post-order":
        if (this.left) return this.left.depthFirstForEach(cb, order)
        if (this.right) return this.right.depthFirstForEach(cb, order);
        cb(this.value);
        break;
      case "in-order":
        if (this.left) return this.left.depthFirstForEach(cb, order)
        cb(this.value);
        if (this.right) return this.right.depthFirstForEach(cb, order);
        break;
      default:
        if (this.left) return this.left.depthFirstForEach(cb, order)
        cb(this.value);
        if (this.right) return this.right.depthFirstForEach(cb, order);
        break;
    }
  }
  BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  
    if (this.left) {
      array.push(this.left)
    }
    if (this.right) {
      array.push(this.right)
    }
    cb(this.value)
    if (array.length > 0) {
      array.shift().breadthFirstForEach(cb, array)
    }
  
  }



  ///------------------------------------------------------------------------



  function counter() {
    var count = 1;
    // Retorna una funcion que cuando sea invocada retorne un valor creciente.
    // el primer valor deberia ser 1.
    // Vas a tener que usar closures.
    // ejemplo: const newCounter = counter();
    // newCounter(); // 1
    // newCounter(); // 2
    return function(){
        return count++
    }
  }
  
  function cacheFunction(cb) {
    // Usa closures para crear un caché para la función cb.
    // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
    // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
    // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
    // debería retornar el resultado (previamente guardado)
    // Ejemplo:
    // cb -> function(x) { return x * x; }
    // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
    // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
    // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
    // usá hasOwnProperty!
    var ob = {}
    return function(x){
      // switch(ob.hasOwnProperty(x)){
      //   case true:
      //     return ob[x]
      //   case false:
      //     ob[x]=cb(x)
      //     return ob[x];
      // }
      if (ob.hasOwnProperty(x)){
        return ob[x];
      } else {
        ob[x]=cb(x);
      }
    }
  }
  
  // Bind
  
  var instructor = {
    nombre: "Franco",
    edad: 25
  }
  
  var alumno = {
    nombre: "Juan",
    curso: "FullStack"
  }
  
  function getNombre(){
    return this.nombre;
  }
   // Escribir código, sin modificar lo que ya se encuentra escrito arriba, para poder llamar al método getNombre para obtener primero el nombre del instructor y luego para obtener el nombre del alumno.
  // Modificar los undefined por el código correspondiente en cada caso
  // Pista, tenes que bindear el this!
  let getNombreInstructor = getNombre.bind(instructor);
  let getNombreAlumno = getNombre.bind(alumno);
  
  
  /*Guardar en las siguientes tres variables una función que devuelva una cadena utilizando la función "crearCadena"
  y el delimitador especificado. La idea es realizarlo con la función bind para poder volver a utilizarlo múltiples veces luego:
  
  1. textoAsteriscos
  2. textoGuiones
  3. textoUnderscore
  
  Esto nos va a permitir llamar por ejemplo al método "textoAsteriscos" únicamente pasándole un argumento en vez de los tres que recibe "crearCadena"
  */
  function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena){
      return delimitadorIzquierda + cadena + delimitadorDerecha;
  }
  
  // Modificar los undefined por el código correspondiente en cada caso
  // Pista, tenes que usar bind para "bindear" algunos parámetros de la función crearCadena.
  
  var textoAsteriscos = ((cadena)=>{return crearCadena('*','*',cadena)}); 
  
  var textoGuiones = ((cadena)=>{return crearCadena('-','-',cadena)});
  
  var textoUnderscore =((cadena)=>{return crearCadena('_','_',cadena)});
  
  