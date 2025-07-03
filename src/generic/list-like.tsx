import { createSignal, For, Show } from "solid-js";
import { elementify } from "../mapper/elementify";
import { stringify } from "../mapper/stringify";
import { Omni } from "../omni";
import { Generic, OmniGeneric } from "../types/generic";
import { Oklch } from "../types/oklch";

export function listlike<T extends Generic>(
	trans: (value: T) => Iterable<[unknown, unknown]>,

	brace: string,
	arrow: string,
	keyed = false,

	color1: Oklch,
	color2: Oklch,
): OmniGeneric<T> {
	return (props) => {
		const list = Array.from(trans(props.children));

		const [view, setView] = createSignal(false);

		return (
			<Omni style={{ color: color1 }}>
				<Omni
					onclick={() => setView(!view())}
					style={{ "cursor": "pointer", "user-select": "none" }}
				>
					{"\u25b6"}
				</Omni>
				{`(${String(list.length)})`}

				{brace[0]}
				<Show when={view() && list.length !== 0}>
					<br></br>
				</Show>

				<For each={view() ? list : list.slice(0, 5)}>
					{([k, v], i) => {
						return (
							<span>
								<Show when={view() || keyed}>
									<Omni
										style={{
											"color": color2,
											"margin-left":
												view()
													? "1rem"
													: "0",
										}}
									>
										{view()
											? elementify(
													k,
												)
											: stringify(
													k,
												)}
									</Omni>

									<Omni
										style={{
											"margin-inline":
												view()
													? ".5rem"
													: "0",
										}}
									>
										{arrow}
									</Omni>
								</Show>

								<Omni style={{ color: color2 }}>
									{view()
										? elementify(v)
										: stringify(v)}
								</Omni>

								<Show
									when={
										i() !==
										list.length - 1
									}
								>
									{", "}
								</Show>
								<Show when={view()}>
									<br></br>
								</Show>
							</span>
						);
					}}
				</For>

				<Show when={!view() && list.length > 5}>{"\u2026"}</Show>
				{brace[1]}
			</Omni>
		);
	};
}
