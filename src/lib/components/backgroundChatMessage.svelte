<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Loading from './loading.svelte';

	export let bgColor = '';
	export let txtColor = '';
	export let imageUrl = '';
	export let text = '';
	export let layout = 'left';
	export let showTyping = true;
	export let loaderColor = '';

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
		class="w-[64px] h-[64px] rounded-md self-end md:my-auto md:mx-0"
		alt="Ross Cournoyer handsome talented employable"
	/>
	<div
		class={`h-full mx-2 px-3 py-2 rounded-lg self-end ${layout === 'left' ? 'rounded-bl-none' : 'rounded-br-none'} ${bgColor}`}
	>
		{#if showTyping && !showMessage}
			<Loading txtColor={loaderColor} />
		{:else}
			<p class={`text-justify ${txtColor} satoshi-bold`} transition:fade={{ duration: 300 }}>
				{text}
			</p>
		{/if}
	</div>
</div>
