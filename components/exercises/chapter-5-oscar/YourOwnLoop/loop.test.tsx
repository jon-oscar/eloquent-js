import { loop } from './loop';

describe('loop function', () => {
  // Mock the setInterval function to control time in tests
  jest.useFakeTimers();

  it('should execute body function until test function returns false', () => {
    let value = 0;

    // Define the test function
    const testFunction = (value: number) => value < 5;

    // Define the update function
    const updateFunction = (value: number) => value + 1;

    // Define a mock body function to track calls
    const mockBody = jest.fn();

    // Call the loop function
    loop(value, testFunction, updateFunction, mockBody);

    // Fast forward timers to allow for multiple iterations
    jest.advanceTimersByTime(5000);

    // Expect that the mock body function was called 5 times (as per the test condition)
    expect(mockBody).toHaveBeenCalledTimes(5);
  });

  it('should not execute body function if test function returns false initially', () => {
    // Ensure the test function returns false initially
    let value = 10;

    // Define the test function that will return false immediately
    const testFunction = (value: number) => value < 5;

    // Define a mock body function
    const mockBody = jest.fn();

    // Call the loop function
    loop(value, testFunction, jest.fn(), mockBody);

    // Fast forward timers to allow for some time (e.g., 1000ms)
    jest.advanceTimersByTime(1000);

    // Expect that the mock body function was never called
    expect(mockBody).not.toHaveBeenCalled();
  });
});
