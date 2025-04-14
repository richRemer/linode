import {LinodeClient} from "./linode-client.js";
import {LinodeResource} from "./linode-resource.js";

/**
 * Linode root resource.
 */
export class LinodeRoot extends LinodeResource {
  static fromToken(token) {
    return new LinodeRoot(new LinodeClient(token));
  }

  constructor(client) {
    super(client, "/");
  }
}
