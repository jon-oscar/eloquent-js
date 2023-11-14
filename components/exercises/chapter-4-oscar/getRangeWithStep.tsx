export const getRangeWithStep = (
  start: number,
  end: number,
  step: number = start < end ? 1 : -1
): number[] => {
  if (step === 0) {
    throw new Error('Step cannot be zero.');
  }

  const array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }

  return array;
};
