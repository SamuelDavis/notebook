import type { Markdown, Page, Tree } from '../../types';

const DEFAULT_METADATA: Markdown['metadata'] = {
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
	tags: []
};
export async function indexPages() {
	const files = (await import.meta.glob('./../../../.markdown/**/*.md')) as Record<
		string,
		() => Promise<Markdown>
	>;
	const imports = Object.entries(files).map(async ([filepath, resolver]) => {
		const { metadata } = await resolver();
		const slug = filepath.replaceAll(/^.*\.markdown\/|\.md$/g, '');
		return { metadata: parseMetadata(metadata), slug };
	});
	return await Promise.all(imports);
}

export async function getPage(slug: string) {
	const { metadata = DEFAULT_METADATA, default: Component } = (await import(
		`./../../../.markdown/${slug}.md`
	)) as Markdown;
	return { slug, metadata: parseMetadata(metadata), Component };
}

export async function indexFileTree() {
	const pages = await indexPages();
	return pages.reduce<Tree<Page>>((acc, page) => {
		let iterator: Record<string, any> = acc;
		let parts = page.slug.split('/');
		const end = parts.pop();
		if (!end) return acc;
		for (const part of parts) {
			iterator[part] = iterator[part] ?? {
				type: 'node',
				value: {}
			};
			iterator = iterator[part].value;
		}
		iterator[end] = {
			type: 'leaf',
			value: page
		};
		return acc;
	}, {});
}

function parseMetadata(metadata?: Markdown['metadata']): Page['metadata'] {
	const { created_at, updated_at, tags } = { ...DEFAULT_METADATA, ...metadata };
	return {
		created_at: new Date(created_at),
		updated_at: new Date(updated_at),
		tags: tags.map((tag) => {
			let [category, value] = tag.split(':') as any[];
			if (category && !value) {
				value = category;
				category = null;
			}
			return { category, tag: value };
		})
	};
}
