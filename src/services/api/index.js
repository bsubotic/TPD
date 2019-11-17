import { withoutTrailingSlash } from "utils/pathUtils";
import { getConfig } from "services/api/config";

const headersFrom = (headersInit = {}) => new Headers(headersInit);
const newInit = init => ({
  ...init,
  method: "GET",
  headers: headersFrom(init.headers)
});

//not much handling but since there's no spec I catch all and show error page
const handleErrors = response => {
  if (!response.ok) throw Error(response);
  return response;
};

const get = (url, init = {}) =>
  getConfig().then(config =>
    fetch(
      url.indexOf("://") === -1 ? withoutTrailingSlash(config.api) + url : url,
      newInit(init)
    )
  );

const getJson = (url, init = {}) =>
  get(url, init)
    .then(handleErrors)
    .catch(e => {
      throw Error(e);
    })
    .then(response => response.json());

export { getJson };
