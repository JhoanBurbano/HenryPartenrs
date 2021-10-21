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

///xd