import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import {resolve} from "path";
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
	plugins: [vue(), vueJsx()],

	build: {
    watch: {
      include: 'src/**',
      exclude: 'node_modules/**'
    },
		lib: {
			name: 'components',
			entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
			formats: ['es', 'cjs', 'iife'],
			fileName: (format) => {
				switch (format) {
					case 'es':
						return 'index.mjs'
					case 'cjs':
						return 'index.cjs'
					case 'iife':
						return 'index.js'
					default:
						return 'index.js'
				}
			},
		},
		minify: false,
		rollupOptions: {
			external: ['vue'],
			output: {
				banner: `
/**
 *  Copyright ${new Date(Date.now()).getFullYear()} wishdev
 *  @license MIT
**/
`,
				exports: 'named',
				globals: {
					vue: 'Vue',
				}
			},
		},
	}
})
