import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import { babel } from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";

export default {
  input: "index.js",       
  output: {
    file: "dist/bundle.js",
    format: "esm",
  },
  plugins: [
    nodeResolve(),
    babel({ babelHelpers: "bundled" }),
    terser(),
    copy({
      targets: [
        { src: "public/*", dest: "dist" }, // Copia la carpeta "public" a "dist"
        { src: "assets/*", dest: "dist/assets" }, // Copia la carpeta "assets" a "dist/assets"
      ],
    }),
  ],
  watch: {
    clearScreen: false,
  },
};
