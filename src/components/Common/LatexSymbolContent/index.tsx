import React from 'react';
import { useDrag } from 'react-dnd';
import * as StyleComponent from './style';

interface Props {
  latex: string;
  name: string;
  symbol: string;
  width: string;
  height: string;
  onClick?: () => void;
}

export const LatexSymbolContent = ({
  latex,
  name,
  symbol,
  width,
  height,
  onClick,
}: Props) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'box', latex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;

  return (
    <>
      <StyleComponent.InputLatexContent
        ref={drag}
        width={width}
        height={height}
        opacity={opacity}
        onClick={onClick}
      >
        <div>{symbol}</div>
      </StyleComponent.InputLatexContent>
    </>
  );
};
