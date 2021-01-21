import { Location } from '../utils/location';

/**
 * Movable interface.
 * 
 * A movable entity must implements this interface.
 */
export interface Movable {
  speed: number;
  move(location: Location): void;
}
