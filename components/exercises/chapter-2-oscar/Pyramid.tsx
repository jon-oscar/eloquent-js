import React from 'react';
import 'app/globals.css';

interface PyramidProps {
  rows: number;
}

const getPyramid = (rows: number) => {
  let pyramid = '';
  for (let i = 1; i <= rows; i++) {
    pyramid += '#'.repeat(i) + '\n';
  }
  return pyramid;
};

const Pyramid = ({ rows }: PyramidProps) => {
  return (
    <>
      <div>{getPyramid(rows)}</div>
    </>
  );
};

export default Pyramid;
