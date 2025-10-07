<script module lang="ts">
	import { defineProps } from '@animotion/core';
	import thanks from './thanks.mp4';
	let visible = $state(false);

	export const props = defineProps({
		in() {
			visible = true;
		},
		out() {
			visible = false;
		}
	});
</script>

{#if visible}
	<!-- svelte-ignore a11y_media_has_caption -->
	<video
		{@attach (node) => {
			node.playbackRate = 2;
		}}
		src={thanks}
		autoplay
		playsinline
		muted
		controls={false}
		loop={false}
		class="absolute h-full w-full object-cover"
	></video>
{/if}
