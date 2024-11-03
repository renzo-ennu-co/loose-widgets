import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// List of widgets to build
const widgets = [
  { name: 'potential-weight', entry: 'src/widgets/PotentialWeight/render.tsx' },
  { name: 'how-it-works', entry: 'src/widgets/HowItWorks/render.tsx' },
  // Add more widgets as needed
];

async function buildWidgets() {
  for (const widget of widgets) {
    await build({
      configFile: false,  // Ensures Vite does not try to load external config
      plugins: [react()],
      build: {
        rollupOptions: {
          input: widget.entry,
          output: {
            dir: path.resolve(__dirname, 'output/widgets'),
            entryFileNames: `${widget.name}-[hash].js`,
            inlineDynamicImports: true,  // Bundle all imports in a single file
          },
        },
        emptyOutDir: false,  // Prevent clearing the output folder between builds
      },
    });
    console.log(`Built widget: ${widget.name}`);
  }
}

buildWidgets().catch((error) => {
  console.error(error);
  process.exit(1);
});
