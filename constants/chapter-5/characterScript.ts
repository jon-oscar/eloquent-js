import SCRIPTS from './scripts.json';

/**
 * Retrieves the script object that corresponds to the given Unicode character code.
 * @param code - The Unicode character code.
 * @returns The script object that corresponds to the given character code, or null if no script is found.
 */
export default function characterScript(code: number) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}
