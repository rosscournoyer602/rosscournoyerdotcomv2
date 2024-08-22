<script>
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
