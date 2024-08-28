<script lang="ts">
	import { jobs, skills } from '$lib/copy';
	import { onDestroy, onMount } from 'svelte';

	export let borderColor: string;

	let sortedJobs = jobs.sort((a, b) => b.order - a.order);
	let interval: number;
	let flip = false;

	onMount(() => {
		interval = setInterval(() => {
			flip = !flip;
		}, 1000);
	});

	onDestroy(() => {
		if (interval) {
			clearInterval(interval);
		}
	});
</script>

<div class="h-full md:flex md:justify-evenly">
	<div>
		<h2 class="p-4 tanker text-5xl text-right md:text-7xl md:text-left">Work</h2>
		<div class="md:h-full">
			<ul class="md:h-full md:flex md:flex-col md:justify-between">
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
	<div>
		<div class="flex justify-end md:pt-4">
			<div class="md:mx-2 md:self-end md:mb-2">
				{#if flip}
					<div class="w-[50px] md:self-end md:mb-2 text-5xl flip">🕺🏼</div>
				{:else}
					<div class="w-[50px] md:self-end md:mb-2 text-5xl">🕺🏼</div>
				{/if}
			</div>
			<h2 class="pl-2 pr-4 tanker text-5xl text-right md:text-7xl md:pb-2">Skills</h2>
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
</style>
