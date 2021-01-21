import { Location } from '../utils/location';
import { Entity } from './entity';
import { Movable } from './movable';

/**
 * Human class.
 */
export class Human extends Entity implements Movable {

  public speed: number;

  /**
   * Creates a new human.
   */
  public constructor(location: Location) {
    super(location);
    this.speed = 1.0;
  }

  /**
   * Moves the human.
   * 
   * @param location Location to 
   */
  public move(location: Location): void {
    throw new Error('Method not implemented.');
  }
}
