export const jobs = [
	{
		order: 1,
		company: 'IT-Consultis',
		title: 'Front-end developer',
		dates: 'Jul 2018 - Oct 2019',
		url: 'https://it-consultis.com/'
	},
	{
		order: 2,
		company: 'LearningLeaders',
		title: 'Front-end developer',
		dates: 'Nov 2019 - Jun 2020',
		url: 'https://www.learningleaders.com/'
	},
	{
		order: 3,
		company: 'VO2 Asia Pacific',
		title: 'Full-stack developer',
		dates: 'Jul 2020 - Apr 2021',
		url: 'https://vo2asiapacific.com/'
	},
	{
		order: 4,
		company: 'Wiredcraft',
		title: 'Full-stack developer',
		dates: 'Apr 2021 - Jan 2022',
		url: 'https://wiredcraft.com/'
	},
	{
		order: 5,
		company: 'General Motors',
		title: 'Full-stack developer',
		dates: 'Jan 2022  - Nov 2023',
		url: 'https://www.gm.com/'
	},
	{
		order: 6,
		company: 'Nikola Corporation',
		title: 'Full-stack developer',
		dates: 'Nov 2023 - Aug 2024',
		url: 'https://www.nikolamotor.com'
	}
];

export const skills = [
	'HTML',
	'CSS',
	'JavaScript',
	'Flutter',
	'Responsive design',
	'Node.js',
	'Ruby on Rails',
	'React.js',
	'Vue.js',
	'Svelte',
	'WeChat',
	'GraphQl',
	'AWS',
	'Nest.js',
	'Next.js',
	'TypeScript',
	'Tailwind.css',
	'REST Api'
];

export const projects = [
	{
		name: 'Photo app',
		description:
			"A takehome tech-screen project for Wiredcraft that I've been adding to over the years. It has a mosaic pattern and lazy-loading of images. I also added JWT auth and the ability to save your favorite photos. This project was a great opportunity to build out my backend boilerplate and get into AWS. The profile images are served from a serverless image handler made with S3, Lambda, Sharp, and Cloudfront.",
		tech: 'React, SCSS, Node, Postgres, Docker, AWS',
		alt: 'photo-app-screenshot',
		imageClasses: 'w-full',
		colorClasses: 'bg-neutral-900 text-amber-300 border-amber-300',
		gitRepo: 'https://github.com/rosscournoyer602/photo-app-frontend',
		demo: 'https://photo-app-frontend-v2.vercel.app/'
	},
	{
		name: 'Vue Sequencer',
		description:
			"Back in 2019 I wanted to learn some Vue, so I made this drum machine app. I struggled with browser compatibility until I refactored it to use the Web Audio API. Now it sounds great on any device. I'll come back and spruce up the styling some day. It's a lot of fun as-is!",
		tech: 'Vue 2, SCSS, Web Audio API',
		alt: 'vue-sequencer-screenshot',
		imageClasses: 'h-[300px] mt-4',
		colorClasses: 'bg-blue-300 text-slate-950 border-slate-950',
		gitRepo: 'https://github.com/rosscournoyer602/vue-sequencer',
		demo: 'https://vue-sequencer.vercel.app/'
	},
	{
		name: 'This website',
		description:
			"This very one! I made the latest version of my portfolio with SvelteKit and Tailwind. I have to say its probably my favorite web framework now. It feels very intuitive to manage state, as well as abstracting and reusing components. This being a simple-ish page, there is more to explore. But I can't wait to use it again.",
		tech: 'Svelte, Tailwind, Vite',
		alt: 'portfolio-screenshot',
		imageClasses: 'w-full',
		colorClasses: 'bg-amber-950 text-yellow-400 border-yellow-400',
		gitRepo: 'https://github.com/rosscournoyer602/photo-app-frontend',
		demo: 'https://photo-app-frontend-v2.vercel.app/'
	}
];
