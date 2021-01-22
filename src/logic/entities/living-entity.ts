import { Location } from '../utils/location';
import { Updatable } from '../utils/updatable';
import { Vector2 } from '../utils/vector2';
import { Entity } from './entity';

/**
 * Living entity class.
 * 
 * A living entity is an entity that needs to be updated.
 */
export abstract class LivingEntity extends Entity implements Updatable {

  /**
   * Creates a new living entity.
   * 
   * @param location Location
   * @param size Size
   * @param color Color in hex string
   */
  protected constructor(location: Location, size: Vector2, color: string) {
    super(location, size, color);
  }

  /**
   * Updates the entity.
   */
  public abstract update(): void;
}