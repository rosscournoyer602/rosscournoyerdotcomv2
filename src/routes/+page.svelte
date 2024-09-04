<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import colorSchemes from '$lib/colorSchemes';
	import TitleSectionContent from '$lib/components/titleSectionContent.svelte';
	import BackgroundSectionChat from '$lib/components/backgroundSectionChat.svelte';
	import TimelineSectionContent from '$lib/components/timelineSectionContent.svelte';
	import ProjectSwiper from '$lib/components/projectSwiper.svelte';
	// import gummyBears from '$lib/assets/gummy-worms.avif';

	let mode = 'dark' as keyof typeof colorSchemes;
</script>

<Section
	sectionId="title-section"
	background={colorSchemes[mode].blue.background}
	text={colorSchemes[mode].blue.text}
	additionalClasses={['min-h-[100vh]']}
>
	<TitleSectionContent titleBgColor={colorSchemes[mode].blue.background} />
</Section>
<Section
	background={colorSchemes[mode].purple.background}
	text={colorSchemes[mode].purple.text}
	additionalClasses={['md:py-8']}
>
	<TimelineSectionContent borderColor={colorSchemes[mode].purple.border} />
</Section>
<Section background={colorSchemes[mode].green.background} text={colorSchemes[mode].green.text}>
	<ProjectSwiper />
</Section>
<Section
	background={colorSchemes[mode].amber.background}
	text={colorSchemes[mode].amber.text}
	additionalClasses={['min-h-[100vh]']}
>
	<BackgroundSectionChat
		background={colorSchemes[mode].amber.background}
		text={colorSchemes[mode].amber.text}
		border={colorSchemes[mode].amber.border}
	/>
</Section>
