import jGetPyramid from './jGetPyramid';

describe('jGetPyramid', () => {
  it('returns a string representation of a pyramid made of "#" characters', () => {
    expect(jGetPyramid(1)).toEqual('#\n');
    expect(jGetPyramid(2)).toEqual('#\n##\n');
    expect(jGetPyramid(3)).toEqual('#\n##\n###\n');
    expect(jGetPyramid(4)).toEqual('#\n##\n###\n####\n');
    expect(jGetPyramid(5)).toEqual('#\n##\n###\n####\n#####\n');
  });

  it('returns an empty string when the number of rows is less than 1', () => {
    expect(jGetPyramid(0)).toEqual('');
    expect(jGetPyramid(-1)).toEqual('');
  });
});
