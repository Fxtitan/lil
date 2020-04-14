function Node(value) {
  return {
    value: value,//this is the info
    next: null,// this is the link
  }
}//link list are made up of nodes.... this is node 1

function Lil() {
  return {
    head: null,

    

    addToStart: function(value){
      let newNode = Node(value);
      if(this.head === null){
        this.head = newNode; //pointing at same node.
      }else if (this.head) { 
        newNode.next = this.head; //adds a new Node with the given value as the new head
        this.head = newNode; //makes the new Node's next property the old head
      }

      
      

      
//put value 

    },

    addToEnd: function(value){
      let newNode = Node(value);
      if(this.head === null){
      this.head = newNode; 
    } else if(this.head){
      this.head = newNode.next;

    }
  },

  }

}




if (typeof Node === 'undefined') {
  Node = undefined;
}

if (typeof Lil === 'undefined') {
  Lil = undefined;
}


module.exports = {
  Lil,
  Node,
}
