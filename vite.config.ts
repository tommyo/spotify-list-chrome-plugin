import { defineConfig } from 'vite';
import { crx } from '@crxjs/vite-plugin';

import manifest from './manifest.json';

import { name, version, description } from './package.json';

export default defineConfig({
    publicDir: 'icons',   
    plugins: [
        crx({ manifest: { ...manifest, name, version, description } }),
    ],
});
