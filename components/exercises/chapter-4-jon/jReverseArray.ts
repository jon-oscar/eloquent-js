/**
 * Returns a copy of the given array with the elements in reverse order.
 * @param array - The array to be reversed.
 * @returns The reversed array.
 */
export default function jReverseArray(array: any[]): any[] {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}
