<script lang="ts">
	import { building, dev } from '$app/environment';
	import '../styles/app.css';

	let { children } = $props();

	if (building || dev) {
		console.log(import.meta.glob('../slides/**/slide.svelte', { eager: true }));
	}
</script>

<svelte:head>
	<title>TMCP: a new way to build MCP servers in TS</title>
</svelte:head>

{@render children()}
