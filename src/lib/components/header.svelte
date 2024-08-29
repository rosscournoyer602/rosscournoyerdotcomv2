<script>
	import { onDestroy } from 'svelte';
	import { showHeader } from '$lib/stores';
	import MenuContent from './menuContent.svelte';

	let visible = false;

	const showHeaderUnsubscribe = showHeader.subscribe((value) => {
		visible = value;
	});

	onDestroy(() => {
		showHeaderUnsubscribe();
	});
</script>

<!-- <div
	class={`w-full h-[48px] fixed z-20 bg-black ${visible ? 'top-0' : '-top-48'} opacity-30 md:hidden`}
></div> -->
<header
	class={`w-full h-[48px] fixed z-20 ${visible ? 'top-0' : '-top-48'} transition-position duration-500 px-4 tanker text-4xl text-white mix-blend-difference`}
>
	<div class="h-full flex justify-between">
		<MenuContent />
	</div>
</header>
