import { registerDerived } from "./registry";

import { Oobject } from "../components/derived/object";
import { Oarray } from "../components/derived/array";

registerDerived(Object, Oobject);

registerDerived(Array, Oarray);
