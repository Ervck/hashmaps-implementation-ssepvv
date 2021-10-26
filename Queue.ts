import IQueue from './iqueue';
import LinkedList from './LinkedList';

export default class Queue<T> implements IQueue<T> {
  private queue: LinkedList<T>;
  constructor() {

  }
  /**
   * Removes the last element from the queue and returns it
   * 
   * @returns front element of the queue
   */
  dequeue():T {
    return Object(42) as T;
  }

  /**
   * Adds item to front of queue
   * 
   * @param item - item to put at front of queue
   */
  enqueue(item: T):void {
    
  }

  /**
   * Determines whether Queue is empty
   * 
   * @returns true exactly when Queue is empty
   */
  isEmpty():boolean {
    return true;    
  }

  /**
   * front of Queue
   */
  public get front():T {
    return Object(42) as T;
  }
}