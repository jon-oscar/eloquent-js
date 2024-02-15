/**
 * Represents a group that holds a collection of values.
 * @template T The type of values stored in the group.
 */
export default class Group<T> {
  private members: T[];

  // creates an empty group
  constructor() {
    this.members = [];
  }

  // check if already exists in the group
  has(value: T): boolean {
    return this.members.includes(value);
  }

  // add a new member if it doesn't exist
  add(value: T): void {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  // remove a member from the group
  delete(value: T): void {
    this.members = this.members.filter((v) => v !== value);
  }

  // static method to create a group from an array
  static from<T>(collection: T[]): Group<T> {
    const group = new Group<T>();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  /**
   * Gets the members of the group.
   * @returns An array of members in the group.
   */
  getMembers(): T[] {
    return this.members;
  }

  /**
   * Returns an iterator for the Group class.
   * @returns {Iterator<T>} An iterator for the Group class.
   */
  [Symbol.iterator](): Iterator<T> {
    return new GroupIterator<T>(this);
  }
}

/**
 * Represents an iterator for the Group class.
 * @template T - The type of elements in the Group.
 */
export class GroupIterator<T> implements Iterator<T> {
  private group: Group<T>;
  private position: number = 0;

  constructor(group: Group<T>) {
    this.group = group;
  }

  /**
   * @returns An IteratorResult object containing the next element and a boolean indicating if the iteration is done.
   */
  next(): IteratorResult<T> {
    const members = this.group.getMembers();
    if (this.position >= members.length) {
      return { done: true, value: undefined as any };
    }
    return { value: members[this.position++], done: false };
  }
}
