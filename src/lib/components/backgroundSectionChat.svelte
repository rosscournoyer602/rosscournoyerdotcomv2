<script lang="ts">
	import { imageRequest } from '$lib/imageRequest';
	import { chatMessageCopy, IMAGE_URL } from '$lib/config';
	import BackgroundChatMessage from './backgroundChatMessage.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	export let background: string;
	export let text: string;
	let chatElement: HTMLElement;
	let chatIntersecting: boolean;

	let bgColor = `${'bg-' + text.split('-')[1] + '-' + text.split('-')[2]}`;
	let txtColor = `${'text-' + background.split('-')[1] + '-' + background.split('-')[2]}`;
	let currentMessageIndex = -1;

	function handleChatIntersect() {
		if (chatIntersecting && currentMessageIndex === -1) {
			const interval = setInterval(() => {
				if (currentMessageIndex < chatMessageCopy.length - 1) {
					currentMessageIndex++;
				} else {
					clearInterval(interval);
				}
			}, 2000);
		}
	}
</script>

<div class="px-4 py-4 text-center md:text-left">
	<IntersectionObserver
		element={chatElement}
		bind:intersecting={chatIntersecting}
		on:observe={handleChatIntersect}
	>
		<div
			bind:this={chatElement}
			class="w-full flex flex-col mt-4 md:px-4 md:absolute-center md:flex-row md:justify-between"
		>
			{#if currentMessageIndex >= 0}
				<BackgroundChatMessage
					layout="left"
					{bgColor}
					{txtColor}
					loaderColor={background}
					text={chatMessageCopy[0]}
					imageUrl={`${IMAGE_URL}/${imageRequest('ross_2024.jpg', 200, 200)}`}
					showTyping={true}
				/>
			{/if}
			{#if currentMessageIndex >= 1}
				<BackgroundChatMessage
					layout="left"
					{bgColor}
					{txtColor}
					loaderColor={background}
					text={chatMessageCopy[1]}
					imageUrl={`${IMAGE_URL}/${imageRequest('ross_2024.jpg', 200, 200)}`}
					showTyping={true}
				/>
			{/if}
			{#if currentMessageIndex >= 2}
				<BackgroundChatMessage
					layout="left"
					{bgColor}
					{txtColor}
					loaderColor={background}
					text={chatMessageCopy[2]}
					imageUrl={`${IMAGE_URL}/${imageRequest('ross_2024.jpg', 200, 200)}`}
					showTyping={true}
				/>
			{/if}
			<!-- <BackgroundChatMessage
			layout="right"
			{bgColor}
			{txtColor}
			loaderColor={background}
			text={chatMessageCopy[2]}
			imageUrl={`${IMAGE_URL}/${imageRequest('ross_2024.jpg', 200, 200)}`}
			showTyping={false}
		/> -->
		</div>
	</IntersectionObserver>
</div>
