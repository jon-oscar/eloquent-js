import Group from './JGroup';

describe('Group', () => {
  let group: Group;

  beforeEach(() => {
    group = new Group();
  });

  it('should add values to the group', () => {
    group.add(1);
    group.add(2);
    group.add(3);
    expect(group.has(1)).toBe(true);
    expect(group.has(2)).toBe(true);
    expect(group.has(3)).toBe(true);
  });

  it('should not add duplicate values to the group', () => {
    group.add(1);
    group.add(1);
    expect(group.members.length).toBe(1);
  });

  it('should delete values from the group', () => {
    group.add(1);
    group.add(2);
    group.delete(1);
    expect(group.has(1)).toBe(false);
    expect(group.has(2)).toBe(true);
  });

  it('should return true if a value exists in the group', () => {
    group.add(1);
    expect(group.has(1)).toBe(true);
  });

  it('should return false if a value does not exist in the group', () => {
    expect(group.has(1)).toBe(false);
  });

  it('should create a new group from an iterable', () => {
    const iterable = [1, 2, 3];
    const newGroup = Group.from(iterable);
    expect(newGroup.has(1)).toBe(true);
    expect(newGroup.has(2)).toBe(true);
    expect(newGroup.has(3)).toBe(true);
  });

  it('should iterate over the group using Symbol.iterator', () => {
    group.add(1);
    group.add(2);
    const iterator = group[Symbol.iterator]();
    expect(iterator.next().value).toBe(1);
    expect(iterator.next().value).toBe(2);
    expect(iterator.next().done).toBe(true);
  });
});
