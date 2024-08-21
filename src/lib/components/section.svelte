<script lang="ts">
	import { nanoid } from 'nanoid';
	export let sectionId = nanoid();
	export let background = '';
	export let text = '';
</script>

<section>
	<div id={sectionId} class={`w-[100vw] min-h-[100vh] relative ${background} ${text}`}>
		<slot />
	</div>
</section>
