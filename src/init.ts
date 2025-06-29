import { loadGFont } from "gfont-loader";

export function init(): void {
	void loadGFont("JetBrains Mono");

	const globalStyles = `
	.omni {
		display: inline-block;
		vertical-align: text-top;
		
		font-size: 1rem;
		font-family: "JetBrains Mono";
	}`;
	document.head.insertAdjacentHTML("beforeend", `<style>${globalStyles}</style>`);
}
