<script lang="ts">
	import '../styles/app.css';

	let { children } = $props();

	// import.meta.glob('../slides/**/*.svelte');
</script>

<svelte:head>
	<title>TMCP: a new way to build MCP servers in TS</title>
</svelte:head>

{@render children()}
