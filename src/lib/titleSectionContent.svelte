<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { showHeader } from '$lib/stores';
	import EmojiField from '$lib/emojiField.svelte';

	let doEmojis = true;
	let titleElement: HTMLElement;
	let titleIntersecting: boolean;

	export let titleBgColor = '';

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

<IntersectionObserver
	element={titleElement}
	bind:intersecting={titleIntersecting}
	on:observe={handleTitleIntersect}
>
	<div
		bind:this={titleElement}
		class={`w-[360px] ${titleBgColor} absolute-center shadow-hero z-10 rounded-xl text-center md:w-[760px]`}
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
