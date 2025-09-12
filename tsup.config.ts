import { defineConfig } from "tsup"

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    splitting: true,
    sourcemap: true,
    clean: false,
    dts: true,
    external: [
      "react",
      "react-dom",
      "lucide-react",
      "zustand",
      "clsx",
      "tailwind-merge",
      "next/image",
      "next/link",
      "lodash",
      "uuid",
    ],
  },

  {
    entry: ["src/editor.ts", "src/view.ts"],
    format: ["esm", "cjs"],
    splitting: true,
    sourcemap: true,
    clean: true,
    dts: true,

    esbuildOptions(options) {
      options.banner = {
        js: '"use client";',
      }
    },
    external: [
      "react",
      "react-dom",
      "lucide-react",
      "zustand",
      "clsx",
      "tailwind-merge",
      "next/image",
      "next/link",
      "lodash",
      "uuid",
    ],
  },
])
