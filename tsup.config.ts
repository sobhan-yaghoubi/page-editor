import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts", "src/editor.ts", "src/view.ts"],
  format: ["esm", "cjs"],
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: true,
  banner: {
    js: `
      "use client";
    `,
  },
  external: ["react", "lucide-react", "zustand"],
})
