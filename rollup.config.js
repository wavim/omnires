import terser from "@rollup/plugin-terser";
import withSolid from "rollup-preset-solid";

export default withSolid({
	targets: ["esm", "cjs"],
	plugins: [terser()],
});
