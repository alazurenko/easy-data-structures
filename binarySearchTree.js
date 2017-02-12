'use strict'
/**
 * Representation of a node in a binary tree
 * 
 * @param data Number 
 * @param left Node
 * @param right Node 
 */
function Node(data, left, right) {
  this.data = data;
  this.left = left || null;
  this.right = right || null;
}

/**
 * Shows Node's data
 * 
 */
Node.prototype.show = function() {
  return this.data;
}

/**
 * Representation of Binary Search Tree data structure
 * 
 */
function BST() {
  this.root = null;
}

/** 
 * Inserts a Node with a given data into Binary Search Tree (BST)
 * 
 * @param data Number
 */
BST.prototype.insert = function(data) {
  var n = new Node(data, null, null);
  if(this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;

    while(true) {
      parent = current;

      if(data < current.data) {
        current = current.left;
        if(current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if(current == null) {
          parent.right = n;
          break;
        }
      }
    }

  }
}

/**
 * Gets node with a minimum value (Number)
 */
BST.prototype.getMin = function() {
  var current = this.root;
  while(!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}

/**
 * Gets node with a maximum value (Number)
 */
BST.prototype.getMax = function() {
  var current = this.root;
  while(!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

/**
 * Finds a Node by given data
 * 
 * @param data Number 
 */
BST.prototype.find = function(data) {
  var current = this.root;
  while(current.data != data) {
    if(data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if(current == null) {
      return null;
    }
  }
  return current;
}

/**
 * Remove node by given data
 * 
 * @param data Number
 */
BST.prototype.remove = function(data) {
  var current = this.root;
  var parent;

  while(true) {
    parent = current;
    if(data < current.data) {
      current = current.left;
      if(current.data == data) {
        parent.left = null;
        break;
      }
    } else {
      current = current.right;
      if(current.data == data) {
        parent.right = null;
        break;
      }
    }
  }
}
