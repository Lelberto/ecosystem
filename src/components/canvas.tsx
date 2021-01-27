import { useEffect, useRef } from 'react';
import { Ecosystem } from '../logic/ecosystems/ecosystem';

/**
 * Canvas props.
 */
interface CanvasProps extends React.HTMLProps<HTMLCanvasElement> {
  ecosystem: Ecosystem;
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

    const render = () => {
      props.ecosystem.ctx = context;
      animationFrameId = window.requestAnimationFrame(render);
    }
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [props.ecosystem]);

  return <canvas ref={canvasRef} width={props.width} height={props.height} />
}
