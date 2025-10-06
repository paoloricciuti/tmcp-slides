<script lang="ts">
	import { Code } from '@animotion/core';
</script>

<Code
	lang="ts"
	theme="github-dark"
	class="max-h-[90vh] overflow-auto"
	codes={[
		`import { McpServer } from 'tmcp';

const server = new McpServer(
	{
		name: 'test',
		description: 'test',
		version: '1.0.0'
	},
	{
		capabilities: {
			tools: {}
		}
	}
);

const response = server.receive({});
`,
		`import { McpServer } from 'tmcp';
import { ZodJsonSchemaAdapter } from '@tmcp/adapter-zod';

const server = new McpServer(
	{
		name: 'test',
		description: 'test',
		version: '1.0.0'
	},
	{
		adapter: new ZodJsonSchemaAdapter(),
		capabilities: {
			tools: {}
		}
	}
);

const response = server.receive({});
`,
		`import { McpServer } from 'tmcp';
import { ZodV3JsonSchemaAdapter } from '@tmcp/adapter-zod-v3';

const server = new McpServer(
	{
		name: 'test',
		description: 'test',
		version: '1.0.0'
	},
	{
		adapter: new ZodV3JsonSchemaAdapter(),
		capabilities: {
			tools: {}
		}
	}
);

const response = server.receive({});
`,
		`import { McpServer } from 'tmcp';
import { ArktypeJsonSchemaAdapter } from '@tmcp/adapter-arktype';

const server = new McpServer(
	{
		name: 'test',
		description: 'test',
		version: '1.0.0'
	},
	{
		adapter: new ArktypeJsonSchemaAdapter(),
		capabilities: {
			tools: {}
		}
	}
);

const response = server.receive({});
`,
		`import { McpServer } from 'tmcp';
import { EffectJsonSchemaAdapter } from '@tmcp/adapter-effect';


const server = new McpServer(
	{
		name: 'test',
		description: 'test',
		version: '1.0.0'
	},
	{
		adapter: new EffectJsonSchemaAdapter(),
		capabilities: {
			tools: {}
		}
	}
);

const response = server.receive({});
`,
		`import { McpServer } from 'tmcp';
import { ValibotJsonSchemaAdapter } from '@tmcp/adapter-valibot';


const server = new McpServer(
	{
		name: 'test',
		description: 'test',
		version: '1.0.0'
	},
	{
		adapter: new ValibotJsonSchemaAdapter(),
		capabilities: {
			tools: {}
		}
	}
);

const response = server.receive({});
`,
		`import { McpServer } from 'tmcp';
import { ValibotJsonSchemaAdapter } from '@tmcp/adapter-valibot';
import * as v from 'valibot';

const server = new McpServer(
	{
		name: 'test',
		description: 'test',
		version: '1.0.0'
	},
	{
		adapter: new ValibotJsonSchemaAdapter(),
		capabilities: {
			tools: {}
		}
	}
);

server.tool(
	{
		name: 'a-tool',
		description: 'a tool',
		schema: v.object({
			param: v.string()
		})
	},
	async () => {
		// tool implementation
	}
);

const response = server.receive({});
`,
		`import { McpServer } from 'tmcp';
import { ValibotJsonSchemaAdapter } from '@tmcp/adapter-valibot';
import * as v from 'valibot';

const server = new McpServer(
	{
		name: 'test',
		description: 'test',
		version: '1.0.0'
	},
	{
		adapter: new ValibotJsonSchemaAdapter(),
		capabilities: {
			tools: {}
		}
	}
);

server.tool(
	{
		name: 'a-tool',
		description: 'a tool',
		schema: v.object({
			param: v.string()
		})
	},
	async () => {
		// tool implementation
	}
);

server.resource(
	{
		name: 'a-resource',
		description: 'a resource',
		uri: 'mcp://test/a-resource'
	},
	async () => {
		// resource implementation
	}
);

const response = server.receive({});
`,
		`import { McpServer } from 'tmcp';
import { ValibotJsonSchemaAdapter } from '@tmcp/adapter-valibot';
import * as v from 'valibot';

const server = new McpServer(
	{
		name: 'test',
		description: 'test',
		version: '1.0.0'
	},
	{
		adapter: new ValibotJsonSchemaAdapter(),
		capabilities: {
			tools: {}
		}
	}
);

server.tool(
	{
		name: 'a-tool',
		description: 'a tool',
		schema: v.object({
			param: v.string()
		})
	},
	async () => {
		// tool implementation
	}
);

server.resource(
	{
		name: 'a-resource',
		description: 'a resource',
		uri: 'mcp://test/a-resource'
	},
	async () => {
		// resource implementation
	}
);

server.template(
	{
		name: 'a-template',
		description: 'a template',
		uri: 'mcp://test/{param}',
		list() {},
		complete: {
			param() {
				// do the completion here
			}
		}
	},
	async () => {
		// template implementation
	}
);

const response = server.receive({});
`,
		`import { McpServer } from 'tmcp';
import { ValibotJsonSchemaAdapter } from '@tmcp/adapter-valibot';
import * as v from 'valibot';

const server = new McpServer(
	{
		name: 'test',
		description: 'test',
		version: '1.0.0'
	},
	{
		adapter: new ValibotJsonSchemaAdapter(),
		capabilities: {
			tools: {}
		}
	}
);

server.tool(
	{
		name: 'a-tool',
		description: 'a tool',
		schema: v.object({
			param: v.string()
		})
	},
	async () => {
		// tool implementation
	}
);

server.resource(
	{
		name: 'a-resource',
		description: 'a resource',
		uri: 'mcp://test/a-resource'
	},
	async () => {
		// resource implementation
	}
);

server.template(
	{
		name: 'a-template',
		description: 'a template',
		uri: 'mcp://test/{param}',
		list() {},
		complete: {
			param() {
				// do the completion here
			}
		}
	},
	async () => {
		// template implementation
	}
);

server.prompt(
	{
		name: 'a-prompt',
		description: 'a prompt',
		schema: v.object({
			param: v.string()
		}),
		complete: {
			param() {
				// do completion here
			}
		}
	},
	async () => {
		// prompt implementation
	}
);

const response = server.receive({});
`,
		`import { McpServer } from 'tmcp';
import { ValibotJsonSchemaAdapter } from '@tmcp/adapter-valibot';
import * as v from 'valibot';

const server = new McpServer(
	{
		name: 'test',
		description: 'test',
		version: '1.0.0'
	},
	{
		adapter: new ValibotJsonSchemaAdapter(),
		capabilities: {
			tools: {}
		}
	}
);

server.tool(
	{
		name: 'a-tool',
		description: 'a tool',
		schema: v.object({
			param: v.string()
		})
	},
	async () => {
		// tool implementation
		server.elicitation(
			'elicitation message',
			v.object({
				param: v.string()
			})
		);
	}
);

server.resource(
	{
		name: 'a-resource',
		description: 'a resource',
		uri: 'mcp://test/a-resource'
	},
	async () => {
		// resource implementation
	}
);

server.template(
	{
		name: 'a-template',
		description: 'a template',
		uri: 'mcp://test/{param}',
		list() {},
		complete: {
			param() {
				// do the completion here
			}
		}
	},
	async () => {
		// template implementation
	}
);

server.prompt(
	{
		name: 'a-prompt',
		description: 'a prompt',
		schema: v.object({
			param: v.string()
		}),
		complete: {
			param() {
				// do completion here
			}
		}
	},
	async () => {
		// prompt implementation
	}
);

const response = server.receive({});
`,
		`import { McpServer } from 'tmcp';
import { ValibotJsonSchemaAdapter } from '@tmcp/adapter-valibot';
import * as v from 'valibot';
import { StdioTransport } from '@tmcp/transport-stdio';

const server = new McpServer(
	{
		name: 'test',
		description: 'test',
		version: '1.0.0'
	},
	{
		adapter: new ValibotJsonSchemaAdapter(),
		capabilities: {
			tools: {}
		}
	}
);

server.tool(
	{
		name: 'a-tool',
		description: 'a tool',
		schema: v.object({
			param: v.string()
		})
	},
	async () => {
		// tool implementation
		server.elicitation(
			'elicitation message',
			v.object({
				param: v.string()
			})
		);
	}
);

server.resource(
	{
		name: 'a-resource',
		description: 'a resource',
		uri: 'mcp://test/a-resource'
	},
	async () => {
		// resource implementation
	}
);

server.template(
	{
		name: 'a-template',
		description: 'a template',
		uri: 'mcp://test/{param}',
		list() {},
		complete: {
			param() {
				// do the completion here
			}
		}
	},
	async () => {
		// template implementation
	}
);

server.prompt(
	{
		name: 'a-prompt',
		description: 'a prompt',
		schema: v.object({
			param: v.string()
		}),
		complete: {
			param() {
				// do completion here
			}
		}
	},
	async () => {
		// prompt implementation
	}
);

const transport = new StdioTransport(server);
transport.listen();
`,
		`import { McpServer } from 'tmcp';
import { ValibotJsonSchemaAdapter } from '@tmcp/adapter-valibot';
import * as v from 'valibot';
import { HttpTransport } from '@tmcp/transport-http';

const server = new McpServer(
	{
		name: 'test',
		description: 'test',
		version: '1.0.0'
	},
	{
		adapter: new ValibotJsonSchemaAdapter(),
		capabilities: {
			tools: {}
		}
	}
);

server.tool(
	{
		name: 'a-tool',
		description: 'a tool',
		schema: v.object({
			param: v.string()
		})
	},
	async () => {
		// tool implementation
		server.elicitation(
			'elicitation message',
			v.object({
				param: v.string()
			})
		);
	}
);

server.resource(
	{
		name: 'a-resource',
		description: 'a resource',
		uri: 'mcp://test/a-resource'
	},
	async () => {
		// resource implementation
	}
);

server.template(
	{
		name: 'a-template',
		description: 'a template',
		uri: 'mcp://test/{param}',
		list() {},
		complete: {
			param() {
				// do the completion here
			}
		}
	},
	async () => {
		// template implementation
	}
);

server.prompt(
	{
		name: 'a-prompt',
		description: 'a prompt',
		schema: v.object({
			param: v.string()
		}),
		complete: {
			param() {
				// do completion here
			}
		}
	},
	async () => {
		// prompt implementation
	}
);

const transport = new HttpTransport(server);

Bun.serve({
	async fetch(request) {
		return (await transport.respond(request)) 
			?? new Response('Not Found', { status: 404 });
	}
});
`
	]}
/>
