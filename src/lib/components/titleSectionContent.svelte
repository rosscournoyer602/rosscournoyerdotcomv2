<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { showHeader } from '$lib/stores';
	import EmojiField from '$lib/components/emojiField.svelte';

	export let titleBgColor = '';

	let doEmojis = true;
	let titleElement: HTMLElement;
	let titleIntersecting: boolean;
	const baseIconClasses = 'transition-transform duration-300 hover:scale-125';

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
		<div class="w-full pt-2 satoshi-bold text-4xl">
			<a href="https://www.linkedin.com/in/rosscournoyer/" target="_blank">
				<ion-icon name="logo-linkedin" class={`${baseIconClasses} hover:rotate-12`}></ion-icon>
			</a>
			<a href="https://github.com/rosscournoyer602" target="_blank">
				<ion-icon name="logo-github" class={`${baseIconClasses} hover:-rotate-12`}></ion-icon>
			</a>
			<a href="mailto:rosswilliamcournoyer@gmail.com">
				<ion-icon name="mail-sharp" class={`${baseIconClasses} hover:rotate-12`}></ion-icon>
			</a>
		</div>
	</div>
</IntersectionObserver>
<div class="absolute-center">
	<EmojiField {doEmojis} />
	<EmojiField {doEmojis} />
	<EmojiField {doEmojis} />
</div>
