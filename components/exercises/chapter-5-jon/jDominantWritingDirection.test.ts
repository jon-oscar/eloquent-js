import dominantWritingDirection from './jDominantWritingDirection';

describe('dominantWritingDirection', () => {
  it('should return "ltr" for text with only left-to-right characters', () => {
    expect(dominantWritingDirection('Hello World!')).toBe('ltr');
  });

  it('should return "rtl" for text with only right-to-left characters', () => {
    expect(dominantWritingDirection('مرحبا بكم!')).toBe('rtl');
  });

  it('should return "ttb" for text with only top-to-bottom characters', () => {
    expect(dominantWritingDirection('こんにちは')).toBe('ttb');
  });

  it('should return the dominant writing direction for mixed text', () => {
    expect(dominantWritingDirection('Hello مرحبا')).toBe('rtl');
  });

  it('should return "ltr" if the input text is empty', () => {
    expect(dominantWritingDirection('')).toBe('ltr');
  });
});
