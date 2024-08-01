<script lang="ts">
	import Section from '$lib/section.svelte';
	import EmojiField from '$lib/emojiField.svelte';
	import colorSchemes from '$lib/colorSchemes';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { showHeader } from '$lib/stores';

	let mode = 'dark' as keyof typeof colorSchemes;
	let doEmojis = true;
	let titleElement: HTMLElement;
	let titleIntersecting: boolean;

	function handleTitleIntersect() {
		if (titleIntersecting) {
			doEmojis = true;
			showHeader.set(false);
		} else {
			doEmojis = false;
			showHeader.set(true);
		}
	}
</script>

<Section
	sectionId="title-section"
	background={colorSchemes[mode].blue.background}
	text={colorSchemes[mode].blue.text}
>
	<IntersectionObserver
		element={titleElement}
		bind:intersecting={titleIntersecting}
		on:observe={handleTitleIntersect}
	>
		<div
			bind:this={titleElement}
			class={`w-[360px] ${colorSchemes[mode].blue.background} absolute-center shadow-hero z-10 rounded-xl text-center md:w-[760px]`}
		>
			<h1 class="tanker text-6xl top-0 md:text-9xl">Ross Cournoyer</h1>
			<p class="satoshi-bold text-2xl md:text-5xl">Very good web developer</p>
		</div>
	</IntersectionObserver>
	<div class="absolute-center">
		<EmojiField {doEmojis} />
		<EmojiField {doEmojis} />
		<EmojiField {doEmojis} />
	</div>
</Section>
<Section background={colorSchemes[mode].amber.background} text={colorSchemes[mode].amber.text}>
	<div class="text-center">
		<h2 class="tanker text-5xl md:text-7xl">BACKGROUND</h2>
		<p class="satoshi-bold text-xl md:text-3xl">Some stuff about me and my journey in tech</p>
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
