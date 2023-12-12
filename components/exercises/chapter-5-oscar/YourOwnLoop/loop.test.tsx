import { loop } from './loop';

describe('loop function', () => {
  // Mock the setInterval function to control time in tests
  jest.useFakeTimers();

  it('should execute body function until test function returns false', () => {
    // Define a mock body function to track calls
    const mockBody = jest.fn();

    // Call the loop function
    loop(
      0,
      (value) => value < 3,
      (value) => value + 1,
      mockBody
    );

    // Fast forward timers to allow for multiple iterations
    jest.advanceTimersByTime(5000);

    // Expect that the mock body function was called 3 times (as per the test condition)
    expect(mockBody).toHaveBeenCalledTimes(3);
    expect(mockBody).toHaveBeenCalledWith(0);
    expect(mockBody).toHaveBeenCalledWith(1);
    expect(mockBody).toHaveBeenCalledWith(2);
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
