import withSolid from "rollup-preset-solid";

import terserPlugin from "@rollup/plugin-terser";
import dtsPlugin from "rollup-plugin-dts";
import cssPlugin from "rollup-plugin-import-css";

import { transform } from "lightningcss";

export default [
	withSolid({
		targets: ["esm", "cjs"],

		plugins: [cssPlugin({ inject: true, transform: minifyCss }), terserPlugin()],
	}),

	{
		input: "dist/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "es" }],

		external: [/.+.css/],
		plugins: [dtsPlugin()],

		watch: true,
	},
];

function minifyCss(raw) {
	return transform({ code: Buffer.from(raw), minify: true }).code.toString();
}
