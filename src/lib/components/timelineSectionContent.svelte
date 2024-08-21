<script lang="ts">
	import MobileTimeline from './mobileTimeline.svelte';

	export let borderColor: string;
</script>

<div class="h-full">
	<MobileTimeline {borderColor} />
</div>
