import { renderEval } from "omnires";

const input = document.getElementById("input") as HTMLInputElement;
const result = document.getElementById("result") as HTMLDivElement;

input.addEventListener("keydown", (ev) => {
	input.focus();

	if (ev.key === "Tab") {
		ev.preventDefault();
		input.setRangeText(
			" ",
			input.selectionStart as number,
			input.selectionEnd as number,
			"end",
		);
	}
});

input.addEventListener("input", () => {
	if (input.value.length === 0) {
		return;
	}

	result.innerHTML = "";
	try {
		renderEval(input.value, result);
	} catch {
		renderEval("'invalid input'", result);
	}
});

input.value = "Date()";
renderEval(input.value, result);
