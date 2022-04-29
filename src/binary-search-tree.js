const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/




class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree
{
    constructor()
    {
        
        this.rootNode= null;
    }
 
    root() {
    
      if (this.rootNode == undefined) {
        return null
      }


      return this.rootNode;
      
    }

    add(data){
    
    var newNode = new Node(data);
                     
  
    if(this.rootNode === null)
        this.rootNode = newNode;
    else
 
       
        this.addNode(this.rootNode, newNode);
}
 

addNode(node, newNode)
{
  
    if(newNode.data < node.data)
    {
        // if left is null insert node here
        if(node.left === null)
            node.left = newNode;
        else
 
            // if left is not null recur until
            // null is found
            this.addNode(node.left, newNode);
    }
 
    // if the data is more than the node
    // data move right of the tree
    else
    {
        // if right is null insert node here
        if(node.right === null)
            node.right = newNode;
        else
 
            // if right is not null recur until
            // null is found
            this.addNode(node.right,newNode);
    }
}

remove(data)
{
    // rootNode is re-initialized with
    // root of a modified tree.
    this.rootNode = this.removeNode(this.rootNode, data);
}
 
// Method to remove node with a
// given data
// it recur over the tree to find the
// data and removes it
removeNode(node, key)
{
         
    // if the rootNode is null then tree is
    // empty
    if(node === null)
        return null;
 
    // if data to be delete is less than
    // roots data then move to left subtree
    else if(key < node.data)
    {
        node.left = this.removeNode(node.left, key);
        return node;
    }
 
    // if data to be delete is greater than
    // roots data then move to right subtree
    else if(key > node.data)
    {
        node.right = this.removeNode(node.right, key);
        return node;
    }
 
    // if data is similar to the root's data
    // then delete this node
    else
    {
         // deleting node with no children
        if(node.left === null && node.right === null)
        {
            node = null;
            return node;
        }
 
        // deleting node with one children
        if(node.left === null)
        {
            node = node.right;
            return node;
        }
         
        else if(node.right === null)
        {
            node = node.left;
            return node;
        }
 
        // Deleting node with two children
        // minimum node of the right subtree
        // is stored in aux
        var aux = this.findMinNode(node.right);
        node.data = aux.data;
 
        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
 
}
findMinNode(node)
{
    // if left of a node is null
    // then it must be minimum node
    if(node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
}
find(node, data)
{
   // if trees is empty return null
    if(node === null)
        return null;
 
    // if data is less than node's data
    // move left
    else if(data < node.data)
        return this.find(node.left, data);
 
    // if data is less than node's data
    // move left
    else if(data > node.data)
        return this.find(node.right, data);
 
    // if data is equal to the node data
    // return node
    else
        return node;
}

min() {
  if (this.rootNode === null) {
   
   }
  let currNode = this.rootNode;
  
   while (currNode.left !== null) {
   currNode = currNode.left;
   }
  return currNode.data;
  }
  max() {
    if (this.rootNode === null) {
      return null;
  }
  let currNode = this.rootNode;
  
  while (currNode.right !== null) {
  currNode = currNode.right;
  }
   return currNode.data;
  }

has(node, data ) {
  {
    // if trees is empty return null
     if(node === null)
         return null;
  
     // if data is less than node's data
     // move left
     else if(data < node.data)
         return this.find(node.left, data);
  
     // if data is less than node's data
     // move left
     else if(data > node.data)
         return this.find(node.right, data);
  
     // if data is equal to the node data
     // return node
     else
         return true;
 }
}
}


module.exports = {
  BinarySearchTree
};