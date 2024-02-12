import Group from './Group';
import GroupIterator from './Group';

describe('Group', () => {
  let group: Group<string>;

  beforeEach(() => {
    group = new Group<string>();
  });

  it('should add a member to the group', () => {
    group.add('Oscar');
    expect(group.has('Oscar')).toBe(true);
  });

  it('should not add duplicate members to the group', () => {
    group.add('Daniel');
    group.add('Daniel');
    expect(group.getMembers()).toEqual(['Daniel']);
  });

  it('should remove a member from the group', () => {
    group.add('Oscar');
    group.add('Daniel');
    group.delete('Daniel');
    expect(group.has('Daniel')).toBe(false);
    expect(group.getMembers()).toEqual(['Oscar']);
  });

  it('should create a group from an array', () => {
    const members = ['Oscar', 'Daniel', 'Frank'];
    const groupFromMembers = Group.from(members);
    expect(groupFromMembers.getMembers()).toEqual(members);
  });

  it('should iterate over the group using Symbol.iterator', () => {
    group.add('Oscar');
    group.add('Daniel');
    const iterator = group[Symbol.iterator]();
    expect(iterator.next().value).toBe('Oscar');
    expect(iterator.next().value).toBe('Daniel');
    expect(iterator.next().done).toBe(true);
  });

  it('should iterate over members correctly', () => {
    const group = new Group<string>();
    group.add('Oscar');
    group.add('Daniel');
    group.add('Frank');

    const iterator = group[Symbol.iterator]();

    expect(iterator.next()).toEqual({ value: 'Oscar', done: false });
    expect(iterator.next()).toEqual({ value: 'Daniel', done: false });
    expect(iterator.next()).toEqual({ value: 'Frank', done: false });
    expect(iterator.next()).toEqual({ value: undefined, done: true });
  });
});
