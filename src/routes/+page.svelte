<script lang="ts">
	import Section from '$lib/section.svelte';
	import EmojiField from '$lib/emojiField.svelte';
	import colorSchemes from '$lib/colorSchemes';
	import { writable } from 'svelte/store';

	let mode = 'dark' as keyof typeof colorSchemes;
	let titleElement: HTMLElement;
	let doEmojis = true;

	function checkScrollPosition() {
		if (!titleElement) {
			titleElement = document.getElementById('title') as HTMLElement;
		}
		const titleDimensions = titleElement.getBoundingClientRect();

		if (titleDimensions.bottom < 0) {
			doEmojis = false;
		} else {
			doEmojis = true;
		}
	}
</script>

<svelte:window on:scroll={checkScrollPosition} />

<Section background={colorSchemes[mode].blue.background} text={colorSchemes[mode].blue.text}>
	<div
		id="title"
		class={`w-[360px] rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center ${colorSchemes[mode].blue.background} md:w-[760px] shadow-hero`}
	>
		<h1 class="tanker text-6xl top-0 md:text-9xl">Ross Cournoyer</h1>
		<p class="satoshi-bold text-2xl md:text-5xl">Very good web developer</p>
	</div>
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
		<EmojiField {doEmojis} />
		<EmojiField {doEmojis} />
		<EmojiField {doEmojis} />
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
