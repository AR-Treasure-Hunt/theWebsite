/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  './index.html',
	  './src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
	  extend: {
		fontFamily: {
		  jersey: ['Jersey 10', 'sans-serif'],
		  rubik: ['Rubik', 'sans-serif'],
		},
		screens: {
		  sm: '640px',
		  md: '768px',
		  lg: '1024px',
		  xl: '1440px',
		  '2xl': '1590px',
		},
		borderRadius: {
		  xl: "calc(var(--radius) + 4px)",
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
			foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
		  },
		  'ice-citadel': '#B1FCFA',
		  moussaka: '#702412',
		  almondine: '#FFDDBD',
		  gold: '#FFD700',
		  white: '#FFFFFF',
		  'opulent-blue': '#0556F3',
		  'deep-saffron': '#F79F29',
		  'metallic-yellow': '#FFD219',
		  'maximum-blue-green': '#30D3BB',
		  'crayola-bright-yellow': '#FEA52A',
		  'sacramento-state-green': '#04312B',
		},
		keyframes: {
		  'accordion-down': {
			from: { height: '0' },
			to: { height: 'var(--radix-accordion-content-height)' },
		  },
		  'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: '0' },
		  },
		},
		animation: {
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out',
		},
		rotate: {
		  'y-180': 'rotateY(180deg)',
		},
		transformStyle: {
		  'preserve-3d': 'preserve-3d',
		},
		backfaceVisibility: {
		  hidden: 'hidden',
		},
		perspective: {
		  '10000': '10000px',
		},
	  },
	},
	plugins: [
	  require("tailwindcss-animate"),
	  function ({ addUtilities }) {
		const newUtilities = {
		  '.backface-hidden': {
			'backface-visibility': 'hidden',
			'-webkit-backface-visibility': 'hidden',
		  },
		  '.transform-style-preserve-3d': {
			'transform-style': 'preserve-3d',
		  },
		  '.rotate-y-180': {
			transform: 'rotateY(180deg)',
		  },
		};
		addUtilities(newUtilities);
	  },
	],
  };
  