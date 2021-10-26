import * as React from 'react';
// import * as Exercises from './exercises';
import LinkedList from './LinkedList';
// import LinkNode from './LinkNode';
import HashMap from './HashMap';
import display from './display';

import Test from './Test';
import TestSuite from './TestSuite';

const generateRandomNumberArray = (size:number, allUnique=false) => {
  const arr = [];
  for(let i = 0; i < size; i++) {
    arr.push(Math.trunc(Math.random()*4*size-2*size));
  }
  if(allUnique) {
    const uniqueArr = arr.filter((x, index) => arr.indexOf(x) === index);
    //display(uniqueArr.length, size);
    for(let a = uniqueArr.length; a < size; a++) {
      uniqueArr.push(4*size+a);
    }
    //display(uniqueArr.length === size, size);
    return uniqueArr;
  } else {
    return arr;
  }
};

const createLinkedListFromArray = function<T>(arr: T[]):LinkedList<T> {
  const ll = new LinkedList<T>();
  arr.slice().reverse().forEach((item:T) => {
    ll.insertAtFront(item);
  });
  return ll;
};

const createHashMapFromArrays = function<T>(keyArr: string[], valArr:T[], size?:number):HashMap<T> {
  const hm = new HashMap<T>(size || 4);
  keyArr.forEach((key:string, index:number) => {
    hm.set(key, valArr[index]);
  });
  return hm;
};

