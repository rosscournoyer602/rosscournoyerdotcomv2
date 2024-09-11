<script lang="ts">
	import { imageRequest } from '$lib/imageRequest';
	import { IMAGE_URL } from '$lib/config';
	import BackgroundChatMessage from './backgroundChatMessage.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { afterUpdate } from 'svelte';
	import { chatMessageCopy } from '$lib/copy';

	import businessGoose from '$lib/assets/business-goose.webp';
	import ross2024 from '$lib/assets/ross_2024.webp';

	let chatElement: HTMLElement;
	let chatIntersecting: boolean;
	let awaitingReply = false;
	let userReply: string;
	let pageReply: string;

	let incomingBgColor = 'bg-zinc-300';
	let outGoingBgColor = 'bg-blue-500';
	let incomingTextColor = 'text-zinc-900';
	let outGoingTextColor = 'text-zinc-50';
	let borderColor = 'border-zinc-900';
	let loaderColor = 'bg-zinc-900';

	let currentMessageIndex = -1;

	afterUpdate(() => {
		switch (userReply) {
			case 'meh':
				handlePageReply('🫠');
				break;
			case 'ok':
				handlePageReply('🙂');
				break;
			case 'wow!':
				handlePageReply('😎');
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
		if (!pageReply) {
			window.scrollTo(0, document.body.scrollHeight);
			setTimeout(() => {
				pageReply = value;
			}, 1000);
		}
	}
</script>

<div class="p-4 md:text-left">
	<h2 class="mb-8 tanker text-5xl md:text-7xl">About Me</h2>
	<IntersectionObserver
		element={chatElement}
		bind:intersecting={chatIntersecting}
		on:observe={handleChatIntersect}
	>
		<div bind:this={chatElement} class="w-full flex flex-col mt-4">
			{#if currentMessageIndex >= 0}
				<BackgroundChatMessage
					layout="left"
					bgColor={incomingBgColor}
					txtColor={incomingTextColor}
					{loaderColor}
					text={chatMessageCopy[0]}
					imageUrl={`${IMAGE_URL}/${imageRequest('ross_2024.jpg', 200, 200)}`}
					showTyping={true}
					avatarAlt="ross cournoyer"
				/>
			{/if}
			{#if currentMessageIndex >= 1}
				<BackgroundChatMessage
					layout="left"
					bgColor={incomingBgColor}
					txtColor={incomingTextColor}
					{loaderColor}
					text={chatMessageCopy[1]}
					imageUrl={`${IMAGE_URL}/${imageRequest('ross_2024.jpg', 200, 200)}`}
					showTyping={true}
					avatarAlt="ross cournoyer"
				/>
			{/if}
			{#if currentMessageIndex >= 2}
				<BackgroundChatMessage
					layout="left"
					bgColor={incomingBgColor}
					txtColor={incomingTextColor}
					{loaderColor}
					text={chatMessageCopy[2]}
					imageUrl={`${IMAGE_URL}/${imageRequest('ross_2024.jpg', 200, 200)}`}
					showTyping={true}
					avatarAlt="ross cournoyer"
				/>
			{/if}
			<!-- {#if awaitingReply && !userReply} -->
			{#if awaitingReply}
				<div class={`w-full h-12 flex px-2 justify-end satoshi-bold text-lg`}>
					<button
						type="button"
						class={`w-[25%] max-w-[100px] my-auto ml-2 py-1 border-2 ${borderColor} ${incomingBgColor} rounded-md cursor-pointer transition-colors duration-200 text-lg md:text-xl hover:${outGoingBgColor} hover:${outGoingTextColor}`}
						on:click={() => {
							handleUserReply('meh');
						}}
					>
						meh 😏
					</button>
					<button
						type="button"
						class={`w-[25%] max-w-[100px] my-auto ml-2 py-1 border-2 ${borderColor} ${incomingBgColor} rounded-md cursor-pointer transition-colors duration-200 md:text-lg hover:${outGoingBgColor} hover:${outGoingTextColor}`}
						on:click={() => {
							handleUserReply('ok');
						}}
					>
						ok 😊
					</button>
					<button
						type="button"
						class={`w-[25%] max-w-[100px] my-auto ml-2 py-1 border-2 ${borderColor} ${incomingBgColor} rounded-md cursor-pointer transition-colors duration-200 text-xl hover:${outGoingBgColor} hover:${outGoingTextColor}`}
						on:click={() => {
							handleUserReply('wow!');
						}}
					>
						wow! 🤩
					</button>
				</div>
			{/if}
			{#if !awaitingReply && userReply}
				<BackgroundChatMessage
					layout="right"
					bgColor={outGoingBgColor}
					txtColor={outGoingTextColor}
					loaderColor="bg-zinc-50"
					text={userReply}
					imageUrl={businessGoose}
					showTyping={false}
					avatarAlt="business goose"
				/>
			{/if}
			{#if userReply && pageReply}
				<BackgroundChatMessage
					layout="left"
					bgColor={incomingBgColor}
					txtColor={incomingTextColor}
					{loaderColor}
					text={pageReply}
					imageUrl={ross2024}
					showTyping={true}
					avatarAlt="ross cournoyer"
				/>
			{/if}
		</div>
	</IntersectionObserver>
</div>
