<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Loading from './loading.svelte';

	export let bgColor: string;
	export let txtColor: string;
	export let imageUrl: string;
	export let text: string;
	export let layout = 'left';
	export let showTyping = true;
	export let loaderColor: string;
	export let avatarAlt: string;

	let showMessage = false;

	onMount(() => {
		if (showTyping) {
			setTimeout(() => {
				showMessage = true;
			}, 1000);
		} else {
			showMessage = true;
		}
	});
</script>

<div class={`w-full flex mb-4 ${layout === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
	<img
		src={imageUrl}
		class="w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-md self-end md:mx-0"
		alt={avatarAlt}
	/>
	<div
		class={`h-full mx-2 px-3 py-2 rounded-lg self-end ${layout === 'left' ? 'rounded-bl-none' : 'rounded-br-none'} ${bgColor} md:max-w-[66%]`}
	>
		{#if showTyping && !showMessage}
			<Loading txtColor={loaderColor} />
		{:else}
			<p
				class={`text-left ${txtColor} satoshi-bold text-lg md:text-2xl`}
				transition:fade={{ duration: 400 }}
			>
				{text}
			</p>
		{/if}
	</div>
</div>
