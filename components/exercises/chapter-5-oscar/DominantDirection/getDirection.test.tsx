import { getDirection } from './getDirection';

describe('getDirection', () => {
  it('should return the dominant direction of the text', () => {
    const text = 'Hello, 世界!';
    const expectedDirection = 'ltr';

    const result = getDirection(text);

    expect(result).toEqual(expectedDirection);
  });

  it('should handle empty text', () => {
    const text = '';
    const expectedDirection = 'none';

    const result = getDirection(text);

    expect(result).toEqual(expectedDirection);
  });

  it('should handle text with characters that do not belong to a script', () => {
    const text = 'Hello, 世界! @#$%^&*';
    const expectedDirection = 'ltr';

    const result = getDirection(text);

    expect(result).toEqual(expectedDirection);
  });

  // Add more test cases here...
});
