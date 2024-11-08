import React, { useState, useRef, useEffect } from 'react';

interface DecodingDecadeFirstScreenProps {
  handleScreenChange: (page: number) => void;
}

interface ApiResponse {
  message: string;
}

const SAD_EMOJIS = ["😢", "😭", "😪", "😓", "🥺", "😿"];

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
  triggerX?: number;
  triggerY?: number;
}

export default function DecodingDecadeFirstScreen({ handleScreenChange }: DecodingDecadeFirstScreenProps) {
  const [answer, setAnswer] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const API_BASE_URL = 'https://factorfive.vercel.app';

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

  const applyParticleEffect = (
    element: HTMLElement,
    options?: SadParticleOptions,
  ): (() => void) => {
    const sizes = [24, 32, 40];
    const burstSize = options?.burstCount || 12; 

    let particles: SadParticle[] = [];
    let mouseX = options?.triggerX || window.innerWidth / 2;
    let mouseY = options?.triggerY || window.innerHeight / 2;

    const container = getContainer();

    function generateParticle(angle: number) {
      const size = options?.size || sizes[Math.floor(Math.random() * sizes.length)];
      const speedHorz = options?.speedHorz || (Math.random() * 8 + 2);
      const speedUp = options?.speedUp || (Math.random() * 8 + 4);
      const spinVal = 0;
      const spinSpeed =0;
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

    createBurst();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      particles.forEach((p) => p.element.remove());
      particles = [];

      if (container.childNodes.length === 0) {
        container.remove();
      }
    };
  };

  const triggerSadMode = () => {
    if (containerRef.current) {
      cleanupRef.current = applyParticleEffect(containerRef.current, {
        burstCount: 20,
        triggerX: window.innerWidth / 2,
        triggerY: window.innerHeight / 2
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setError(null);
    
    if (!answer.trim()) {
      setError('Please enter an answer');
      return;
    }

    setIsPending(true);
    setAttempts(prev => prev + 1);

    try {
      const response = await fetch(
        `${API_BASE_URL}/answer?answer=${encodeURIComponent(answer.trim())}`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        }
      );

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Too many attempts. Please wait a minute and try again.');
        }
        throw new Error(`Server error: ${response.status}`);
      }

      const data: ApiResponse = await response.json();
      
      if (data.message === 'Correct Answer') {
        handleScreenChange(1);
      } else {
        setError('Incorrect answer. Please try again.');
        triggerSadMode();
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="max-w-md mx-auto p-4">
      <p className="text-left text-[28px] text-gray-600 mb-[6px]">
        So, have you solved the clue?
      </p>
      
      <form 
        method="post" 
        onSubmit={handleSubmit} 
        className="flex flex-col space-y-4"
        noValidate
      >
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Enter your answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={isPending}
            className={`
              text-[28px] px-4 py-2 border rounded-md w-full
              focus:outline-none focus:ring-2 focus:ring-blue-500
              disabled:opacity-50 disabled:cursor-not-allowed
              ${error ? 'border-red-500' : 'border-gray-300'}
            `}
          />
          
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          
          {attempts > 0 && !error && !isPending && (
            <p className="text-gray-500 text-sm">
              Attempts made: {attempts}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending || !answer.trim()}
          className={`
            text-[18px] bg-[#004B6E] text-white py-2 rounded-md font-medium
            transition-all duration-200
            ${isPending || !answer.trim() 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-[#003855] active:transform active:scale-95'}`}
        >
          {isPending ? (
            <span className="flex items-center justify-center">
              <svg 
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </span>
          ) : (
            'Submit Answer'
          )}
        </button>
      </form>
    </div>
  );
}