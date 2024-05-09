let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;

    return newNode;
  }

  shift() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  getHead() {
    return this.head.value;
  }

  getLength() {
    return this.length;
  }
}

const cards = new LinkedList();

for (let i = 1; i <= N; i++) {
  cards.push(i);
}

while (cards.getLength() !== 1) {
  cards.shift();
  cards.push(cards.getHead());
  cards.shift();
}

console.log(cards.getHead());
