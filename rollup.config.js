import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import minlinecss from "rollup-plugin-minlinecss";
import withSolid from "rollup-preset-solid";

export default [
	withSolid({
		targets: ["esm", "cjs"],
		plugins: [terser(), minlinecss()],
	}),
	{
		input: "dist/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "es" }],
		plugins: [dts()],
	},
];
