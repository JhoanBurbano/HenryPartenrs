function LinkedList() {
  this._length=0;
  this.head=null;
}

function Node(value){
  this.value= value;
  this.next=null;
}

LinkedList.prototype.add=function(data){
  var nodo = new Node(data);
  var current = this.head;
  if(!current){
    this.head=nodo;
    this._length++
    return nodo;
  }
  while(current.next){
    current=current.next;
  }

  current.next=nodo
  this._length++
  return nodo;
}


LinkedList.prototype.remove=function(){
  let current = this.head;
  if(!current)return null;
  if(this._length===1){
    let save = current.value;
    this.head=null;
    this._length--;
    return save;
  }
  while(current.next.next){
    current = current.next
  }

  let s = current.next.value;
  current.next=null;
  this._length--;
  return s;
}

LinkedList.prototype.search=function(value){
  let current=this.head;
  if(!current)return null;
  while(current){
    if(current.value === value)return current.value;
    if(typeof value === "function"){
      if(value(current.value)){
        return current.value;
      }
    }
    current=current.next;
  }
  return null;
}
function LinkedList() {
  (this._length = 0), (this.head = null);
}

function Node(value) {
  (this.value = value), (this.next = null);
}
LinkedList.prototype.add = function (value) {
  let node = new Node(value);
  let current = this.head;
  if (!current) {
    this.head = node;
    this._length++;
    return node;
  }
  while (current.next) {
    //Mientras que haya un siguiente.
    current = current.next;
  }
  current.next = node;
  this._length++;
  return node;
};
LinkedList.prototype.cambio = function (value) {
  let node = new Node(value);
  let current = this.head;
  if (!this.head) return null;
  if (!this.head.next) {
    //Cambiar el primer elemento por el que agregamos
    node.next = this.head;
    this.head = node;
    return node;
  }
  while (current.next.next.next !== null) {
    //Mientras que haya un siguiente.
    current = current.next; //Para cambiar elementos del medio.
  }
  current.next.next = node; //Guardamos valor para mostrar
  let nodoEliminado = current.next;
  node.next = current.next.next;
  current.next = node;

  return nodoEliminado;
};

LinkedList.prototype.change = function (value, c) {
  let current = this.head;
  if (!current) return null;
  while (current) {
    if (current.value === value) {
      //Toma dos parametros, el primer es el a modificar, y el proximo es por el cual modifica.
      current.value = c;
      return current.value;
    }
    if (typeof value === "function") return current.value;
    current = current.next;
  }
  return null;
};
LinkedList.prototype.addAtFist = function (value) {
  let node = new Node(value);
  let current = this.head;
  if (!current) {
    this.head = node;
    this._length++; //Agrega  a lo primero sin perder al anterior.
    return node;
  }
  node.next = this.head;
  this.head = node;
  this._length++;
  return node;
};

LinkedList.prototype.removeAtFirst = function () {
  let current = this.head;
  if (!current) {
    return "La lista está vacía";
  }
  let aux = this.head.next;
  this.head = aux;
  this._length--;
  return this; //Para que devuelva la lista sola
};
LinkedList.prototype.remove = function () {
  let current = this.head;
  //SI LA LISTA NO TIENE
  if (this.length === 0) return null;
  //SI LA LISTA TIENE UNO                        //Si head esta vacío, apunta a null, entonces retorná null.
  if (this.length === 1) {
    //Si el next de head, apunta a null, entonces entrá al buble. Así le decimos que si tiene uno nodo la lista.
    let aux = current.value; // This.head.value sería el dato del unico nodo adentro de la lista. Lo guarda en la variable current para no perderlo.
    this.head = null; // Luego de guardarlo arriba, le dice a head que vuelva a mirar a null, eliminando dato al que anteriormente apuntaba.
    this._length--; //Baja el contador de length
    return aux; //retorna el valor del nodo anteriormente guardado
  } //SI LA LISTA TIENE MAS DE UN NODO
  while (current.next.next) {
    //Usa dos next porque necesita agarrar al anteultimo, para eliminar al ultimo.
    //Me sirve para desplazar por la lista. Se va a desplazar hasta, iniciando por this.head.
    current = current.next;
  }
  let aux = current.next.value; //Guardamos en la variable aux el valor para no perderlo al eliminarlo, porque hay que mostrarlo
  current.next = null; //Le decimos al ultimo nodo, que su siguiente es null. De esa manera eliminamos el ultimo nodo.
  this._length--; //Bajamos el contador y retornamos
  return aux; //Current es el puntero que vuelve a definirlo en this.head, ya que es el comienzo.
  //DA ERROR
};
LinkedList.prototype.search = function (value) {
  if (this.head === null) return null;
  //Si la lista tiene elementos
  let current = this.head;
  while (current) {
    //MIENTRAS este parado en un nudo sigo.
    if (current.value === value) return current.value;
    else if (typeof value === "function") {
      if (value(current.value)) {
        //Pregunta si el tipo del valor es una fucnion, y si lo es la ejecuta pasandole el valor del nodo actual, para que evalue si se corresponden los nodos.
        return current.value;
      }
    }
  }
};
