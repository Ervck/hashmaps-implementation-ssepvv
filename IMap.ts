/**
 * Interface for Map Abstract Data Type (ADT)
 * Interface for built-in Map class: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 */
interface IMap<T> {
  /**
   * number of key/value pairs in Map
   */
  size: number;

  /**
   * Removes all key/value pairs from Map
   */
  clear: () => void;

  /**
   * Removes key/value pair from Map if present
   * 
   * @param key - the key for which to remove the key-value pair
   * @returns true exectly when key-value pair was removed (when key was present)
   */
  delete: (key:string) => boolean;

  /**
   * THIS IS SIMPLIFIED A LITTLE - specification allows optional context
   * Calls callbackFn(value, key, this) for each key-value pair 
   * 
   * @param callbackFn - the function to call
   */
  forEach: (callbackFn: (item:T, key:string, map:IMap<T>) => void) => void;

  /**
   * Determines whether key is present in the Map
   * 
   * @param key - the key to find
   * @returns true exectly when key is present
   */
  has: (key:string) => boolean;

  /**
   * Gets the value associated to the key in the Map
   * 
   * @param key - the key to get the value of
   * @returns the value associated to the key or undefined
   * if it's not present
   */
  get: (key:string) => T|void;

  /**
   * Sets the value for the key in the Map
   * 
   * @param key - key to add
   * @param value - value associated to key
   * @returns this (the Map for which the key was added)
   */
  set: (key:string, value:T) => IMap<T>;

  /**
   * creates and returns an Iterator of values for each key in the Map
   * (DOCS also require this be done in insertion order)
   * 
   * @returns Iterator of values
   */
  values: () => Iterator<T>;
}

export default IMap;