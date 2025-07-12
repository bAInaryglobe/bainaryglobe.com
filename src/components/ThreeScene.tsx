"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#f5e9d6"); // muted yellow

    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Add a 3D globe with brown/yellow gradient
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: "#a67c52", // brown
      roughness: 0.7,
      metalness: 0.3,
      gradientMap: undefined,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Lighting
    const ambientLight = new THREE.AmbientLight("#fffbe6", 0.8); // soft yellow
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight("#bfae7c", 0.6);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Animation
    const animate = () => {
      globe.rotation.y += 0.003;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
      aria-hidden="true"
    />
  );
}
