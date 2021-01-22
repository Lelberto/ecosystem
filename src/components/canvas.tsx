import { useEffect, useRef } from 'react';

/**
 * Draw function.
 */
export type Draw = (ctx: CanvasRenderingContext2D, frameCount: number) => void;

/**
 * Canvas props.
 */
interface CanvasProps extends React.HTMLProps<HTMLCanvasElement> {
  draw: Draw;
}

/**
 * Canvas component.
 * 
 * @param props Props
 */
export const Canvas: React.FC<CanvasProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId: number;
    let frameCount = 0;

    const render = () => {
      frameCount++;
      props.draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [props.draw]);

  return (
    <canvas ref={canvasRef} {...props} />
  );
}
