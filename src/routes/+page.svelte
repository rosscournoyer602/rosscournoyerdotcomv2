<script lang="ts">
	import Section from '$lib/section.svelte';
	import colorSchemes from '$lib/colorSchemes';

	let mode = 'dark' as keyof typeof colorSchemes;
</script>

<Section background={colorSchemes[mode].blue.background} text={colorSchemes[mode].blue.text}>
	<div class="text-center md:text-left">
		<h1 class="tanker text-5xl md:text-7xl">ross cournoyer</h1>
		<p class="satoshi-bold text-xl md:text-3xl">Very good web developer</p>
	</div>
</Section>
<Section background={colorSchemes[mode].amber.background} text={colorSchemes[mode].amber.text}>
	<div class="text-center md:text-left">
		<h1 class="tanker text-5xl md:text-7xl">ross cournoyer</h1>
		<p class="satoshi-bold text-xl md:text-3xl">Very good web developer</p>
	</div>
</Section>
<Section background={colorSchemes[mode].purple.background} text={colorSchemes[mode].purple.text}>
	<div class="text-center md:text-left">
		<h1 class="tanker text-5xl md:text-7xl">ross cournoyer</h1>
		<p class="satoshi-bold text-xl md:text-3xl">Very good web developer</p>
	</div>
</Section>
<Section background={colorSchemes[mode].red.background} text={colorSchemes[mode].red.text}>
	<div class="text-center md:text-left">
		<h1 class="tanker text-5xl md:text-7xl">ross cournoyer</h1>
		<p class="satoshi-bold text-xl md:text-3xl">Very good web developer</p>
	</div>
</Section>
<Section background={colorSchemes[mode].green.background} text={colorSchemes[mode].green.text}>
	<div class="text-center md:text-left">
		<h1 class="tanker text-5xl md:text-7xl">ross cournoyer</h1>
		<p class="satoshi-bold text-xl md:text-3xl">Very good web developer</p>
	</div>
</Section>
