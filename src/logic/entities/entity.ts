import randomString from 'crypto-random-string';
import { Location } from '../utils/location';
import { Vector2 } from '../utils/vector2';

/**
 * Entity class.
 * 
 * This class is the entity base.
 */
export abstract class Entity {

  public readonly id;
  public location: Location;
  public size: Vector2;
  public color: string;

  /**
   * Creates a new entity.
   * 
   * @param location Location
   * @param size Size
   * @param color Color in hex string
   */
  protected constructor(location: Location, size: Vector2, color: string) {
    this.id = `${location.ecosystem.id}_${randomString({ characters: '0123456789abcdef', length: 8 })}`;
    this.location = location;
    this.size = size;
    this.color = color;
  }
}
