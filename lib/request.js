import {mediaType} from "./http.js";

/**
 * Fetch URL and return result based on response status and type.
 */
export default async function request(method, url, headers={}, body=undefined) {
  const res = await fetch(url, {method, headers, body});
  const status = res.status;

  if (!res.ok) {
    throw new Error(formatError());
  }

  switch (mediaType(res)) {
    case "application/json":          return res.json();
    case "application/octet-stream":  return res.blob();
    case "text/plain":                return res.text();
    default:                          return res;
  }

  function formatError() {
    return `request [${method} ${url}] responded with ${status} status`;
  }
}
