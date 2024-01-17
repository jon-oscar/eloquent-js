import countBy from './countBy';

describe('countBy', () => {
  it('should return an array of objects with the count of each group', () => {
    const items = [1, 2, 3, 4, 5];
    const groupName = (item: number) => (item > 2 ? 'big' : 'small');
    const result = countBy(items, groupName);
    expect(result).toEqual([
      { name: 'small', count: 2 },
      { name: 'big', count: 3 },
    ]);
  });

  it('should return an empty array if the input array is empty', () => {
    const items: number[] = [];
    const groupName = (item: number) => (item % 2 === 0 ? 'even' : 'odd');
    const result = countBy(items, groupName);
    expect(result).toEqual([]);
  });

  it('should return an array with a single object if all items belong to the same group', () => {
    const items = [2, 4, 6, 8, 10];
    const groupName = (item: number) => 'even';
    const result = countBy(items, groupName);
    expect(result).toEqual([{ name: 'even', count: 5 }]);
  });
});
