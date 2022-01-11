import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";
import css from "rollup-plugin-import-css";

const input = "src/index.ts";
const plugins = [typescript({ typescript: require("typescript") }), css()];
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.devDependencies || {}),
];

export default {
  input,
  output: {
    file: pkg.module,
    format: "esm",
    sourcemap: true,
  },
  plugins,
  external,
};
