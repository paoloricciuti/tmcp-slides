<script lang="ts" module>
	import { Action, defineProps } from '@animotion/core';
	import TmcpLogo from './tmcp-logo.svelte';

	let complete = $state(false);

	export const props = defineProps({
		out() {
			complete = false;
		}
	});
</script>

<Action do={() => (complete = true)} undo={() => (complete = false)} />

<TmcpLogo {complete} />
<code>TMCP: a new way to build MCP servers in TS</code>
