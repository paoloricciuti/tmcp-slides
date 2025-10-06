<script lang="ts">
	import { Code } from '@animotion/core';
</script>

<Code
	class="max-h-2/3 overflow-auto text-xl!"
	lang="ts"
	theme="github-dark"
	codes={[
		`import { isJSONRPCRequest, JSONRPCServer } from 'json-rpc-2.0';

const server = new JSONRPCServer();

server.addMethod('initialize', ({ protocolVersion }) => {
	return {
		protocolVersion,
		capabilities: {
			tools: {},
		},
		serverInfo: {
			name: 'example-server',
			version: '1.0.0',
		},
	};
});

server.addMethod('ping', () => {
	return {};
});

Bun.serve({
	async fetch(request) {
		const json = await request.json();
		if (isJSONRPCRequest(json)) {
			return new Response(JSON.stringify(await server.receive(json)), {
				headers: { 'Content-Type': 'application/json' },
			});
		}
		return new Response('Not a JSON-RPC request', { status: 400 });
	},
});
`,
		`import { isJSONRPCRequest, JSONRPCServer } from 'json-rpc-2.0';

const server = new JSONRPCServer();

server.addMethod('initialize', ({ protocolVersion }) => {
	return {
		protocolVersion,
		capabilities: {
			tools: {},
		},
		serverInfo: {
			name: 'example-server',
			version: '1.0.0',
		},
	};
});

server.addMethod('ping', () => {
	return {};
});

server.addMethod('tools/list', () => {
	return {
		tools: [
			{
				name: 'test',
				title: 'Test',
				description: 'A test tool',
				inputSchema: {
					type: 'object',
				},
			},
		],
	};
});

Bun.serve({
	async fetch(request) {
		const json = await request.json();
		if (isJSONRPCRequest(json)) {
			return new Response(JSON.stringify(await server.receive(json)), {
				headers: { 'Content-Type': 'application/json' },
			});
		}
		return new Response('Not a JSON-RPC request', { status: 400 });
	},
});
`,
		`import { isJSONRPCRequest, JSONRPCServer } from 'json-rpc-2.0';

const server = new JSONRPCServer();

server.addMethod('initialize', ({ protocolVersion }) => {
	return {
		protocolVersion,
		capabilities: {
			tools: {},
		},
		serverInfo: {
			name: 'example-server',
			version: '1.0.0',
		},
	};
});

server.addMethod('ping', () => {
	return {};
});

const tools = [
	{
		name: 'test',
		title: 'Test',
		description: 'A test tool',
		inputSchema: {
			type: 'object',
		},
		handler() {
			return {
				content: [
					{
						type: 'text',
						text: 'This is a test tool response',
					},
				],
			};
		},
	},
];

server.addMethod('tools/list', () => {
	return {
		tools,
	};
});

server.addMethod('tools/call', ({ name }) => {
	const tool = tools.find((t) => t.name === name);
	if (!tool) {
		throw new Error(\`Tool \${name} not found\`);
	}
	return tool.handler();
});

Bun.serve({
	async fetch(request) {
		const json = await request.json();
		if (isJSONRPCRequest(json)) {
			return new Response(JSON.stringify(await server.receive(json)), {
				headers: { 'Content-Type': 'application/json' },
			});
		}
		return new Response('Not a JSON-RPC request', { status: 400 });
	},
});
`
	]}
/>
