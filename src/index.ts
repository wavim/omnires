import { registerAll } from "./components/derived/registry/register";
import { init } from "./init";

init();
registerAll();

export * from "./modules/omnires";
