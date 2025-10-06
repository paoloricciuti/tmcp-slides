<script lang="ts" module>
	import { Code, defineProps } from '@animotion/core';
	import { confetti } from '@neoconfetti/svelte';

	let visible = $state(false);

	export const props = defineProps({
		in() {
			setTimeout(() => {
				visible = true;
			}, 500);
		},
		out() {
			visible = false;
		}
	});
</script>

{#if visible}
	<main use:confetti={{}}>visible</main>
{/if}
<Code lang="bash" class="text-6xl!" theme="github-dark" code={`pnpm i tmcp`} />
