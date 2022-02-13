import React, { useRef, useEffect } from "react";

import { CanvasDiv } from "./Canvas.styles";

let flowFieldAnimation: number;

class FlowFieldEffect {
  private ctx: any;
  private width: number;
  private height: number;
  private angle: number;

  constructor(ctx: any, width: number, height: number) {
    this.ctx = ctx;
    this.ctx.strokeStyle = "white";
    this.width = width;
    this.height = height;
    this.angle = 0;
  }

  private draw(x: number, y: number) {
    const length = 300;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + length, y + length);
    this.ctx.stroke();
  }

  animate() {
    this.angle += 0.001;
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.draw(
      this.width / 2 + Math.sin(this.angle) * 100,
      this.height / 2 + Math.cos(this.angle) * 100
    );
    console.log(this.width, this.height);
    flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
  }
}

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let flowField: FlowFieldEffect;

    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate();

    window.addEventListener("resize", function () {
      cancelAnimationFrame(flowFieldAnimation);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      flowField = new FlowFieldEffect(
        ctx,
        canvas.width - 300,
        canvas.height - 300
      );
      flowField.animate();
    });

    return () => {
      cancelAnimationFrame(flowFieldAnimation);
    };
  }, []);

  return <CanvasDiv ref={canvasRef} />;
};

export default Canvas;
