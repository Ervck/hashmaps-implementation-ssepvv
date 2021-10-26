/**
 * Interface for Queue Abstract Data Type (ADT)
 */
interface IQueue<T> {
  /**
   * front of Queue
   */
  front: T;

  /**
   * Removes the last element from the queue and returns it
   * 
   * @returns front element of the queue
   */
  dequeue: () => T;

  /**
   * Adds item to front of queue
   * 
   * @param item - item to put at front of queue
   */
  enqueue: (item: T) => (void);

  /**
   * Determines whether Queue is empty
   * 
   * @returns true exactly when Queue is empty
   */
  isEmpty: () => boolean;
}

export default IQueue;