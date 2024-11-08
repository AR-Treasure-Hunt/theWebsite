import React, { useEffect, useRef } from 'react';

const SAD_EMOJIS = ["😢", "😭", "😪", "😓", "🥺", "😿"];

const getContainer = () => {
  const id = "_sadMode_effect";
  let existingContainer = document.getElementById(id);

  if (existingContainer) {
    return existingContainer;
  }

  const container = document.createElement("div");
  container.setAttribute("id", id);
  container.setAttribute(
    "style",
    "overflow:hidden; position:fixed; height:100%; top:0; left:0; right:0; bottom:0; pointer-events:none; z-index:2147483647",
  );

  document.body.appendChild(container);

  return container;
};

let instanceCounter = 0;

interface SadParticle {
  element: HTMLElement;
  left: number;
  size: number;
  top: number;
  speedHorz: number;
  speedUp: number;
  spinSpeed: number;
  spinVal: number;
  direction: number;
}

interface SadParticleOptions {
  size?: number;
  burstCount?: number;
  speedHorz?: number;
  speedUp?: number;
}

const applyParticleEffect = (
  element: HTMLElement,
  options?: SadParticleOptions,
): (() => void) => {
  instanceCounter++;

  const sizes = [24, 32, 40];
  const burstSize = options?.burstCount || 12; 

  let particles: SadParticle[] = [];
  let mouseX = 0;
  let mouseY = 0;

  const container = getContainer();

  function generateParticle(angle: number) {
    const size = options?.size || sizes[Math.floor(Math.random() * sizes.length)];
    const speedHorz = options?.speedHorz || (Math.random() * 8 + 2);
    const speedUp = options?.speedUp || (Math.random() * 8 + 4);
    const spinVal = Math.random() * 360;
    const spinSpeed = Math.random() * 35 * (Math.random() <= 0.5 ? -1 : 1);
    const top = mouseY - size / 2;
    const left = mouseX - size / 2;

    const direction = Math.cos(angle);
    const verticalDirection = Math.sin(angle);

    const particle = document.createElement("div");
    const randomEmoji = SAD_EMOJIS[Math.floor(Math.random() * SAD_EMOJIS.length)];

    particle.style.fontSize = `${size}px`;
    particle.style.position = "absolute";
    particle.style.transform = `translate3d(${left}px, ${top}px, 0px) rotate(${spinVal}deg)`;
    particle.innerText = randomEmoji;

    container.appendChild(particle);

    particles.push({
      direction,
      element: particle,
      left,
      size,
      speedHorz: speedHorz * Math.abs(direction),
      speedUp: speedUp * Math.abs(verticalDirection),
      spinSpeed,
      spinVal,
      top,
    });
  }

  function createBurst() {
    for (let i = 0; i < burstSize; i++) {
      const angle = (i * 2 * Math.PI) / burstSize;
      generateParticle(angle);
    }
  }

  function refreshParticles() {
    particles.forEach((p) => {
      p.left = p.left + p.speedHorz * p.direction;
      p.top = p.top - p.speedUp;
      p.speedUp = Math.max(p.speedUp - 0.2, -8); 
      p.spinVal = p.spinVal + p.spinSpeed;

      if (
        p.top >= Math.max(window.innerHeight, document.body.clientHeight) + p.size ||
        p.top < -p.size ||
        p.left < -p.size ||
        p.left > window.innerWidth + p.size
      ) {
        particles = particles.filter((o) => o !== p);
        p.element.remove();
      }

      p.element.setAttribute(
        "style",
        [
          "position:absolute",
          "will-change:transform",
          `top:${p.top}px`,
          `left:${p.left}px`,
          `transform:rotate(${p.spinVal}deg)`,
          `font-size:${p.size}px`,
        ].join(";"),
      );
    });
  }

  let animationFrame: number | undefined;

  function loop() {
    refreshParticles();
    animationFrame = requestAnimationFrame(loop);
  }

  loop();

  const clickHandler = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    createBurst();
  };

  element.addEventListener('click', clickHandler);

  return () => {
    element.removeEventListener('click', clickHandler);

    const interval = setInterval(() => {
      if (animationFrame && particles.length === 0) {
        cancelAnimationFrame(animationFrame);
        clearInterval(interval);

        if (--instanceCounter === 0) {
          container.remove();
        }
      }
    }, 500);
  };
};

const SadMode: React.FC<{ children: React.ReactNode; options?: SadParticleOptions }> = ({ 
  children, 
  options 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      return applyParticleEffect(ref.current, options);
    }
  }, [options]);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};

export default SadMode;
