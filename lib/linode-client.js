import {join, resolve} from "path";
import {json} from "./http.js";
import iterate from "./iterate.js";
import request from "./request.js";
import {Linode} from "./linode.js";

/**
 * Linode API client for making authorized HTTP requests.
 */
export class LinodeClient {
  constructor(token, {
    endpoint=Linode.Endpoint
  }={}) {
    this.token = token;
    this.endpoint = endpoint;
    this.headers = {Authorization: `Bearer ${token}`, Accept: json};
    this.url = new URL(endpoint);
  }

  getURL(...segments) {
    if (segments.length == 0) return this.url;
    const url = new URL(this.url);
    url.pathname = join(url.pathname, resolve("/", ...segments));
    return url;
  }

  async *iterate(uri, headers={}) {
    const url = this.getURL(uri);
    yield* iterate(url, {...this.headers, ...headers});
  }

  async request(method, uri, headers={}, body=undefined) {
    const url = this.getURL(uri);
    return request(method, url, {...this.headers, ...headers}, body);
  }
}
