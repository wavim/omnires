import { O, Omni } from "../common";

export const Ostring: Omni<string> = (props) => {
	let string = props.value;

	let quote: "'" | '"' | "`" = "'";
	if (string.includes("'")) {
		if (!string.includes('"')) quote = '"';
		else if (!string.includes("`")) quote = "`";
		else {
			quote = "'";
			string = string.replaceAll("'", "\\'");
		}
	}

	return <O color="oklch(0.648 0.2 131.684)">{`${quote}${string}${quote}`}</O>;
};
