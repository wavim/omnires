import { css } from "solid-styled-components";
import { GLOBAL_STYLES } from "../global.styles";

import { OmniresComponent } from "../../types/types";

export const OmniBoolean: OmniresComponent = ({ string }) => {
	return (
		<div
			class={css`
				${GLOBAL_STYLES}

			`}
		>
			{string}
		</div>
	);
};
