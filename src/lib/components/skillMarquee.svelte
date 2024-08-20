<script lang="ts">
	export let skills: string[];
	export let reverse = false;
</script>

<div class="marquee">
	<ul class={`marquee__inner ${reverse ? 'reverse' : ''}`} aria-hidden="true">
		{#each skills as skill}
			<li>{skill}</li>
		{/each}
	</ul>
</div>

<style>
	.marquee {
		position: relative;
		overflow: hidden;
		--offset: 25vw;
		--move-initial: calc(-25% + var(--offset));
		--move-final: calc(-50% + var(--offset));
	}

	.marquee__inner {
		width: fit-content;
		display: flex;
		position: relative;
		transform: translate3d(var(--move-initial), 0, 0);
		animation: marquee 5s linear infinite;
		animation-play-state: running;
	}

	.marquee li {
		font-size: 10vw;
		padding: 0 2vw;
	}

	.reverse {
		animation-direction: reverse;
	}

	/* .marquee:hover .marquee__inner {
		animation-play-state: running;
	} */

	@keyframes marquee {
		0% {
			transform: translate3d(var(--move-initial), 0, 0);
		}

		100% {
			transform: translate3d(var(--move-final), 0, 0);
		}
	}
</style>
