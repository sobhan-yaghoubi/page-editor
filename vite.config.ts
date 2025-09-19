// import { resolve } from "path"
// import { defineConfig } from "vite"
// import dts from "vite-plugin-dts"
// import tsconfigPaths from "vite-tsconfig-paths"

// export default defineConfig({
//   plugins: [
//     tsconfigPaths(),
//     dts({
//       insertTypesEntry: true,
//     }),
//   ],
//   build: {
//     outDir: "dist",
//     lib: {
//       entry: {
//         index: resolve(__dirname, "src/index.ts"),
//         editor: resolve(__dirname, "src/editor.ts"),
//         view: resolve(__dirname, "src/view.ts"),
//       },
//       name: "@sobhan-yaghoubi/page-editor",
//       formats: ["es"],
//       fileName: (format, entryName) => `${entryName}.js`,
//     },
//     rollupOptions: {
//       external: [
//         "react",
//         "react-dom",
//         "lucide-react",
//         "zustand",
//         "clsx",
//         "tailwind-merge",
//         "next/image",
//         "next/link",
//         "lodash",
//         "uuid",
//         "react/jsx-runtime",
//       ],
//     },
//     sourcemap: true,
//     emptyOutDir: true,
//   },
// })
// //! -----------------------------------------------------------
// import { resolve } from "path"
// import { defineConfig } from "vite"
// import dts from "vite-plugin-dts"
// import tsconfigPaths from "vite-tsconfig-paths"

// export default defineConfig({
//   plugins: [
//     tsconfigPaths(),
//     dts({
//       insertTypesEntry: true,
//     }),
//   ],
//   build: {
//     outDir: "dist",
//     sourcemap: true,
//     lib: {
//       // Your entry points are correct. No 'enums' entry needed.
//       entry: {
//         index: resolve(__dirname, "src/index.ts"),
//         editor: resolve(__dirname, "src/editor.ts"),
//         view: resolve(__dirname, "src/view.ts"),
//       },
//       name: "@sobhan-yaghoubi/page-editor",
//       formats: ["es"],
//     },
//     rollupOptions: {
//       output: {
//         // This ensures each entry point gets its own file, which is good.
//         entryFileNames: "[name].js",

//         // --> THIS IS THE KEY TO FIXING THE WARNINGS <--
//         // We are taking manual control of how shared chunks are created.
//         manualChunks(id) {
//           // If a module's path includes '/src/schema/',
//           // group it into a single chunk named 'schema'.
//           if (id.includes("/src/schema/")) {
//             return "schema"
//           }
//           // If a module's path includes '/src/types/',
//           // group it into a single chunk named 'types'.
//           if (id.includes("/src/types/")) {
//             return "types"
//           }
//           // All other shared code will be handled automatically by Rollup.
//         },
//       },
//       external: [
//         "react",
//         "react-dom",
//         "lucide-react",
//         "zustand",
//         "clsx",
//         "tailwind-merge",
//         "next/image",
//         "next/link",
//         "lodash",
//         "uuid",
//         "react/jsx-runtime",
//       ],
//     },
//   },
// })
// !----------------------------------------------------------

import { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      insertTypesEntry: false, // Don't auto-inject types, since you export them manually
    }),
  ],
  build: {
    sourcemap: false, // Disable sourcemap if not needed to avoid warnings
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        editor: resolve(__dirname, "src/editor.ts"),
        view: resolve(__dirname, "src/view.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
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
        "react/jsx-runtime",
      ],
      output: {
        preserveModules: true,
        dir: "dist",
        format: "es",
        entryFileNames: "[name].js",
      },
    },
  },
})
