import { Ecosystem } from '../ecosystems/ecosystem';
import { isMovable, Movable } from '../entities/movable';

/**
 * Simulation class.
 */
export class Simulation {

  public ecosystem: Ecosystem;
  public readonly speed: number;
  private _state: SimulationState;

  /**
   * Creates a new simulation.
   * 
   * @param ecosystem Ecosystem
   * @param speed Speed
   */
  public constructor(ecosystem: Ecosystem, speed: number) {
    this.ecosystem = ecosystem;
    this.speed = speed;
    this._state = SimulationState.STOPPED;
  }

  /**
   * Plays the simulation.
   */
  public play(): void {
    this._state = SimulationState.IN_PROGRESS;
    setInterval(this.update.bind(this), this.speed);
  }

  /**
   * Pauses the simulation.
   */
  public pause(): void {
    this._state = SimulationState.PAUSED;
  }

  /**
   * Stops the simulation.
   */
  public stop(): void {
    this._state = SimulationState.STOPPED;
  }

  /**
   * Updates the simulation.
   */
  private update(): void {
    if (this._state === SimulationState.IN_PROGRESS) {
      this.ecosystem.update();
    }
  }

  public get state(): SimulationState {
    return this._state;
  }
}

/**
 * Simulation state enumeration.
 */
export enum SimulationState {
  STOPPED = 0,
  IN_PROGRESS = 1,
  PAUSED = 2,
  FINISHED = 3
}
