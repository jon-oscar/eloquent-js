import jLoop from './jLoop';

describe('jLoop', () => {
  it('executes the body function until the test function returns false', () => {
    let count = 0;
    const test = (value: number) => value < 5;
    const update = (value: number) => value + 1;
    const body = () => {
      count++;
    };

    jLoop(0, test, update, body);

    expect(count).toBe(5);
  });

  it('does not execute the body function if the test function returns false initially', () => {
    let count = 0;
    const test = (value: number) => value < 0;
    const update = (value: number) => value + 1;
    const body = () => {
      count++;
    };

    jLoop(0, test, update, body);

    expect(count).toBe(0);
  });
});
