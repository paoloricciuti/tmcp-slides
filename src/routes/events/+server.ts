import { controllers } from '$lib/controllers';

export function GET({ url: { searchParams } }) {
	const session_id = searchParams.get('session');
	if (!session_id) {
		return new Response('Session ID is required', { status: 400 });
	}
	return new Response(
		new ReadableStream({
			start(controller) {
				controllers.set(session_id, controller);
			},
			cancel() {
				controllers.delete(session_id);
			}
		}),
		{
			headers: {
				'Content-Type': 'text/event-stream',
				'Cache-Control': 'no-cache',
				Connection: 'keep-alive'
			}
		}
	);
}
