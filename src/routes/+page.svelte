<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import colorSchemes from '$lib/colorSchemes';
	import TitleSectionContent from '$lib/components/titleSectionContent.svelte';
	import BackgroundSectionChat from '$lib/components/backgroundSectionChat.svelte';
	let mode = 'dark' as keyof typeof colorSchemes;
</script>

<Section
	sectionId="title-section"
	background={colorSchemes[mode].blue.background}
	text={colorSchemes[mode].blue.text}
>
	<TitleSectionContent titleBgColor={colorSchemes[mode].blue.background} />
</Section>
<Section background={colorSchemes[mode].amber.background} text={colorSchemes[mode].amber.text}>
	<BackgroundSectionChat
		background={colorSchemes[mode].amber.background}
		text={colorSchemes[mode].amber.text}
	/>
</Section>
<Section background={colorSchemes[mode].purple.background} text={colorSchemes[mode].purple.text}>
	<div class="text-center">
		<h2 class="tanker text-5xl md:text-7xl">Skills and work history</h2>
		<p class="satoshi-bold text-xl md:text-3xl">Timeline?</p>
	</div>
</Section>
<Section background={colorSchemes[mode].red.background} text={colorSchemes[mode].red.text}>
	<div class="text-center">
		<h2 class="tanker text-5xl md:text-7xl">Projects and content</h2>
		<p class="satoshi-bold text-xl md:text-3xl">Maybe a</p>
	</div>
</Section>
<Section background={colorSchemes[mode].green.background} text={colorSchemes[mode].green.text}>
	<div class="text-center">
		<h2 class="tanker text-5xl md:text-7xl">ross cournoyer</h2>
		<p class="satoshi-bold text-xl md:text-3xl">Very good web developer</p>
	</div>
</Section>
