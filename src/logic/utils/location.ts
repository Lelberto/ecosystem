import { Ecosystem } from '../ecosystems/ecosystem';
import { Vector2 } from './vector2';

/**
 * Location class.
 * 
 * A location contains an ecosystem and a position (x, y).
 */
export class Location {

  public vec: Vector2;
  public ecosystem: Ecosystem;

  /**
   * Creates a new location.
   * 
   * @param ecosystem Ecosystem
   * @param x X location
   * @param y Y location
   */
  public constructor(ecosystem: Ecosystem, x: number = 0, y: number = 0) {
    this.ecosystem = ecosystem;
    this.vec = new Vector2(x, y);
  }

  /**
   * Checks if this location and target are in defined range.
   * 
   * @param target Location target
   * @param range Range
   */
  public isInRange(target: Location, range: number): boolean {
    return this.vec.distance(target.vec) < range * range;
  }

  public get x(): number {
    return this.vec.x;
  }

  public set x(x: number) {
    this.vec.x = x;
  }

  public get y(): number {
    return this.vec.y;
  }

  public set y(y: number) {
    this.vec.y = y;
  }
}
