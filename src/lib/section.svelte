<script>
	export let background = '';
	export let text = '';
</script>

<div class={`w-[100vw] h-[100vh] px-4 py-2 ${background} ${text}`}>
	<slot />
</div>
