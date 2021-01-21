import { Ecosystem } from '../ecosystems/ecosystem';

/**
 * Simulation class.
 */
export class Simulation {

  public ecosystem: Ecosystem;
  private _state: SimulationState;

  /**
   * Creates a new simulation.
   * 
   * @param ecosystem Ecosystem
   */
  public constructor(ecosystem: Ecosystem) {
    this.ecosystem = ecosystem;
    this._state = SimulationState.STOPPED;
  }

  /**
   * Plays the simulation.
   */
  public play(): void {
    this._state = SimulationState.IN_PROGRESS;
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
