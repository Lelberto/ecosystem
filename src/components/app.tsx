import React, { useEffect, useState } from 'react';
import { EpidemicEcosystem } from '../logic/ecosystems/epidemic-ecosystem';
import { Simulation } from '../logic/simulation/simulation';
import { Vector2 } from '../logic/utils/vector2';
import { Canvas, Draw } from './canvas';

/**
 * Application component.
 */
export const App: React.FC = () => {
  const [simulation, setSimulation] = useState<Simulation>(new Simulation(new EpidemicEcosystem(new Vector2(1000, 1000)), 10));

  useEffect(() => {
    if (simulation) {
      simulation.ecosystem.generate(10);
      simulation.play();
    }
  }, [simulation]);

  const draw: Draw = (ctx, frameCount) => {
    const ecosystem = simulation.ecosystem;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (const entity of ecosystem.entities) {
      ctx.fillStyle = entity.color;
      ctx.fillRect(entity.location.x, entity.location.y, entity.size.x, entity.size.y);
    }
  }
  return (
      <Canvas draw={draw} width={simulation.ecosystem.size.x} height={simulation.ecosystem.size.y} />
  );
}
