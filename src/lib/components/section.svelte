<script lang="ts">
	import { nanoid } from 'nanoid';
	export let sectionId = nanoid();
	export let background = '';
	export let text = '';
	export let additionalClasses: string[] = [];
</script>

<section>
	<div
		id={sectionId}
		class={`w-[100vw] relative ${background} ${text} ${additionalClasses.map((ac) => ac)}`}
	>
		<slot />
	</div>
</section>

<style>
	.gummy-worm-bg {
		background-image: url('$lib/assets/gummy-worms.avif');
	}
</style>
