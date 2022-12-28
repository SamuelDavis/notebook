export async function indexPages() {
	const files = (await import.meta.glob('./../../../.markdown/**/*.md')) as Record<
		string,
		() => Promise<typeof import('*.md')>
	>;
	const imports = Object.entries(files).map(async ([filepath, resolver]) => {
		const { metadata } = await resolver();
		const slug = filepath.replaceAll(/^.*\.markdown\/|\.md$/g, '');
		return { metadata: parseMetadata(metadata), slug };
	});
	return await Promise.all(imports);
}

export async function getPage(slug: string) {
	const { metadata, default: Component } = await import(`./../../../.markdown/${slug}.md`);
	return { slug, metadata: parseMetadata(metadata), Component };
}

function parseMetadata(metadata: typeof import('*.md')['metadata']) {
	const { created_at, updated_at, tags } = metadata;
	return {
		created_at: new Date(created_at),
		updated_at: new Date(updated_at),
		tags: tags.map((tag) => {
			let [category, value] = tag.split(':') as (null | string)[];
			if (!value) {
				value = category;
				category = null;
			}
			return { category, tag: value };
		})
	};
}
