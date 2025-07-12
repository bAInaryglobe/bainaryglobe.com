import { useRef, useEffect } from "react";
import * as THREE from "three";

export function useThree(setup: (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => void) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    setup(scene, camera, renderer);

    return () => {
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [setup]);

  return mountRef;
}
