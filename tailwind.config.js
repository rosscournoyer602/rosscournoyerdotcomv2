/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				hero: '0 0 60px 40px #020617'
			}
		}
	},
	plugins: []
};
