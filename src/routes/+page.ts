import type { PageLoad } from './$types';
import { indexPages } from '$lib/pages';
export const load = (async () => {
	const pages = await indexPages();
	return { pages };
}) satisfies PageLoad;
