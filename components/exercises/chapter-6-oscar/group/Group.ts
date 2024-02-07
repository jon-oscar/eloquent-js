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
}
