<script lang="ts">
	import type { Page, Tree } from '../types';
	import { isLeaf, isNode } from '../types';
	import { page } from '$app/stores';

	const { pathname } = $page.url;
	export let path: string = '';
	export let fileTree: Tree<Page>;

	function isOpen(path: string) {
		return decodeURI(pathname).indexOf(path) === 0 ? 'open' : undefined;
	}

	const entries = Object.entries(fileTree).map(([key, value]) => {
		if (isNode<Page>(value)) {
			const entryPath = `${path}/${key}`;
			return {
				key,
				open: pathname === '/' || decodeURI(pathname).indexOf(entryPath) === 0 ? 'open' : undefined,
				fileTree: value.value,
				path: entryPath
			};
		} else if (isLeaf<Page>(value)) {
			return {
				key,
				href: `/${value.value.slug}`
			};
		}
		console.error('Unrecognized fileTree entry', { key, value });
	});
</script>

<ul>
	{#each entries as { key, open, fileTree, path, href }}
		<li>
			{#if fileTree}
				<details {open}>
					<summary>{key}</summary>
					<svelte:self {fileTree} {path} />
				</details>
			{:else}
				<a {href}>{key}</a>
			{/if}
		</li>
	{/each}
</ul>

<style lang="css">
	ul {
		list-style: none;
	}
</style>
