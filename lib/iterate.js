import request from "./request.js";

/**
 * Fetch URL and iterate over the results, with support for Linode pagination.
 * Iterate over paginated results, starting at the uri.
 */
export default async function *iterate(url, headers={}) {
  do {
    const {data, page, pages} = await request("GET", url, headers);
    url = new URL(`?page=${page+1}`, url);
    yield* data;
    if (page >= pages) return;
  } while (true);
}
