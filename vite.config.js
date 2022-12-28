import { sveltekit } from '@sveltejs/kit/vite';
import dynamicImport from 'vite-plugin-dynamic-import';
import { searchForWorkspaceRoot } from 'vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), dynamicImport()],
	server: {
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd()), './.markdown']
		}
	}
};

export default config;
