import {join} from "path";

export {default as bound_type} from "./bound-type.js";

/**
 * Join URI segments.
 * @param {string|number|object} ...segments
 */
export function uri_join(...segments) {
  return join(...segments.map(s => s?.uri ?? String(s)));
}
