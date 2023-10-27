import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout component', () => {
  it('renders children', () => {
    render(
      <Layout>
        <div>Test child</div>
      </Layout>
    );
    expect(screen.getByText('Test child')).toBeInTheDocument();
  });
});
