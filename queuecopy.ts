import Queue from './Queue';


export const copyQueue = <T>(queue:Queue<T>):Queue<T> => {
  return new Queue<T>();
};

export default copyQueue;