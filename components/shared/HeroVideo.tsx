import { getYouTubeVideoId } from "@/lib/utils";

const HeroVideo = ({ videoSource }: { videoSource: string }) => {
  const youtubeUrl = videoSource;
  const videoId = getYouTubeVideoId(youtubeUrl);

  return (
    <div className="w-full relative aspect-video flex items-start justify-start mb-auto overflow-hidden">
      <iframe
        className="absolute inxet-x-0"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1&loop=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default HeroVideo;
