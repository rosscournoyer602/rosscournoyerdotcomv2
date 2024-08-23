<script lang="ts">
	import { jobs, skills } from '$lib/copy';
	import { onDestroy, onMount } from 'svelte';

	let sortedJobs = jobs.sort((a, b) => b.order - a.order);
	export let borderColor = '';
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

<div class="h-full">
	<h2 class="p-4 tanker text-5xl text-right md:text-7xl md:text-left">Work</h2>
	<div>
		<ul>
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
	<div class="-mt-[25px] mx-2 flex justify-end">
		{#if flip}
			<div class="w-[50px] text-5xl flip">🕺🏼</div>
		{:else}
			<div class="w-[50px] text-5xl">🕺🏼</div>
		{/if}
	</div>
	<h2 class="px-4 tanker text-5xl text-right md:text-7xl md:text-left">Skills</h2>
	<div class="p-4 satoshi-regular text-xl text-center">
		<ul class="flex flex-wrap gap-2">
			{#each skills as skill}
				<li class={`h-8 pb-4 px-1 flex-auto self-start rounded-md border ${borderColor}`}>
					<span>{skill}</span>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.flip {
		transform: scaleX(-1);
	}
</style>
