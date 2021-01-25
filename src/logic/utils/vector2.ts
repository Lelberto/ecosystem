/**
 * Vector2 class.
 * 
 * This class is used to manage vectors with two numbers (x, y).
 * The `width` and `height` are mapped to `x` and `y`, so their values are similar.
 */
export class Vector2 {

  /**
   * Vector zero (x: 0, y: 0).
   */
  public static readonly ZERO = new Vector2(0, 0);

  public x: number;
  public y: number;

  /**
   * Creates a new vector2.
   * 
   * @param x X value
   * @param y Y value
   */
  public constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * Adds a vector2 to this vector2.
   * 
   * @param target Target vector to add
   */
  public add(target: Vector2): Vector2 {
    this.x += target.x;
    this.y += target.y;
    return this;
  }

  /**
   * Substracts a vector2 to this vector2.
   * 
   * @param target Target vector to substract
   */
  public sub(target: Vector2): Vector2 {
    this.x -= target.x;
    this.y -= target.y;
    return this;
  }

  /**
   * Multiplies a vector2 to this vector2.
   * 
   * @param target Target vector to multiply
   */
  public mul(target: Vector2): Vector2 {
    this.x *= target.x;
    this.y *= target.y;
    return this;
  }

  /**
   * Divides a vector2 to this vector2.
   * 
   * @param target Target vector to divide
   */
  public div(target: Vector2): Vector2 {
    this.x /= target.x;
    this.y /= target.y;
    return this;
  }

  /**
   * gets the distance between this vector2 and target.
   * 
   * @param target Vector2 target
   */
  public distance(target: Vector2): number {
    const dx = this.x - target.x;
    const dy = this.y - target.y;
    return dx * dx + dy * dy;
  }

  public get width(): number {
    return this.x;
  }

  public set width(width: number) {
    this.x = width;
  }

  public get height(): number {
    return this.y;
  }

  public set height(height: number) {
    this.y = height;
  }
}
