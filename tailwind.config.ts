import type { Config } from "tailwindcss";



export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				corsiva: ['Monotype Corsiva', 'cursive'],
				serif: ['ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
        		inter: ['Inter', 'sans-serif'],
        		dancing: ['Dancing Script', 'cursive'],
				allura: ['Allura', 'cursive'], // Romantic handwritten
   				greatvibes: ['Great Vibes', 'cursive'], // Swirling and elegant
   				pacifico: ['Pacifico', 'cursive'], // Fun and casual
    			parisienne: ['Parisienne', 'cursive'], // French-style chic
    			alex: ['Alex Brush', 'cursive'], // Formal, calligraphic
   				marck: ['Marck Script', 'cursive'], // Friendly handwriting
    			cinzel: ['Cinzel', 'serif'], // Cinematic roman
    			cinzeldecorative: ['Cinzel Decorative', 'serif'], // Movie-title style
    			abril: ['Abril Fatface', 'serif'], // Bold serif, stylish
    			playfair: ['Playfair Display', 'serif'], // Editorial elegance
    			cormorant: ['Cormorant Garamond', 'serif'], // Classical serif
    			lora: ['Lora', 'serif'], // Warm & modern serif
    			libre: ['Libre Baskerville', 'serif'], // Classic book-style
   				montserrat: ['Montserrat', 'sans-serif'], // Clean and cinematic sans
    			satisfy: ['Satisfy', 'cursive'],
    			italianno: ['Italianno', 'cursive'],
    			courgette: ['Courgette', 'cursive'],
        		merriweather: ['Merriweather', 'serif'],
    			
				
      		},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				wiggle: {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(8px)' }
				  },
				tap: {
					'0%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
    				'25%': { transform: 'rotate(0deg) scale(0.95) translateY(2px)' },
    				'50%': { transform: 'rotate(0deg) scale(1)' },
    				'100%': { transform: 'rotate(0deg) scale(1)' }
					}   

				
			},
			
  
			
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
    			,
				wiggle: 'wiggle 1s ease-in-out infinite',
				tap: 'tap 1s infinite ease-in-out'


			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;


