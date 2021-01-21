import { Location } from '../utils/location';
import { Entity } from './entity';
import { Movable } from './movable';

/**
 * Zombie class.
 */
export class Zombie extends Entity implements Movable {

  public speed: number;

  /**
   * Creates a new zombie.
   */
  public constructor(location: Location) {
    super(location);
    this.speed = 0.5;
  }

  /**
   * Moves the zombie.
   * 
   * @param location Location to 
   */
  public move(location: Location): void {
    throw new Error('Method not implemented.');
  }
}
