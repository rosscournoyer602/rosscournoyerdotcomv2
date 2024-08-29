<script lang="ts">
	import { projects } from '$lib/copy';

	import photoAppDesktop from '$lib/assets/photoapp_desktop_cropped.png';
	import photoAppMobile from '$lib/assets/photoapp_mobile_cropped.png';
	import sequencerImg from '$lib/assets/sequencer_cropped.png';
	import { onMount } from 'svelte';

	onMount(() => {
		const swiperEl = document.querySelector('swiper-container');
		const swiper = swiperEl?.swiper;
	});
</script>

<div class="w-full h-full">
	<swiper-container
		class="h-full"
		autoplay={{
			delay: 5000
		}}
		speed={600}
		loop="true"
		disableOnInteraction="true"
	>
		<swiper-slide class="h-full min-h-[100vh] cursor-pointer bg-blue-300 text-slate-950">
			<div class="h-full my-4 flex flex-col">
				<h2 class="tanker text-4xl text-center">{projects[1].name}</h2>
				<div class="my-6 px-4">
					<img class="h-[400px] mx-auto" src={sequencerImg} alt="vue-sequencer" />
					<p class="mt-6 satoshi-bold text-md indent-8">{projects[1].description}</p>
				</div>
			</div>
		</swiper-slide>
		<swiper-slide class="h-full min-h-[100vh] cursor-pointer bg-neutral-900 text-amber-300">
			<div class="h-full my-4 flex flex-col content-center">
				<h2 class="tanker text-4xl text-center">{projects[0].name}</h2>
				<div class="my-6 px-4">
					<div class="relative">
						<img class="w-full mx-auto" src={photoAppDesktop} alt="vue-sequencer" />
					</div>
					<p class="mt-6 satoshi-bold text-md indent-8">{projects[1].description}</p>
				</div>
			</div>
		</swiper-slide>
	</swiper-container>
</div>
