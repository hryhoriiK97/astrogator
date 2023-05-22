export const getVimeoVideoId = (url: string): string | null => {
  const regex = /player\.vimeo\.com\/video\/(\d+)/;
  const match = url.match(regex);

  if (match && match.length > 1) {
    return match[1];
  }

  return null;
};
