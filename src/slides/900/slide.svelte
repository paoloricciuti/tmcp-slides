<script lang="ts">
	import { Transition } from '@animotion/core';
	import mcp_handler from './mcp-handler.png';
	import node_fetch_server from './node-fetch-server.png';
</script>

<img src={node_fetch_server} alt="Node Fetch Server" class="absolute w-[60vw]" />
<Transition class="absolute top-1/2 left-1/2 -translate-1/2 rotate-6">
	<img src={mcp_handler} alt="MCP Handler" class="w-[60vw]" />
</Transition>
