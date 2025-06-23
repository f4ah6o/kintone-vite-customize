import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: "src/customize-index.ts",
			output: {
				format: "iife",
				dir: "dist",
				entryFileNames: "bundle.js",
			},
		},
	},
});