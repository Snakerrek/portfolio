import React, { useEffect, useRef } from "react";
import { Canvas } from "./AnimatedObject3D.styles";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface Props {
  modelPath: string;
  canvasSize: { x: number; y: number };
  modelScale: { x: number; y: number; z: number };
  scalingValue: number;
}

const AnimatedObject3D = ({
  modelPath,
  canvasSize,
  modelScale,
  scalingValue,
}: Props): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const loader = new GLTFLoader();
    let model: THREE.Group;
    loader.load(
      modelPath,
      (glb) => {
        model = glb.scene;
        model.scale.set(modelScale.x, modelScale.y, modelScale.z);
        scene.add(model);
      },
      (xhr) => {},
      (error) => {
        console.log(error);
      }
    );

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 5);
    scene.add(light);

    let animationFrame: number;

    let lastTime = 0;
    const interval = 1000 / 60;
    let timer = 0;

    const sizes = {
      width: canvasSize.x,
      height: canvasSize.y,
    };

    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(0, 1, 2);
    scene.add(camera);

    const renderer = new THREE.WebGL1Renderer({
      canvas: canvas,
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.setClearColor(0x0c0c0c);
    renderer.render(scene, camera);

    let sv = scalingValue;

    const animate = (timeStamp: DOMHighResTimeStamp) => {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      if (timer > interval) {
        if (model) {
          model.rotateY(0.02);
          let rotation: THREE.Euler = model.rotation;
          if (rotation.y < 0.02 && rotation.y > 0) {
            sv *= -1;
          }

          let scale: THREE.Vector3 = model.scale;
          model.scale.set(scale.x + sv, scale.y + sv, scale.z + sv);
        }
        renderer.render(scene, camera);
        timer = 0;
      } else {
        timer += deltaTime;
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate(0);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  });

  return <Canvas ref={canvasRef}></Canvas>;
};

export default AnimatedObject3D;
