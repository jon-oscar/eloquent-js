import jFlattening from './jFlattening';

describe('jFlattening', () => {
  it('flattens a 2D array of strings', () => {
    const arr: string[][] = [['a', 'b'], ['c', 'd'], ['e']];
    const expectedArray = ['a', 'b', 'c', 'd', 'e'];
    const result = jFlattening(arr);
    expect(result).toEqual(expectedArray);
  });

  it('flattens a 2D array of numbers', () => {
    const arr: number[][] = [[1, 2], [3, 4], [5]];
    const expectedArray = [1, 2, 3, 4, 5];
    const result = jFlattening(arr);
    expect(result).toEqual(expectedArray);
  });

  it('flattens a 2D array of booleans', () => {
    const arr: boolean[][] = [[true, false], [false, false], [true]];
    const expectedArray = [true, false, false, false, true];
    const result = jFlattening(arr);
    expect(result).toEqual(expectedArray);
  });

  it('flattens a 2D array of objects', () => {
    const arr: Array<Array<{ [key: string]: number }>> = [
      [{ a: 1 }, { b: 2 }],
      [{ c: 3 }, { d: 4 }],
      [{ e: 5 }],
    ];
    const expectedArray = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }];
    const result = jFlattening(arr);
    expect(result).toEqual(expectedArray);
  });

  it('flattens a 2D array of arrays', () => {
    const arr: Array<Array<Array<number>>> = [
      [
        [1, 2],
        [3, 4],
      ],
    ];
    const expectedArray = [
      [1, 2],
      [3, 4],
    ];
    const result = jFlattening(arr);
    expect(result).toEqual(expectedArray);
  });

  it('flattens a 2D array of mixed types', () => {
    const arr: (number | string | boolean | null)[][] = [
      [1, 'a'],
      [true, false],
      [null],
    ];
    const expectedArray = [1, 'a', true, false, null];
    const result = jFlattening(arr);
    expect(result).toEqual(expectedArray);
  });

  it('returns an empty array when given an empty array', () => {
    const arr: [] = [];
    const expectedArray: [] = [];
    const result = jFlattening(arr);
    expect(result).toEqual(expectedArray);
  });
});
