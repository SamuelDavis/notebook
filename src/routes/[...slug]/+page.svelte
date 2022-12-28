<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { page } = data;
</script>

<svelte:head>
	<title>{page.slug}</title>
</svelte:head>
<pre>{JSON.stringify(data, null, 2)}</pre>
