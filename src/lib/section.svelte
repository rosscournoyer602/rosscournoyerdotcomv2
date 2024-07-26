<script>
	export let background = '';
	export let text = '';
</script>

<div class={`w-[100vw] h-[100vh] relative ${background} ${text}`}>
	<slot />
</div>
