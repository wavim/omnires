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

Now you could render any object onto your page.

```ts
// example.ts
import { render } from "omnires";

const result = document.querySelector("#result");

render([69, true, { foo: "Hello World!" }], result);
```

would give you...

![Demo1](https://github.com/CarbonicSoda/omnires/blob/master/media/demo/demo1.png?raw=true)

Cool, isn't it?

Not only could Omnires render primitives, it also supports essentially all types in JS.

![Demo2](https://github.com/CarbonicSoda/omnires/blob/master/media/demo/demo2.png?raw=true)

### Methods

**`render<T extends HTMLElement>(value: unknown, container: T): T`**

Mounts rendered `value` into `container`.

Returns `container`.

---

**`wrap<T extends keyof HTMLElementTagNameMap>(tag: T, value: unknown): HTMLElementTagNameMap[T]`**

Wraps rendered `value` into a `tag` element.

Returns the `tag` element.

---

<details>
<summary><b>Potentially Unsafe Methods</b></summary>

> **WARNING**: Make sure you know what you are doing. Sanitize expression if you can't trust user
> input.

**`renderEval<T extends HTMLElement>(expression: string, container: T): T`**

Mounts rendered `expression` into `container` after parsing it with JavaScript.

Returns `container`.

---

**`wrapEval<T extends keyof HTMLElementTagNameMap>(tag: T, expression: string): HTMLElementTagNameMap[T]`**

Wraps rendered `expression` into a `tag` element after parsing it with JavaScript.

Returns the `tag` element.

</details>

### Demo

A demo of Omnires is available at [Omnires Demo](https://carbonicsoda.github.io/omnires/).

---

_&emsp;Anything, Anywhere, Anyone_
