import { Omnires } from "omnires";

const omni = new Omnires();
window.omni = omni;

const input = document.querySelector("#input");
const res = document.querySelector("#res");

input.oninput = () => {
	res.innerHTML = "";
	try {
		omni.renderEval(input.value, res);
	} catch {}
};
