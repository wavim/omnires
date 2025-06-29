import terserPlugin from "@rollup/plugin-terser";
import dtsPlugin from "rollup-plugin-dts";
import withSolid from "rollup-preset-solid";

export default [
	withSolid({
		targets: ["esm", "cjs"],

		plugins: [terserPlugin()],
	}),
	{
		input: "dist/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "es" }],

		plugins: [dtsPlugin()],
		watch: true,
	},
];
