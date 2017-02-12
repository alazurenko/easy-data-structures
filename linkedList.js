'use strict'
/**
 * Represenation of Node of Linked List
 * 
 * @param value Number
 */
function Node(value) {
  this.value = value;
  this.next = null;
}

/**
 * Represenation of Linked List
 */
function LinkedList() {
  this.head = null;
  this.tail = null;
}

/** 
 * Adds value to a Linked List
 * 
 * @param value number
 */
LinkedList.prototype.add = function(value) {
  var node = new Node(value);
  if(this.head == null) {
    this.head = node;
  }
  if(this.tail != null) {
    this.tail.next = node;
  }
  this.tail = node;
}

/**
 * Removes node by given index
 * 
 * @param index Number
 */
LinkedList.prototype.removeAt = function(index) {
  var prev = null;
  var node = this.head;
  var i = 0;

  while(node != null && i++ < index) {
    prev = node;
    node = node.next;
  }

  if(prev == null) {
    this.head = node.next;
  } else {
    prev.next = node.next;
  }
}
