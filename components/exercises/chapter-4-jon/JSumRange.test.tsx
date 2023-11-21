import { fireEvent, render, screen } from '@testing-library/react';
import JSumRange, { INITIAL_MAX_VALUE, INITIAL_MIN_VALUE } from './JSumRange';

describe('JSumRange', () => {
  it('renders the component', () => {
    render(<JSumRange />);
    const component = screen.getByTestId('j-sum-range');
    expect(component).toBeInTheDocument();
  });

  it('displays the initial range values and sum', () => {
    render(<JSumRange />);
    expect(
      screen.getByLabelText(`From ${INITIAL_MIN_VALUE}`)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(`To ${INITIAL_MAX_VALUE}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Sum: 578`)).toBeInTheDocument();
  });

  it('updates the range values and sum when inputs change', async () => {
    render(<JSumRange />);
    const minValueInput = screen.getByLabelText(`From ${INITIAL_MIN_VALUE}`);
    const maxValueInput = screen.getByLabelText(`To ${INITIAL_MAX_VALUE}`);

    fireEvent.change(minValueInput, { target: { value: '-50' } });
    fireEvent.change(maxValueInput, { target: { value: '50' } });

    expect(screen.getByLabelText(`From -50`)).toBeInTheDocument();
    expect(screen.getByLabelText(`To 50`)).toBeInTheDocument();
    expect(screen.getByText(`Sum: 0`)).toBeInTheDocument();
  });
});
