<script lang="ts">
	import { projects } from '$lib/copy';
	import photoAppDesktop from '$lib/assets/photoapp_desktop_cropped.png';
	import sequencerImg from '$lib/assets/sequencer_cropped.png';
	import paycalcImg from '$lib/assets/paycalc_cropped.png';
	import portfolioImg from '$lib/assets/portfolio_site_cropped.png';
	import { beforeUpdate, onMount } from 'svelte';
	import type Swiper from 'swiper';
	import colorSchemes from '$lib/colorSchemes';

	const swiperImages = [sequencerImg, photoAppDesktop, portfolioImg, paycalcImg];
	const swiperImgClasses = ['w-full', 'h-[400px]'];
	let selectedIndex = 0;
	let projectSwiper: Swiper;

	onMount(() => {
		const swiperEl = document.querySelector('swiper-container');
		const swiper = swiperEl?.swiper as Swiper;
		projectSwiper = swiper;

		swiper.on('slideChange', function (swiper) {
			selectedIndex = swiper.activeIndex;
		});
	});

	function handlePaginationClick(index: number) {
		if (selectedIndex !== index) {
			projectSwiper.slideTo(index);
		}
	}
</script>

<div class="w-full h-full relative">
	<div class="absolute mt-4 pl-4 top-0 left-0 z-10 text-zinc-100">
		<h2 class="tanker text-5xl md:text-7xl">Projects</h2>
	</div>
	<div class="pagination absolute mt-5 top-0 right-0 pr-4 z-10">
		<div class="pagination flex gap-4 justify-start">
			{#each projects as _, index}
				<button
					id={`pagination-${index}`}
					class={`pagination__dot h-[16px] w-[16px] bg-zinc-100 rounded-2xl transition-opacity duration-[1200ms] ${selectedIndex === index ? 'pagination-active' : 'pagination-inactive'}`}
					type="button"
					value={index}
					on:click={() => handlePaginationClick(index)}
				/>
			{/each}
		</div>
	</div>
	<swiper-container
		class="h-full"
		autoHeight={true}
		speed={1200}
		pauseOnMouseEnter={true}
		slidesPerView={1}
		autoplay={{
			delay: 10000,
			pauseOnMouseEnter: true
		}}
	>
		{#each projects as project, index}
			<swiper-slide
				class={`h-full min-h-[100vh] relative pt-20 md:pt-28 my-auto ${project.colorClasses}`}
			>
				<div class="h-full flex flex-col justify-between px-4">
					<div>
						<h2 class="tanker text-4xl text-center md:text-5xl">{project.name}</h2>
						<h3 class="mt-2 satoshi-regular text-center text-lg md:text-2xl">{project.tech}</h3>
						<div class="md:flex md:justify-center md:gap-4 md:mt-12">
							<img
								class={`md:self-center ${project.imageClasses}`}
								src={swiperImages[index]}
								alt={project.alt}
							/>
							<div class="mt-4 md:mt-8 md:mr-4 md:text-xl md:w-1/3">
								<p class="satoshi-bold indent-8 text-pretty hyphens-auto">
									{projects[index].description}
								</p>
								<div class="flex flex-col text-center gap-4 mt-4 md:text-left md:mt-10">
									<a class="tanker text-3xl" href={project.gitRepo} target="_blank">
										See the code ➡️</a
									>
									{#if project.demo}
										<a class="tanker text-3xl" href={project.demo} target="_blank">
											Try the demo ➡️</a
										>
									{/if}
								</div>
							</div>
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

	.twinkle {
		animation: twinkle ease-in-out 2s 1;
	}

	@keyframes twinkle {
		0% {
			transform: scale(0.5);
			opacity: 0;
		}
		30% {
			transform: scale(1.5);
			opacity: 1;
		}
		70% {
			transform: scale(1.7);
			opacity: 1;
		}
		95% {
			transform: scale(1.5);
			opacity: 1;
		}
		100% {
			transform: scale(0.5);
			opacity: 0;
		}
	}
</style>
