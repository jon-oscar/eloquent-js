/**
 * Represents a 2D vector.
 */
export class Vec {
  /**
   * Creates a new vector.
   * @param x The x-coordinate of the vector.
   * @param y The y-coordinate of the vector.
   */
  constructor(
    public x: number,
    public y: number
  ) {}

  /**
   * Adds another vector to this vector.
   * @param other The vector to be added.
   * @returns The sum of the two vectors.
   */
  plus(other: Vec) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  /**
   * Subtracts another vector from this vector.
   * @param other The vector to be subtracted.
   * @returns The difference between the two vectors.
   */
  minus(other: Vec) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  /**
   * Gets the length of the vector.
   * @returns The length of the vector.
   */
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
