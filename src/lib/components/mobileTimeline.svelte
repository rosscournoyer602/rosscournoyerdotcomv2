<script>
	import { jobs, skills } from '$lib/copy';
	import SkillMarquee from './skillMarquee.svelte';

	let sortedJobs = jobs.sort((a, b) => b.order - a.order);
	export let borderColor = '';
</script>

<div class="h-full mt-4">
	<div>
		<ul>
			{#each sortedJobs as job}
				<li class={`pl-10 pb-4 ${borderColor}`}>
					<h3 class="tanker text-3xl">{job.company}</h3>
					<p class="satoshi-bold text-xl">{job.title}</p>
					<p class=" text-xl satoshi-regular">{job.dates}</p>
				</li>
			{/each}
		</ul>
	</div>
	<div class="mt-10 mx-10 satoshi-regular text-xl text-center">
		<ul class="flex flex-wrap gap-2 content-start">
			{#each skills as skill, index}
				<li class={`min-w-1/3 h-8 pb-4 px-1 flex-auto rounded-md border ${borderColor}`}>
					<span>{skill}</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
