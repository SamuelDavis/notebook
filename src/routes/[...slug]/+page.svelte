<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const {
		page: { slug, Component }
	} = data;
</script>

<svelte:head>
	<title>{slug}</title>
</svelte:head>

<Component />
