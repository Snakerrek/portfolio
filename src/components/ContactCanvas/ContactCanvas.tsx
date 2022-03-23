import React, { useRef, useEffect } from "react";

import { CanvasDiv } from "./ContactCanvas.styles";

import { isOnMobile } from "../../helpers";
import { backgroundCanvasConfigInterface } from "../../interfaces";

let config: backgroundCanvasConfigInterface;

class CanvasInfo {
  public canvas: any;
  public ctx: any;

  constructor(canvas: any, ctx: any) {
    this.canvas = canvas;
    this.ctx = ctx;
  }
}
let canvasInfo: CanvasInfo;

let particlesArray: Particle[] = [];

class Particle {
  public x: number;
  public y: number;
  private directionX: number;
  private directionY: number;
  private size: number;
  private color: string;
  constructor(
    x: number,
    y: number,
    directionX: number,
    directionY: number,
    size: number,
    color: string
  ) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  draw() {
    // Drawing a single circle (particle)
    canvasInfo.ctx.beginPath();
    canvasInfo.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    canvasInfo.ctx.fillStyle = this.color;
    canvasInfo.ctx.fill();
  }

  update() {
    // Bouncing off the canvas sides
    if (this.x > canvasInfo.canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > canvasInfo.canvas.width || this.y < 0) {
      this.directionY = -this.directionY;
    }
    // moving particle
    this.x += this.directionX;
    this.y += this.directionY;

    // drawing particle
    this.draw();
  }
}

const init = () => {
  particlesArray = [];
  let numberOfParticles =
    ((canvasInfo.canvas.height * canvasInfo.canvas.width) / 90000) *
    config.particleDensity;
  for (let i = 0; i < numberOfParticles; i++) {
    let size =
      Math.random() * config.particleSize.max + config.particleSize.min;
    let x =
      Math.random() * (canvasInfo.canvas.width - size * 2 - size * 2) +
      size * 2;
    let y =
      Math.random() * (canvasInfo.canvas.height - size * 2 - size * 2) +
      size * 2;
    let directionX = Math.random() * 5 - 2.5;
    let directionY = Math.random() * 5 - 2.5;
    let color = config.particleColor;
    particlesArray.push(
      new Particle(x, y, directionX, directionY, size, color)
    );
  }
};

const connect = () => {
  let opacityValue = 1;
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let distance =
        (particlesArray[a].x - particlesArray[b].x) *
          (particlesArray[a].x - particlesArray[b].x) +
        (particlesArray[a].y - particlesArray[b].y) *
          (particlesArray[a].y - particlesArray[b].y);
      if (
        distance <
        (canvasInfo.canvas.width / 12) * (canvasInfo.canvas.height / 12)
      ) {
        opacityValue = 1 - distance / 20000;
        canvasInfo.ctx.strokeStyle = `rgba(${config.lineColor},${opacityValue})`;
        canvasInfo.ctx.lineWidth = 2;
        canvasInfo.ctx.beginPath();
        canvasInfo.ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        canvasInfo.ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        canvasInfo.ctx.stroke();
      }
    }
  }
};

const animate = () => {
  requestAnimationFrame(animate);
  canvasInfo.ctx.clearRect(
    0,
    0,
    canvasInfo.canvas.width,
    canvasInfo.canvas.height
  );
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
  connect();
};

type Props = {
  backgroundCanvasConfig: backgroundCanvasConfigInterface;
};

const HomeCanvas = ({ backgroundCanvasConfig }: Props): JSX.Element => {
  config = backgroundCanvasConfig;
  const contactCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const contactCanvasDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvasContainer: HTMLDivElement | null = contactCanvasDivRef.current;
    if (!canvasContainer) return;
    const canvas: HTMLCanvasElement | null = contactCanvasRef.current;
    if (!canvas) return;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvasContainer.clientWidth;
    canvas.height = canvasContainer.clientHeight;
    canvasInfo = new CanvasInfo(canvas, ctx);

    init();
    animate();

    window.addEventListener("resize", () => {
      if (isOnMobile()) return;
      canvas.width = canvasContainer.clientWidth;
      canvas.height = canvasContainer.clientHeight;
      init();
    });
  });
  return (
    <CanvasDiv ref={contactCanvasDivRef}>
      <canvas ref={contactCanvasRef}></canvas>
    </CanvasDiv>
  );
};

export default HomeCanvas;
