import React, { useRef, useEffect } from "react";

import { CanvasDiv } from "./Canvas.styles";

import { isOnMobile, FlowFieldEffectConfig } from "../../helpers";

const mouse: {
  x: number;
  y: number;
} = {
  x: 0,
  y: 0,
};

const FFEconfig: FlowFieldEffectConfig = {
  framesPerSecond: 60,
  cellSize: 20,
  lineWidth: 1.5,
  vr: 0.02,
  gradientColors: [
    { offset: 0.1, color: "#F92CB0" },
    { offset: 0.3, color: "#1E3BFE" },
    { offset: 0.5, color: "#3EDFFF" },
    { offset: 0.7, color: "#7DFDFC" },
    { offset: 0.9, color: "#FFFFFF" },
  ],
  sizeOfMouse: 25,
  lineLength: { min: 5, max: 60 },
  angleMultiplier: { x: 0.005, y: 0.005 },
  radiusClampValues: { min: -6, max: 6 },
};

class FlowFieldEffect {
  private config: FlowFieldEffectConfig;
  private ctx: any;
  private width: number;
  private height: number;
  private lastTime: number;
  private interval: number;
  private timer: number;
  private gradient: CanvasGradient | undefined;
  private radius: number;

  constructor(
    config: FlowFieldEffectConfig,
    ctx: any,
    width: number,
    height: number
  ) {
    this.config = config;
    this.ctx = ctx;
    this.ctx.lineWidth = this.config.lineWidth;

    this.width = width;
    this.height = height;

    this.lastTime = 0;
    this.interval = 1000 / this.config.framesPerSecond;
    this.timer = 0;

    this.createGradient();
    this.ctx.strokeStyle = this.gradient;
    this.radius = 0;
  }
  private createGradient() {
    this.gradient = this.ctx.createLinearGradient(
      0,
      0,
      this.width,
      this.height
    );
    this.config.gradientColors.map((colorStop) => {
      return this.gradient?.addColorStop(colorStop.offset, colorStop.color);
    });
  }

  private calculateLength(positionX: number, positionY: number) {
    let length: number;

    if (!isOnMobile()) {
      const dx: number = mouse.x - positionX;
      const dy: number = mouse.y - positionY;
      const minDistance: number = this.config.lineLength.min * 10000;
      const maxDistance: number = this.config.lineLength.max * 10000;
      const ms: number = this.config.sizeOfMouse;
      let distance = dx * dx * ms + dy * dy * ms;
      if (distance > maxDistance) distance = maxDistance;
      else if (distance < minDistance) distance = minDistance;
      length = distance * 0.0001;
    } else {
      length = this.config.lineLength.max;
    }
    return length;
  }

  private drawLine(angle: number, x: number, y: number) {
    const length = this.calculateLength(x, y);
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
    this.ctx.stroke();
  }

  private drawGradient() {
    const angleXmult = this.config.angleMultiplier.x;
    const angleYmult = this.config.angleMultiplier.y;

    for (let y = 0; y < this.height; y += this.config.cellSize) {
      for (let x = 0; x < this.width; x += this.config.cellSize) {
        const angle =
          (Math.cos(x * angleXmult) + Math.sin(y * angleYmult)) * this.radius;
        this.drawLine(angle, x, y);
      }
    }
  }

  private updateRadius() {
    this.radius += this.config.vr;
    if (
      this.radius > this.config.radiusClampValues.max ||
      this.radius < this.config.radiusClampValues.min
    )
      this.config.vr *= -1;
  }

  public updateCanvas(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.ctx.strokeStyle = this.gradient;
  }

  animate(timeStamp: DOMHighResTimeStamp) {
    const deltaTime = timeStamp - this.lastTime;
    this.lastTime = timeStamp;
    if (this.timer > this.interval) {
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      this.updateRadius();
      this.drawGradient();
      this.timer = 0;
    } else {
      this.timer += deltaTime;
    }

    flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
  }
}

let flowFieldAnimation: number;

if (!isOnMobile()) {
  window.addEventListener("mousemove", function (e: MouseEvent) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  });
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

    let flowField: FlowFieldEffect = new FlowFieldEffect(
      FFEconfig,
      ctx,
      canvas.width,
      canvas.height
    );
    flowField.animate(0);

    window.addEventListener("resize", function () {
      if (isOnMobile()) return;
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
