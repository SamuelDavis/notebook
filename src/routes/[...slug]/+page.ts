import type { PageLoad } from './$types';
import { getPage } from '$lib/pages';
import { error } from '@sveltejs/kit';
export const load = (async (request) => {
	try {
		const page = await getPage(request.params.slug);
		return { page };
	} catch (e) {
		console.error(e);
		throw error(404, 'Not found');
	}
}) satisfies PageLoad;
