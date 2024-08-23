<script>
	import { LogoGithub, LogoLinkedin, Mail } from 'svelte-ionicons';

	const baseIconClasses = 'transition-transform duration-300 ml-1 md:hover:scale-125';
</script>

<div class="w-full h-full flex justify-between">
	<p class="self-center">Ross Cournoyer</p>
	<div class="self-center">
		<div class="h-full flex justify-between p-1 pr-0">
			<a href="https://www.linkedin.com/in/rosscournoyer/" target="_blank">
				<LogoLinkedin size={32} class={`${baseIconClasses} md:hover:rotate-12`} />
			</a>
			<a href="https://github.com/rosscournoyer602" target="_blank">
				<LogoGithub size={32} class={`${baseIconClasses} md:hover:rotate-12`} />
			</a>
			<a href="mailto:rosswilliamcournoyer@gmail.com">
				<Mail size={32} class={`${baseIconClasses} md:hover:rotate-12`} />
			</a>
		</div>
	</div>
</div>
