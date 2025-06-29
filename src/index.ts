import { registerAll } from "./components/derived/registry/register";
import { initStyles } from "./init";

initStyles();
registerAll();

export { O } from "./components/common";
export { register } from "./components/derived/registry/registry";
export { ObjectLike } from "./components/templates/object-like.template";
export { render, renderEval, wrap, wrapEval } from "./modules/omnires";
