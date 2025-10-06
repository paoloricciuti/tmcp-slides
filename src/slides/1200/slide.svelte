<script lang="ts">
	import { Transition } from '@animotion/core';
	import valibot from './valibot.png';
	import zod from './zod.png';
</script>

<img
	src={valibot}
	alt="valibot error"
	class="absolute max-w-2/3 rounded-2xl border border-stone-200"
/>

<Transition class="absolute max-w-2/3 rotate-3">
	<img src={zod} alt="zod error" class="h-full w-full rounded-2xl border border-stone-200" />
</Transition>
