import characterScript from './characterScript';

describe('characterScript', () => {
  it('should return the script object that corresponds to the given Unicode character code', () => {
    const result = characterScript(121);
    expect(result).toEqual({
      name: 'Latin',
      ranges: [
        [65, 91],
        [97, 123],
        [170, 171],
        [186, 187],
        [192, 215],
        [216, 247],
        [248, 697],
        [736, 741],
        [7424, 7462],
        [7468, 7517],
        [7522, 7526],
        [7531, 7544],
        [7545, 7615],
        [7680, 7936],
        [8305, 8306],
        [8319, 8320],
        [8336, 8349],
        [8490, 8492],
        [8498, 8499],
        [8526, 8527],
        [8544, 8585],
        [11360, 11392],
        [42786, 42888],
        [42891, 42927],
        [42928, 42936],
        [42999, 43008],
        [43824, 43867],
        [43868, 43877],
        [64256, 64263],
        [65313, 65339],
        [65345, 65371],
      ],
      direction: 'ltr',
      year: -700,
      living: true,
      link: 'https://en.wikipedia.org/wiki/Latin_script',
    });
  });

  it('should return null if no script is found', () => {
    const result = characterScript(0);
    expect(result).toBeNull();
  });
});
