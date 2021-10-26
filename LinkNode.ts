export default class LinkNode<T> {
  public value:T;
  public next:LinkNode<T>|null;
  constructor(value:T, next:LinkNode<T>|null) {
    this.value = value;
    this.next = next;
  }
}