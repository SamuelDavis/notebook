<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { pages } = data;
</script>

<details open>
	<summary>nav</summary>
	<nav>
		<ul>
			{#each pages as { slug } (slug)}
				<li>
					<a href={slug}>{slug}</a>
				</li>
			{/each}
		</ul>
	</nav>
</details>
<details>
	<pre>{JSON.stringify(data, null, 2)}</pre>
</details>
