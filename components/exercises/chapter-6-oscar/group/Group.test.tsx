import { Group } from './Group';

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
});
