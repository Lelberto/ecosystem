import { Entity } from '../entities/entity';
import { Vector2 } from '../utils/vector2';

/**
 * Ecosystem class.
 * 
 * An ecosystem is the object that contains the simulation.
 */
export abstract class Ecosystem {

  public size: Vector2;
  public readonly entities: Entity[];

  /**
   * Creates a new Ecosystem.
   */
  protected constructor() {
    this.size = new Vector2(100, 100);
    this.entities = [];
  }
}
