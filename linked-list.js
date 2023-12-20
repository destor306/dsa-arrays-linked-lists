/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;  
    this.length +=1;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length +=1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.head)
    {
      return null;
    }
    if(this.head == this.tail){
      const val = this.head.val;
      this.head= null;
      this.tail = null;
      this.length =0;
      return val;
    }
    let currentNode = this.head;
    while (currentNode.next != this.tail){
        currentNode = currentNode.next;
    }
    const val = this.tail.val;
    this.tail = currentNode;
    this.tail.next = null;
    this.length-=1;
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.head){
      return null;
    }
    if(this.head == this.tail){
      const val = this.head.val;
      this.head=null;
      this.tail =null;
      this.length =0;
      return val;
    }
    const val = this.head.val;
    this.head =this.head.next
    this.length -=1;
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    let i =0
    while(currentNode){
      if (idx == i){
        return currentNode.val;
      }
      currentNode =currentNode.next;
      i+=1;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    let i =0;
    
    while(currentNode){
      if (idx == 0){
        this.head.val = val;
      }
      else if (i== idx){
        currentNode.val = val;
      }
      currentNode = currentNode.next;
      i+=1;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length){
      throw Error("idx out of bounds")
    }
    let newNode = new Node(val)
    if (idx ==0){
      newNode.next = this.head;
      this.head = newNode;
      if(!this.tail){
        this.tail = newNode;
      }
    }
    else{
      let currentNode = this.head;
      for(let i=0; i< idx-1;i++){
        currentNode= currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;

      if(idx== this.length){
        this.tail = newNode;
      }
  
    }
    this.length +=1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx > this.length){
      throw Error("idx out of bounds")
    }
    
    if (idx ==0){
      this.head = null;
      this.tail = null;
    }
    else{
      let currentNode = this.head;
      for(let i=0; i< idx-1;i++){
        currentNode= currentNode.next;
      }
        currentNode.next = currentNode.next.next;

      if(idx== this.length){
        this.tail = newNode;
      }
  
    }
    this.length -=1;
  }

  /** average(): return an average of all values in the list */

  average() {
    if(!this.head){
      return 0;
    }
    else{
      let currentNode = this.head;
      let sum =0;
      for(let i =0; i<this.length;i++){
        sum += currentNode.val;
        currentNode = currentNode.next;
        }
      return sum/this.length;
    }
  }
}

module.exports = LinkedList;
