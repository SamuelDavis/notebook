import type { LayoutLoad } from './$types';
export const prerender = true;

import { indexFileTree } from '$lib/pages';
export const load = (async () => {
	const fileTree = await indexFileTree();
	return { fileTree };
}) satisfies LayoutLoad;
