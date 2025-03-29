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

Now, render any objects into your page!

```ts
// example.ts
import { render } from "omnires";

const result = document.querySelector("#result");

render([69, { key: "Hello World!" }], result);
```

will give:

![Demo](https://github.com/CarbonicSoda/omnires/blob/master/media/demo/demo1.png?raw=true)

---

_&emsp;_
