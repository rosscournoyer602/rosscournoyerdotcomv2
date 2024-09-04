<script lang="ts">
	import colorSchemes from '$lib/colorSchemes';
	import { jobs, skills } from '$lib/copy';
	import { onDestroy, onMount } from 'svelte';

	export let borderColor: string;

	let sortedJobs = jobs.sort((a, b) => b.order - a.order);
	let interval: number;
	let flip = false;

	onMount(() => {
		updateDancerSpeed(1000);
	});

	function updateDancerSpeed(intervalSpeed: number) {
		interval = setInterval(() => {
			flip = !flip;
		}, intervalSpeed);
	}

	onDestroy(() => {
		if (interval) {
			clearInterval(interval);
		}
	});
</script>

<div class="h-full md:flex md:justify-evenly">
	<div>
		<h2 class="p-4 tanker text-5xl md:text-7xl md:text-left">Work</h2>
		<div class="h-full">
			<ul class="md:h-full">
				{#each sortedJobs as job}
					<li class={`ml-4 pb-2`}>
						<a href={job.url} target="_blank">
							<h3 class="satoshi-bold text-2xl md:text-3xl">{job.company}</h3>
						</a>
						<p class="text-xl">{job.title}</p>
						<p class="text-md satoshi-regular">{job.dates}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="pt-4">
		<div class="flex justify-between gap-4 px-4">
			<h2 class="tanker text-5xl self-center md:text-7xl md:pb-2">Skills</h2>
			<div class="relative">
				{#if flip}
					<div class="w-[70px] text-7xl flip">🕺🏼</div>
				{:else}
					<div class="w-[70px] text-7xl">🕺🏼</div>
				{/if}
			</div>
		</div>
		<div class="p-4 satoshi-regular text-xl text-center md:w-[600px] md:text-3xl">
			<ul class="flex flex-wrap gap-2 md:gap-3">
				{#each skills as skill}
					<li class={`h-8 md:h-12 flex-auto px-1 md:pt-1 rounded-md border ${borderColor}`}>
						<span>{skill}</span>
					</li>
				{/each}
			</ul>
		</div>
		<div class="pb-12 pt-8 flex flex-col justify-center tanker text-3xl text-center md:text-4xl">
			<div class="flex justify-center gap-2 text-center">
				<div class="point">👉</div>
				<a
					href="https://team-venture.s3.amazonaws.com/Ross+Cournoyer_Resume_full.pdf"
					target="_blank"
				>
					Download my resume
				</a>
				<div class="point-reverse">👈</div>
			</div>
		</div>
	</div>
</div>

<style>
	.flip {
		transform: scaleX(-1);
	}

	.point {
		animation: point ease-in-out 1s infinite;
	}

	.point-reverse {
		animation: point-reverse ease-in-out 1s infinite;
		animation-direction: reverse;
	}

	@keyframes point {
		0% {
			transform: rotate(-0.1turn);
		}

		50% {
			transform: rotate(0turn);
		}

		100% {
			transform: rotate(-0.1turn);
		}
	}

	@keyframes point-reverse {
		0% {
			transform: rotate(0.1turn);
		}

		50% {
			transform: rotate(0turn);
		}

		100% {
			transform: rotate(0.1turn);
		}
	}
</style>
