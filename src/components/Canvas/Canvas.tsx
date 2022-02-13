import React, { useRef, useEffect } from "react";

import { CanvasDiv } from "./Canvas.styles";

interface Mouse {
  x: number;
  y: number;
}

const mouse: Mouse = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", function (e: MouseEvent) {
  mouse.x = e.x;
  mouse.y = e.y;
});

let flowFieldAnimation: number;

class FlowFieldEffect {
  private ctx: any;
  private width: number;
  private height: number;
  private lastTime: number;
  private interval: number;
  private timer: number;
  private cellSize: number;
  private gradient: CanvasGradient | undefined;
  private radius: number;
  private vr: number;

  constructor(ctx: any, width: number, height: number) {
    this.ctx = ctx;
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 1;
    this.width = width;
    this.height = height;
    this.lastTime = 0;
    this.interval = 1000 / 60; // 60frames/s
    this.timer = 0;
    this.cellSize = 15;
    this.createGradient();
    this.ctx.strokeStyle = this.gradient;
    this.radius = 0;
    this.vr = 0.03; // velocity of radius
  }
  private createGradient() {
    this.gradient = this.ctx.createLinearGradient(
      0,
      0,
      this.width,
      this.height
    );
    if (this.gradient) {
      this.gradient.addColorStop(0.1, "#ff5c33");
      this.gradient.addColorStop(0.2, "#ff66b3");
      this.gradient.addColorStop(0.4, "#ccccff");
      this.gradient.addColorStop(0.6, "#b3ffff");
      this.gradient.addColorStop(0.8, "#80ff80");
      this.gradient.addColorStop(0.9, "#ffff33");
    }
  }

  private drawLine(angle: number, x: number, y: number) {
    let positionX = x;
    let positionY = y;
    let dx = mouse.x - positionX;
    let dy = mouse.y - positionY;
    let distance = dx * dx * 25 + dy * dy * 25;
    if (distance > 500000) distance = 500000;
    else if (distance < 50000) distance = 50000;
    let length = distance * 0.0001;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
    this.ctx.stroke();
  }

  animate(timeStamp: DOMHighResTimeStamp) {
    const deltaTime = timeStamp - this.lastTime;
    this.lastTime = timeStamp;
    if (this.timer > this.interval) {
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      this.radius += this.vr;
      if (this.radius > 5 || this.radius < -5) this.vr *= -1;

      for (let y = 0; y < this.height; y += this.cellSize) {
        for (let x = 0; x < this.width; x += this.cellSize) {
          const angle =
            (Math.cos(x * 0.0125) + Math.sin(y * 0.0125)) * this.radius;
          this.drawLine(angle, x, y);
        }
      }
      this.timer = 0;
    } else {
      this.timer += deltaTime;
    }

    flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
    console.log(flowFieldAnimation);
  }
  public updateCanvas(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.ctx.strokeStyle = this.gradient;
  }
}

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas) return;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let flowField: FlowFieldEffect;

    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate(0);

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      flowField.updateCanvas(window.innerWidth, window.innerHeight);
    });

    return () => {
      cancelAnimationFrame(flowFieldAnimation);
    };
  }, []);

  return <CanvasDiv ref={canvasRef} />;
};

export default Canvas;
