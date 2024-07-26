<script lang="ts">
	import { onMount } from 'svelte';
	import randomEmoji from 'generate-random-emoji';
	import Emoji from './emoji.svelte';

	let innerWidth = 0;
	let innerHeight = 0;

	function emoji() {
		return randomEmoji.generateEmojis(1)[0].image;
	}

	function destination() {
		console.log('IH', innerHeight);
		console.log('IW', innerWidth);
		const left = Math.ceil(Math.random() * innerHeight) * (Math.round(Math.random()) ? 1 : -1);
		const top = Math.ceil(Math.random() * innerWidth) * (Math.round(Math.random()) ? 1 : -1);
		// const left =
		// 	Math.random() * (1500 - innerWidth / 2) + innerWidth * (Math.round(Math.random()) ? 1 : -1);
		// const top =
		// 	Math.random() * (1000 - innerHeight / 2) + innerHeight * (Math.round(Math.random()) ? 1 : -1);
		console.log([`${left}px`, `${top}px`]);
		return [`${left}px`, `${top}px`];
	}

	onMount(() => {
		const el = document.getElementById('emoji-cannon') as Element;
		const emojiCreateInterval = setInterval(() => {
			const newEmoji = new Emoji({
				target: el,
				props: { emoji: emoji(), destination: destination() }
			});
		}, 500);
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div
	id="emoji-cannon"
	class="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 text-6xl"
></div>
