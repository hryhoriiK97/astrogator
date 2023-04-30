export const replaceHttpWithHttps = (url: string): string =>
  url.replace(/^http:\/\//i, 'https://');
