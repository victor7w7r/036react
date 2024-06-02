import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import { analyzer } from 'vite-bundle-analyzer'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import { qrcode } from 'vite-plugin-qrcode'
import tsconfigPaths from 'vite-tsconfig-paths'

import { imports, importTypes } from './auto-import'

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  plugins: [
    AutoImport({
      dts: 'src/generated/auto-imports.d.ts',
      eslintrc: { enabled: true },
      imports: [
        'react',
        'react-router-dom',
        {
          'axios': [['default', 'axios']]
        },
        ...imports,
        ...importTypes
      ],
      include: [/\.[jt]sx?$/]
    }),
    analyzer(),
    qrcode(),
    chunkSplitPlugin(),
    million.vite({ auto: true }),
    react(),
    tsconfigPaths()
  ]
})
