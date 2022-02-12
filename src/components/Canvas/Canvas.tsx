import React, { useRef, useEffect } from "react";

import { CanvasDiv } from "./Canvas.styles";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, ctx.canvas.width / 2, ctx.canvas.height / 2);
  }, []);

  return <CanvasDiv ref={canvasRef} />;
};

export default Canvas;
