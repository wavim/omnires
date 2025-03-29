import { render as r } from "omnires";

// const input = document.querySelector("#input");
const res = document.querySelector("#res");

// input.oninput = () => {
// 	res.innerHTML = "";
// 	try {
// 		omni.renderEval(input.value, res);
// 	} catch {}
// };

const pad = () => res.appendChild(document.createElement("br"));

const render = (v) => {
	r(v, res);
	pad();
};

render(12345);
render(100000n);
render("Hello World");
render(true);
render(null);
render(undefined);
render(Symbol("id"));

pad()

render({ a: 1, b: [2, 3] });
render([{}, 1, "asd"]);
render(new Map().set([null], "333").set(2, { a: true }));
render(new Set().add(3).add(3).add("hello"));

pad()

const func1 = (arg1, arg2) => void 0;
render(func1);
render(new Boolean(false));
render(new Promise(() => void 0));
render(new SyntaxError("line 2"));
render(/ab\/c/gs);
render(new Date());

// render([69, { key: "Hello World!" }], res);
