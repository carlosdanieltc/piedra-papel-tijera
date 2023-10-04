import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import { babel } from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";

export default {
  input: "index.js",       
  output: {
    file: "docs/bundle.js",
    format: "esm",
  },
  plugins: [
    nodeResolve(),
    babel({ babelHelpers: "bundled" }),
    terser(),
    copy({
      targets: [
        { src: "assets/*", dest: "docs/assets" }, // Copia la carpeta "assets" a "dist/assets"
        { src: "index.html", dest: "docs" }, // Copia index.html a la carpeta "dist"
        { src: "manifest.json", dest: "docs" }, 
        { src: "indexeddb.js", dest: "docs" }, 
      ],
    }),
  ],
  watch: {
    clearScreen: false,
  },
};
