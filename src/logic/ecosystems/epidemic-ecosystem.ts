import _ from 'lodash';
import { Human } from '../entities/human';
import { Zombie } from '../entities/zombie';
import { Location } from '../utils/location';
import { Vector2 } from '../utils/vector2';
import { Ecosystem } from './ecosystem';

/**
 * Epidemic ecosystem class.
 * 
 * The epidemic ecosystem is an ecosystem composed of one zombie and some humans.
 */
export class EpidemicEcosystem extends Ecosystem {

  /**
   * Creates a new epidemic ecosystem.
   * 
   * @param size Size
   */
  public constructor(size: Vector2) {
    super(size);
  }

  /**
   * Generates the epidemic ecosystem.
   * 
   * @param maxEntities Max entities to generate
   */
  public generate(maxEntities: number): void {
    let location = new Location(this, _.random(0, this.size.x), _.random(0, this.size.y));
    this.entities.push(new Zombie(location, new Vector2(1, 1), '#00FF00'));

    for (let i = 1; i < maxEntities; i++) {
      location = new Location(this, _.random(0, this.size.x), _.random(0, this.size.y));
      this.entities.push(new Human(location, new Vector2(1, 1), '#FF0000'));
    }
  }
}