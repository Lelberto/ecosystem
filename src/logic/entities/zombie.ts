import _ from 'lodash';
import { Location } from '../utils/location';
import { Vector2 } from '../utils/vector2';
import { LivingEntity } from './living-entity';
import { Movable } from './movable';

/**
 * Zombie class.
 */
export class Zombie extends LivingEntity implements Movable {

  public speed: number;
  private moveType: number;
  private moveLock: number;

  /**
   * Creates a new zombie.
   */
  public constructor(location: Location, size: Vector2, color: string) {
    super(location, size, color);
    this.speed = 0.5;
    this.moveType = _.random(0, 8);
    this.moveLock = Date.now();
  }

  public update(): void {
    this.move();
  }

  /**
   * Moves the zombie.
   */
  public move(): void {
    if (Date.now() - this.moveLock >= 1 * 1000) {
      this.moveLock = Date.now();
      this.moveType = _.random(0, 8);
    }

    switch (this.moveType) {
      case 0:
        this.location.x += this.speed;
        break;
      case 1:
        this.location.y += this.speed;
        break;
      case 2:
        this.location.x -= this.speed;
        break;
      case 3:
        this.location.y -= this.speed;
        break;
      case 4:
        this.location.x += this.speed;
        this.location.y += this.speed;
        break;
      case 5:
        this.location.x -= this.speed;
        this.location.y -= this.speed;
        break;
      case 6:
        this.location.x += this.speed;
        this.location.y -= this.speed;
        break;
      case 7:
        this.location.x -= this.speed;
        this.location.y += this.speed;
        break;
      default: break;
    }
  }
}
