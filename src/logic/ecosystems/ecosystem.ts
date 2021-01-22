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
   * 
   * @param size Size
   */
  protected constructor(size: Vector2) {
    this.size = size;
    this.entities = [];
  }

  /**
   * Generates the ecosystem.
   * 
   * This method must use the `entities` attribute to fill it.
   * 
   * @param maxEntities Max entities to generate
   */
  public abstract generate(maxEntities: number): void;
}
