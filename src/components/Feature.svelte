<script>
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
</script>

<div
	use:storyblokEditable={blok}
	class="w-full bg-[#f7f6fd] rounded-[5px] text-center overflow-hidden"
>
	{#if blok.image?.filename}
    <img src={blok.image.filename} alt={blok.image.alt} class="w-full h-48 xl:h-72 object-cover" />
	{/if}
	<div class="px-12 py-6">
		<h3 class="text-2xl text-[#1d243d] font-bold">{blok.name}</h3>
		{#if blok.description}
			<p class="pt-2">{blok.description}</p>
		{/if}
  </div>
</div>