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
		dates: 'Jan 2022 - Nov 2023',
		url: 'https://www.gm.com/'
	},
	{
		order: 6,
		company: 'Nikola Corporation',
		title: 'Full-stack developer',
		dates: 'Nov 2023 - Jul 2024',
		url: 'https://www.nikolamotor.com'
	},
	{
		order: 7,
		company: 'BCBSAZ',
		title: 'Software Developer',
		dates: 'Jul 2024 - Present',
		url: 'https://www.azblue.com/'
	}
];

export const chatMessageCopy = [
	'Hi, I’m Ross. I am a web developer from Arizona. I lived in Shanghai for 11 years, which is where I got my start in software. I am back in Phoenix now, and have been working in software development for a little over 6 years now. Time flies!',
	'I am most skilled with Javascript front-end frameworks like React.js or Vue.js, but I also have done some work with Flutter as well as Ruby on Rails. I have some professional experience with Node.js, Java, and Python for API development as well.',
	'When I am not coding, I enjoy snowboarding, bouldering, mountain biking, and gaming. Thanks for visiting my site. 😊'
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
		name: 'Vue Sequencer',
		description:
			"Back in 2019 I wanted to learn some Vue, so I made this drum machine app. I struggled with browser compatibility until I refactored it to use the Web Audio API. Now it sounds great on any device. I'll come back and spruce up the styling some day. It's a lot of fun as-is! You can use it to make some sick beats.",
		tech: 'Vue 2, SCSS, Web Audio API',
		alt: 'vue-sequencer-screenshot',
		imageClasses: 'h-[300px] mt-4 mx-auto md:mx-0 md:h-[500px] md:mr-20',
		colorClasses: 'bg-blue-300 text-slate-900 border-slate-950',
		gitRepo: 'https://github.com/rosscournoyer602/vue-sequencer',
		demo: 'https://vue-sequencer.vercel.app/'
	},
	{
		name: 'Photo app',
		description:
			'A takehome tech-screen project for my job at Wiredcraft. The tast was do style a mosaic pattern and lazy-load the images. I use it to test other features I want to learn. For example, I added JWT auth and the ability to save your favorite photos. This project was a great opportunity to build out my backend boilerplate and learn AWS. The profile images are served from a serverless image handler made with S3, Lambda, Sharp, and Cloudfront.',
		tech: 'React, SCSS, Node, Postgres, Docker, AWS',
		alt: 'photo-app-screenshot',
		imageClasses: 'w-full md:w-2/3 md:max-h-[550px] md:max-w-[825px] md:self-center',
		colorClasses: 'bg-teal-900 text-sky-200 border-amber-300',
		gitRepo: 'https://github.com/rosscournoyer602/photo-app-frontend',
		demo: 'https://photo-app-frontend-v2.vercel.app/'
	},
	{
		name: 'rosscournoyer.com (v2)',
		description:
			'This website. I made the latest version of my portfolio with SvelteKit and Tailwind. I have to say its probably my favorite web framework now. It feels very intuitive to manage state, component lifecycle as well as abstracting and reusing components. This being a simple page, there is more to explore in the framework. In the future I might explore using a CMS for the content.',
		tech: 'Svelte, Tailwind, Vite',
		alt: 'portfolio-screenshot',
		imageClasses: 'w-full md:w-2/3 md:max-h-[550px] md:max-w-[825px] md:self-center',
		colorClasses: 'bg-amber-950 text-yellow-400 border-yellow-400',
		gitRepo: 'https://github.com/rosscournoyer602/rosscournoyerdotcomv2',
		demo: ''
	},
	{
		name: 'Paycalc',
		description:
			'Are you a small business owner? Do you use a really loud mechanical keyboard? Do you think GUIs are for the weak? Paycalc might be just what you need! I featured it here because it is my first program ever. I made it in Introduction to Programming with C, the class that ignited my passion for programming all those years ago. Clone it, compile it, and calc some pay!',
		tech: 'C',
		alt: 'paycalc-screenshot',
		imageClasses: 'w-full md:w-2/3 md:max-h-[550px] md:max-w-[825px] md:self-center',
		colorClasses: 'bg-rose-900 text-fuchsia-200 border-yellow-400',
		gitRepo: 'https://github.com/rosscournoyer602/paycalc',
		demo: ''
	}
];
