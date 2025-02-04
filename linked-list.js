class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    // add node to the end
    const newNode = new Node(value, null);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }
  prepend(value) {
    // add node at the start
    const newNode = new Node(value, null);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size += 1;
  }
  size() {
    // return num of nodes in the list
    return this.size;
  }
  head() {
    // return the first node
    return this.head;
  }
  tail() {
    // returns the last node
    return this.tail;
  }
  at(index) {
    // return node at given index
    if (index > this.size || index < 0) {
      throw new Error("Invalid Index");
    }
    let currentNode = this.head;
    let iterator = this.size;
    for (let i = 1; i <= iterator; i++) {
      if (i == index) {
        return currentNode;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
  }
  pop() {
    // removes the last element from the list
    if (!this.head) {
      throw new Error("List is Empty");
    }
    const newTail = this.at(this.size - 1);
    newTail.nextNode = null;
    this.size -= 1;
  }
  contains(value) {
    if (this.head) {
      let currentNode = this.head;
      const iterator = this.size;
      for (let i = 1; i <= iterator; i++) {
        if (currentNode.value == value) {
          return true;
        }
      }
    } else {
      return false;
    }
  }
  find(value) {
    if (this.head) {
      let currentNode = this.head;
      let iterator = this.size;
      for (let i = 1; i <= iterator; i++) {
        if (currentNode.value == value) {
          return i;
        } else {
          currentNode = currentNode.nextNode;
        }
      }
    } else {
      return null;
    }
  }
  toString() {
    // logs out your LinkedList as string in the format( value ) -> ( value ) -> ( value ) -> null
    let LinkedListString = "";
    if (this.head) {
      let iterator = this.size;
      let currentNode = this.head;
      for (let i = 1; i <= iterator; i++) {
        LinkedListString += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.nextNode;
      }
    }
    LinkedListString += "null";
    return LinkedListString;
  }
  insertAt(value, index) {
    // inserts new node with given value at given index
    if (index <= 0 || index > this.size + 1) {
      throw new Error("Invalid Position");
    } else if (index == this.size + 1) {
      this.append(value);
    } else if (index == 1) {
      this.prepend(value);
    } else {
      let nodeAtIndex = this.at(index);
      let nodeAtPrevIndex = this.at(index - 1);
      let newNode = new Node(value, nodeAtIndex);
      nodeAtPrevIndex.nextNode = newNode;
      this.size += 1;
    }
  }
  removeAt(index) {
    // removes node at given index
    if (index <= 0 || index > this.size) {
      throw new Error("Invalid Position");
    } else if (index == this.size) {
      this.pop(index);
    } else if (index == 1) {
      if (this.head.nextIndex) {
        this.head = this.head.nextIndex;
      } else {
        this.head = null;
      }
    } else {
      let nodeAtIndex = this.at(index);
      let nodeAtPrevIndex = this.at(index - 1);
      nodeAtPrevIndex.nextNode = nodeAtIndex.nextNode;
      this.size -= 1;
    }
  }
}
class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export { LinkedList };
