/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary-bg': '#F9FAFB',
				'primary-green': '#10B981',
				'accent-green': '#A7F3D0',
				'text-primary': '#1F2937',
				'text-secondary': '#6B7280',
				'hover-green': '#059669',
				
				'dark-primary-bg': '#1E293B',
				'dark-primary-green': '#6EE7B7',
				'dark-accent-green': '#064E3B',
				'dark-text-primary': '#F9FAFB',
				'dark-text-secondary': '#D1D5DB',
				'dark-hover-green': '#34D399',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.6s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
} 