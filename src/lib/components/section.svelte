<script>
	import { nanoid } from 'nanoid';
	export let sectionId = nanoid();
	export let background = '';
	export let text = '';
</script>

<div id={sectionId} class={`w-[100vw] h-[100vh] relative ${background} ${text}`}>
	<slot />
</div>
