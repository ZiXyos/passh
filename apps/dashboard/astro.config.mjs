import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
	compressHTML: true,
	integrations: [mdx(), tailwind(), compress(), react()],
	server: ({ command }) => ({ port: command === 'dev' ? 8000: 3434, host: true })
});
