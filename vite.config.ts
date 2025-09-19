import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import dts from "vite-plugin-dts"
import { Plugin } from "vite"
import { resolve } from "path"
import fs from "fs"

function preserveUseClientPlugin(): Plugin {
  return {
    name: "preserve-use-client",
    generateBundle(options, bundle) {
      Object.keys(bundle).forEach((fileName) => {
        const chunk = bundle[fileName]
        if (chunk.type === "chunk" && chunk.facadeModuleId) {
          try {
            const originalContent = fs.readFileSync(
              chunk.facadeModuleId,
              "utf8"
            )
            if (
              originalContent.includes('"use client"') ||
              originalContent.includes("'use client'")
            ) {
              // Prepend "use client" to the generated code
              chunk.code = '"use client";\n' + chunk.code
            }
          } catch (e) {
            // Ignore file read errors
          }
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      compilerOptions: {
        skipLibCheck: true,
      },
    }),
    preserveUseClientPlugin(), // Add the plugin to preserve "use client"
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        editor: resolve(__dirname, "src/editor.ts"),
        view: resolve(__dirname, "src/view.ts"),
      },
      formats: ["es"],
    },
    sourcemap: false, // Disable to avoid sourcemap warnings
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "lucide-react",
        "zustand",
        "clsx",
        "lodash",
        "uuid",
        "react/jsx-runtime",
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        dir: "dist",
        format: "es",
        entryFileNames: "[name].js",
      },
      // Suppress warnings
      onwarn(warning, warn) {
        const suppressedCodes = [
          "MODULE_LEVEL_DIRECTIVE",
          "SOURCEMAP_ERROR",
          "SOURCEMAP_BROKEN_MAPPING",
        ]

        if (warning.code && suppressedCodes.includes(warning.code)) {
          return
        }

        if (
          warning.message?.includes("sourcemap") ||
          warning.message?.includes("original location")
        ) {
          return
        }

        warn(warning)
      },
    },
  },
})
