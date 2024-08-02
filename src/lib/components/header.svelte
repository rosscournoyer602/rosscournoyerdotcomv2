<script>
	import { onDestroy } from 'svelte';
	import { showHeader } from '$lib/stores';

	let visible = false;
	const baseIconClasses = 'transition-transform duration-300 hover:scale-125';

	const showHeaderUnsubscribe = showHeader.subscribe((value) => {
		visible = value;
	});

	onDestroy(() => {
		showHeaderUnsubscribe();
	});
</script>

<!-- mix-blend-difference -->
<header
	class={`w-full h-[48px] fixed z-20 ${visible ? 'top-0' : '-top-48'} transition-position duration-500 px-4 tanker text-4xl text-white mix-blend-difference`}
>
	<div class="h-full flex justify-between">
		<p class="self-center">Ross Cournoyer</p>
		<div class="self-center">
			<a href="mailto:rosswilliamcournoyer@gmail.com">
				<ion-icon name="mail-sharp" class={`${baseIconClasses} hover:rotate-12`}></ion-icon>
			</a>
			<a href="https://www.linkedin.com/in/rosscournoyer/" target="_blank">
				<ion-icon name="logo-linkedin" class={`${baseIconClasses} hover:-rotate-12`}></ion-icon>
			</a>
			<a href="https://github.com/rosscournoyer602" target="_blank">
				<ion-icon name="logo-github" class={`${baseIconClasses} hover:rotate-12`}></ion-icon>
			</a>
		</div>
	</div>
</header>
