/**
 * Represents a group of values. Similar to Set.
 */
export default class Group {
  members: any[];

  constructor() {
    this.members = [];
  }

  add(value: any) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value: any) {
    this.members = this.members.filter((v) => v !== value);
  }

  has(value: any) {
    return this.members.includes(value);
  }

  static from(iterable: Iterable<any>) {
    const group = new Group();
    for (const value of iterable) {
      group.add(value);
    }
    return group;
  }
}
