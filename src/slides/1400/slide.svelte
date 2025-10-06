<script lang="ts">
	import { Action, Code, Transition } from '@animotion/core';

	let code_1: ReturnType<typeof Code>;
	let code_2: ReturnType<typeof Code>;
</script>

<main class="absolute text-2xl!">
	<Code
		bind:this={code_1}
		lang="ts"
		class="absolute border border-stone-200"
		theme="github-dark"
		code={`app.post('/mcp', async (req, res) => {
    // Check for existing session ID
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    let transport: StreamableHTTPServerTransport;

    if (sessionId && transports[sessionId]) {
        // Reuse existing transport
        transport = transports[sessionId];
    } else if (!sessionId && isInitializeRequest(req.body)) {
        // New initialization request
        transport = new StreamableHTTPServerTransport({
            sessionIdGenerator: () => randomUUID(),
            onsessioninitialized: sessionId => {
                transports[sessionId] = transport;
            }
        });
        transport.onclose = () => {
            if (transport.sessionId) {
                delete transports[transport.sessionId];
            }
        };
        const server = new McpServer({
            name: 'example-server',
            version: '1.0.0'
        });
        // ... set up server resources, tools, and prompts ...
        // Connect to the MCP server
        await server.connect(transport);
    } else {
        // Invalid request, send error
        return;
    }

    // Handle the request
    await transport.handleRequest(req, res, req.body);
});
`}
	/>
</main>

<Action
	do={() => {
		code_1.selectLines`22-28`;
	}}
	undo={() => {
		code_1.selectLines`*`;
	}}
/>

<Transition class="absolute rotate-3 rounded-2xl border border-stone-200 text-3xl! transition">
	<Code
		bind:this={code_2}
		lang="ts"
		theme="github-dark"
		code={`server.registerResource(
	'a-resource',
	new ResourceTemplate('tool://a-tool/{param}.txt', {
		list() {},
		complete: {
			param() {
				// do the completion here
			},
		},
	}),
	{},
	async () => {}
);

server.registerPrompt(
	'a-prompt',
	{
		argsSchema: {
			param: completable(z.string(), async () => {
				// do the completion here
			}),
		},
	},
	() => {}
);
`}
	/>
</Transition>

<Action
	do={() => {
		code_2.selectLines`3-10`;
	}}
	undo={() => {
		code_2.selectLines`*`;
	}}
/>

<Action
	do={() => {
		code_2.selectLines`5-9`;
	}}
	undo={() => {
		code_2.selectLines`3-10`;
	}}
/>

<Action
	do={() => {
		code_2.selectLines`18-22`;
	}}
	undo={() => {
		code_2.selectLines`5-9`;
	}}
/>

<Transition class="absolute -rotate-2 rounded-2xl border border-stone-200 transition">
	<Code
		lang="ts"
		theme="github-dark"
		code={`server.server.elicitInput({
	message: 'What is your favorite color?',
	requestedSchema: {
		type: 'object',
		properties: {
			color: { type: 'string' },
		},
		required: ['color'],
	},
});`}
	/>
</Transition>
