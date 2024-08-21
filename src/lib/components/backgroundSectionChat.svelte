<script lang="ts">
	import { imageRequest } from '$lib/imageRequest';
	import { chatMessageCopy, IMAGE_URL } from '$lib/config';
	import BackgroundChatMessage from './backgroundChatMessage.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { afterUpdate } from 'svelte';

	export let background: string;
	export let text: string;
	export let border: string;

	let chatElement: HTMLElement;
	let chatIntersecting: boolean;
	let awaitingReply = false;
	let userReply: string;
	let pageReply: string;

	let bgColor = `${'bg-' + text.split('-')[1] + '-' + text.split('-')[2]}`;
	let txtColor = `${'text-' + background.split('-')[1] + '-' + background.split('-')[2]}`;

	let currentMessageIndex = -1;

	afterUpdate(() => {
		switch (userReply) {
			case 'k':
				handlePageReply('🫠');
				break;
			case '❤️':
				handlePageReply('👉👈');
				break;
			case '💰':
				handlePageReply('🙏');
				break;
			default:
				break;
		}
	});

	function handleChatIntersect() {
		if (chatIntersecting && currentMessageIndex === -1) {
			const interval = setInterval(() => {
				if (currentMessageIndex < chatMessageCopy.length - 1) {
					currentMessageIndex++;
				} else {
					clearInterval(interval);
					awaitingReply = true;
				}
			}, 2000);
		}
	}

	function handleUserReply(value: string) {
		awaitingReply = false;
		userReply = value;
	}

	function handlePageReply(value: string) {
		setTimeout(() => {
			pageReply = value;
		}, 1000);
	}
</script>

<div class="p-4 text-center md:text-left">
	<h2 class="mb-8 tanker text-5xl md:text-7xl">BACKGROUND</h2>
	<IntersectionObserver
		element={chatElement}
		bind:intersecting={chatIntersecting}
		on:observe={handleChatIntersect}
	>
		<div bind:this={chatElement} class="w-full flex flex-col mt-4">
			{#if currentMessageIndex >= 0}
				<BackgroundChatMessage
					layout="left"
					{bgColor}
					{txtColor}
					loaderColor={background}
					text={chatMessageCopy[0]}
					imageUrl={`${IMAGE_URL}/${imageRequest('ross_2024.jpg', 200, 200)}`}
					showTyping={true}
					avatarAlt="ross cournoyer"
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
					avatarAlt="ross cournoyer"
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
					avatarAlt="ross cournoyer"
				/>
			{/if}
			{#if awaitingReply}
				<div class={`w-full h-12 flex px-2 justify-end satoshi-bold text-lg`}>
					<button
						type="button"
						class={`w-[25%] max-w-[100px] my-auto ml-2 py-1 border-2 ${border} ${background} rounded-md cursor-pointer transition-colors duration-200 text-lg md:text-xl hover:${bgColor} hover:${txtColor}`}
						on:click={() => {
							handleUserReply('k');
						}}
					>
						k
					</button>
					<button
						type="button"
						class={`w-[25%] max-w-[100px] my-auto ml-2 py-1 border-2 ${border} ${background} rounded-md cursor-pointer transition-colors duration-200 md:text-lg hover:${bgColor} hover:${txtColor}`}
						on:click={() => {
							handleUserReply('❤️');
						}}
					>
						<p>❤️</p>
					</button>
					<button
						type="button"
						class={`w-[25%] max-w-[100px] my-auto ml-2 py-1 border-2 ${border} ${background} rounded-md cursor-pointer transition-colors duration-200 text-xl hover:${bgColor} hover:${txtColor}`}
						on:click={() => {
							handleUserReply('💰');
						}}
					>
						<p>💰</p>
					</button>
				</div>
			{/if}
			{#if !awaitingReply && userReply}
				<BackgroundChatMessage
					layout="right"
					{bgColor}
					{txtColor}
					loaderColor={background}
					text={userReply}
					imageUrl={`${IMAGE_URL}/${imageRequest('business-goose.jpg', 200, 200)}`}
					showTyping={false}
					avatarAlt="business goose"
				/>
			{/if}
			{#if userReply && pageReply}
				<BackgroundChatMessage
					layout="left"
					{bgColor}
					{txtColor}
					loaderColor={background}
					text={pageReply}
					imageUrl={`${IMAGE_URL}/${imageRequest('ross_2024.jpg', 200, 200)}`}
					showTyping={true}
					avatarAlt="ross cournoyer"
				/>
			{/if}
		</div>
	</IntersectionObserver>
</div>
