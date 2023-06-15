export const convertToEmbeddedUrl = (url) => {
  const videoId = getVideoIdFromUrl(url);
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return null;
};

function getVideoIdFromUrl(url) {
  const regex =
    /(?:\?v=|\/embed\/|\.be\/|\/v\/|\/\d{1,2}\/|\/embed\?video_id=|&v=|\/embed\/|\.be\/|\/v\/|\/\d{1,2}\/|\/embed\?video_id=)([^#\&\?]*).*/;
  const match = url.match(regex);
  return match && match[1] ? match[1] : null;
}
