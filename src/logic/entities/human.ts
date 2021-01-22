import _ from 'lodash';
import { Location } from '../utils/location';
import { Vector2 } from '../utils/vector2';
import { Entity } from './entity';
import { Movable } from './movable';

/**
 * Human class.
 */
export class Human extends Entity implements Movable {

  public speed: number;
  private moveType: number;
  private moveLock: number;

  /**
   * Creates a new human.
   */
  public constructor(location: Location, size: Vector2, color: string) {
    super(location, size, color);
    this.speed = 1;
    this.moveType = 0;
    this.moveLock = Date.now();
  }

  /**
   * Moves the human.
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
