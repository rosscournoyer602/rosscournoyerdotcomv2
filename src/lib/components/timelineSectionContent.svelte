<script lang="ts">
	import { jobs, skills } from '$lib/copy';
	import { onDestroy, onMount } from 'svelte';

	export let borderColor: string;

	let sortedJobs = jobs.sort((a, b) => b.order - a.order);
	let interval: number;
	let flip = false;
	let dancerControl: HTMLElement;
	let dancerWorkload = 100;

	onMount(() => {
		updateDancerSpeed(1100 - dancerWorkload);
		dancerControl.oninput = (e) => {
			const target = e.target as HTMLInputElement;
			dancerWorkload = target.valueAsNumber;
			console.log('DANCER WORKLOAD', dancerWorkload);
			updateDancerSpeed(1100 - dancerWorkload);
		};
	});

	function updateDancerSpeed(intervalSpeed: number) {
		clearInterval(interval);
		interval = setInterval(() => {
			flip = !flip;
		}, intervalSpeed);
		console.log('INTERVAL', intervalSpeed);
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
							<h3 class="satoshi-bold text-2xl">{job.company}</h3>
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
			<div class="slidecontainer self-center pt-1">
				<input
					bind:this={dancerControl}
					type="range"
					min="0"
					max="900"
					value="100"
					class="slider"
				/>
			</div>
			<div>
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
	</div>
</div>

<style>
	.flip {
		transform: scaleX(-1);
	}
	.slidecontainer {
		width: 100%; /* Width of the outside container */
	}

	/* The slider itself */
	.slider {
		-webkit-appearance: none; /* Override default CSS styles */
		appearance: none;
		width: 100%; /* Full-width */
		height: 16px; /* Specified height */
		background: #c4b5fd; /* Grey background */
		outline: none; /* Remove outline */
		opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
		-webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
		transition: opacity 0.2s;
	}

	/* Mouse-over effects */
	.slider:hover {
		opacity: 1; /* Fully shown on mouse-over */
	}

	/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
	.slider::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		width: 16px; /* Set a specific slider handle width */
		height: 16px; /* Slider handle height */
		background: #04aa6d; /* Green background */
		cursor: pointer; /* Cursor on hover */
	}

	.slider::-moz-range-thumb {
		width: 24px; /* Set a specific slider handle width */
		height: 24px; /* Slider handle height */
		background: #3b0764; /* Green background */
		cursor: pointer; /* Cursor on hover */
	}
</style>
