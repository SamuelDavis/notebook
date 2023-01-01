<script lang="ts">
	import type { LayoutData } from './$types';
	import Navigation from '$lib/Navigation.svelte';
	import 'prismjs/themes/prism.min.css';
	import { page } from '$app/stores';

	export let data: LayoutData;
	const { fileTree } = data;
	const open = $page.route.id === '/';
</script>

<header>
	<details {open}>
		<summary>Navigation</summary>
		<nav>
			<Navigation {fileTree} />
		</nav>
	</details>
</header>

<slot />
