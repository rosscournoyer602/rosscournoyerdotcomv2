<script lang="ts">
	import { projects } from '$lib/copy';
	import photoAppDesktop from '$lib/assets/photoapp_desktop_cropped.png';
	import photoAppMobile from '$lib/assets/photoapp_mobile_cropped.png';
	import sequencerImg from '$lib/assets/sequencer_cropped.png';
	import { beforeUpdate, onMount } from 'svelte';
	import type Swiper from 'swiper';
	import colorSchemes from '$lib/colorSchemes';

	const swiperImages = [photoAppDesktop, sequencerImg];
	const swiperImgClasses = ['w-full', 'h-[400px]'];
	let selectedIndex = 0;
	let projectSwiper: Swiper;

	onMount(() => {
		const swiperEl = document.querySelector('swiper-container');
		const swiper = swiperEl?.swiper as Swiper;

		swiper.on('slideChange', (swiper) => {
			selectedIndex = swiper.activeIndex;
		});
		projectSwiper = swiper;
	});

	function handlePaginationClick(index: number) {
		if (selectedIndex !== index) {
			projectSwiper.slideTo(index);
		}
	}
</script>

<div class="w-full h-full relative">
	<!-- <div class="absolute pt-4 top-0 left-1/2 -translate-x-1/2 z-10 mix-blend-luminosity">
		<h2 class="tanker text-5xl">Projects</h2>
	</div> -->
	<div class="pagination absolute mt-2 top-0 left-1/2 -translate-x-1/2 z-10">
		<div class="pagination flex gap-4 justify-start">
			{#each projects as _, index}
				<button
					id={`pagination-${index}`}
					class={`pagination__dot h-[16px] w-[16px] bg-white rounded-2xl transition-opacity duration-[1200ms] ${selectedIndex === index ? 'pagination-active' : 'pagination-inactive'}`}
					on:click={() => handlePaginationClick(index)}
				/>
			{/each}
		</div>
	</div>
	<swiper-container
		class="h-full"
		autoplay={{
			delay: 10000,
			disableOnInteraction: true,
			pauseOnMouseEnter: true
		}}
		speed={1200}
		disableOnInteraction="true"
	>
		{#each projects as project, index}
			<swiper-slide class={`min-h-[100vh] relative pt-16 my-auto ${project.colorClasses}`}>
				<div class="h-full flex flex-col justify-between px-4">
					<div>
						<h2 class="tanker text-4xl text-center">{project.name}</h2>
						<p class="satoshi-regular text-center mt-2">{project.tech}</p>
						<div>
							<img
								class={`mx-auto ${project.imageClasses}`}
								src={swiperImages[index]}
								alt={project.alt}
							/>
							<p class="mt-4 satoshi-bold text-md indent-8">{projects[index].description}</p>
						</div>
					</div>
					<div class="absolute bottom-4 left-1/2 -translate-x-1/2">
						<div class="flex flex-col text-center gap-4 mt-4">
							<a class="tanker text-3xl" href={project.gitRepo} target="_blank"> See the code ➡️</a>
							{#if project.demo}
								<a class="tanker text-3xl" href={project.demo} target="_blank"> Try the demo ➡️</a>
							{/if}
						</div>
					</div>
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>
</div>

<style>
	.pagination-inactive {
		opacity: 0.6;
	}

	.pagination-active {
		opacity: 1;
	}
</style>
