import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CardDetails from './CardDetails';

describe('CardDetails', () => {
  it('should render the component', () => {
    render(<CardDetails isOpen={true} closeModal={() => {}} />);
    const dialogElement = screen.getByRole('dialog');
    expect(dialogElement).toBeInTheDocument();
  });

  it('should call the closeModal function when the close button is clicked', () => {
    const closeModalMock = jest.fn();
    render(<CardDetails isOpen={true} closeModal={closeModalMock} />);
    const closeButtonElement = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButtonElement);
    expect(closeModalMock).toHaveBeenCalled();
  });
});
