let config;

export const getConfig = () => {
  if (!config) {
    return fetch("/config.json")
      .then(response => response.json())
      .then(json => {
        config = json;
        return json;
      });
  } else {
    return new Promise(resolve => {
      resolve(config);
    });
  }
};
