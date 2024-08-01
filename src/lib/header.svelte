<script>
	import { onDestroy } from 'svelte';
	import { showHeader } from './stores';

	let visible = false;

	const showHeaderUnsubscribe = showHeader.subscribe((value) => {
		visible = value;
	});

	onDestroy(() => {
		showHeaderUnsubscribe();
	});
</script>

<header
	class={`w-full h-[48px] fixed z-20 ${visible ? 'top-0' : '-top-48'} transition-position duration-500 px-4 mt-2 tanker text-4xl text-white opacity-90 mix-blend-difference`}
>
	<div class="flex justify-between content-center">
		<p>Ross Cournoyer</p>
		<div>
			<a href="mailto:rosswilliamcournoyer@gmail.com"> <ion-icon name="mail-outline"></ion-icon></a>
			<a href="https://www.linkedin.com/in/rosscournoyer/" target="_blank"
				><ion-icon name="logo-linkedin"></ion-icon></a
			>
			<a href="https://github.com/rosscournoyer602" target="_blank">
				<ion-icon name="logo-github"></ion-icon></a
			>
		</div>
	</div>
</header>
