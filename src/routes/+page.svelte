<script lang="ts">
	import { page } from '$app/state';
	import { Presentation, Slides, getPresentation } from '@animotion/core';
	import { getAbortSignal } from 'svelte';
	import Orb from '$lib/orb.svelte';
	import Presenter from '$lib/presenter.svelte';

	$effect(() => {
		const session_id = page.url.searchParams.get('session');
		if (!session_id) return;
		const presentation = getPresentation();
		const event_source = new EventSource(`/events?session=${session_id}`);
		event_source.addEventListener(
			'next',
			() => {
				presentation.slides.next();
			},
			{ signal: getAbortSignal() }
		);
		event_source.addEventListener(
			'previous',
			() => {
				presentation.slides.prev();
			},
			{ signal: getAbortSignal() }
		);
	});
</script>

<Orb />

<Presenter />

<Presentation
	options={{
		history: true,
		transition: 'slide',
		controls: true,
		progress: true,
		highlight: {
			highlightOnLoad: false,
			excapeHTML: false
		},
		center: true
	}}
>
	<Slides center={true} />
</Presentation>
