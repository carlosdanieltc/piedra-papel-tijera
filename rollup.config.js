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
      targets: [{ src: "public/*", dest: "dist" }], 
    }),
  ],
  watch: {
    clearScreen: false,
  },
};