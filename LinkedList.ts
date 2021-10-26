import display from './display';
import LinkNode from './LinkNode';

/*class LinkNode<T> {
  public value:T;
  public next:LinkNode<T>|null;
  constructor(value:T, next:LinkNode<T>|null) {
    this.value = value;
    this.next = next;
  }
}*/

/**
 * class to represent a Linked List of items of type T
 */
class LinkedList<T> {
  private head:LinkNode<T>|null;
  private numOfNodes:number;

  /**
   * Constructs a new empty linked list
   */
  constructor() {
    this.head = null;
    this.numOfNodes = 0;
  }

  /**
   * Gets Node (not item) at given index, used as helper function
   * @param index - the index of the Node to get
   * @returns Node at given index
   */
  public nodeAt(index:number):LinkNode<T> {
    let currentNode = this.head;
    for(let i = 0; i < index; i++) {
      currentNode = currentNode!.next;
    }
    return currentNode!;
  }

  /**
   * Gets item at given index, used as helper function
   * @param index - the index of the Node to get
   * @returns Node at given index
   */
  public itemAt(index:number):T {
    return this.nodeAt(index).value;
  }

  /**
   * inserts item at front of list
   * @param item - item to add to front of list
   */
  public insertAtFront(item:T):void {
    this.head = new LinkNode<T>(item, this.head);
    this.numOfNodes++;
  }

  /**
   * removes first item for which the provided testing function returns true
   * @param callback - the Boolean-valued function
   * @returns item removed (if it was present) or undefined otherwise
   */
  public removeFirst(callback: (item:T) => boolean):T|void {
    // implement this
  }

  /**
   * removes item from list if present
   * @param item - item to remove from list
   * @returns true if item was removed (if it was present)
   */
  public removeItem(item:T):boolean {
    // below calls removeFirst to remove item if present, if present, it'll return
    // item which won't be undefined, if it isn't, it'll return undefined.
    return typeof this.removeFirst(currentItem => currentItem === item) !== "undefined";
  }

  /**
   * finds first item in list for which function evaluates to true
   * @param conditionFunc - the Boolean-valued function
   * @returns the first item for which conditionFunc(item) is true or undefined otherwise
   */
  public find(conditionFunc: (item:T) => boolean):T|void {
    // implement this
  }

  /**
   * Prints string version of each Node on its own line
   */
  public printAllNodes():void {
    const makeTable = (currentNode:LinkNode<T>|null):void => {
      if(currentNode !== null) {
        display(currentNode.value.toString());
        makeTable(currentNode.next);
      }
    } 
    return makeTable(this.head);
  }

  /**
   * Converts to string by calling .toString() on each item in the list and separating these string representations by commas
   * @returns string representation of linked list
   */
  public toString():string {
   // return string representation (items separated by commas)
   // return "";
   const joinCurrentNode = (acc:string, currentNode:LinkNode<T>) => acc + "," + currentNode.value.toString();
   const makeTable = (currentNode:LinkNode<T>|null, acc:string):string => {
     if(currentNode !== null) {
       return makeTable(currentNode.next, joinCurrentNode(acc, currentNode));
     } else {
       return acc;
     }
   };
   if(this.head === null) {
     return "";
   }
   else {
     return makeTable(this.head.next, this.head.value.toString());
   }
  }

  /**
   * Calls callbackFn(item) for each item in LinkedList 
   * 
   * @param callbackFn - the function to call
   */
  public forEach(callbackFn: (item:T) => void):void {
    // implement this
  }

  /**
   * creates and returns an Iterator of values for each item in the Linked List
   * 
   * @returns Iterator of items
   */
  public *makeIterator():IterableIterator<T> {
    // implement this (and remove the line below)
    for(let i = 0; i < 10; i++) { yield Object(42) as T; }
  }

  /**
   * number of items in list
   */
  public get length():number {
    // leave as is
    return this.numOfNodes || 0;
  }
}

export default LinkedList;