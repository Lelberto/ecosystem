import { Location } from '../utils/location';

/**
 * Entity class.
 * 
 * This class is the entity base.
 */
export abstract class Entity {

  public location: Location;

  /**
   * Creates a new entity.
   * 
   * @param location Location
   */
  protected constructor(location: Location) {
    this.location = location;
  }
}
