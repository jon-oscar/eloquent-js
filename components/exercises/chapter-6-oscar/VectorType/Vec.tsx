export class Vec {
  constructor(
    public x: number,
    public y: number
  ) {}

  plus(other: Vec) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other: Vec) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
