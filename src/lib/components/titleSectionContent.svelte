<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { showHeader } from '$lib/stores';
	import EmojiField from '$lib/components/emojiField.svelte';
	import { LogoGithub, LogoLinkedin, Mail } from 'svelte-ionicons';

	export let titleBgColor = '';

	let doEmojis = true;
	let titleElement: HTMLElement;
	let titleIntersecting: boolean;
	const baseIconClasses = 'transition-transform duration-300 mx-1 md:hover:scale-125';

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
		<h2 class="satoshi-bold text-2xl md:text-5xl">Very good web developer</h2>
		<div class="w-full pt-2 flex justify-center satoshi-bold">
			<a href="https://www.linkedin.com/in/rosscournoyer/" target="_blank">
				<LogoLinkedin size={32} class={`${baseIconClasses} md:hidden`} />
				<LogoLinkedin
					size={48}
					class={`${baseIconClasses} mt-2 hidden md:block md:hover:-rotate-12`}
				/>
			</a>
			<a href="https://github.com/rosscournoyer602" target="_blank">
				<LogoGithub size={32} class={`${baseIconClasses} md:hidden`} />
				<LogoGithub
					size={48}
					class={`${baseIconClasses} mt-2 hidden md:block md:hover:rotate-12`}
				/>
			</a>
			<a href="mailto:rosswilliamcournoyer@gmail.com">
				<Mail size={32} class={`${baseIconClasses} md:hidden`} />
				<Mail size={48} class={`${baseIconClasses} mt-2 hidden md:block md:hover:-rotate-12`} />
			</a>
		</div>
	</div>
</IntersectionObserver>
<div class="absolute-center">
	<EmojiField {doEmojis} />
	<EmojiField {doEmojis} />
	<EmojiField {doEmojis} />
</div>