class ExerciseTests extends React.Component<any> {
  public render() {
    const numArr = generateRandomNumberArray(7);
    const numLL = createLinkedListFromArray(numArr);
    const chosenIndex = Math.trunc(Math.random()*5) + 1;
    const firstOccurrenceIndex = numArr.indexOf(numArr[chosenIndex]);
    numLL.removeItem(numArr[chosenIndex]);
    numLL.insertAtFront(42);
    const modifiedNumArr = [42].concat(numArr.slice(0,firstOccurrenceIndex)).concat(numArr.slice(firstOccurrenceIndex+1));


    const strArr = ["abcd", "some", "foo", "hey there", "foo", "def"];
    const strLL = createLinkedListFromArray(strArr);
    //const l4 = createLinkedListFromArray(numArr);
    //const l2 = createLinkedListFromArray(arr2);
    //const l3 = createLinkedListFromArray(arr2);

    const chosenIndex2 = Math.trunc(Math.random()*3) + 1;
    strLL.removeItem(strArr[0]);
    const x = strLL.makeIterator();
    console.log(x.next());
    console.log(x.next());
    //l3.removeItem(arr2[chosenIndex2]);

    //const arr3 = arr2.slice();
    //l3.insertAtFront("add");
    //arr3.unshift("add");
    //l3.insert(arr3.length, "end");
    //arr3.push("end");
    //const arr4 = arr1.slice(0,chosenIndex).concat([42]).concat(arr1.slice(chosenIndex));
    //l4.insert(chosenIndex, 42);

    //const singleNodeLLFront = new LinkedList<number>();
    //const frontNumLL = Math.random();
    //singleNodeLLFront.insertAtFront(frontNumLL);

    //const singleNodeLLEnd = new LinkedList<number>();
    //const frontNumLLEnd = Math.random();
    //singleNodeLLEnd.insertAtEnd(frontNumLLEnd);

    const singleNodePopTest = new LinkedList<number>();
    const popTestNum = Math.random();
    //singleNodePopTest.insertAtEnd(Math.random());
    //singleNodePopTest.pop(0);
    singleNodePopTest.insertAtFront(popTestNum);
    singleNodePopTest.removeItem(popTestNum);

    const llIteratorArr = generateRandomNumberArray(4);
    const llIterator = createLinkedListFromArray(llIteratorArr).makeIterator();
    const iteratorTests = llIteratorArr.map((num:number) => {
      return <Test testname = "Iterator test" expected = {num} actual = {llIterator.next().value}/>
    }).concat(<Test testname = "Iterator test done" expected = {true} actual = {llIterator.next().done}/>);

    const forEachTestArr = generateRandomNumberArray(7);
    const forEachLL = createLinkedListFromArray(forEachTestArr);
    const startNumForEachTest = Math.trunc(Math.random()*100)-50;
    let forEachTestResult = startNumForEachTest;
    const forEachTestFunc = (acc, x) => 2*acc - x;
    forEachLL.forEach(num => forEachTestResult = forEachTestFunc(forEachTestResult, num));
    //.reduce((acc, x) => 2*acc - x));
    //const

    const hmIteratorArr = generateRandomNumberArray(7);
    const hmIterator = createHashMapFromArrays(["abc", "def", "hey there", "something", "computer", "hashmap solutions", "typescript"], hmIteratorArr).values();
    hmIteratorArr.sort();
    display("SORT", hmIteratorArr);
    const hmIteratorResultArr = [];
    hmIteratorArr.forEach(() => {
      hmIteratorResultArr.push(hmIterator.next().value);
    });
    hmIteratorResultArr.sort();

    const hmIteratorStrArr = ["hey", "yo", "hey there", "foo", "42", "hashmap solutions", "javascript", "foo"];
    const hmIteratorStr = createHashMapFromArrays(["abc", "def", "hey there", "something", "computer", "hashmap solutions", "typescript", "bar"], hmIteratorStrArr, 100).values();
    hmIteratorStrArr.sort();
    display("SORT", hmIteratorArr);
    const hmIteratorResultStrArr = [];
    hmIteratorStrArr.forEach(() => {
      hmIteratorResultStrArr.push(hmIteratorStr.next().value);
    });
    hmIteratorResultStrArr.sort();

    const hmForEachTestArr = generateRandomNumberArray(Math.trunc(Math.random()*100)+7);
    const hmForEachKeyTestArr = ["abc", "def", "hey there", "something", "computer", "hashmap solutions", "typescript"].concat(generateRandomNumberArray(hmForEachTestArr.length-7, true).map(num => num.toString()));
    const hmForEachTest = createHashMapFromArrays(hmForEachKeyTestArr, hmForEachTestArr,100);
    const startNumForEachTestHM = Math.trunc(Math.random()*100)-50;
    let forEachTestResultHM = startNumForEachTestHM;
    // function must not depend on order
    const forEachTestFuncHM = (acc:number, value:number, key:string, m:HashMap<number>|{size:number}) => {
      //console.log("A", acc, value, key, m);
      return (acc - 2*value + key.length + m.size)
    };
    hmForEachTest.forEach((value:number, key:string, m:HashMap<number>) => forEachTestResultHM = forEachTestFuncHM(forEachTestResultHM, value, key, m));

    const hmSetDeleteTest = new HashMap<number>(10);
    hmSetDeleteTest.set("abc", 2);
    hmSetDeleteTest.set("def", 1);
    hmSetDeleteTest.set("ghi", 3);
    hmSetDeleteTest.set("something", 4);
    hmSetDeleteTest.set("d", 5);

    const inListBeforeDelete = hmSetDeleteTest.has("abc");
    const notInList = hmSetDeleteTest.delete("yo");
    const inList = hmSetDeleteTest.delete("abc");
    const inListAfterDelete = hmSetDeleteTest.has("abc");

    const hmAddDeleteTestValuesArr = generateRandomNumberArray(Math.trunc(Math.random()*100)+7);
    display()
    const hmAddDeleteTestKeysArr = ["abc", "def", "hey there", "something", "computer", "hashmap solutions", "typescript"].concat(generateRandomNumberArray(hmAddDeleteTestValuesArr.length-7, true).map(num => num.toString()));
    const hmAddDeleteTest = createHashMapFromArrays(hmAddDeleteTestKeysArr, hmAddDeleteTestValuesArr, 10);

    for(let i = 0; i < 10; i++) {
      const chosenIndexA = Math.trunc(Math.random() * hmAddDeleteTestKeysArr.length-7) + 7
      if(Math.random() < 0.5) {
        hmAddDeleteTest.set(hmAddDeleteTestKeysArr[chosenIndexA], hmAddDeleteTestValuesArr[chosenIndexA]);
      } else {
        hmAddDeleteTest.delete(hmAddDeleteTestKeysArr[chosenIndexA]);
      }
    }

display(hmAddDeleteTestKeysArr[0], hmAddDeleteTestValuesArr[0], hmAddDeleteTest.get(hmAddDeleteTestKeysArr[0]))
    const chosenIndexAddDeleteTest1 = Math.trunc(Math.random() * hmAddDeleteTestKeysArr.length-7) + 7;
    const chosenIndexAddDeleteTest2 = Math.trunc(Math.random() * hmAddDeleteTestKeysArr.length-7) + 7;
    const chosenIndexAddDeleteTest3 = Math.trunc(Math.random() * hmAddDeleteTestKeysArr.length-7) + 7; 

    return (
      <div>
        <TestSuite suitename="LinkedList Test">
          <Test testname = "nodeAt test" expected = {numLL.nodeAt(0) ? numLL.nodeAt(0).next : "ERROR: null node"} actual = {numLL.nodeAt(1)}/>
          <Test testname = "nodeAt test" expected = {numLL.nodeAt(0)} actual = {numLL.nodeAt(0)}/>
          <Test testname = "nodeAt test" expected = {numLL.nodeAt(2)} actual = {numLL.nodeAt(1) ? numLL.nodeAt(1).next : "ERROR: null node"}/>
          <Test testname = "nodeAt test last" expected = {numLL.nodeAt(6)} actual = {numLL.nodeAt(5) ? numLL.nodeAt(5).next : "ERROR: null node"}/>
          <Test testname = "nodeAt test" expected = {modifiedNumArr[chosenIndex]} actual = {numLL.nodeAt(chosenIndex) ? numLL.nodeAt(chosenIndex).value : "ERROR: null Node"}/>
          <Test testname = "nodeAt test" expected = {strArr[chosenIndex2+1]} actual = {strLL.nodeAt(chosenIndex2) ? strLL.nodeAt(chosenIndex2).value : "ERROR: null Node"}/>
          <Test testname = "itemAt test" expected = {strArr[chosenIndex2+1]} actual = {strLL.itemAt(chosenIndex2)}/>
          <Test testname = "itemAt test" expected = {modifiedNumArr[0]} actual = {numLL.itemAt(0)}/>
          <Test testname = "itemAt test" expected = {numArr[numArr.length-1]} actual = {numLL.itemAt(numArr.length-1)}/>
          <Test testname = "Empty linked list length" expected = {0} actual = {new LinkedList<boolean>().length}/>
          <Test testname = "Linked list length" expected = {7} actual = {numLL.length}/>
          <Test testname = "Linked list remove item now empty" expected = {""} actual = {singleNodePopTest.toString()}/>
          <Test testname = "Linked list number remove item" expected = {modifiedNumArr.toString()} actual = {numLL.toString()}/>
          <Test testname = "Linked list string remove first item" expected = {strArr.slice(1).toString()} actual = {strLL.toString()}/>
          <Test testname = "Linked list string find not present" expected = {"undefined"} actual = {typeof strLL.find(s => s.length === 100) === "undefined" ? "undefined" : strLL.find(s => s.length === 100)}/>
          <Test testname = "Linked list find first item" expected = {strLL.find(s => s.length === 3)} actual = {strLL.find(s => s.length === 3)}/>
          <Test testname = "Linked list find last item" expected = {strLL.find(s => s.startsWith("d"))} actual = {strLL.find(s => s.startsWith("d"))}/>
          <Test testname = "Linked list find inside item" expected = {strLL.find(s => s.indexOf(" ") !== -1)} actual = {strLL.find(s => s.indexOf(" ") !== -1)}/>
          <Test testname = "Linked list random find" expected = {typeof modifiedNumArr.find(num => num % 2 !== 0) === "undefined" ? "undefined" : modifiedNumArr.find(num => num % 2 !== 0)} actual = {typeof numLL.find(num => num % 2 !== 0) === "undefined" ? "undefined" : numLL.find(num => num % 2 !== 0)}/>
          {iteratorTests}
          <Test testname = "Iterator empty test" expected = {true} actual = {new LinkedList<boolean>().makeIterator().next().done}/>
          <Test testname = "forEach test" expected = {forEachTestArr.reduce(forEachTestFunc, startNumForEachTest)} actual = {forEachTestResult}/>
        </TestSuite>
        <br />
        <TestSuite suitename="HashMap Test">
          <Test testname = "size" expected = {hmForEachTestArr.length} actual = {hmForEachTest.size}/>
          <Test testname = "size add/delete" expected = {4} actual = {hmSetDeleteTest.size}/>
          <Test testname = "delete test" expected = {false} actual = {notInList}/>
          <Test testname = "delete test" expected = {true} actual = {inList}/>
          <Test testname = "has test" expected = {true} actual = {inListBeforeDelete}/>
          <Test testname = "has test after delete" expected = {true} actual = {inListBeforeDelete}/>
          <Test testname = "has test after delete" expected = {false} actual = {inListAfterDelete}/>
          <Test testname = "has-add-delete-get test" expected = {hmAddDeleteTest.has(hmAddDeleteTestKeysArr[chosenIndexAddDeleteTest1]) && hmAddDeleteTestValuesArr[chosenIndexAddDeleteTest1]} actual = {hmAddDeleteTest.has(hmAddDeleteTestKeysArr[chosenIndexAddDeleteTest1]) && hmAddDeleteTest.get(hmAddDeleteTestKeysArr[chosenIndexAddDeleteTest1])}/>
          <Test testname = "has-add-delete-get test" expected = {hmAddDeleteTest.has(hmAddDeleteTestKeysArr[chosenIndexAddDeleteTest2]) && hmAddDeleteTestValuesArr[chosenIndexAddDeleteTest2]} actual = {hmAddDeleteTest.has(hmAddDeleteTestKeysArr[chosenIndexAddDeleteTest2]) && hmAddDeleteTest.get(hmAddDeleteTestKeysArr[chosenIndexAddDeleteTest2])}/>
          <Test testname = "has-add-delete-get test" expected = {hmAddDeleteTest.has(hmAddDeleteTestKeysArr[chosenIndexAddDeleteTest3]) && hmAddDeleteTestValuesArr[chosenIndexAddDeleteTest3]} actual = {hmAddDeleteTest.has(hmAddDeleteTestKeysArr[chosenIndexAddDeleteTest3]) && hmAddDeleteTest.get(hmAddDeleteTestKeysArr[chosenIndexAddDeleteTest3])}/>
          <Test testname = "has-add-delete-get test" expected = { hmAddDeleteTestValuesArr[0]} actual = {hmAddDeleteTest.get(hmAddDeleteTestKeysArr[0])} />
          <Test testname = "forEach test" expected = {hmForEachTestArr.reduce((acc, item, index) => forEachTestFuncHM(acc, item, hmForEachKeyTestArr[index], {size: hmForEachTestArr.length}), startNumForEachTestHM)} actual = {forEachTestResultHM}/>
          <Test testname = "Iterator test chaining" expected = {hmIteratorArr.toString()} actual = {hmIteratorResultArr.toString()}/>
          <Test testname = "Iterator test done" expected = {true} actual = {hmIterator.next().done}/>
          <Test testname = "Iterator empty test" expected = {true} actual = {new HashMap<boolean>().values().next().done}/>
          <Test testname = "Iterator test empty slots" expected = {hmIteratorStrArr.toString()} actual = {hmIteratorResultStrArr.toString()}/>
          <Test testname = "Clear test" expected = {!!hmAddDeleteTest.clear()} actual = {hmAddDeleteTest.size || hmAddDeleteTest.get("something") || hmAddDeleteTest.has("abc")}/>
        </TestSuite>
      </div>
    );
  }
}

export default ExerciseTests;