<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import colorSchemes from '$lib/colorSchemes';
	import TitleSectionContent from '$lib/components/titleSectionContent.svelte';
	import { imageRequest } from '$lib/imageRequest';
	import { IMAGE_URL } from '$lib/config';
	let mode = 'dark' as keyof typeof colorSchemes;
</script>

<Section
	sectionId="title-section"
	background={colorSchemes[mode].blue.background}
	text={colorSchemes[mode].blue.text}
>
	<TitleSectionContent titleBgColor={colorSchemes[mode].blue.background} />
</Section>
<Section background={colorSchemes[mode].amber.background} text={colorSchemes[mode].amber.text}>
	<div class="px-4 py-4 text-center md:text-left">
		<h2 class="tanker text-5xl md:text-7xl">BACKGROUND</h2>
		<div
			class="w-full flex flex-col justify-center md:px-4 md:absolute-center md:flex-row md:justify-betweem md:content-center"
		>
			<img
				src={`${IMAGE_URL}/${imageRequest('ross_2024.jpg', 350, 350)}`}
				class="w-[350px] h-[350px] rounded-xl mx-auto my-6 md:my-auto md:mx-0"
				width="350"
				height="350"
				alt="Ross Cournoyer handsome talented employable"
			/>
			<div class="satoshi-bold text-lg text-justify md:text-4xl md:mx-16 md:text-left">
				<p class="pb-2 indent-4 md:indent-10 md:pb-6">
					Hi, I’m Ross. I am a web developer from Arizona. I lived in Shanghai for 11 years, which
					is where I got my start in software. I am back in Phoenix now, and have been working in
					software development for a little over 6 years now. Time flies!
				</p>
				<p class="pb-2 indent-4 md:indent-10 md:pb-6">
					I am most skilled with Javascript front-end frameworks like React.js or Vue.js, but I also
					have done some work with Flutter as well as Ruby on Rails. I have some professional
					experience with Node.js, Java, and Python for API development also.
				</p>
				<p class="pb-2 indent-4 md:indent-10 md:pb-6">
					I got my start at some of the best digital agencies in Shanghai, and came back home to
					continue my career. When I am not coding, I enjoy snowboarding, bouldering, mountain
					biking, and gaming.
				</p>
			</div>
		</div>
	</div>
</Section>
<Section background={colorSchemes[mode].purple.background} text={colorSchemes[mode].purple.text}>
	<div class="text-center">
		<h2 class="tanker text-5xl md:text-7xl">Skills and work history</h2>
		<p class="satoshi-bold text-xl md:text-3xl">Timeline?</p>
	</div>
</Section>
<Section background={colorSchemes[mode].red.background} text={colorSchemes[mode].red.text}>
	<div class="text-center">
		<h2 class="tanker text-5xl md:text-7xl">Projects and content</h2>
		<p class="satoshi-bold text-xl md:text-3xl">Maybe a</p>
	</div>
</Section>
<Section background={colorSchemes[mode].green.background} text={colorSchemes[mode].green.text}>
	<div class="text-center">
		<h2 class="tanker text-5xl md:text-7xl">ross cournoyer</h2>
		<p class="satoshi-bold text-xl md:text-3xl">Very good web developer</p>
	</div>
</Section>
