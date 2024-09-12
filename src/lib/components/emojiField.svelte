<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import randomEmoji from 'generate-random-emoji';
	import Emoji from './emoji.svelte';
	import { nanoid } from 'nanoid';

	export let doEmojis = true;

	let innerWidth = 0;
	let innerHeight = 0;
	let id = nanoid();
	let interval: number;

	function emoji() {
		const emoji = randomEmoji.generateEmojis(1)[0];
		if (
			emoji.name === 'middle finger' ||
			emoji.name === 'eggplant' ||
			// no offense to anyone, but these flags wont be on my page until the wars end
			emoji.name === 'flag: Russia' ||
			emoji.name === 'flag: Israel'
		) {
			return '👮';
		}

		return emoji.image;
	}

	function destination() {
		const left = Math.ceil(Math.random() * innerWidth) * (Math.round(Math.random()) ? 1 : -1);
		const top = Math.ceil(Math.random() * innerHeight) * (Math.round(Math.random()) ? 1 : -1);
		return [`${left}px`, `${top}px`];
	}

	onMount(() => {
		const el = document.getElementById(id) as Element;
		interval = setInterval(() => {
			if (doEmojis) {
				// todo: consider filtering out certain emojis
				new Emoji({
					target: el,
					props: { emoji: emoji(), destination: destination() }
				});
			}
		}, 500);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div {id} class="text-4xl md:text-6xl"></div>
