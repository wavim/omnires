import terser from "@rollup/plugin-terser";
import minlinecss from "rollup-plugin-minlinecss";
import withSolid from "rollup-preset-solid";

export default withSolid({
	targets: ["esm", "cjs"],
	plugins: [terser(), minlinecss()],
});
