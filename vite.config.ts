import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import EsLint from "vite-plugin-linter"
import tsConfigPaths from "vite-tsconfig-paths"

import * as packageJson from "./package.json"

const { EsLinter, linterPlugin } = EsLint

export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ["src/components/", "src/contexts/", "src/hooks/"],
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "lib.ts"),
      name: "XaresSharedLibrary",
      formats: ["es", "umd"],
      fileName: (format) => `xares-shared-library.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}))
