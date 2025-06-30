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

Now, render any object onto your page!

```ts
// example.ts
import { render } from "omnires";

const result = document.querySelector("#result");

render([69, { key: "Hello World!" }], result);
```

will give you...

![Demo1](https://github.com/CarbonicSoda/omnires/blob/master/media/demo/demo1.png?raw=true)

Cool, isn't it?

Not only can Omnires render primitives, it also supports essentially any type you can find in JS.

![Demo2](https://github.com/CarbonicSoda/omnires/blob/master/media/demo/demo2.png?raw=true)

### Methods

> All methods have full JSDocs and TypeScript support.

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

> **WARNING**: Make sure you know what you are doing. Sanitize expression if you can't trust user
> input.

**`renderEval<T extends HTMLElement>(expression: string, container: T): T`**

Mounts rendered `expression` into `container` (either in or out of DOM) after parsing it with
JavaScript, e.g. `"[1,2]"` => `[1,2]`.

Returns `container`.

---

**`wrapEval(expression: string): HTMLSpanElement`**

Wraps rendered `expression` into a `<span>` element after parsing it with JavaScript, e.g. `"[1,2]"`
=> `[1,2]`.

Returns the `<span>`.

</details>

### Customization

To customize the styles of Omnires in general e.g. font-size, filters, or adding a dark mode: mess
around with the `.omni` class in CSS.

---

_&emsp;Anything, Anywhere, Anyone_
