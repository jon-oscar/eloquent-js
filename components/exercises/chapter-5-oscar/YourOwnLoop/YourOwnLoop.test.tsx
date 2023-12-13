import { render, screen, fireEvent, act } from '@testing-library/react';
import YourOwnLoop from './YourOwnLoop';

describe('YourOwnLoop', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('renders timer display and buttons', () => {
    render(<YourOwnLoop />);

    // Check if the timer display and buttons are rendered
    expect(screen.getByTestId('timer-display')).toBeInTheDocument();
    expect(screen.getByText('▶️')).toBeInTheDocument();
    expect(screen.getByText('🔄')).toBeInTheDocument();
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
    expect(screen.getByText('9')).toBeInTheDocument();

    // Click the reset button
    fireEvent.click(screen.getByText('🔄'));

    // Timer should be stopped and reset to 25 minutes
    expect(screen.getByText('10')).toBeInTheDocument();
  });
});
