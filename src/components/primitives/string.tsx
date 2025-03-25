import { Ocomponent } from "../core";

import { O } from "../core";

export const Ostring: Ocomponent<string> = ({ value }) => {
	let quote: "'" | '"' | "`" = "'";
	if (value.includes("'")) {
		if (!value.includes('"')) quote = '"';
		else if (!value.includes("`")) quote = "`";
		else {
			quote = "'";
			value = value.replaceAll("'", "\\'");
		}
	}
	return <O color="oklch(0.606 0.25 292.717)">{`${quote}${value}${quote}`}</O>;
};
