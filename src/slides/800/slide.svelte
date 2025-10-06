<script module lang="ts">
	import { Action, Code, defineProps } from '@animotion/core';

	let code: ReturnType<typeof Code>;

	export const props = defineProps({
		out() {
			code.selectLines`*`;
		}
	});
</script>

<main class="text-3xl">
	<Code
		bind:this={code}
		lang="ts"
		theme="github-dark"
		code={`import type { Request, Response } from "express";
		
const app = express();
app.use(express.json());

app.post('/mcp', async (req: Request, res: Response) => {  
  try {
    const server = getServer(); 
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
    });
    res.on('close', () => {
      transport.close();
      server.close();
    });
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
  } catch (error) {
    if (!res.headersSent) {
      res.status(500).json({
        jsonrpc: '2.0',
        error: { code: -32603, message: 'Internal server error' },
        id: null,
      });
    }
  }
});`}
	/>
</main>

<Action
	do={() => {
		code.selectLines`20-24`;
	}}
	undo={() => {
		code.selectLines`*`;
	}}
/>

<Action
	do={() => {
		code.selectLines`17`;
	}}
	undo={() => {
		code.selectLines`20-24`;
	}}
/>
