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
class BinarySearchTree {

  root() {
    this.root = null;
    if (this.root == undefined) {
      return null
    }
  }

 
  add( data ) {
    let newNode = new Node(data);
    if (this.root === null) {
        this.root = newNode;
    } else {
        this.insertNode(this.root, newNode); // helper method below
    }
}
insertNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode);
        }
    }
  }

  has(node, data ) {
    {
   
       if(node === null)
           return null;
    
       else if(data < node.data)
           return this.search(node.left, data);
    
       else if(data > node.data)
           return this.search(node.right, data);
    
       else
           return true;
   }
  }

 
  find(node, data)
{
 
    if(node === null)
        return null;
 
    else if(data < node.data)
        return this.search(node.left, data);
 
    else if(data > node.data)
        return this.search(node.right, data);
 
    // if data is equal to the node data
    // return node
    else
        return node;
}

  remove( data ) {
    this.root = this.removeNode(this.root, data);
    removeNode(node, key)
{

 

    if(node === null)

        return null;
 
    else if(key < node.data)

    {

        node.left = this.removeNode(node.left, key);

        return node;

    }

  

    // если данные для удаления больше чем

    // корни данных затем перемещаются в правильное поддерево

    else if(key > node.data)

    {

        node.right = this.removeNode(node.right, key);

        return node;

    }

  

    // если данные похожи на данные корня

    // затем удаляем этот узел

    else

    {

         // удаляем узел без детей

        if(node.left === null && node.right === null)

        {

            node = null;

            return node;

        }

  

        // удаляем узел с одним потомком

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

  

        // Удаление узла с двумя детьми

        // минимальный узел поддерева rigt

        // хранится в aux

        var aux = this.findMinNode(node.right);

        node.data = aux.data;

  

        node.right = this.removeNode(node.right, aux.data);

        return node;

    }

  
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
  min() {
    if (this.root === null) {
      return null;
    }
   let currNode = this.root;
   
    while (currNode.left !== null) {
    currNode = currNode.left;
    }
   return currNode.data;
  }

  max() {
    if (this.root === null) {
      return null;
  }
  let currNode = this.root;
  
  while (currNode.right !== null) {
  currNode = currNode.right;
  }
   return currNode.data;
  }
}

module.exports = {
  BinarySearchTree
};