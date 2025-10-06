<script lang="ts" module>
	import { defineProps, Transition } from '@animotion/core';
	import confused from './confused.gif';
	import deps from './deps.png';

	export const props = defineProps({
		image: confused,
		class: 'absolute'
	});
</script>

<Transition class="m-auto grid h-screen rotate-3 place-items-center">
	<img src={deps} alt="Dependencies" class="max-w-2/3 rounded-2xl border border-stone-200" />
</Transition>
