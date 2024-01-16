/**
 * Counts the occurrences of items in an array based on a grouping function.
 *
 * @template T The type of the items in the array.
 * @param {T[]} items The array of items to count.
 * @param {(item: T) => string} groupName The grouping function that determines the group name for each item.
 * @returns {Array<{ name: string, count: number }>} An array of objects containing the group name and the count of occurrences.
 */
export default function countBy<T>(items: T[], groupName: (item: T) => string) {
  const counts = [];
  for (let item of items) {
    const name = groupName(item);
    const known = counts.findIndex((c) => c.name === name);
    if (known === -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
