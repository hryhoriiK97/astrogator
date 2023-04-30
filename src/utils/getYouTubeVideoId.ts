export const getYouTubeVideoId = (videoUrl: string) => {
  const splittedUrl = videoUrl
    .replace(/(>|<)/gi, '')
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (!!splittedUrl[2]) {
    return splittedUrl[2].split(/[^0-9a-z_\-]/i)[0];
  } else {
    return videoUrl;
  }
};
