import React, { useEffect, useRef } from "react";
import { Canvas } from "./AnimatedObject3D.styles";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const AnimatedObject3D = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const loader = new GLTFLoader();
    let model: THREE.Group;
    loader.load(
      "/wraith.glb",
      (glb) => {
        model = glb.scene;
        model.scale.set(0.035, 0.035, 0.035);
        scene.add(model);
        console.log("loaded");
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
      width: 500,
      height: 500,
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

    let scalingValue = -0.0001;

    const animate = (timeStamp: DOMHighResTimeStamp) => {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      if (timer > interval) {
        if (model) {
          model.rotateY(0.02);
          let rotation: THREE.Euler = model.rotation;
          if (rotation.y < 0.02 && rotation.y > 0) {
            scalingValue *= -1;
          }

          let scale: THREE.Vector3 = model.scale;
          model.scale.set(
            scale.x + scalingValue,
            scale.y + scalingValue,
            scale.z + scalingValue
          );
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
  }, []);

  return <Canvas ref={canvasRef}></Canvas>;
};

export default AnimatedObject3D;
