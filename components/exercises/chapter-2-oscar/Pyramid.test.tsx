import { render, screen } from '@testing-library/react';

import Pyramid from './Pyramid';

describe('Pyramid', () => {
  it('renders the correct number of rows 1', async () => {
    render(<Pyramid rows={8} />);
    const rows = await screen.findAllByTestId('pyramid-row');
    expect(rows.length).toBe(9);
  });

  it('renders the correct number of rows 1', async () => {
    render(<Pyramid rows={5} />);
    const rows = await screen.findAllByTestId('pyramid-row');
    expect(rows.length).toBe(6);
  });

  it('renders the correct number of rows 1', async () => {
    render(<Pyramid rows={0} />);
    const rows = await screen.findAllByTestId('pyramid-row');
    expect(rows.length).toBe(1);
  });
});
