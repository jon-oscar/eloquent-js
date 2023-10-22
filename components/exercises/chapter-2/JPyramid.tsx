import jGetPyramid from './jGetPyramid';

/**
 * Renders a pyramid of dots using the "#" character. The number of dots in each row is equal to the row number.
 * The number of rows is equal to the rows parameter.
 * @param rows - The number of dots to render in the pyramid.
 * @returns A JSX element that renders the pyramid of dots.
 */
export default function JPyramid({ rows }: { rows: number }): JSX.Element {
  const pyramid = jGetPyramid(rows);

  return (
    <div className='h-[20em]'>
      {/* container of fixed height */}
      <div className='h-[15em]'>
        {/* Iterate over pyramid and render a dot for each "#" and a new line for each "/n" */}
        {pyramid.split('').map((char, index) =>
          char === '#' ? (
            // inline rounded div that looks like a dot
            <div
              data-testid='j-pyramid-dot'
              key={index}
              className='inline-block w-[2em] h-[2em] rounded-full bg-slate-500 m-1 hover:bg-slate-400 hover:animate-pulse'
            />
          ) : (
            <br key={index} />
          )
        )}
      </div>
    </div>
  );
}
