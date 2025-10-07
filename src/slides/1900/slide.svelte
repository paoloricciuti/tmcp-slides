<script lang="ts">
	import { Code, Transition } from '@animotion/core';
</script>

<main class="absolute text-3xl!">
	<Code
		lang="ts"
		class="absolute border border-stone-200"
		theme="github-dark"
		code={`import { HttpTransport } from '@tmcp/transport-http';
import { SimpleProvider } from '@tmcp/auth';

const auth = new SimpleProvider({
	clients: {
		get(client_id) {},
		register(client_info) {}
	},
	codes: {
		get(code, request) {},
		delete(code, request) {},
		store(code, code_data, request) {},
		redirect(request) {}
	},
	tokens: {
		get(token, request) {},
		delete(token, request) {},
		store(token, token_data, request) {},
		generate(token_data, request) {}
	},
	refreshTokens: {
		get(token, request) {},
		delete(token, request) {},
		store(token, token_data, request) {},
		generate(refresh_token_data, request) {}
	}
}).build("https://localhost:3000");

const transport = new HttpTransport(server, {
	oauth: auth
});`}
	/>
</main>

<Transition class="absolute -rotate-2 rounded-2xl border border-stone-200 transition">
	<Code
		lang="ts"
		theme="github-dark"
		codes={[
			`import { HttpTransport } from '@tmcp/transport-http';
import { RedisSessionManager } from '@tmcp/session-manager-redis';

const transport = new HttpTransport(server, {
	sessionManager: new RedisSessionManager("redis://localhost:6379"),
});`,
			`import { HttpTransport } from '@tmcp/transport-http';
import { PostgresSessionManager } from '@tmcp/session-manager-postgres';

const transport = new HttpTransport(server, {
	sessionManager: new PostgresSessionManager({
		connectionString: "postgresql://user:password@localhost:5432/dbname",
		tableName: "tmcp-sessions"
	}),
});`,
			`import { HttpTransport } from '@tmcp/transport-http';
import { DurableObjectSessionManager } from '@tmcp/session-manager-durable-objects';
export { SyncLayer } from '@tmcp/session-manager-durable-objects';

const transport = new HttpTransport(server, {
	sessionManager: new DurableObjectSessionManager(),
});`
		]}
	/>
</Transition>
