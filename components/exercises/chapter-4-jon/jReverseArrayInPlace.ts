/**
 * Reverses an array in place.
 *
 * @param arr - The array to be reversed.
 */
export default function jReverseArrayInPlace(arr: any[]): void {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}
