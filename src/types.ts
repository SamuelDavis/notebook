import type { SvelteComponent } from 'svelte';

enum TreeType {
	Node = 'node',
	Leaf = 'leaf'
}

type Node<T> = { type: TreeType.Node; value: Tree<T> };
type Leaf<T> = { type: TreeType.Leaf; value: T };
export type Tree<T> = Record<string, Node<T> | Leaf<T>>;
export type Markdown = {
	default: SvelteComponent;
	metadata: {
		created_at: string;
		updated_at: string;
		tags: string[];
	};
};
export type Page = {
	default: SvelteComponent;
	metadata: {
		created_at: Date;
		updated_at: Date;
		tags: { category: null | string; tag: string }[];
	};
};

export function isNode<T>(value: any): value is Node<T> {
	return (
		typeof value === 'object' &&
		['type', 'value'].every((property) => property in value) &&
		value.type === TreeType.Node &&
		typeof value === 'object'
	);
}
