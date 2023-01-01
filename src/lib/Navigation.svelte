<script lang="ts">
	import type { Page, Tree } from '../types';
	import { isNode } from '../types';
	import { page } from '$app/stores';

	const { slug = '/' } = $page.params;
	export let path: string = '';
	export let fileTree: Tree<Page>;
	const open = slug === '/' || slug.indexOf(path.replace(/^\//, '')) === 0 ? 'open' : undefined;
</script>

<ul>
	{#each Object.entries(fileTree) as [key, value]}
		<li>
			{#if isNode(value)}
				<details {open}>
					<summary>{key}</summary>
					<svelte:self fileTree={value.value} path={`${path}/${key}`} />
				</details>
			{:else}
				<a href={`/${value.value.slug}`}>{key}</a>
			{/if}
		</li>
	{/each}
</ul>

<style lang="css">
	ul {
		list-style: none;
	}
</style>
