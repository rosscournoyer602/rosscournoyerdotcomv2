<!-- adapted from: -->
<!-- https://codepen.io/geekonthemove/pen/jyGLLp -->
<script>
	export let txtColor = '';
</script>

<div class="loading">
	<span class={`loading__dot ${txtColor}`}></span>
	<span class={`loading__dot ${txtColor}`}></span>
	<span class={`loading__dot ${txtColor}`}></span>
</div>

<style>
	.loading {
		align-items: end;
		display: flex;
	}

	.loading__dot {
		animation: dot ease-in-out 1s infinite;
		display: inline-block;
		width: 0.5rem;
		height: 0.5rem;
		margin: 5px;
		border-radius: 50%;
	}

	.loading__dot:nth-of-type(2) {
		animation-delay: 0.2s;
	}

	.loading__dot:nth-of-type(3) {
		animation-delay: 0.3s;
	}

	@keyframes dot {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.3);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
