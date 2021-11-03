import IMap from './IMap';
import LinkedList from './LinkedList';

class HashMap<T> implements IMap<T> {
  private buckets:(LinkedList<{key: string, value: T}>|undefined)[];

  /**
   * constructs a new HashMap with an Array of length size
   */
  constructor(size?:number) {
    this.buckets = new Array(size || 1023); // default size of 1023
  }

/**
 * get hash code of String
 * Hash function adapted from Owen Astrachan's code
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 * @param key - the string to get the hash value of
 * @returns the hash value of key
 */
  private hash(key:string):number {
    let hval = 0;
    let len = key.length;
    for(let i = 0; i < len; i++)
    {
        hval = (hval << 5) ^ hval ^ key.charCodeAt(i); // ^ is XOR
    }
    return Math.abs(hval); // added Math.abs to simplify so you could use %
  }

  /**
   * Removes all key/value pairs from Map
   */
  public clear():void {

  
  this.buckets = this.buckets.fill(undefined)

  /* 
   while (this.buckets.length) {

     this.buckets.pop();

   }
  */

  }

  /**
   * Removes key/value pair from HashMap if present
   * 
   * @param key - the key for which to remove the key-value pair
   * @returns true exectly when key-value pair was removed (when key was present)
   */
  public delete(key:string):boolean {
    // implement this, remove return
    return true;
  }

  /**
   * THIS IS SIMPLIFIED A LITTLE - specification allows optional context
   * Calls callbackFn(value, key, this) for each key-value pair 
   * 
   * @param callbackFn - the function to call
   */
  public forEach(callbackFn: (item:T, key:string, map:IMap<T>) => void):void {
    // implement this
  }

  /**
   * Determines whether key is present in the HashMap
   * 
   * @param key - the key to find
   * @returns true exectly when key is present
   */
  public has(key:string):boolean {
    // implement this, remove return statement

    const index = this.hash(key) % this.buckets.length;

    if (typeof this.buckets[index] === 'undefined') {

      return false;
    }
    
    return Boolean(this.buckets[index].find(item => item.key === key));
    
  }

  /**
   * Gets the value associated to the key in the HashMap
   * 
   * @param key - the key to get the value of
   * @returns the value associated to the key or undefined
   * if it's not present
   */
  public get(key:string):T|void {
    // implement this
  }

  /**
   * Sets the value for the key in the HashMap
   * 
   * @param key - key to add
   * @param value - value associated to key
   * @returns this (the Map for which the key was added)
   */
  public set(theKey: string, keysValue: T):HashMap<T> {
    // implement this, keep return statement

    const index = this.hash(theKey) % this.buckets.length;
    if(typeof this.buckets[index] === 'undefined') {

      this.buckets[index] = new LinkedList <{key: string; value: T; }>()

      this.buckets[index].insertAtFront({key: theKey, value: keysValue});

    }

    return this;
  }

  /**
   * creates and returns an Iterator of values for each key in the Map
   * (DOCS also require this be done in insertion order)
   * 
   * @returns Iterator of values
   */
  public *values():IterableIterator<T> {
    // remove below and implement
    for(let valCounter = 0; valCounter < 100; valCounter++) {
      yield Object(42) as T;
    }
  }

  /**
   * number of key/value pairs in Map
   */
  public get size():number {
    // implement this, remove return
    return 0;
  }
}

export default HashMap;