// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
    (this.value = value), (this.left = null), (this.right = null);
  }
  
  BinarySearchTree.prototype.insert = function (value) {
    if (value < this.value) {
      //Si el valor ingresado es menor a valor entro.
      if (this.left) {
        //Si this.left existe, osea que no es nullo entra
        this.left.insert(value); //Hace la llamada recursiva, porque encontró un valor y necsita encontrar null.
      } else {
        this.left = new BinarySearchTree(value); //Recien acá lo crea.
      }
    }
    if (value > this.value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinarySearchTree(value);
      }
    }
  };
  
  BinarySearchTree.prototype.contains = function (value) {
    if (value === this.value) {
      return true;
    }
    if (value < this.value) {
      if (this.left === null) {
        return false;}
        return this.left.contains(value);
    } else {
      
      if (this.right === null) {
        return false};
        return this.right.contains(value);
      }
    }
  
  
    BinarySearchTree.prototype.size = function () {
      if(this.right === null && this.left === null) return 1;
      if(this.left !== null  && this.right === null) return 1 + this.left.size();
      if(this.right !== null && this.left === null) return 1 + this.right.size();
      if(this.right !== null && this.left !== null) return 1 + this.left.size() + this.right.size();
  }
  
  BinarySearchTree.prototype.depthFirstForEach = function (cb, orden) {
      //pre-order: va de root - izq - derecha
      if(orden ==="pre-order"){
          cb(this.value)      //Llama la funcion y le pasa el valor de root, para guardarlo
          if(this.left !== null) this.left.depthFirstForEach(cb, orden)
          if(this.right !== null) this.right.depthFirstForEach(cb, orden)
      }
      else if(orden === "post-order"){//post-order recorre de izq-derecha-root
          if(this.left !== null) this.left.depthFirstForEach(cb,orden)
          if(this.right !== null) this.right.depthFirstForEach(cb, orden)
          cb(this.value)
      }
      else { //in- order: izq- root- derecha
          if(this.left !== null) this.left.depthFirstForEach(cb, orden);
          cb(this.value);
          if(this.right !== null) this.right.depthFirstForEach(cb, orden)
      }
  
      
  }
  
  BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
      //Hay que guardarse una referencia del nodo hermano, porque sino lo perdemos. Porque va por nivel, recorre por anchura.
      // Crea un array como estructura auxiliar para guardar referencias
      //[{nodo 15}, {nodo 25}]
      //Los valores que va encontrando los guarda en el array y luego los va borrando hasta que el array este vacio
      //Si no se da el array dentro del parametro, cuando haga la llamda recursiva, me pisa el array y lo vuelve a setear como vacio.
      //Tambien el array podría crearse fuera de la funcion para que nose pise
      //En el metodo cuando llama al array no lo pisa porque ya fue definido en el parametro. Al array que usa, es al que ya fue creado y usa sus valores pusheados.
      if(this.left !== null){
        array.push(this.left) //aca pushea el nodo
  }
      if(this.right !== null){
          array.push(this.right)
      }
      cb(this.value) //aca le pasa el numero 20
      if(array.length > 0) {
          array.shift().breadthFirstForEach(cb, array)  //saca el nodo de adelante y aplica el metodo de forma recursiva.
      }
  }