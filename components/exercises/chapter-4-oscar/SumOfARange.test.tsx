import { calcRangeSum, calcRangeSumMod, arraySum } from './SumOfARange';
import SumOfARange from './SumOfARange';
import { render, screen, fireEvent } from '@testing-library/react';

describe('calcRangeSum', () => {
  it('returns an array containing all the numbers in the range', () => {
    expect(calcRangeSum(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(calcRangeSum(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
    expect(calcRangeSum(0, 0)).toEqual([0]);
  });
});
describe('calcRangeSumMod', () => {
  it('returns an array containing all the numbers in the range', () => {
    expect(calcRangeSumMod(1, 5, 1)).toEqual([1, 2, 3, 4, 5]);
    expect(calcRangeSumMod(5, 1, -1)).toEqual([5, 4, 3, 2, 1]);
    expect(calcRangeSumMod(1, 5, 0)).toEqual([]);
  });
});

describe('arraySum', () => {
  it('returns the sum of all elements in the array', () => {
    expect(arraySum([1, 2, 3, 4, 5])).toEqual(15);
    expect(arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(55);
  });
});

describe('SumOfARange', () => {
  it('renders the animal images based on the selected range', () => {
    render(<SumOfARange />);
    const bearImage = screen.getByAltText('Bear');
    expect(bearImage).toBeInTheDocument();
    const wolfImage = screen.getByAltText('Wolf');
    expect(wolfImage).toBeInTheDocument();
  });
});
