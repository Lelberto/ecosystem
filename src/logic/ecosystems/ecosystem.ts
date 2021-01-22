import { Entity } from '../entities/entity';
import { Updatable } from '../utils/updatable';
import { Vector2 } from '../utils/vector2';

/**
 * Ecosystem class.
 * 
 * An ecosystem is the object that contains the simulation.
 */
export abstract class Ecosystem implements Updatable {

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

  /**
   * Updates the ecosystem.
   */
  public abstract update(): void;

  /**
   * Checks if an entity is in the border and change it's location.
   * 
   * @param entity Entity to check
   */
  public checkBorder(entity: Entity): void {
    if (entity.location.x < 0) {
      entity.location.x = 0;
    }
    if (entity.location.y < 0) {
      entity.location.y = 0;
    }
    if (entity.location.x > this.size.x - entity.size.x) {
      entity.location.x = this.size.x - entity.size.x;
    }
    if (entity.location.y > this.size.y - entity.size.y) {
      entity.location.y = this.size.y - entity.size.y;
    }
  }
}
