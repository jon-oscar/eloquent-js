import { render, screen, fireEvent, act } from '@testing-library/react';
import YourOwnLoop from './YourOwnLoop';

// Mocking setInterval and clearInterval
jest.useFakeTimers();

describe('YourOwnLoop', () => {
  test('renders timer display and buttons', () => {
    render(<YourOwnLoop />);

    // Check if the timer display and buttons are rendered
    expect(screen.getByTestId('timer-display')).toBeInTheDocument();
    expect(screen.getByText('▶️')).toBeInTheDocument();
    expect(screen.getByText('🔄')).toBeInTheDocument();
  });

  test('initial timer values are correct', () => {
    render(<YourOwnLoop />);

    // Check if the initial timer values are 25 minutes and 0 seconds
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('00')).toBeInTheDocument();
  });

  test('starts and reset the timer when buttons are clicked', () => {
    render(<YourOwnLoop />);

    // Click the start button
    fireEvent.click(screen.getByText('▶️'));

    // Fast forward time by 1 second
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Timer should be running
    expect(screen.getByText('24')).toBeInTheDocument();
    expect(screen.getByText('59')).toBeInTheDocument();

    // Click the reset button
    fireEvent.click(screen.getByText('🔄'));

    // Timer should be stopped and reset to 25 minutes
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('00')).toBeInTheDocument();
  });
});
