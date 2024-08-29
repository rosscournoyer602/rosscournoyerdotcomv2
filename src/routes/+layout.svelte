<script>
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
	// import function to register Swiper custom elements
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
