import {LinodeClient} from "./linode-client.js";
import {LinodeRoot} from "./linode-root.js";

/**
 * Linode API factory.
 */
export class Linode {
  static Endpoint = "https://api.linode.com";

  constructor(token, {
    endpoint=Linode.Endpoint
  }={}) {
    this.token = token;
    this.endpoint = endpoint;
    this.client = new LinodeClient(token, {endpoint});
    this.root = new LinodeRoot(this.client);
  }
}
