<h3 align="center">
  <img src="https://raw.githubusercontent.com/CarbonicSoda/omnires/master/media/icon.png" width="130" alt="Omnires Icon" /><br />
  Omnires
</h3>
<p align="center">Universal JavaScript Object Renderer</p>

---

### Usage

Install this package in your project:

```bash
# via npm
npm add omnires

# or pnpm
pnpm add omnires

# or yarn
yarn add omnires
```

Now, render ANY object into your page!

```ts
// example.ts
import { render } from "omnires";

const result = document.querySelector("#result");

render([69, { key: "Hello World!" }], result);
```

will give you...

![Demo](https://github.com/CarbonicSoda/omnires/blob/master/media/demo/demo1.png?raw=true)

Cool, isn't it?

Not only can Omnires render primitives, it is also fully pluggable and supports
any type you can find in JS: Dates, Errors, Sets...

![Demo](https://github.com/CarbonicSoda/omnires/blob/master/media/demo/demo2.png?raw=true)

> You can also add support for your custom classes! There will be a good
> fallback for you if you don't, though. Details on writing plugins can be found
> in [Plugins](#plugins).

### Methods

> All methods have full JSDocs and TypeScript typing support, so you may skip
> this section.

**`render<T extends HTMLElement>(value: any, container: T): T`**

Mounts rendered `value` into `container` (either in or out of DOM).

Returns `container`.

---

**`wrap(value: any): HTMLSpanElement`**

Wraps rendered `value` into a `<span>` element.

Returns the `<span>`.

---

<details>
<summary><b>Potentially Unsafe Methods</b></summary>
<br/>

> **WARNING**: Make sure you know what you are doing. Sanitize expression if you
> don't trust user input.

**`renderEval<T extends HTMLElement>(expression: string, container: T): T`**

Mounts rendered `expression` into `container` (either in or out of DOM) after
parsing it with JavaScript, e.g. `"[1,2]"` => `[1,2]`.

Returns `container`.

---

**`wrapEval(expression: string): HTMLSpanElement`**

Wraps rendered `expression` into a `<span>` element after parsing it with
JavaScript, e.g. `"[1,2]"` => `[1,2]`.

Returns the `<span>`.

</details>

### Plugins

You can register plugins to tell Omnires how to render custom classes:

```ts
// name.ts
export class Name {
  constructor(public first: string, public last: string) {}
}
```

```tsx
// name.component.tsx
import { Omni } from "omnires";

export default OName = (props) => (
  <Omni.O color="black">{`${props.value.first} ${props.value.last}`}</Omni.O>
);
```

```ts
// custom-class-plugin.ts
import { Omni } from "omnires";
import { Name } from "./name";
import { OName } from "./name.component";

Omni.register(Name, OName);
```

As simple as that.

### Customization

To customize the style of Omnires in general e.g. font-size and filters, play
with the class `.omni` in your CSS.

---

_&emsp;Anything, Anywhere, Anyone_
