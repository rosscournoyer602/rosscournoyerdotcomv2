<script>
	import DesktopTimeline from './desktopTimeline.svelte';
	import MobileTimeline from './mobileTimeline.svelte';

	export let textColor = '';

	let borderColor = textColor.replace('text-', 'border-');
	// let boxClasses = `min-w-[250px] max-w-[500px] h-full shrink-0 pl-2`;
</script>

<div class="h-full">
	<h2 class="p-4 tanker text-5xl text-right md:text-7xl md:text-left">Work</h2>
	<div class="md:hidden">
		<MobileTimeline {borderColor} />
	</div>
	<div class="hidden md:block">
		<DesktopTimeline {borderColor} />
	</div>
</div>
