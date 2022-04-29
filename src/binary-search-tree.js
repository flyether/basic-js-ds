const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


// class Node
// {
//     constructor(data)
//     {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }
// class BinarySearchTree {

//   root() {
//     this.root = null;
//     if (this.root === u) {
//       return null;
//     }
//   }

 
//   add( data ) {
//     let newNode = new Node(data);
//     if (this.root === null) {
//         this.root = newNode;
//     } else {
//         this.insertNode(this.root, newNode); // helper method below
//     }
// }
// insertNode(node, newNode) {
//     if (newNode.data < node.data) {
//         if (node.left === null) {
//             node.left = newNode;
//         } else {
//             this.insertNode(node.left, newNode);
//         }
//     } else {
//         if (node.right === null) {
//             node.right = newNode;
//         } else {
//             this.insertNode(node.right, newNode);
//         }
//     }
//   }

//   has(node, data ) {
//     {
   
//        if(node === null)
//            return null;
    
//        else if(data < node.data)
//            return this.search(node.left, data);
    
//        else if(data > node.data)
//            return this.search(node.right, data);
    
//        else
//            return true;
//    }
//   }

 
//   find(node, data)
// {
 
//     if(node === null)
//         return null;
 
//     else if(data < node.data)
//         return this.search(node.left, data);
 
//     else if(data > node.data)
//         return this.search(node.right, data);
 
//     // if data is equal to the node data
//     // return node
//     else
//         return node;
// }

//   remove( data ) {
//     this.root = this.removeNode(this.root, data);
//     removeNode(node, key)
// {

 

//     if(node === null)

//         return null;
 
//     else if(key < node.data)

//     {

//         node.left = this.removeNode(node.left, key);

//         return node;

//     }

  

//     // если данные для удаления больше чем

//     // корни данных затем перемещаются в правильное поддерево

//     else if(key > node.data)

//     {

//         node.right = this.removeNode(node.right, key);

//         return node;

//     }

  

//     // если данные похожи на данные корня

//     // затем удаляем этот узел

//     else

//     {

//          // удаляем узел без детей

//         if(node.left === null && node.right === null)

//         {

//             node = null;

//             return node;

//         }

  

//         // удаляем узел с одним потомком

//         if(node.left === null)

//         {

//             node = node.right;

//             return node;

//         }

          

//         else if(node.right === null)

//         {

//             node = node.left;

//             return node;

//         }

  

//         // Удаление узла с двумя детьми

//         // минимальный узел поддерева rigt

//         // хранится в aux

//         var aux = this.findMinNode(node.right);

//         node.data = aux.data;

  

//         node.right = this.removeNode(node.right, aux.data);

//         return node;

//     }

  
// }

//   }
//   findMinNode(node)
//   {
//       // if left of a node is null
//       // then it must be minimum node
//       if(node.left === null)
//           return node;
//       else
//           return this.findMinNode(node.left);
//   }
//   min() {
//     if (this.root === null) {
//       return null;
//     }
//    let currNode = this.root;
   
//     while (currNode.left !== null) {
//     currNode = currNode.left;
//     }
//    return currNode.data;
//   }

//   max() {
//     if (this.root === null) {
//       return null;
//   }
//   let currNode = this.root;
  
//   while (currNode.right !== null) {
//   currNode = currNode.right;
//   }
//    return currNode.data;
//   }
// }

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
        
        this.root = null;
    }
 
    root() {
    
      if (this.root == undefined) {
        return null
      }
    }

    add(data){
    
    var newNode = new Node(data);
                     
  
    if(this.root === null)
        this.root = newNode;
    else
 
       
        this.addNode(this.root, newNode);
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
    // root is re-initialized with
    // root of a modified tree.
    this.root = this.removeNode(this.root, data);
}
 
// Method to remove node with a
// given data
// it recur over the tree to find the
// data and removes it
removeNode(node, key)
{
         
    // if the root is null then tree is
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
  if (this.root === null) {
   
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