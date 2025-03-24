import { registerBase } from "./registry";

import { OmniUndefined } from "../components/base/Undefined";
import { OmniBoolean } from "../components/base/Boolean";

registerBase("undefined", OmniUndefined);
registerBase("boolean", OmniBoolean)
