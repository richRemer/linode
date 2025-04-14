/**
 * Media Type for JSON resources.
 */
export const json = "application/json";

/**
 * Read the Content-Type header from a fetch Response and return the Media Type
 * part before the semicolon (if present).
 */
export function mediaType(res) {
  const header = res.headers.get("Content-Type");
  const [type, ...rest] = header.split(";");
  return type;
}
