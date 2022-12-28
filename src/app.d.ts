declare module '*.md' {
	import { SvelteComponent } from 'svelte';
	const value: {
		metadata: {
			created_at: string;
			updated_at: string;
			tags: string[];
		};
		default: SvelteComponent;
	};
	export = value;
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}
