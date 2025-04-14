import {uri_join} from "./utils.js";

/**
 * Linode web resource.  Object represents a URL from the Linode API.
 */
export class LinodeResource {
  constructor(client, uri) {
    this.client = client;
    this.uri = uri;
  }

  async *iterate(uri, headers={}) {
    yield* this.client.iterate(uri_join(this, uri), headers);
  }

  async refresh() {
    const doc = await this.request("GET", "");
    Object.assign(this, doc);
    return doc;
  }

  async remove() {
    await this.request("DELETE", "");
  }

  async request(method, uri, headers={}, body=undefined) {
    return this.client.request(method, uri_join(this, uri), headers, body);
  }

  async save() {
    const headers = {"Content-Type": "application/json"};
    await this.request("PUT", "", headers, this.toJSON());
  }

  toJSON() {
    const {client, uri, ...rest} = this;
    return rest;
  }
}
