export const addHttpsToUrl = (url: string): string => {
  if (url.startsWith("http://")) {
    url = "https://" + url.slice(7);
  } else if (!url.startsWith("https://")) {
    url = "https://" + url;
  }

  return url.replace(/([^:]\/)\/+/g, "$1");
};
