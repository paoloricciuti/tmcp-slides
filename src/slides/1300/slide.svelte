<script lang="ts" module>
	import { defineProps } from '@animotion/core';
	import confused from './confused.gif';

	export const props = defineProps({
		image: confused,
		class: 'absolute'
	});
</script>
