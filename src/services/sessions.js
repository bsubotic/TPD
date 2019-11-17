const storage = window.sessionStorage;

export const storeSession = stuff =>
  storage && storage.setItem("something", JSON.stringify(stuff));

export const retrieveSession = () =>
  storage && storage.something ? JSON.parse(storage.something) : undefined;

export const removeSession = () => storage && storage.removeItem("something");
