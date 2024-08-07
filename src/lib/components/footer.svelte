<script>
	import { onDestroy } from 'svelte';
	import { showFooter } from '$lib/stores';
	import MenuContent from './menuContent.svelte';

	let visible = false;

	const showFooterUnsubscribe = showFooter.subscribe((value) => {
		visible = value;
	});

	onDestroy(() => {
		showFooterUnsubscribe();
	});
</script>

<!-- <div
	class={`w-full h-[48px] fixed z-20 bg-black ${visible ? 'top-0' : '-top-48'} opacity-60 transition-opacity duration-500`}
></div> -->
<footer
	class={`w-full h-[48px] fixed z-20 ${visible ? 'bottom-0' : '-bottom-48'} transition-position duration-500 px-4 tanker text-4xl text-white mix-blend-difference`}
>
	<MenuContent />
</footer>
