/**
 * Movable interface.
 * 
 * A movable entity must implements this interface.
 */
export interface Movable {
  speed: number;
  move(): void;
}

/**
 * Checks if an objects implements the Movable interface.
 * 
 * @param obj Object to check
 */
export function isMovable(obj: any): obj is Movable {
  return 'speed' in obj;
}
