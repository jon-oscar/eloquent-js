import fizzBuzz from './jGetFizzBuzz';

/**
 * Renders the FizzBuzz value for a given count.
 * @param count - The number to calculate the FizzBuzz value for.
 * @returns The FizzBuzz value for the given count.
 */
export function JFizzBuzz({ count }: { count: number }) {
  const fizzBuzzValue = fizzBuzz(count);

  return (
    <div
      className='text-[80px] font-bold text-slate-500'
      data-testid='j-fizz-buzz'
    >
      {fizzBuzzValue === 'FizzBuzz' ? (
        <span className='text-[#B2980B] animate-pulse'>{fizzBuzzValue}</span>
      ) : fizzBuzzValue === 'Fizz' || fizzBuzzValue === 'Buzz' ? (
        <span>{fizzBuzzValue}</span>
      ) : (
        fizzBuzzValue
      )}
    </div>
  );
}
