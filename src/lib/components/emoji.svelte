<script lang="ts">
	import { nanoid } from 'nanoid';
	import { onMount } from 'svelte';
	import { get_current_component } from 'svelte/internal';

	export let emoji = '';
	export let destination: string[] = [];

	const emojiId = nanoid();
	const component = get_current_component();

	onMount(() => {
		const el = document.getElementById(emojiId);
		if (el) {
			setTimeout(() => {
				el.style.left = destination[0];
				el.style.top = destination[1];
			}, 100);
		}

		setTimeout(() => {
			destroySelf();
		}, 15000);
	});

	function destroySelf() {
		component.$destroy();
	}
</script>

<div
	id={emojiId}
	class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-position duration-[12s] motion-reduce:transition-none"
>
	{emoji}
</div>
