<script lang="ts">
	import { onMount } from 'svelte';
	import randomEmoji from 'generate-random-emoji';
	import Emoji from './emoji.svelte';
	import { nanoid } from 'nanoid';

	let innerWidth = 0;
	let innerHeight = 0;
	let id = nanoid();
	export let doEmojis = true;

	function emoji() {
		return randomEmoji.generateEmojis(1)[0].image;
	}

	function destination() {
		const left = Math.ceil(Math.random() * innerWidth) * (Math.round(Math.random()) ? 1 : -1);
		const top = Math.ceil(Math.random() * innerHeight) * (Math.round(Math.random()) ? 1 : -1);
		return [`${left}px`, `${top}px`];
	}

	onMount(() => {
		const el = document.getElementById(id) as Element;
		setInterval(() => {
			if (doEmojis) {
				// todo: consider filtering out certain emojis
				new Emoji({
					target: el,
					props: { emoji: emoji(), destination: destination() }
				});
			}
		}, 500);
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div {id} class="text-4xl md:text-6xl"></div>
