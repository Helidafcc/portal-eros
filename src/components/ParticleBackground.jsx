import { useEffect } from "react";
import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  useEffect(() => {
    const loadParticles = async () => {
      await loadFull(tsParticles);

      await tsParticles.load("tsparticles", {
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 60 },
          color: { value: ["#9d4edd", "#f72585", "#4361ee"] },
          shape: { type: "circle" },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 5 } },
          move: { enable: true, speed: 1.2, direction: "none", outModes: "out" },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        background: { color: "#0d0d1a" },
      });
    };

    loadParticles();
  }, []);

  return <div id="tsparticles" />;
}