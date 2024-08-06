<script lang="ts">
	import { imageRequest } from '$lib/imageRequest';
	import { IMAGE_URL } from '$lib/config';

	export let background = '';
	export let text = '';
	// background: 'bg-amber-950',
	// text: 'text-yellow-400'
	let bubbleBgColor = `${'bg-' + text.split('-')[1] + '-' + text.split('-')[2]}`;
	let bubbleTextColor = `${'text-' + background.split('-')[1] + '-' + background.split('-')[2]}`;
</script>

<div class="px-4 py-4 text-center md:text-left">
	<div class="w-full flex flex-col mt-4 md:px-4 md:absolute-center md:flex-row md:justify-between">
		<div class="w-full flex">
			<img
				src={`${IMAGE_URL}/${imageRequest('ross_2024.jpg', 200, 200)}`}
				class="w-[64px] h-[64px] rounded-md self-end md:my-auto md:mx-0"
				alt="Ross Cournoyer handsome talented employable"
			/>
			<div class={`h-full m-2 px-2 py-1 rounded-lg rounded-bl-none ${bubbleBgColor}`}>
				<p class={`text-justify ${bubbleTextColor}`}>
					Hi, I’m Ross. I am a web developer from Arizona. I lived in Shanghai for 11 years, which
					is where I got my start in software. I am back in Phoenix now, and have been working in
					software development for a little over 6 years now. Time flies!
				</p>
			</div>
		</div>
		<div class="w-full flex">
			<img
				src={`${IMAGE_URL}/${imageRequest('ross_2024.jpg', 200, 200)}`}
				class="w-[64px] h-[64px] rounded-md self-end md:my-auto md:mx-0"
				alt="Ross Cournoyer handsome talented employable"
			/>
			<div class={`h-full m-2 px-2 py-1 rounded-lg rounded-bl-none ${bubbleBgColor}`}>
				<p class={`text-justify ${bubbleTextColor}`}>
					I am most skilled with Javascript front-end frameworks like React.js or Vue.js, but I also
					have done some work with Flutter as well as Ruby on Rails. I have some professional
					experience with Node.js, Java, and Python for API development also.
				</p>
			</div>
		</div>
		<div class="w-full flex">
			<img
				src={`${IMAGE_URL}/${imageRequest('ross_2024.jpg', 200, 200)}`}
				class="w-[64px] h-[64px] rounded-md self-end md:my-auto md:mx-0"
				alt="Ross Cournoyer handsome talented employable"
			/>
			<div class={`h-full m-2 px-2 py-1 rounded-lg rounded-bl-none ${bubbleBgColor}`}>
				<p class={`text-justify ${bubbleTextColor}`}>
					I got my start at some of the best digital agencies in Shanghai, and came back home to
					continue my career. When I am not coding, I enjoy snowboarding, bouldering, mountain
					biking, and gaming.
				</p>
			</div>
		</div>
	</div>
</div>
