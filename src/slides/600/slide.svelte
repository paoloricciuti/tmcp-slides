<script lang="ts">
	import { Code, Transition } from '@animotion/core';
</script>

<main
	class="grid grid-cols-1 grid-rows-1 *:col-span-full *:row-span-full [&_pre]:border [&_pre]:border-stone-200"
>
	<Code
		lang="ts"
		theme="github-dark"
		code={`// app/mcp/route.ts
export function GET(request: Request){
	  return new Response('Next.js', { status: 200 });
}`}
	/>

	<Transition class="transition">
		<Code
			class="-rotate-6"
			lang="ts"
			theme="github-dark"
			code={`// routes/mcp.ts
export function GET({ request }){
	  return new Response('SolidStart', { status: 200 });
}`}
		/>
	</Transition>

	<Transition class="transition">
		<Code
			class="rotate-2"
			lang="ts"
			theme="github-dark"
			code={`// bun.ts
Bun.serve({
	fetch(request) {
		return new Response('Bun', { status: 200 });
	},
});
`}
		/>
	</Transition>

	<Transition class="transition">
		<Code
			class="-rotate-4"
			lang="ts"
			theme="github-dark"
			code={`// worker.ts
export default {
	fetch(request){
		return new Response('Cloudflare Workers', { status: 200 });
	}
} satisfies ExportedHandler<Env>;
`}
		/>
	</Transition>

	<Transition class="transition">
		<Code
			class="rotate-3"
			lang="ts"
			theme="github-dark"
			code={`// deno.ts
Deno.serve((request: Request) => {
	return new Response('Deno', { status: 200 });
});
`}
		/>
	</Transition>

	<Transition class="transition">
		<Code
			lang="ts"
			theme="github-dark"
			code={`// routes/mcp/+server.ts
export function GET({ request }){
	  return new Response('Sveltekit', { status: 200 });
}`}
		/>
	</Transition>
</main>
