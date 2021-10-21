function HashTable() {
    this.numBuckets=35;
    this.contenedores = [];
  }
  HashTable.prototype.hash =function (value) {
      for(let i=0; i< value.length;i++){
        suma += value.charCodeAt(i);
      }
      return suma % this.numBuckets;  //Devuelve la posicioón en donde queremos guardar 
  }
  
  HashTable.prototype.set = function (key, value) {
    if(typeof key !== "string"){
      throw new TypeError("Keys must be strings")
    }
    var posicion = this.hash(key);
    this.contenedores[posicion] = this.contenedores[posicion] || [];//Accedo a la posición que me dio hash dentro del array contenedor, y le asigno como valor lo que ya tenia o un objeto.
    this.contenedores[posicion].unshift({
      key: key,
      value: value
    });
  }
  
  HashTable.prototype.search=function (key, value) {
    let i = this.hash(key);
    if(this.contenedores[i] === undefined) this.contenedores[i] = {};
    this.contenedores[i][key] = value;
  }
  
  
  HashTable.prototype.get=function (key) {
    let i= this.hash(key);
    for(let i = 0; i < this.contenedores[posicion].length; i++){
      if(this.contenedores[posicion][i].key === key) {
        return this.contenedores[posicion][i].value;
      }
    }
    return false;
  }
  HashTable.prototype.hasKey=function (key) {
    let encontrado = this.get(key);
    if(encontrado === false){
      return false;
    }
    else{
      return true;
    }
  }