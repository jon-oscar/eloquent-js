import fizzBuzz from './jGetFizzBuzz';

function StyledText({ text }: { text: string }) {
  return text === 'FizzBuzz' ? (
    <span className='text-[#B2980B] animate-pulse'>{text}</span>
  ) : text === 'Fizz' || text === 'Buzz' ? (
    <span>{text}</span>
  ) : (
    text
  );
}

export function JFizzBuzz({ count }: { count: number }) {
  const numbers = [count - 1, count, count + 1];

  const fizzBuzzNumbers = numbers.map((num) => fizzBuzz(num));

  return (
    <div className='text-[80px] font-bold text-slate-500'>
      <div className='relative h-[100px] overflow-hidden'>
        <div className='absolute -top-[100px]'>
          <StyledText text={fizzBuzzNumbers[0]} />
        </div>
        <div className='absolute'>
          <StyledText text={fizzBuzzNumbers[1]} />
        </div>
        <div className='absolute top-[100px]'>
          <StyledText text={fizzBuzzNumbers[2]} />
        </div>
      </div>
    </div>
  );
}
