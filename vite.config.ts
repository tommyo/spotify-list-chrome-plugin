// import generateFile from 'vite-plugin-generate-file';
import { defineConfig } from 'vite';
import { crx } from '@crxjs/vite-plugin';

import manifest from './manifest.json';

import { name, version, description } from './package.json';

export default defineConfig({
    plugins: [
        crx({ manifest: { ...manifest, name, version, description } }),
        // generateFile([{
        //     type: 'template',
        //     output: './manifest.json',
        //     template: 'manifest.ejs',
        //     data: { project },
        // }]),
    ],
});
