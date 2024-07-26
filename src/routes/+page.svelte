<script lang="ts">
	import Section from '$lib/section.svelte';
	import EmojiField from '$lib/emojiField.svelte';
	import colorSchemes from '$lib/colorSchemes';

	let mode = 'dark' as keyof typeof colorSchemes;
</script>

<Section background={colorSchemes[mode].blue.background} text={colorSchemes[mode].blue.text}>
	<div
		class={`w-[760px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center ${colorSchemes[mode].blue.background}`}
	>
		<h1 class="tanker text-5xl md:text-9xl">ross cournoyer</h1>
		<p class="satoshi-bold text-xl md:text-5xl">Very good web developer</p>
	</div>
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
		<EmojiField />
		<EmojiField />
		<EmojiField />
	</div>
</Section>
<Section background={colorSchemes[mode].amber.background} text={colorSchemes[mode].amber.text}>
	<div class="text-center md:text-left">
		<h1 class="tanker text-5xl md:text-7xl">ross cournoyer</h1>
		<p class="satoshi-bold text-xl md:text-3xl">Very good web developer</p>
	</div>
</Section>
<Section background={colorSchemes[mode].purple.background} text={colorSchemes[mode].purple.text}>
	<div class="text-center md:text-left">
		<h1 class="tanker text-5xl md:text-7xl">ross cournoyer</h1>
		<p class="satoshi-bold text-xl md:text-3xl">Very good web developer</p>
	</div>
</Section>
<Section background={colorSchemes[mode].red.background} text={colorSchemes[mode].red.text}>
	<div class="text-center md:text-left">
		<h1 class="tanker text-5xl md:text-7xl">ross cournoyer</h1>
		<p class="satoshi-bold text-xl md:text-3xl">Very good web developer</p>
	</div>
</Section>
<Section background={colorSchemes[mode].green.background} text={colorSchemes[mode].green.text}>
	<div class="text-center md:text-left">
		<h1 class="tanker text-5xl md:text-7xl">ross cournoyer</h1>
		<p class="satoshi-bold text-xl md:text-3xl">Very good web developer</p>
	</div>
</Section>

<style>
	.hero {
		background-color: #0040c1;
		position: relative;
		height: 100vh;
		overflow: hidden;
	}
	.cube {
		position: absolute;
		top: 80vh;
		left: 45vw;
		width: 10px;
		height: 10px;
		border: solid 1px #003298;
		transform-origin: top left;
		transform: scale(0) rotate(0deg) translate(-50%, -50%);
		-webkit-animation: cube 12s ease-in forwards infinite;
		animation: cube 12s ease-in forwards infinite;
	}
	.cube:nth-child(2n) {
		border-color: #0051f4;
	}
	.cube:nth-child(2) {
		-webkit-animation-delay: 2s;
		animation-delay: 2s;
		left: 25vw;
		top: 40vh;
	}
	.cube:nth-child(3) {
		-webkit-animation-delay: 4s;
		animation-delay: 4s;
		left: 75vw;
		top: 50vh;
	}
	.cube:nth-child(4) {
		-webkit-animation-delay: 6s;
		animation-delay: 6s;
		left: 90vw;
		top: 10vh;
	}
	.cube:nth-child(5) {
		-webkit-animation-delay: 8s;
		animation-delay: 8s;
		left: 10vw;
		top: 85vh;
	}
	.cube:nth-child(6) {
		-webkit-animation-delay: 10s;
		animation-delay: 10s;
		left: 50vw;
		top: 10vh;
	}

	@-webkit-keyframes cube {
		from {
			transform: scale(0) rotate(0deg) translate(-50%, -50%);
			opacity: 1;
		}
		to {
			transform: scale(20) rotate(960deg) translate(-50%, -50%);
			opacity: 0;
		}
	}

	@keyframes cube {
		from {
			transform: scale(0) rotate(0deg) translate(-50%, -50%);
			opacity: 1;
		}
		to {
			transform: scale(20) rotate(960deg) translate(-50%, -50%);
			opacity: 0;
		}
	}
</style>
