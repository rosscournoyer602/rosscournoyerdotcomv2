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

<Section sectionId="title-section" additionalClasses={['min-h-[100vh] bg-slate-950 text-blue-300']}>
	<TitleSectionContent titleBgColor={colorSchemes[mode].blue.background} />
</Section>
<Section additionalClasses={['bg-cyan-200 text-stone-600']}>
	<ProjectSwiper />
</Section>
<Section additionalClasses={['bg-purple-950 text-violet-300 border-violet-300 md:py-8 ']}>
	<TimelineSectionContent borderColor="border-violet-300" />
</Section>
<Section additionalClasses={['min-h-[100vh] bg-zinc-50']}>
	<BackgroundSectionChat />
</Section>
