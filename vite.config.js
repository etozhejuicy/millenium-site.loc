import { defineConfig } from "vite";
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: './images/[!.]*',
          dest: './images',
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: '/index.html',
        services: '/services.html',
      },
    },
  },
  refresh: true,
});
